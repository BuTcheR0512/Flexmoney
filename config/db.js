const mongoose=require('mongoose')
const connectionDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to DataBAse`.bgMagenta.white)
    }
    catch(error){
        console.log(`Mongo Connect Error ${error}`.bgRed.white);
    }
};
module.exports=connectionDB;