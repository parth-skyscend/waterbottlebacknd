var express=require('express');
var router=express.Router();
var product=require('../model/product_model');

router.post('/',function(req,res,next){
    product.deleteAll(req.body,function(err,rows){
        if (err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;