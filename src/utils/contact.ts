"use server";

import { z } from "zod";

export async function sendEmail(
  prevState: { message: string },
  formdata: FormData
) {
  const schema = z.object({
    name: z.string().min(1),
    message: z.string().min(1),
    email: z.string().email({ message: "Invalid email" }),
    phonenumber: z.string().min(10, { message: "Must be of length 10" }),
  });

  try {
    const data = schema.parse({
      name: formdata.get("name"),
      message: formdata.get("message"),
      email: formdata.get("email"),
      phonenumber: formdata.get("phonenumber"),
    });
    await fetch("http://localhost:4000/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Important to set the Content-Type header
      },
      body: JSON.stringify(data),
    });

    return { message: "Email sent successfully" };
  } catch (err: any) {
    console.log(err);
    return { message: `Error :${err.message}` };
  }
}
