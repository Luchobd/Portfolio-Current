export interface FormProps {
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

export interface ErrorProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export interface FormData {
  fullName: string;
  email: string;
  description: string;
}

export interface FormErrors {
  fullName: string;
  email: string;
  description: string;
}

