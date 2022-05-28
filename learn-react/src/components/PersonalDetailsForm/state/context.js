import { createContext } from "react";

const formData = {
  personalDetails: {},
  currentEmployment: {},
  qualificationsAndHobbies: {},
  callbacks: {},
};
const FormContext = createContext(formData);

export { formData };

export default FormContext;
