import { FormData } from "../interfaces/form";

const API = "http://localhost:3000/email";
export const sendEmail = async (formData: FormData) => {
  try {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        message: formData.description,
      }),
    });

    if (!response.ok) {
      throw new Error("Error sending mail");
    }

    await response.json();
  } catch (err) {
    console.error("Unexpected Error:", err);
  }
};
