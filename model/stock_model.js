var db=require('../dbconnection');
var stock={
    getAllstock:function(callback)
    {
        return db.query("SELECT s.*,c.*,e.*,p.* from stock_tbl s,customer_tbl c,emp_tbl e,product_tbl p where s.fk_customer_id=c.customer_id and s.fk_emp_id=e.emp_id and s.fk_pro_id=p.pro_id",callback);
    },
    deletestock:function(stock_id,callback)
    {
        return db.query("delete from stock_tbl where stock_id=?",[stock_id],callback);
    },
    addstock:function(item,callback)
    {
        return db.query("insert into stock_tbl (fk_customer_id,fk_emp_id,stock_qty,stock_date,fk_pro_id)values(?,?,?,?,?)",[item.fk_customer_id,item.fk_emp_id,item.stock_qty,item.stock_date,item.fk_pro_id],callback);
    },
    getstockbyid:function(stock_id,callback)
    {
        return db.query("select * from stock_tbl where stock_id=?",[stock_id],callback);
    },
    updatestock:function(stock_id,item,callback)
   {
      return db.query("update stock_tbl set fk_customer_id=?,fk_emp_id=?,stock_qty=?,stock_date=?,fk_pro_id=? where stock_id=?",[item.fk_customer_id,item.fk_emp_id,item.stock_qty,item.stock_date,item.fk_pro_id,stock_id],callback);
   },
   deleteAll:function(item,callback){
    return db.query("delete from stock_tbl where stock_id in (?)",[item],callback);
 }
    
}
module.exports=stock;