// var mysql = require('mysql')

// var con=mysql.createConnection({host:"localhost",user:"root",password:"123456dl"});
// con.connect(function(err){
//     if(err) throw err;
//     console.log("connected!");
// })
// import { createConnection } from 'mysql';
var mysql = require('mysql')
var con=createConnection({host:"localhost",user:"root",password:"123456dl"});
con.connect(function(err){
    if(err) throw err;
    console.log("connected!");
})
