var express=require('express');
var router=express.Router();
var customer=require('../model/customer_model');

router.post('/',function(req,res,next){
    customer.deleteAll(req.body,function(err,rows){
        if (err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;