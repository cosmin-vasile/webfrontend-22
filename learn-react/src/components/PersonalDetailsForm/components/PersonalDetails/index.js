import { useContext } from "react";
import FormContext from "../../state/context";
import Input from "../../../../shared/components/Input";

const PersonalDetails = () => {
  const formData = useContext(FormContext);
  const { personalDetails, callbacks } = formData;
  const {
    firstName = "",
    lastName = "",
    email = "",
    phone = "",
  } = personalDetails;

  const { onFirstNameChange, onLastNameChange, onEmailChange, onPhoneChange } =
    callbacks;

  return (
    <fieldset>
      <div className="div1">
        <legend>Personal Details </legend>
      </div>
      <label> First name </label>{" "}
      <Input onChange={onFirstNameChange} value={firstName} size="35px" />
      <label>Last name </label>{" "}
      <Input onChange={onLastNameChange} value={lastName} size="35px" /> <br />
      <label> Email</label>{" "}
      <Input onChange={onEmailChange} value={email} size="35px" />
      <label> Phone number</label>{" "}
      <Input onChange={onPhoneChange} value={phone} maxLength="10px" /> <br />
      <label>Gender:</label>
      <label className="g1">Male</label>
      <Input type="radio" value="Male" name="gender" /> |
      <label className="g2">Female</label>
      <Input type="radio" value="Female" name="gender" /> |
      <label className="g3">Other</label>
      <Input type="radio" value="Other" name="gender" /> |
    </fieldset>
  );
};

export default PersonalDetails;
