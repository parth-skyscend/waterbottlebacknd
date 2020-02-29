var express=require('express');
var router=express.Router();
var bill_router=require('../model/bill_model');
router.get('/',function(req,res,next){
    bill_router.getbill(function(err,rows){
         if(err){
             res.json(err); 
         }
         else{
             res.json(rows);
         }
     })
 }),
 router.get('/:fk_customer_id',function(req,res,next){
    bill_router.getBillByID(req.params.fk_customer_id,function(err,rows){
         if(err){
             res.json(err); 
         }
         else{
             res.json(rows);
         }
     })
 }),
 router.post('/',function(req,res,next){
    bill_router.addBill(req.body,function(err,rows){
         if(err){
             res.json(err); 
         }
         else{
             res.json(rows);
         }
     })
 }),
 module.exports=router;