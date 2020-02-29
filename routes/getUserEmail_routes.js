var express=require('express');
var router=express.Router();
var userEmail_router=require('../model/customer_model');
router.get('/',function(req,res,next){
    userEmail_router.getUserType(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),

module.exports=router;