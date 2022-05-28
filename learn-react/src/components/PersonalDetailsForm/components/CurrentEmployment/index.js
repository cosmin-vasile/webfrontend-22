import React from "react";

const CurrentEmployment = () => {
  return (
    <fieldset>
      <div className="div1">
        <legend>Current Employment</legend>
      </div>
      <label>Employer </label> <input type="text" size="30" />
      <label>Position</label> <input type="text" size="30" />
      <label>Street</label> <input type="text" size="30" />
      <label>Street number</label> <input type="text" size="15" />
      <label>City</label>
      <select name="city">
        <option value="non">Select</option>
        <option value="Alba">Alba Iulia</option>
        <option value="Arad"> Arad</option>
        <option value="Bacau">Bacau </option>
        <option value="Bistrita-Nasaud">Bistrita </option>
        <option value="Brasov">Brasov </option>
        <option value="Cluj">Cluj-Napoca </option>
        <option value="Mures">Targu Mures </option>
        <option value="Sibiu">Sibiu </option>
        <option value="Ilfov">Bucuresti</option>
      </select>
    </fieldset>
  );
};

export default CurrentEmployment;
