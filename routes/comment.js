var mongoose=require("mongoose")
var express=require("express")
var campground=require("../models/campground")
var comment=require("../models/comment")
var router=express.Router({mergeParams:true})
 var middleware    =  require("../middleware")

router.get("/campground/:id/comment/new",middleware.isLoggedIn, function(req,res){
    campground.findById(req.params.id,function(err,campground){
        if(err){
            console.log(err)

        }
        else{
            res.render("comments/new",{campground:campground})
        }
    })
    
})
router.post("/campground/:id/comment",middleware.isLoggedIn, function(req,res){
    
    
    campground.findById(req.params.id,function(err,campground){
        if(err){
            console.log(err)
        }else{
            comment.create(req.body.comment,function(err,comment){
                if(err){
                    console.log(err)
                }else{
                    comment.author.id=req.user._id
                    comment.author.username=req.user.username
                    comment.save();
                    campground.comments.push(comment)
                    campground.save();
                    res.redirect("/campground/"+campground._id)
                }
            })
        }
    })
})
router.get("/campground/:id/comment/:comment_id/edit",middleware.checkCommentOwnership,function(req,res){
    comment.findById(req.params.comment_id,function(err,comment){
        if(err){
            console.log(err)
        }else{
            res.render("comments/edit",{campground_id:req.params.id,comment:comment})
        }
    })
    
})
router.put("/campground/:id/comment/:comment_id",middleware.checkCommentOwnership,function(req,res){
    var newcomment={
        text:req.body.text
    }
    comment.findByIdAndUpdate(req.params.comment_id,newcomment,function(err,comment){
        
        if(err){
            console.log(err)
         
        }else{
            
            res.redirect("/campground/"+req.params.id)
        }
    })
})
router.delete("/campground/:id/comment/:comment_id",middleware.checkCommentOwnership,function(req,res){
    comment.findByIdAndDelete(req.params.comment_id,function(err){
        if(err){
            console.log(err)
            res.redirect("/campground/"+req.params.id)
        }
        else{
            res.redirect("/campground/"+req.params.id)
        }
    })
})

    module.exports=router