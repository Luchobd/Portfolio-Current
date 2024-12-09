import { useState } from "react";
import { FormErrors, FormData } from "../../interfaces/form";

export function useFormError(initialFormData: FormData) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>({
    fullName: "",
    email: "",
    description: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const errors: FormErrors = {
      fullName: "",
      email: "",
      description: "",
    };

    if (!formData.fullName.trim()) {
      errors.fullName = "El nombre es obligatorio.";
    } else if (formData.fullName.length < 3) {
      errors.fullName = "El nombre debe tener al menos 3 caracteres.";
    }

    if (!formData.email.trim()) {
      errors.email = "El correo electrónico es obligatorio.";
    } else if (!validateEmail(formData.email)) {
      errors.email = "El correo electrónico no es válido.";
    }

    if (!formData.description.trim()) {
      errors.description = "La descripción es obligatoria.";
    } else if (formData.description.length < 10) {
      errors.description = "La descripción debe tener al menos 10 caracteres.";
    }

    setFormErrors(errors);

    return !errors.fullName && !errors.email && !errors.description;
  };

  return {
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    validateForm,
  };
}
