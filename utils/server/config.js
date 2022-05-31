import mongoose from "mongoose";

export const DBConnection = () => {
    mongoose.connect("mongodb+srv://isaac:Mugisha12!@cluster0.sj1io.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('DB Connection Succeeded')
    }).catch((err) => {
        console.log('Connection Failed')
    })
}

