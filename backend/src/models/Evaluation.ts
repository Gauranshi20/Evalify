import mongoose, { Schema, Document } from "mongoose";

export type EvaluationStatus =
  | "pending"
  | "processing"
  | "completed"
  | "failed";

export interface IEvaluation extends Document {
  teacherId: mongoose.Types.ObjectId;

  studentId?: mongoose.Types.ObjectId;

  studentName: string;

  subject: string;

  questionPaper: string;

  answerSheet: string;

  score: number;

  similarity: number;

  confidence: number;

  feedback: string;

  keywords: string[];

  status: EvaluationStatus;

  evaluatedAt?: Date;

  createdAt: Date;
  
  updatedAt: Date;

  questionText: string;

   answerText: string;
}

const EvaluationSchema = new Schema(
  {
    teacherId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    studentId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    studentName: {
      type: String,
      required: true,
      trim: true,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
    },

    questionPaper: {
      type: String,
      required: true,
    },

    answerSheet: {
      type: String,
      required: true,
    },

    questionText: {
  type: String,
  default: "",
},

answerText: {
  type: String,
  default: "",
},

    score: {
      type: Number,
      default: 0,
    },

    similarity: {
      type: Number,
      default: 0,
    },

    confidence: {
      type: Number,
      default: 0,
    },

    feedback: {
      type: String,
      default: "",
    },

    keywords: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: [
        "pending",
        "processing",
        "completed",
        "failed",
      ],
      default: "pending",
    },

    evaluatedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IEvaluation>(
  "Evaluation",
  EvaluationSchema
);