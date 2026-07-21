import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export interface EvaluationResult {
  score: number;
  similarity: number;
  confidence: number;
  feedback: string;
  keywords: string[];
}

export async function evaluateAnswer(
  questionText: string,
  answerText: string
): Promise<EvaluationResult> {

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an experienced university examiner.

Evaluate the student's answer exactly like a real teacher.

Evaluation Rules:

• Read the Question Paper first.
• Compare the Student Answer with the Question Paper.
• Award marks fairly.
• Do not give full marks unless the answer is genuinely complete.
• Ignore spelling mistakes unless they change the meaning.
• Reward conceptual understanding.
• Penalize incorrect facts.
• Return ONLY valid JSON.
• Never return markdown.
• Never explain outside JSON.

Return EXACTLY this JSON format:

{
  "score": 18,
  "similarity": 92,
  "confidence": 97,
  "feedback": "Good conceptual understanding with minor missing points.",
  "keywords": [
    "Binary Search Tree",
    "Traversal",
    "Searching",
    "Complexity"
  ]
}

QUESTION PAPER:

${questionText}

STUDENT ANSWER:

${answerText}
`;

  const result = await model.generateContent(prompt);

  const text = result.response
    .text()
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    const parsed = JSON.parse(text);

    return {
      score: Number(parsed.score) || 0,
      similarity: Number(parsed.similarity) || 0,
      confidence: Number(parsed.confidence) || 0,
      feedback: parsed.feedback || "",
      keywords: Array.isArray(parsed.keywords)
        ? parsed.keywords
        : [],
    };
  } catch (error) {
    console.error("Invalid Gemini Response:");
    console.error(text);

    throw new Error("Gemini returned invalid JSON.");
  }
}