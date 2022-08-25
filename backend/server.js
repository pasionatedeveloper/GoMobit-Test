const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const connectDb = require('./config/config.js');
const ErrorHanlder = require('./utils/errorHandler');
const userRoutes = require('./routes/userRoutes');




const PORT_NUMBER=8000;

connectDb();

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json());
app.use('/api/v1',userRoutes);


app.use((err,req,res,next)=>{

    let error={...err}

    if(err.name=='ValidationError'){
        
    }
    if(err.name=='CastError'){

    }
    if(err.code == 11000){
        //  const message= `Duplicate ${Object.keys(err.keyValue)} entered`
        //  error= new ErrorHanlder(message,400);   
        //  console.log(message);
        //  res.send(message);
            error = new Error("Duplicate email not allowed");
        res.json({
            "error":error.message
        });
    }
    // res.json({
    //         err
    // })
})



app.listen(PORT_NUMBER,()=>{
    console.log(`Listening on port number ${PORT_NUMBER}`)
});