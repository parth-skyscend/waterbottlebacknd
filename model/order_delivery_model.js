var db=require('../dbconnection');
var order_delivery={
    getAllorderdelivery:function(callback)
    {
       return db.query("select od.*,o.*,e.* from order_delivery_table od,order_tbl o,emp_tbl e where od.fk_order_id=o.order_id and od.fk_emp_id=e.emp_id",callback);
         //return db.query("select * from order_delivery_table",callback);
    },
    deleteorderdelivery:function(order_delivery_id,callback)
    {
      return db.query("delete from order_delivery_table where order_delivery_id=?",[order_delivery_id],callback);
    },
    addorderdelivery:function(item,callback)
    {
      return db.query("insert into order_delivery_table(fk_order_id,fk_emp_id,delivery_date,comment)values(?,?,?,?)",[item.fk_order_id,item.fk_emp_id,item.delivery_date,item.comment],callback);
    },
    getorderdeliverybyid:function(order_delivery_id,callback)
    {
        return db.query("select * from order_delivery_table where order_delivery_id=?",[order_delivery_id],callback);
    },
    updateorderdelivery:function(order_delivery_id,item,callback)
    {
        return db.query("update order_delivery_table set delivery_date=?,comment=? where order_delivery_id=?",[item.delivery_date,item.comment,order_delivery_id],callback);
    },
    deleteAll:function(item,callback){
      return db.query("delete from order_delivery_table where order_delivery_id in (?)",[item],callback);
   }
};
module.exports=order_delivery;