import { useState } from "react";

export const FilterCheckBox = ({filterOrigin, origin}) => {
  const [checkboxSelected, setCheckBoxSelected] = useState(false);

  return (
    <div>
      <input type="checkbox" id={`checkbox-${origin}`} value={origin} className={`filter-checkbox ${checkboxSelected ? "selected-button" : "unselected-button"}`}
      onClick={() => {
        setCheckBoxSelected(!checkboxSelected);
            filterOrigin({origin}) 
          }} 
          />
          <label htmlFor={`checkbox-${origin}`}>{origin}</label>
    </div>
  )
}