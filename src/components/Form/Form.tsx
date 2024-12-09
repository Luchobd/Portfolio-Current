import { useId } from "react";

interface FormProps {
  name: string;
  email: string;
  description: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderInfo: string;
  send: string;
  reset: string;
}

export function Form({
  name,
  email,
  description,
  send,
  reset,
  placeholderName,
  placeholderEmail,
  placeholderInfo,
}: FormProps) {
  const fullNameId = useId();
  const emailId = useId();
  const descriptionId = useId();
  return (
    <form className="contact-form-inputs">
      <div className="contact-form-inputs-content">
        <div className="contact-form-label-input-name">
          <label htmlFor={fullNameId} className="contact-form-label-name">
            {name}
          </label>
          <input
            type="text"
            id={fullNameId}
            className="contact-form-input-name"
            placeholder={placeholderName}
          />
        </div>

        <div className="contact-form-label-input-email">
          <label htmlFor={emailId} className="contact-form-label-mail">
            {email}
          </label>
          <input
            type="text"
            id={emailId}
            className="contact-form-input-mail"
            placeholder={placeholderEmail}
          />
        </div>
      </div>

      <div className="contact-form-label-input-description">
        <label
          htmlFor={descriptionId}
          className="contact-form-label-description"
        >
          {description}
        </label>
        <textarea
          name="description"
          id={descriptionId}
          rows={5}
          className="contact-form-input-description"
          placeholder={placeholderInfo}
        />
      </div>
      <div className="contact-form-buttons">
        <input type="reset" value={reset} className="contact-form-reset" />
        <input type="submit" value={send} className="contact-form-send" />
      </div>
    </form>
  );
}
