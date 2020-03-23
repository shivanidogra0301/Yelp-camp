var campground=require("../models/campground")
var comment=require("../models/comment")
middlewareobj={}
middlewareobj.checkCommentOwnership=function(req,res,next){
    if(req.isAuthenticated()){
        comment.findById(req.params.comment_id,function(err,comment){
            if(err){
                res.redirect("back")
            }else{
                if(comment.author.id.equals(req.user._id)){
                    next();
                }
                else{
                    res.redirect("back")
                }
                
            }
        })
    }else{
        res.redirect("back")
    }
}
middlewareobj.isLoggedIn=function(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    req.flash("error","You need to be logged in to do that!")
    res.redirect("/login")
}
middlewareobj.checkCampgroundOwnership=function(req,res,next){
    if(req.isAuthenticated()){
        campground.findById(req.params.id,function(err,campground){
            if(err){
                res.redirect("back")
            }else{
                if(campground.author.id.equals(req.user._id)){
                    next();
                }
                else{
                    res.redirect("back")
                }
                
            }
        })
    }else{
        res.redirect("back")
    }
    

}

module.exports=middlewareobj