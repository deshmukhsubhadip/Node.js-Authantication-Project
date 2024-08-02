import mongoose from "mongoose";


const connectDB = () => {
    mongoose.connect(process.env.Mongo_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database connected");
    }).catch((error) => {
        console.log("Error occurs", error);
    });
};

export default connectDB;
