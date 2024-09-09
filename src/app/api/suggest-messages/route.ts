import { NextResponse } from "next/server";
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
export const runtime = "edge";
import { streamText, convertToCoreMessages } from "ai";


export const maxDuration = 30;
export async function POST(req: Request) {
  try {
    const prompt =
      "Generate three open-ended questions in a single string, separated by '||'. The questions should be suitable for an anonymous social platform, focus on universal topics, and encourage friendly interaction. Avoid personal or sensitive themes. Example format: 'What's a new hobby you've tried?||If you could meet any historical figure, who would it be?||What's something simple that makes you happy?'";

      
      const result = await streamText({
        model: google('gemini-1.5-flash'),
        prompt: prompt,
      });
      const text ='What\'s a book you\'ve read recently that you\'d recommend to others? || What\'s your favorite way to spend a rainy day? || If you could travel anywhere in the world, where would you go and why? \n' +
    ''

    return result.toDataStreamResponse();
      // return NextResponse.json({ message: text }, { status: 200 });
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred", error },
      { status: 500 }
    );
  }
}



