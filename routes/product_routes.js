var express=require('express');
var router=express.Router();
var product_router=require('../model/product_model');
var multer=require('multer');
var path=require('path');

var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images/pro_img/');
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
});

var upload=multer({storage:storage});

router.get('/',function(req,res,next){
    product_router.getAllproduct(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.delete('/:pro_id',function(req,res,next){
    product_router.deleteproduct(req.params.pro_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.post('/',upload.single('pro_image'),function(req,res,next){
    product_router.addproduct(req.body,req.file != null ? req.file.filename: null,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.get('/:pro_id',function(req,res,next){
    product_router.getproductbyid(req.params.pro_id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),
router.put('/:pro_id',upload.single('img'),function(req,res,next){
    console.log(req.file);
    product_router.updateproduct(req.params.pro_id,req.body,req.file != null ? req.file.filename : req.body.img,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
}),

module.exports=router;