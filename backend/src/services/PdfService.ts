import fs from "fs";
import pdfParse from "pdf-parse";

export async function extractPdfText(
  filePath: string
): Promise<string> {
  try {
    const buffer = fs.readFileSync(filePath);

    const data = await pdfParse(buffer);

    return data.text.trim();
  } catch (error) {
    console.error("PDF Extraction Error:", error);
    throw new Error("Unable to extract PDF text");
  }
}