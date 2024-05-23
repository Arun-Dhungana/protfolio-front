"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function guestbook(
  prevState: { message: { msg: String; status: number } },
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

    const response = await fetch(
      "https://protfolio-api-amso.onrender.com/guestbook",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Important to set the Content-Type header
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    revalidatePath("/guestbook");
    return { message: { msg: "Succesfully signed", status: 200 } };
  } catch (err) {
    return { message: { msg: "Error in signing.", status: 400 } };
  }
}
