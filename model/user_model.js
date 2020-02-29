var db=require('../dbconnection');
var user={
    login:function (item,callback){
        return db.query("select * from user_tbl where user_email=? and user_password=?",[item.user_email,item.user_password],callback);
    },
    signup:function(item,callback){
        return db.query("insert into user_tbl values(?,?,?)",[item.user_email,item.user_password,item.user_type],callback);
    },
    getAllUsers:function(callback)
    {
        return db.query("select * from user_tbl",callback);
    },
    getUserByID:function(user_email,callback)
    {
        return db.query("select * from user_tbl where user_email=?",[user_email],callback);
    }
    ,
    addUser:function(item,callback)
    {
        return db.query("insert into user_tbl values(?,?,?)",[item.user_email,item.user_password,item.user_type],callback);
    },
    deleteUser:function(user_email,callback)
    {
        return db.query("delete from user_tbl where user_email=?",[user_email],callback);
    },
    updateUsers:function(user_email,item,callback)
    {
        return db.query("update user_tbl set user_password=?,user_type=? where user_email=?",[item.user_password,item.user_type,user_email],callback);
    },
    deleteAll:function(item,callback){
        return db.query("delete from user_tbl where user_email in (?)",[item],callback);
     }
};
module.exports=user;