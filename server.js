const express =require('express')
const cors=require('cors')
const morgan=require('morgan')
const colors=require('colors')
const dotenv=require('dotenv')
const connectionDB = require("./config/db")
dotenv.config()

connectionDB();
const app=express();

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.get("/",(req,res)=>{
    res.status(200).send({
        message:"Node Server",
    });
});

const usersRouter = require("./routes/userRoute");
app.use("/submit", usersRouter);
const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} Port no ${PORT}`.bgCyan.white);
})