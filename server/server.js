import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/UserRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

//database connection
await connectDB()

app.use(express.json())
app.use(cors(
  {
    origin: ["https://resume-plum-tau-24.vercel.app",
          "https://resume-srhn.vercel.app", 
            "http://localhost:5173"],
  credentials: true
}
))

app.get('/', (req, res) => res.send("Server is live..."))

app.use('/api/users', userRouter)
app.use('/api/resumes', resumeRouter)
app.use('/api/ai',aiRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})