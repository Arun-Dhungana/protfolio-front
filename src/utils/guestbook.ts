"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function guestbook(
  prevState: { message: string },
  formdata: FormData
) {
  const schema = z.object({
    name: z.string().min(1),
    message: z.string().min(1),
  });

  try {
    const data = schema.parse({
      name: formdata.get("name"),
      message: formdata.get("message"),
    });

    await fetch("https://protfolio-api-amso.onrender.com/guestbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Important to set the Content-Type header
      },
      body: JSON.stringify(data),
    });

    revalidatePath("/guestbook");

    return { message: "Succesfull addition" };
  } catch (err) {
    return { message: "Error in addition" };
  }
}
