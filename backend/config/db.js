import mongoose from "mongoose";

export const connectDB = async () => {
 await mongoose.connect('mongodb+srv://greatstack:tharinduD456@cluster0.modwwsm.mongodb.net/food-deliver-system').then(()=>console.log("DB Connected"));
}
