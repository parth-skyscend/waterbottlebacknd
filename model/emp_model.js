var db=require('../dbconnection');
var emp={
    getAllemp:function(callback)
    {
        return db.query("select * from emp_tbl",callback);
    },
    deleteEmp:function(emp_id,callback)
    {
        return db.query("delete from emp_tbl where emp_id=?",[emp_id],callback);
    },
    addEmp:function(item,callback)
    {
        return db.query("insert into emp_tbl(emp_name,mobile_no,fk_user_email)values(?,?,?)",[item.emp_name,item.mobile_no,item.fk_user_email],callback);
    },
     getempbyid:function(emp_id,callback)
     {
          return db.query("select * from emp_tbl where emp_id=?",[emp_id],callback);
     },
    updateEmp:function(emp_id,item,callback)
      {
         return db.query("update emp_tbl set emp_name=?,mobile_no=?,fk_user_email=? where emp_id=?",[item.emp_name,item.mobile_no,item.fk_user_email,emp_id],callback);
      },
      deleteAll:function(item,callback){
        return db.query("delete from emp_tbl where emp_id in (?)",[item],callback);
     }

}
module.exports=emp;