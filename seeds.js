var mongoose      =   require("mongoose"),
    campground    =   require("./models/campground"),
    comment       =   require("./models/comment");

var data=[
    {
        name:"Cloud Rest",
        image:"https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ligula quis dignissim mollis. Curabitur placerat dictum elit. Integer vel odio ut turpis ornare hendrerit. Nulla dictum consequat enim nec tristique. Nulla facilisi. Maecenas in urna est. Ut lobortis eros id nibh posuere, eu ullamcorper neque lacinia. Aliquam molestie sapien quis auctor tempus. Nullam vitae fermentum lectus, at interdum erat. Praesent efficitur eget magna at sodales. Proin dictum faucibus eros, tincidunt aliquam diam malesuada sed. Quisque quis rhoncus neque."
    },
    {
        name:"Desert Mesa",
        image:"https://images.unsplash.com/photo-1559521783-1d1599583485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ligula quis dignissim mollis. Curabitur placerat dictum elit. Integer vel odio ut turpis ornare hendrerit. Nulla dictum consequat enim nec tristique. Nulla facilisi. Maecenas in urna est. Ut lobortis eros id nibh posuere, eu ullamcorper neque lacinia. Aliquam molestie sapien quis auctor tempus. Nullam vitae fermentum lectus, at interdum erat. Praesent efficitur eget magna at sodales. Proin dictum faucibus eros, tincidunt aliquam diam malesuada sed. Quisque quis rhoncus neque. "
    },
    {
        name:"Canyon Floor",
        image:"https://images.unsplash.com/photo-1464547323744-4edd0cd0c746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ligula quis dignissim mollis. Curabitur placerat dictum elit. Integer vel odio ut turpis ornare hendrerit. Nulla dictum consequat enim nec tristique. Nulla facilisi. Maecenas in urna est. Ut lobortis eros id nibh posuere, eu ullamcorper neque lacinia. Aliquam molestie sapien quis auctor tempus. Nullam vitae fermentum lectus, at interdum erat. Praesent efficitur eget magna at sodales. Proin dictum faucibus eros, tincidunt aliquam diam malesuada sed. Quisque quis rhoncus neque."
    }
]    
function seedDB(){
    campground.remove({},function(err){
        // if(err){
        //     console.log(err)
        // }else{
        //     console.log("Removed all Campgrounds!!")
        //     data.forEach(function(seed){
        //             campground.create(seed,function(err,campground){
        //                 if(err){
        //                     console.log(err)
        //                 }else{
        //                     console.log("campground is added");
        //                     comment.remove({},function(err){
        //                         if(err){
        //                             console.log(err)
        //                         }else{
        //                             comment.create({
        //                                 text:"This is as great place..but do not contain Internet",
        //                                 author:"Homer"
        //                             },function(err,comment){
        //                                 if(err){
        //                                     console.log(err)
        //                                 }else{
        //                                     campground.comments.push(comment)
        //                                     campground.save()
        //                                     console.log("Created new comment")
                                            
        //                                 }
        //                             })
        //                         }
        //                     })
                           
                            
        //                 }
        //             })
        //     })
            
        // }
    })
}    
module.exports=seedDB