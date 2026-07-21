import { useState } from "react";

import { DashboardLayout } from "@/components/layout/dashboard";
import PageHeader from "@/components/common/PageHeader";

import UploadZone from "./UploadZone";
import EvaluationProgress from "./EvaluationProgress";
import MarksPanel from "./MarksPanel";
import AIInsights from "./AIInsights";

export default function EvaluationPage() {
  const [evaluation, setEvaluation] = useState<any>(null);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <PageHeader
          badge="AI Evaluation Workspace"
          title="Evaluate Answer Sheets"
          description="Upload the question paper and student's answer sheet. Evalify AI will automatically evaluate the answers and generate marks, similarity, keywords and feedback."
        />

        {evaluation && (
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-white shadow-xl">
            <p className="text-sm opacity-90">AI Confidence</p>

            <h2 className="mt-2 text-5xl font-bold">
              {evaluation.confidence}%
            </h2>

            <p className="mt-2 text-sm opacity-90">
              Based on the latest evaluation
            </p>
          </div>
        )}

        <UploadZone setEvaluation={setEvaluation} />

        <EvaluationProgress evaluation={evaluation} />

        {evaluation && (
          <section className="grid gap-8 lg:grid-cols-2">
            <MarksPanel evaluation={evaluation} />
            <AIInsights evaluation={evaluation} />
          </section>
        )}
      </div>
    </DashboardLayout>
  );
}