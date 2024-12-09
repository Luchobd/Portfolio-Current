import { useContext } from "react";
import { PortfolioContext } from "../../context/Context";
import { contactFormSpanish } from "../../utils/Language/contact-form/contact-form-spanish";
import { contactFormEnglish } from "../../utils/Language/contact-form/contact-form-english";
import { Form, InformationForm } from "../../components/Form";
import "./styles.css";

export function ContactForm() {
  const { portfolioState } = useContext(PortfolioContext);

  const homeSpanishLanguage = portfolioState.language === "en";

  const contactFormLanguage = homeSpanishLanguage
    ? contactFormEnglish
    : contactFormSpanish;

  const {
    title,
    subTitle,
    information,
    name,
    email,
    description,
    placeholderName,
    placeholderEmail,
    placeholderInfo,
    send,
    reset,
  } = contactFormLanguage;

  return (
    <div className="contact-form-container" id="contact">
      <h2 className="contact-form-title">{title}</h2>
      <br />
      <div className="contact-form-content">
        <InformationForm subTitle={subTitle} information={information} />

        <div className="contact-form-input-content">
          <Form
            name={name}
            email={email}
            description={description}
            placeholderName={placeholderName}
            placeholderEmail={placeholderEmail}
            placeholderInfo={placeholderInfo}
            send={send}
            reset={reset}
          />
        </div>
      </div>
    </div>
  );
}
