import mongoose from "mongoose";

console.log("db url is: ", process.env.DB_URL);

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('DB Connection Succeeded')
}).catch((err)=>{
    console.log('Connection Failed')
})