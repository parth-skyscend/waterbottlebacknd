var express=require('express');
var router=express.Router();
var order_router=require('../model/order_model');
router.get('/',function(req,res,next){
   order_router.getAllorder(function(err,rows){
        if(err){
            res.json(err); 
        }
        else{
            res.json(rows);
        }
    })
}),
router.delete('/:order_id',function(req,res,next){
    order_router.deleteorder(req.params.order_id,function(err,rows){
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
    order_router.addorder(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.get('/:order_id',function(req,res,next){
    order_router.getorderbyid(req.params.order_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.put('/:order_id',function(req,res,next){
    order_router.updateorder(req.params.order_id,req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}), 


module.exports=router;