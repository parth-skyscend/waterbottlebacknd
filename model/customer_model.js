var db=require('../dbconnection');
var customer={
    getAllcustomer:function(callback)
    {
        return db.query("select * from customer_tbl",callback);
    },
    addcustomer:function(item,callback)
    {
        return db.query("insert into customer_tbl (customer_name,customer_address,customer_mobileno,fk_user_email)values(?,?,?,?)",[item.customer_name,item.customer_address,item.customer_mobileno,item.fk_user_email],callback);
    },
    getUserType:function(callback)
     { 
         return db.query("select user_type from user_tbl",callback);
     },
     deletecustomer:function(customer_id,callback)
    {
        return db.query("delete from customer_tbl where customer_id=?",[customer_id],callback);
    },
    getcustomerbyid:function(customer_id,callback)
    {
        return db.query("select * from customer_tbl where customer_id=?",[customer_id],callback);
    },
    updatecustomer:function(customer_id,item,callback)
    {
        return db.query("update customer_tbl set customer_name=?,customer_address=?,customer_mobileno=?,fk_user_email=? where customer_id=?",[item.customer_name,item.customer_address,item.customer_mobileno,item.fk_user_email,customer_id],callback);
    },
    deleteAll:function(item,callback){
        return db.query("delete from customer_tbl where customer_id in (?)",[item],callback);
     }
};
module.exports=customer;