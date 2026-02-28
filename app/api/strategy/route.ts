import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: NextRequest) {
  const { stage, challenge } = await req.json();

  if (!stage || !challenge?.trim()) {
    return NextResponse.json(
      { error: "stage and challenge are required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Gemini API key not configured" },
      { status: 500 }
    );
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `You are an expert fintech product and business strategy consultant at A3S Consulting.
A client at the ${stage} stage has the following challenge: "${challenge}"

Provide a concise, actionable strategic roadmap in the following JSON format only (no markdown, no extra text):
{
  "title": "Brief title for this strategy (10-15 words)",
  "roadmap": [
    "Step 1 - specific action",
    "Step 2 - specific action",
    "Step 3 - specific action",
    "Step 4 - specific action",
    "Step 5 - specific action"
  ],
  "priorityItems": [
    "Focus Area 1",
    "Focus Area 2",
    "Focus Area 3",
    "Focus Area 4"
  ],
  "potentialPitfalls": [
    "Risk or pitfall to watch for 1",
    "Risk or pitfall to watch for 2",
    "Risk or pitfall to watch for 3"
  ]
}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    const text = response.text ?? "";
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Invalid response format from Gemini");
    }

    const result = JSON.parse(jsonMatch[0]);
    return NextResponse.json(result);
  } catch (err) {
    console.error("Gemini error:", err);
    return NextResponse.json(
      { error: "Failed to generate strategy. Please try again." },
      { status: 500 }
    );
  }
}
