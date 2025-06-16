import { FormData } from "../interfaces/form";

const URL = "https://send-email-portfolio.onrender.com/email";
export const sendEmail = async (formData: FormData) => {
  try {
    const response = await fetch(URL, {
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
