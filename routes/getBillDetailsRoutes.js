var express=require('express');
var router=express.Router();
var bill_router=require('../model/bill_model');
router.get('/',function(req,res,next){
    bill_router.getBillDetails(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),

module.exports=router;