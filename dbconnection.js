var mysql=require('mysql');
var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'water_bottle_supply_db'
});
module.exports=connection;