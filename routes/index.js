var mongoose=require("mongoose")
var express=require("express")
 var passport              =  require("passport"),
localStrategy          =  require("passport-local"),
passportLocalMongoose  =  require("passport-local-mongoose")
var router=express.Router({mergeParams:true})
var User=require("../models/user")


router.get("/register",function(req,res){
    res.render("register")
})
router.post("/register",function(req,res){
    User.register(new User({username:req.body.username}),req.body.password,function(err,user){
        if(err){
            console.log(err)
           return res.redirect("/register") 
        } passport.authenticate("local")(req,res,function(){
            res.redirect("/campground")
        })
    })
})
router.get("/login",function(req,res){
    res.render("login")
})
router.post("/login",passport.authenticate("local",{
    successRedirect:"/campground",
    failureRedirect:"/login"
}),function(req,res){

})
router.get("/logout",function(req,res){
    req.logOut()
    req.flash("success","Logged you out!")
    res.redirect("/campground")
})

module.exports=router