const Court = require("../Model/courtModel")

const getAllcourtData=(req,res)=>{
Court.find().then((response)=>{
    res.status(200).json(response)
})
.catch((err)=>{
    console.log(err);
    res.status(500).json(err)
})
}
module.exports={getAllcourtData}