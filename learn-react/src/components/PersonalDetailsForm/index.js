import { useState } from "react";
import FormContext, { formData } from "./state/context";
import PersonalDetails from "./components/PersonalDetails";
import CurrentEmployment from "./components/CurrentEmployment";
import QualificationsAndHobbies from "./components/QualificationsAndHobbies";
import updateContext from "./utils/updateContext";

const PersonalDetailsForm = () => {
  const [contextFormData, setContextFormData] = useState(formData);

  const onFirstNameChange = (value) => {
    setContextFormData(
      updateContext(contextFormData, "personalDetails", {
        firstName: value,
      })
    );
  };

  const onLastNameChange = (value) => {
    setContextFormData(
      updateContext(contextFormData, "personalDetails", {
        lastName: value,
      })
    );
  };

  const onEmailChange = (value) => {
    setContextFormData(
      updateContext(contextFormData, "personalDetails", {
        email: value,
      })
    );
  };

  const onPhoneChange = (value) => {
    setContextFormData(
      updateContext(contextFormData, "personalDetails", {
        phone: value,
      })
    );
  };

  const contextData = {
    ...contextFormData,
    callbacks: {
      onFirstNameChange,
      onLastNameChange,
      onEmailChange,
      onPhoneChange,
    },
  };

  return (
    <FormContext.Provider value={contextData}>
      <PersonalDetails />
      <CurrentEmployment />
      <QualificationsAndHobbies />
    </FormContext.Provider>
  );
};

export default PersonalDetailsForm;
