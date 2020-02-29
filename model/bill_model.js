var db=require('../dbconnection');
var bill={
    getbill:function(callback)
    {
       return db.query("select c.*,b.*,MONTH(`bill_date`) from customer_tbl c,bill_tbl b where b.fk_customer_id=c.customer_id",callback);
    },
    getBillByID:function(fk_customer_id,callback)
    {
        return db.query("SELECT b.*,c.*,p.*,o.* FROM bill_tbl b,customer_tbl c,product_tbl p,order_tbl o WHERE b.fk_customer_id=? and b.fk_customer_id=c.customer_id and b.fk_pro_id=p.pro_id and b.fk_order_id=o.order_id",[fk_customer_id],callback)
    },
    getCustomers:function(callback){
        return db.query("SELECT o.*,c.* from order_tbl o,customer_tbl c where o.fk_customer_id=c.customer_id and o.order_id not in(select fk_order_id from bill_tbl)",callback);
    },
    addBill:function(item,callback){
        bill_date=new Date()
        console.log(bill_date)
        return db.query("INSERT INTO `bill_tbl`(`fk_customer_id`, `bill_amount`, `bill_date`, `ispaid`,`payment_type`, `fk_pro_id`, `fk_order_id`) VALUES (?,?,?,?,?,?,?)",[item.fk_customer_id,item.bill_amount,bill_date,item.ispaid,item.payment_type,item.fk_pro_id,item.fk_order_id],callback)
    },
    getBillDetails:function(callback){
        return db.query("select * from bill_tbl",callback)
    }
}
module.exports=bill;