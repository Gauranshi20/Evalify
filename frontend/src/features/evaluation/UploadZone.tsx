import { useState } from "react";
import {
  UploadCloud,
  FileText,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { uploadAnswerSheet } from "@/lib/api";

interface UploadZoneProps {
  setEvaluation: (evaluation: unknown) => void;
}

export default function UploadZone({
  setEvaluation,
}: UploadZoneProps) {
  const [questionPaper, setQuestionPaper] =
    useState<File | null>(null);

  const [answerSheet, setAnswerSheet] =
    useState<File | null>(null);

  const [studentName, setStudentName] =
    useState("");

  const [subject, setSubject] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleUpload = async () => {
    if (loading) return;

    if (
      !studentName.trim() ||
      !subject.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (!questionPaper || !answerSheet) {
      alert(
        "Please upload both Question Paper and Answer Sheet."
      );
      return;
    }

    if (
      questionPaper.type !== "application/pdf" ||
      answerSheet.type !== "application/pdf"
    ) {
      alert("Only PDF files are supported.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append(
        "studentName",
        studentName.trim()
      );

      formData.append(
        "subject",
        subject.trim()
      );

      formData.append(
        "questionPaper",
        questionPaper
      );

      formData.append(
        "answerSheet",
        answerSheet
      );

      const response =
        await uploadAnswerSheet(formData);

      if (!response.success) {
        throw new Error(
          response.message ||
            "Evaluation failed."
        );
      }

      setEvaluation(response.data);

      alert("Evaluation completed successfully.");

      setStudentName("");
      setSubject("");
      setQuestionPaper(null);
      setAnswerSheet(null);
    } catch (err) {
      console.error(err);

      alert(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all dark:border-slate-700 dark:bg-slate-900">

    <div className="mb-8 text-center">

      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
        <UploadCloud className="h-10 w-10 text-white" />
      </div>

      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
        AI Evaluation Workspace
      </h2>

      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Upload the question paper and student's answer sheet to generate
        marks, similarity score, AI confidence and detailed feedback.
      </p>

    </div>

    <div className="grid gap-5 md:grid-cols-2">

      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 transition focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
      />

      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 transition focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
      />

    </div>

    <div className="mt-8 grid gap-6 lg:grid-cols-2">

      <div className="rounded-2xl border border-dashed border-blue-300 bg-blue-50/50 p-6 transition hover:border-blue-500 dark:border-blue-700 dark:bg-slate-800">

        <h3 className="font-semibold text-slate-900 dark:text-white">
          Question Paper
        </h3>

        <p className="mb-4 mt-1 text-sm text-slate-500 dark:text-slate-400">
          Upload the original question paper (PDF)
        </p>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setQuestionPaper(e.target.files?.[0] || null)
          }
          className="w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700 dark:text-slate-300"
        />

        {questionPaper && (
          <div className="mt-4 rounded-xl bg-white px-4 py-3 shadow-sm dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {questionPaper.name}
            </p>
          </div>
        )}

      </div>

      <div className="rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/50 p-6 transition hover:border-emerald-500 dark:border-emerald-700 dark:bg-slate-800">

        <h3 className="font-semibold text-slate-900 dark:text-white">
          Answer Sheet
        </h3>

        <p className="mb-4 mt-1 text-sm text-slate-500 dark:text-slate-400">
          Upload student's answer sheet (PDF)
        </p>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setAnswerSheet(e.target.files?.[0] || null)
          }
          className="w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-emerald-600 file:px-4 file:py-2 file:text-white hover:file:bg-emerald-700 dark:text-slate-300"
        />

        {answerSheet && (
          <div className="mt-4 rounded-xl bg-white px-4 py-3 shadow-sm dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {answerSheet.name}
            </p>
          </div>
        )}

      </div>

    </div>

    <div className="mt-8">

      <Button
        onClick={handleUpload}
        disabled={loading}
        className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-base font-semibold transition hover:scale-[1.01] hover:from-blue-700 hover:to-indigo-700"
      >
        {loading ? "Evaluating with AI..." : "Upload & Evaluate"}
      </Button>

    </div>

    <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 dark:border-slate-700 dark:bg-slate-800">

      <FileText className="text-blue-600 dark:text-blue-400" />

      <div>
        <p className="font-medium text-slate-900 dark:text-white">
          Supported Format
        </p>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Upload PDF files only. Maximum accuracy is achieved with clear scanned documents.
        </p>
      </div>

    </div>

  </div>
);
}