var express=require('express');
var router=express.Router();
var emp=require('../model/emp_model');

router.post('/',function(req,res,next){
    emp.deleteAll(req.body,function(err,rows){
        if (err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;