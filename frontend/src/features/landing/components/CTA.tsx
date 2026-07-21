import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-blue-600 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Ready to Transform Academic Evaluation?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
          Join schools, colleges and educators using Evalify to evaluate
          answer sheets faster with AI.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/register">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          <Link to="/login">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white hover:text-blue-600"
            >
              Live Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}