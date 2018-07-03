import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./database"
import router from "./routes/router"

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.debug" });

// Create Express server
const app = express();
app.set("port", process.env.PORT || 3000);

//databaseConnection();

app.use('/api', router);

export default app