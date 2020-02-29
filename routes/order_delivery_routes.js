var express=require('express');
var router=express.Router();
var order_delivery_router=require('../model/order_delivery_model');
router.get('/',function(req,res,next){
   order_delivery_router.getAllorderdelivery(function(err,rows){
        if(err){
            res.json(err);
        }   
        else{
            res.json(rows);
        }
    })
}),
router.delete('/:order_delivery_id',function(req,res,next){
    order_delivery_router.deleteorderdelivery(req.params.order_delivery_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
}),
router.post('/',function(req,res,next){
    order_delivery_router.addorderdelivery(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.get('/:order_delivery_id',function(req,res,next){
    order_delivery_router.getorderdeliverybyid(req.params.order_delivery_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.put('/:order_delivery_id',function(req,res,next){
    order_delivery_router.updateorderdelivery(req.params.order_delivery_id,req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}), 


module.exports=router;