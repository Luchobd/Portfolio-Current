interface InfoFormProps {
  subTitle: string;
  information: string;
}

export const InformationForm = ({ subTitle, information }: InfoFormProps) => {
  return (
    <div className="contact-form-information">
      <h3 className="contact-form-info-subtitle">{subTitle}</h3>
      <p className="contact-form-info-description">{information}</p>
    </div>
  );
};
