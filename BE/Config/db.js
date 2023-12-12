const mongoose =require('mongoose')
//const express = require('express');

const connectDb=async ()=>{
    try{
        const connection=await mongoose.connect('mongodb://127.0.0.1:27017/book',{
            useNewUrlParser:"true"
            //useUnifiedTopology: "true"
        })
        console.log("Mongodb database connected");
       
    }
catch(err){
    console.log(err);
}
}
module.exports=connectDb