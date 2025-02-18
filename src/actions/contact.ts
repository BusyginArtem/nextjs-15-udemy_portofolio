"use server";

import xss from "xss";
import { MongoClient } from "mongodb";

import { FormState } from "@/components/Contact/ContactForm";
import { formSchema } from "@/lib/validation/form";
import connectMongoDb from "@/lib/mongodb";

function parseFields(data: Record<string, string>) {
  const fields: Record<string, string> = {};

  for (const key of Object.keys(data)) {
    fields[key] = data[key];
  }

  return fields;
}

export async function sendMessage(prevState: FormState, formData: FormData) {
  let mongoDbClient: MongoClient | null = null;

  const data = Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [
      key,
      typeof value === "string" ? value : "",
    ]),
  );
  const parsedFields = formSchema.safeParse(data);

  if (parsedFields.error) {
    const fields = parseFields(data);

    return {
      message: "Invalid form data",
      errors: parsedFields.error.flatten().fieldErrors,
      fields,
    };
  }

  if (parsedFields.success) {
    try {
      mongoDbClient = await connectMongoDb();
    } catch (error) {
      console.log("[Error]:", error);

      return {
        message:
          "An unexpected error occurred. Could not connect to DB. Try again later.",
        errors: undefined,
        fields: undefined,
      };
    }

    const message = xss(data.message);

    try {
      const db = mongoDbClient.db("contact");

      await db
        .collection("messages")
        .insertOne({ ...parsedFields.data, message, createdAt: new Date() });

      mongoDbClient.close();
    } catch (error: any) {
      return {
        message: "An unexpected error occurred. Try again later.",
        errors: undefined,
        fields: undefined,
      };
    }

    return {
      message: "Message has been sent successfully!",
      errors: undefined,
      fields: undefined,
    };
  }

  return {
    message: "An unexpected error occurred. Try again later.",
    errors: undefined,
    fields: undefined,
  };
}
