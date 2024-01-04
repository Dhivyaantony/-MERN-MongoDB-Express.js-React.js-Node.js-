const COURTS = require("../Model/courtModel")

const getAllcourtData=(req,res)=>{
COURTS .find().then((response)=>{
    res.status(200).json(response)
})
.catch((err)=>{
    console.log(err);
    res.status(500).json(err)
})
}
const getSinglecourtData = async (req, res) => {
    try {
      const result = await COURTS.findOne({ _id: req.query.courtId });
      
      // Check if the court is found
      if (!result) {
        return res.status(404).json({ message: 'Court not found' });
      }
  
      // Send a successful response
      res.status(200).json(result);
    } catch (err) {
      // Handle errors and send an appropriate response
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  

module.exports={getAllcourtData,getSinglecourtData}