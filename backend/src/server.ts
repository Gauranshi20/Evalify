import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 5000;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log("");
    console.log("====================================");
    console.log(`🚀 Server Running on Port ${PORT}`);
    console.log(`🌐 http://localhost:${PORT}`);
    console.log("====================================");
    console.log("");
  });
}

startServer();