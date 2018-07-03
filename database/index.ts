import { MONGODB_URI } from "../utils/secrets";
import mongoose from "mongoose";
import bluebird from "bluebird";

// Connect to MongoDB
const databaseConnection = () => {
    const mongoUrl = MONGODB_URI;
    (<any>mongoose).Promise = bluebird;
    mongoose.connect(mongoUrl).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
    ).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    });
}

export default databaseConnection;