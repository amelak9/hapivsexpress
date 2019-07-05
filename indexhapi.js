const Hapi = require('@hapi/hapi');
const Path = require('path');
var url = require('url');
const Sequelize = require('sequelize');
const db = require('./db.js');
var fs = require('fs');

const start = async () => {
const app = Hapi.server({
  host: 'localhost',
  port: 8080,
  routes: {
    files: {
        relativeTo: Path.join(__dirname, 'public')
    }
}
})


await app.register(require('@hapi/inert'))


//const COLLECTION_NAME = 'images';
//const UPLOAD_PATH = 'public';
//const fileOptions = { dest: `${UPLOAD_PATH}/` };

//staticki fajlovi

app.route({
    method: 'GET',
    path: '/addZadatak.html',
    handler: function (req, h) {
        return h.file('addZadatak.html');
      }   
})

app.route({
    method: 'GET',
    path: '/studenti.html',
    handler: function (req, h) {
        return h.file('studenti.html');
      }   
})

app.route({
    method: 'GET',
    path: '/addZadatakStil.css',
    handler: function (req, h) {
        return h.file('addZadatakStil.css');
      }   
})

app.route({
    method: 'GET',
    path: '/addStudentStil.css',
    handler: function (req, h) {
        return h.file('addStudentStil.css');
      }   
})

app.route({
    method: 'GET',
    path: '/addGodinaStil.css',
    handler: function (req, h) {
        return h.file('addGodinaStil.css');
      }   
})
app.route({
    method: 'GET',
    path: '/addVjezbaStil.css',
    handler: function (req, h) {
        return h.file('addVjezbaStil.css');
      }   
})

app.route({
    method: 'GET',
    path: '/zadaciStil.css',
    handler: function (req, h) {
        return h.file('zadaciStil.css');
      }   
})
app.route({
    method: 'GET',
    path: '/studentiStil.css',
    handler: function (req, h) {
        return h.file('studentiStil.css');
      }   
})

app.route({
    method: 'GET',
    path: '/zadaci.html',
    handler: function (req, h) {
        return h.file('zadaci.html');
      }   
})


app.route({
    method: 'GET',
    path: '/addVjezba.html',
    handler: function (req, h) {
        return h.file('addVjezba.html');
      }   
})

app.route({
    method: 'GET',
    path: '/addGodina.html',
    handler: function (req, h) {
        return h.file('addGodina.html');
      }   
})

app.route({
    method: 'GET',
    path: '/addStudent.html',
    handler: function (req, h) {
        return h.file('addStudent.html');
      }   
})

app.route({
    method: 'GET',
    path: '/GodineAjax.js',
    handler: function (req, h) {
        return h.file('GodineAjax.js');
      }   
})

app.route({
    method: 'GET',
    path: '/studentiajax.js',
    handler: function (req, h) {
        return h.file('studentiajax.js');
      }   
})

app.route({
    method: 'GET',
    path: '/studentvjezbe.js',
    handler: function (req, h) {
        return h.file('studentvjezbe.js');
      }   
})

app.route({
    method: 'GET',
    path: '/Veza.js',
    handler: function (req, h) {
        return h.file('Veza.js');
      }   
})

app.route({
    method: 'GET',
    path: '/vjezbeGodine.js',
    handler: function (req, h) {
        return h.file('vjezbeGodine.js');
      }   
})

app.route({
    method: 'GET',
    path: '/vjezbeStudent.js',
    handler: function (req, h) {
        return h.file('vjezbeStudent.js');
      }   
})

app.route({
    method: 'GET',
    path: '/ZadaciAjax.js',
    handler: function (req, h) {
        return h.file('ZadaciAjax.js');
      }   
})

app.route({
    method: 'GET',
    path: '/Godineselect.js',
    handler: function (req, h) {
        return h.file('Godineselect.js');
      }   
})

app.route({
    method: 'GET',
    path: '/Pozovi.js',
    handler: function (req, h) {
        return h.file('Pozovi.js');
      }   
})


db.sequelize.sync();

const godina = db.sequelize.import(__dirname+'/godina.js');
const zadatak = db.sequelize.import(__dirname+'/zadatak.js');
const vjezba = db.sequelize.import(__dirname+'/vjezba.js');
const student = db.sequelize.import(__dirname+'/student.js');

godina.sync();
zadatak.sync();
vjezba.sync();
student.sync();



//DODAVANJE

//dodavanje zadatka

app.route({
    method: 'POST',
    path: '/addZadatak',
    handler: function(request, h) {

        const data = request.payload;

        if (data.postavka) {
            const name = data.naziv;
           
            const path = __dirname + "/public/" + name + '.pdf';
            const file = fs.createWriteStream(path);
            zadatak.create({    
                naziv: name,
                postavka: encodeURI('http://localhost:8080/' + name + '.pdf')
     })
            file.on('error', (err) => console.error(err));

            data.postavka.pipe(file);

            data.postavka.on('end', (err) => { 
                const ret = {
                    filename: data.postavka.hapi.filename,
                    headers: data.postavka.hapi.headers
                }

                return JSON.stringify(ret);
            })
        }
        return 'ok';
    },
    options: {
        payload: {
            output: 'stream',
            parse: true,
            allow: 'multipart/form-data'
        }
    }
});


//dodavanje godine

app.route({
    method: 'POST',
    path: '/addGodina',
    handler: function (request, h) {
        const req = request.payload;
        godina.create({  nazivGod:req['nazivGod'],
        nazivRepSpi:req['nazivRepSpi'],
        nazivRepVje:req['nazivRepVje'] })
        
return h.file('addGodina.html');
      }    
    });
                  

///dodavanje studenta

app.route({
    method: 'POST',
    path: '/addStudent',
    handler: function (request, h) {
        const req = request.payload;

        student.create({
            imePrezime: req['imeprezime'],
            index: req['index']
        }).then(function(student){
           
            godina.findOne({where: {id: req['godina']} }).then(function(godina)
            {
                godina.addStudenti([student]).then(function(){
                 
                });
            });
        })
        return h.file('addStudent.html');

      }    
    });


//DOBAVLJANJE

//dobavljanje zadataka

    app.route({
            method: 'GET',
            path: '/zadatak',
    handler: function (req, res) {
        var mojurl = url.parse(req.url);
        var naziv = new url.URLSearchParams(mojurl.query);
        var ime = naziv.get("naziv");
         db.zadatak.findOne({ where: {naziv: ime} }).then(function(rez){
         res.redirect(rez.postavka);
     })
 }
});
                   
//dobavljanje godina

app.route({
        method: 'GET',
        path: '/godine',
        handler: async function (req, res) {
           
        const god = await db.godina.findAll();
       
        return god;
}
});
 
//dobavljanje vjezbi 

app.route({
        method: 'GET',
        path: '/vjezbe/{id}',
        handler: async function (req, res) {
    var id1 = req.params.id;
    const godinica = await (db.godina.findOne({ where: {id: id1}}));
    const vjezbe = await (godinica.getVjezbe())
  
            return vjezbe      
}
});

    app.route({
        method: 'GET',
        path: '/vjezbice/{id}',
        handler: async function (req, res) {
    var id1 = req.params.id;


    const vjezbe = await (db.vjezba.findAll({ where: {studentId: id1}}));

        return vjezbe
    }
    });

//dobavljanje studenata

app.route({
        method: 'GET',
        path: '/studenti/{id}',
        handler:  async function (req, res) {

  var id1 = req.params.id;
  
  
const godinica = await (godina.findOne( {where: {id: id1}} ));
 
 const studentici = await (godinica.getStudenti());

          return studentici;

      }
});

    

//dobavljanje zadataka 2

    app.route({
        method: 'GET',
        path: '/zadaci',
        handler: function (req, res) {

            var start = new Date()
            var simulateTime = 1000
            var niz = [];

        zadatak.findAll().then(function(zadaci){
            zadaci.forEach(zadatak => {
                niz.push({naziv: zadatak.naziv, postavka: zadatak.postavka});
            });
        });

        setTimeout(function(argument) {
            // execution time simulated with setTimeout function
            var end = new Date() - start
            console.info('Execution time: %dms', end)
          }, simulateTime)

        return niz

        }
    });



//POVEZIVANJE


//povezivanje vjezbe i godine

    app.route({
        method: 'GET',
        path: '/pomozi',
        handler: async function(req, res) {

    const h = {
        nizVjezbi: await (db.vjezba.findAll()),
        nizGodina: await (db.godina.findAll()),
        nizZadataka: await (db.zadatak.findAll()),
        nizStudenti: await (db.student.findAll())
    }

    return h
   
}

    });

    app.route({
        method: 'POST',
        path: '/addVjezba',
        handler: function (request, res) {
            const req = request.payload;
           
        vjezba.create({
            naziv: req['sVjezbe'],
            spirala: Boolean(req['spirala'])
        }).then(function(vjezba){
          
            godina.findOne({where: {id: req['sGodine']} }).then(function(godina)
            {
                student.findOne({where: {id: req['sIndex']} }).then(function(student)
            {
                student.addVjezbe([vjezba]).then(function(){
                   
                vjezba.addGodine([godina]).then(function(){
                 
            
                });
            });
            });
        });

    });
    return res.file('addVjezba.html');

}
    });


//povezivanje zadatka i vjezbe

    app.route({
        method: 'GET',
        path: '/zadatakk/{id}',
        handler: async function (req, res) {
    var id1 = req.params.id;
 
    const vjezbaa = await (vjezba.findOne( {where: {id:id1}} ));
        
            
            var h ={
                dodijeljeni2: await (vjezbaa.getZadaci()),
                svi2: await (zadatak.findAll())
            }

            return h

}
    });


    app.route({
        method: 'POST',
        path: '/vjezba/{idVjezbe}/zadatak',
        handler: function (request, res) {
         var req = request.payload;
         var id1=request.params.idVjezbe;
      
         
        vjezba.findOne({ where: {id: id1} }).then(function(vjezba)
        {
            zadatak.findOne({where: {id: req['sZadatak']} }).then(function(zadatak)
            {
                zadatak.addVjezbe([vjezba]).then(function(){
                 
                });
            })
        })
        return res.file('addVjezba.html');

}
    });


app.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${app.info.uri}`);
});

}

start();