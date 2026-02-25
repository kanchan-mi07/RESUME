import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => { console.log("Database is connected successfully") })
    
    let mongodbURI = process.env.MONGODB_URI;
    const projectNmae = 'resume-builder';

    if (!mongodbURI) {
      throw new Error("MONGODB_URI environment variable is not set")
    }
    if (mongodbURI.endsWith('/')) {
      mongodbURI = mongodbURI.slice(0,-1)
    }


    await mongoose.connect(`${mongodbURI}/${projectNmae}`)


  } catch (error) {
    console.error("Error connecting to MongoDB:",error)
  }
}

export default connectDB;