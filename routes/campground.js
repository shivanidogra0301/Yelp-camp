var mongoose=require("mongoose")
var express=require("express")
var campground=require("../models/campground")
var router=express.Router({mergeParams:true})

var middleware    =  require("../middleware")
router.get("/",function(req,res){
    res.render("landing.ejs");
})
router.get("/campground",function(req,res){
 campground.find({},function(err,allcampgrounds){
     if(err){
         console.log(err)
     }else{
        res.render("campgrounds/index.ejs",{campgrounds:allcampgrounds});
     }
 })  

});
router.post("/campground",middleware.isLoggedIn,function(req,res){
        var name=req.body.name;
        var image=req.body.image;
        var desc=req.body.description;
        var author={
            id : req.user._id,
            username: req.user.username
        }
        var newcampground={name: name,image:image,description:desc,author:author};
        campground.create(newcampground,function(err,newlycreated){
            if(err){console.log(err)}
            else{
              res.redirect("/campground");
            }
        })
       

});
router.get("/campground/new",middleware.isLoggedIn, function(req,res){
    res.render("campgrounds/new");
    
    
});
router.get("/campground/:id",function(req,res){
    campground.findById(req.params.id).populate("comments").exec(function(err,foundcampground){
        if(err){
            console.log(err)
        }
        else{
            // console.log(foundcampground)
            res.render("campgrounds/show.ejs",{campground:foundcampground})
        }
    })
    
});
router.get("/campground/:id/edit",middleware.checkCampgroundOwnership, function(req,res){
     campground.findById(req.params.id,function(err,campground){
            
                
                    res.render("campgrounds/edit",{campground:campground})
                })
                
    })
router.put("/campground/:id",middleware.checkCampgroundOwnership, function(req,res){
    campground.findByIdAndUpdate(req.params.id,req.body.campground,function(err,campground){
        if(err){
            console.log(err)
            
        }
        else{
            res.redirect("/campground/"+req.params.id)
        }
    })
})
router.delete("/campground/:id",middleware.checkCampgroundOwnership, function(req,res){
    campground.findByIdAndDelete(req.params.id,function(err){
        if(err){
            res.redirect("/campground")
        }
        else{
            res.redirect("/campground")
        }
    })
})



module.exports=router