import express from "express";
import cors from "cors";
import AuthRoutes from "./routes/authRoutes";
import EvaluationRoutes from "./routes/evaluationRoutes";
import path from "path";
import ResultRoutes from "./routes/resultRoutes";
import AnalyticsRoutes from "./routes/analyticsRoutes";
import studentRoutes from "./routes/studentRoutes";
import adminRoutes from "./routes/adminRoutes";
import parentRoutes from "./routes/parentRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads"))
);
app.use("/api/auth", AuthRoutes);
app.use("/api/evaluation", EvaluationRoutes);
app.use("/api/results", ResultRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/analytics", AnalyticsRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/parent", parentRoutes);

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "Evalify Backend Running 🚀",
  });
});

app.get("/api/health", (_, res) => {
  res.status(200).json({
    success: true,
    status: "Healthy",
    timestamp: new Date(),
  });
});

export default app;