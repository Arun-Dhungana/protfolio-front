"use server";

export const fetchMessage = async () => {
  try {
    const response = await fetch("http://localhost:4000/guestbook", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch messages");
    }
    const data = response.json();

    return data; // Ensure this is a plain object or array
  } catch (error: any) {
    console.error("Error fetching messages:", error);
    return { error: error.message };
  }
};
