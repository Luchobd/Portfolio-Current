export interface ContactFormProps {
  title: string;
  subTitle: string;
  information: string;
  name: string;
  email: string;
  description: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderInfo: string;
  send: string;
  reset: string;
}

export const contactFormEnglish: ContactFormProps = {
  title: "Contact form",
  subTitle: "You can contact me thought:",
  information:
    "This form will send an email with the information provided directly to my personal email.",
  name: "Full name",
  placeholderName: "John Smith",
  email: "Email",
  placeholderEmail: "john.smith@contact.com",
  description: "Additional information",
  placeholderInfo:
    "You can leave your additional information here, such as proposals, offers or other forms of contact...",
  send: "Send",
  reset: "Clear",
};
