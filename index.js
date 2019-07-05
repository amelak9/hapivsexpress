const express = require('express');
const bodyParser = require('body-parser');
var multer  = require('multer');
const app = express();
var url = require('url');
const Sequelize = require('sequelize');
const db = require('./db.js');
var fs = require('fs');
db.sequelize.sync();

const godina = db.sequelize.import(__dirname+'/godina.js');
const zadatak = db.sequelize.import(__dirname+'/zadatak.js');
const vjezba = db.sequelize.import(__dirname+'/vjezba.js');
const student = db.sequelize.import(__dirname+'/student.js');

godina.sync();
zadatak.sync();
vjezba.sync();
student.sync();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/')
    },
    filename: (req, file, cb) => {
      cb(null, req.body['naziv'] + '.pdf')
    }
});
var upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, callback) {
        if(req.body['naziv'] == '') {
            req.fileValidationError = 'Naziv fajla prazan!';
            return callback(null, false);

        }
        if(file.mimetype.split('/')[1] !== 'pdf') {
            req.fileValidationError = 'Pogresan format!';
            return callback(null, false);
        }
        if (fs.existsSync(__dirname + '/public/' + req.body['naziv'] + '.pdf')) {
            req.fileValidationError = 'Taj zadatak vec postoji!';
            return callback(null, false);
        }
        callback(null, true);
    }
});

//DODAVANJE

//dodavanje zadatka
app.post('/addZadatak', upload.single('postavka'), function(req, res)
{

   let tijelo = req.body;
   
    if (req.fileValidationError == 'Pogresan format!' || req.fileValidationError == 'Taj zadatak vec postoji!' || req.fileValidationError == 'Naziv fajla prazan!' )
    {
        res.sendFile(__dirname + '/greska.html');
    }
    else
    {
        var objekat = {naziv: tijelo['naziv'], postavka: encodeURI('http://localhost:8080/' + tijelo['naziv'] + '.pdf')};
        if(req.body['naziv']){
            zadatak.create({    
                    naziv:req.body['naziv'],
                    postavka: encodeURI('http://localhost:8080/' + req.body['naziv'] + '.pdf')
         })
                   .then(function(zapis){
            
                       res.write(zapis);
                   })
                   .catch(function(err){
                       res.send(err);
                   });
        }

        res.write(JSON.stringify(objekat));
    }
});


//dodavanje godine
        app.post('/addGodina',function(req,res){
              
              if(req.body['nazivGod'] && req.body['nazivRepVje'] && req.body['nazivRepSpi']){
              
                godina.create({
                                       nazivGod:req.body['nazivGod'],
                                       nazivRepSpi:req.body['nazivRepSpi'],
                                       nazivRepVje:req.body['nazivRepVje']
             })
                       .then(function(zapis){
                                                res.sendFile(__dirname + '/public/addGodina.html');
                    })
                       .catch(function(err){
                           res.send(err);
                       });
            }

            else {

                res.sendFile(__dirname + '/greska.html');

            }
             
                   }); 

 //dodavanje studenta
 
 app.post('/addStudent',function(req,res){
              
    if(req.body['imeprezime'] && req.body['index']){
   
        student.create({
            imePrezime: req.body['imeprezime'],
            index: req.body['index']
        }).then(function(student){
           
          
            godina.findOne({where: {id: req.body['godina']} }).then(function(godina)
            {
                godina.addStudenti([student]).then(function(){
                 
                    res.sendFile(__dirname + '/public/addStudent.html');
                });
            });
        }).catch(function(err)
        {
            res.sendFile(__dirname + '/greska.html');
        });
    }

  else {

      res.sendFile(__dirname + '/greska.html');

  }
   
         });

//DOBAVLJANJE

//dobavljanje zadataka

    app.get("/zadatak",function(req,res){
        var mojurl = url.parse(req.url);
        var naziv = new url.URLSearchParams(mojurl.query);
        var ime = naziv.get("naziv");
         db.zadatak.findOne({ where: {naziv: ime} }).then(function(rez){
         res.redirect(rez.postavka);
     });
 });
                   
//dobavljanje godina

app.get("/godine",function(req,res){
   
    db.godina.findAll().then(function(rez){

        res.send(rez);
    });
});
 
//dobavljanje vjezbi 

app.get("/vjezbe/:id",function(req,res){

    var id1 = req.params.id;
   
        db.godina.findOne({ where: {id: id1}}).then(function(godina){
        godina.getVjezbe().then(function(vjezbe){
            res.send(vjezbe);
        });
});
});
app.get("/vjezbice/:id",function(req,res){

    var id1 = req.params.id;

    db.vjezba.findAll({ where: {studentId: id1}}).then(function(vjezbe){
        
            res.send(vjezbe);
    });

});

//dobavljanje studenata

app.get("/studenti/:id",function(req,res){

    var id1 = req.params.id;
  
    godina.findOne( {where: {id:id1}} ).then(function(godinica){
       
        godinica.getStudenti().then(function(studentici){
          
           res.send(studentici);
            
            });

          
        });
    });

     

//dobavljanje zadataka 2

app.get('/zadaci', function(req, res)
{
    res.setHeader('Access-Control-Allow-Origin', '*');
 
        zadatak.findAll().then(function(zadaci){
            var niz = [];
            zadaci.forEach(zadatak => {
                niz.push({naziv: zadatak.naziv, postavka: zadatak.postavka});
            });
            res.send(JSON.stringify(niz));
});
});


//POVEZIVANJE

//povezivanje vjezbe i godine


app.get('/pomozi', async function(req, res)
{
                res.json({
                nizVjezbi: await (db.vjezba.findAll()),
                nizGodina: await (db.godina.findAll()),
                nizZadataka: await (db.zadatak.findAll()),
                nizStudenti: await (db.student.findAll())
            });
});

app.post('/addVjezba', function(req, res)
{
   
        vjezba.create({
            naziv: req.body['sVjezbe'],
            spirala: Boolean(req.body['spirala'])
        }).then(function(vjezba){
      
            godina.findOne({where: {id: req.body['sGodine']} }).then(function(godina)
            { 

                student.findOne({where: {id: req.body['sIndex']} }).then(function(student)
            {
                student.addVjezbe([vjezba]).then(function(){
               
                vjezba.addGodine([godina]).then(function(){
                
                    res.sendFile(__dirname + '/public/addVjezba.html');
                });
            });
            });
        });

    });
});


//povezivanje zadatka i vjezbe


app.get('/zadatakk/:id', function(req, res)
{
    var id1 = req.params.id;
    var dodijeljeni = [];
    var svi = [];


    vjezba.findOne( {where: {id:id1}} ).then(function(vjezba2){
        zadatak.findAll().then(function(zadaci2){
            zadaci2.forEach(zadatak => {
                svi.push(zadatak);
            });
        });
        vjezba2.getZadaci().then(function(zadaci){
            zadaci.forEach(zadatak => {
                dodijeljeni.push(zadatak);
            });
            res.json({
                dodijeljeni2: (dodijeljeni),
                svi2: (svi) 
            });
        });
    });

});


app.post('/vjezba/:idVjezbe/zadatak', function(req, res)
{
    id1=req.params.idVjezbe;
   
        vjezba.findOne({ where: {id: id1} }).then(function(vjezba)
        {
            zadatak.findOne({where: {id: req.body['sZadatak']} }).then(function(zadatak)
            {
                zadatak.addVjezbe([vjezba]).then(function(){
                    
                    res.sendFile(__dirname + '/public/addVjezba.html');
                });
            })
        })
});


 app.listen(8080);