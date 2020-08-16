var express            =  require("express"),
 bodyParser            =  require("body-parser"),
 mongoose              =  require("mongoose"),
 passport              =  require("passport"),
localStrategy          =  require("passport-local"),
passportLocalMongoose  =  require("passport-local-mongoose"),
methodOverride         =  require("method-override")
 campground            =  require("./models/campground"),
 comment               =  require("./models/comment"),
 User                  =  require("./models/user")
 seedDB                =  require("./seeds"),
 flash                 =  require("connect-flash")
//  seedDB();
mongoose.connect("mongodb+srv://shivani:shivani123@cluster0-htc7d.mongodb.net/Yelpcamp?retryWrites=true&w=majority")
var app=express();
// Routes
var campgroundRoute=require("./routes/campground"),
 commentRoute=require("./routes/comment"),
 indexRoute=require("./routes/index");

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))
app.use(methodOverride("_method"))
app.set("view engine","ejs");
app.use(flash())
// ==============
// passport requiring
app.use(require("express-session")({
    secret:"Anything",
    resave: false,
    saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use(function(req,res,next){
    res.locals.currentUser=req.user
    res.locals.success=req.flash("success")
    res.locals.error=req.flash("error")
    next();
})
app.use(campgroundRoute)
app.use(commentRoute)
app.use(indexRoute) 


const port  = process.env.PORT || 4000;

   

app.listen(port,function(){
    console.log("Server has started");
})
