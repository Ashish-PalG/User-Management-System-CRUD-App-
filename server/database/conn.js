const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        //mongoDB connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        })

        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch(err){
        console.log("No Connection!");
    }
}

module.exports=connectDB;