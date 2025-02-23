import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://monuyadav124103:hiteshydv123@cluster0.9w0yw.mongodb.net/dinings').then(()=>{
       console.log('DB connected') ;
    })
}