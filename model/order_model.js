var db=require('../dbconnection');
var order={ 
    getAllorder:function(callback)
    {
        return db.query("select o.*,c.*,p.* from order_tbl o,product_tbl p,customer_tbl c where o.fk_pro_id=p.pro_id and o.fk_customer_id=c.customer_id",callback);
    },
    deleteorder:function(order_id,callback)
    {
      return db.query("delete from order_tbl where order_id=?",[order_id],callback);
    },
    addorder:function(item,callback)
    {
      return db.query("insert into order_tbl(fk_pro_id,qty,order_date,fk_customer_id,order_status)values(?,?,?,?,?)",[item.fk_pro_id,item.qty,item.order_date,item.fk_customer_id,item.order_status],callback);
    },
    getorderbyid:function(order_id,callback)
    {
        return db.query("select * from order_tbl where order_id=?",[order_id],callback);
    },
    updateorder:function(order_id,item,callback)
    {
        return db.query("update order_tbl set fk_pro_id=?,qty=?,order_date=?,fk_customer_id=?,order_status=? where order_id=?",[item.fk_pro_id,item.qty,item.order_date,item.fk_customer_id,item.order_status,order_id],callback);
    },
    deleteAll:function(item,callback){
      return db.query("delete from order_tbl where order_id in (?)",[item],callback);
   }
}; 

module.exports=order;