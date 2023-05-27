import { useState } from "react";

export const FilterCheckBox = ({filterOrigin, origin}) => {
  const [checkboxSelected, setCheckBoxSelected] = useState(false);

  return (
    <label>
      <input type="checkbox" id={origin} value={origin} className={`filter-checkbox ${checkboxSelected ? "selected-button" : "unselected-button"}`}
        onClick={() => {
          setCheckBoxSelected(!checkboxSelected);
          filterOrigin({origin}) 
        }} 
      />
      <span>{origin}</span>
    </label>
  )
}