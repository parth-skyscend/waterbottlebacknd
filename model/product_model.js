var db=require('../dbconnection');
var product={
    getAllproduct:function(callback)
    {
        return db.query("select * from product_tbl",callback);
    },
    deleteproduct:function(pro_id,callback)
    {
        return db.query("delete from product_tbl where pro_id=?",[pro_id],callback);
    },
     addproduct:function(item,filename,callback)
     {
            
         return db.query("insert into product_tbl (pro_name,Images,pro_desc,pro_mfg,pro_price) values(?,?,?,?,?)",[item.pro_name,filename,item.pro_desc,item.pro_mfg,item.pro_price],callback);
    },
     getproductbyid:function(pro_id,callback)
    {
           return db.query("select * from product_tbl where pro_id=?",[pro_id],callback);
   },
    updateproduct:function(pro_id,item,filename,callback)
   {
       console.log(filename);
       return db.query("update product_tbl set  pro_name=?,Images=?,pro_desc=?,pro_mfg=?,pro_price=? where pro_id=?",[item.pro_name,filename,item.pro_desc,item.pro_mfg,item.pro_price,pro_id],callback);
   },
   deleteAll:function(item,callback){
    return db.query("delete from product_tbl where pro_id in (?)",[item],callback);
 }
             
}
module.exports=product;