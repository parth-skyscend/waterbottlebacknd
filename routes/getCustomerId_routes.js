var express=require('express');
var router=express.Router();
var customerid_router=require('../model/stock_model');
router.get('/',function(req,res,next){
    customerid_router.getcustomerid(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),

module.exports=router;