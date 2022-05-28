import React from "react";

const QualificationsAndHobbies = () => {
  return (
    <fieldset>
      <div className="div1">
        <legend> Qualifications and hobbies</legend>
      </div>
      <label> Academic qualifications</label> <input type="text" size="50" />
      <label> Professional qualifications</label>
      <input type="text" size="50" /> <br />
      <br />
      <label> Describe your hobby/ hobbies </label> <br />
      <textarea
        name="message-box"
        defaultValue="What are your hobbies and Interests?"
      />
    </fieldset>
  );
};

export default QualificationsAndHobbies;
