import { useState } from "react";

export const FilterCheckBox = ({filterOrigin, origin}) => {
  const [checkboxSelected, setCheckBoxSelected] = useState(false);

  return (
    <div>
      <input type="checkbox" id={`checkbox-${origin}`} value={origin}
      onClick={() => {
        setCheckBoxSelected(!checkboxSelected);
            filterOrigin({origin}) 
          }} 
          />
          <label htmlFor={`checkbox-${origin}`}>{origin}</label>
    </div>
  )
}