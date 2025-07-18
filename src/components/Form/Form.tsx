import { useId, ChangeEvent, FormEvent, useContext } from "react";
import { useFormError } from "../../hooks/formError/useFormError";
import { FormProps, FormData } from "../../interfaces/form";
import { sendEmail } from "../../api/sendEmail";
import Swal from "sweetalert2";
import { PortfolioContext } from "../../context/Context";

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
  const initialFormData: FormData = {
    fullName: "",
    email: "",
    description: "",
  };

  const { formData, setFormData, formErrors, setFormErrors, validateForm } =
    useFormError(initialFormData);

  const { portfolioState } = useContext(PortfolioContext);

  const popupLanguage = portfolioState.language === "en";

  const fullNameId = useId();
  const emailId = useId();
  const descriptionId = useId();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setFormErrors({
      fullName: "",
      email: "",
      description: "",
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      sendEmail(formData);

      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: popupLanguage
          ? "Your message was sent successfully."
          : "Tu mensaje fue enviado correctamente.",
      });

      setFormData(initialFormData);
      setFormErrors({
        fullName: "",
        email: "",
        description: "",
      });
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 7000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "warning",
        title: popupLanguage
          ? "Please fill in all the fields."
          : "Por favor, complete todos los campos.",
      });
    }
  };

  return (
    <form
      className="contact-form-inputs"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <div className="contact-form-inputs-content">
        <div className="contact-form-label-input-name">
          <label htmlFor={fullNameId} className="contact-form-label-name">
            {name}
          </label>
          <input
            type="text"
            id={fullNameId}
            name="fullName"
            className={`contact-form-input-name ${
              formErrors.fullName ? "input-error" : ""
            }`}
            placeholder={placeholderName}
            value={formData.fullName}
            onChange={handleChange}
          />
          {formErrors.fullName && (
            <span className="error-message">{formErrors.fullName}</span>
          )}
        </div>

        <div className="contact-form-label-input-email">
          <label htmlFor={emailId} className="contact-form-label-mail">
            {email}
          </label>
          <input
            type="text"
            id={emailId}
            name="email"
            className={`contact-form-input-mail ${
              formErrors.email ? "input-error" : ""
            }`}
            placeholder={placeholderEmail}
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <span className="error-message">{formErrors.email}</span>
          )}
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
          className={`contact-form-input-description ${
            formErrors.description ? "input-error" : ""
          }`}
          placeholder={placeholderInfo}
          value={formData.description}
          onChange={handleChange}
        />
        {formErrors.description && (
          <span className="error-message">{formErrors.description}</span>
        )}
      </div>

      <div className="contact-form-buttons">
        <input type="reset" value={reset} className="contact-form-reset" />
        <input type="submit" value={send} className="contact-form-send" />
      </div>
    </form>
  );
}
