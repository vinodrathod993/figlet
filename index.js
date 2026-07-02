const figlet=require("figlet");
figlet("Vinod Rathod",function (err,data){
    if(err){
        console.log("something is wrong");
        console.dir(err);
        return;
    }
    console.log(data);
})