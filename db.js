const Sequelize = require("sequelize");

const sequelize = new Sequelize('expressvshapi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
   // operatorsAliases: false,
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

const db={};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//import modela
db.godina = sequelize.import(__dirname+'/godina.js');
db.zadatak = sequelize.import(__dirname+'/zadatak.js');
db.vjezba = sequelize.import(__dirname+'/vjezba.js');
db.student = sequelize.import(__dirname+'/student.js');



//relacije

db.godina.hasMany(db.student,{as:'studenti', foreignKey:'studentGod'});

db.vjezbaGodina = db.godina.belongsToMany(db.vjezba,{as:'vjezbe',through:'godina_vjezba',foreignKey:'idgodina'});
db.vjezba.belongsToMany(db.godina,{as:'godine',through:'godina_vjezba',foreignKey:'idvjezba'});

db.vjezbaZadatak = db.zadatak.belongsToMany(db.vjezba,{as:'vjezbe',through:'vjezba_zadatak',foreignKey:'idzadatak'});
db.vjezba.belongsToMany(db.zadatak,{as:'zadaci',through:'vjezba_zadatak',foreignKey:'idvjezba'});

db.student.hasMany(db.vjezba,{as:'vjezbe', foreignKey:'studentId'});



module.exports=db;