import dotenv from "dotenv";
import app from "./app.js";
import mongoose from "mongoose";

dotenv.config();
async function main() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(
      "mongodb+srv://eduhub:pCbbM1qCISJQyTAK@cluster0.z68se.mongodb.net/eduhub?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connected successfully!");

    app.listen(process.env.PORT, () => {
      console.log(`App listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}
main();
