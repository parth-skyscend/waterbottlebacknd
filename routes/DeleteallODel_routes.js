var express=require('express');
var router=express.Router();
var orderdel=require('../model/order_delivery_model');

router.post('/',function(req,res,next){
    orderdel.deleteAll(req.body,function(err,rows){
        if (err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;