var express=require('express');
var router=express.Router();
var emp_router=require('../model/emp_model');
router.get('/',function(req,res,next){
    emp_router.getAllemp(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.delete('/:emp_id',function(req,res,next){
    emp_router.deleteEmp(req.params.emp_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.post('/',function(req,res,next){
    emp_router.addEmp(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.get('/:emp_id',function(req,res,next){
    emp_router.getempbyid(req.params.emp_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.put('/:emp_id',function(req,res,next){
    emp_router.updateEmp(req.params.emp_id,req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),



module.exports=router;
