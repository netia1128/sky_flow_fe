import { useState } from "react";

export const FilterButton = ({filterOrigin, origin}) => {
  const [buttonSelected, setButtonSelected] = useState(false);

  return (
    <button className={`filter-button ${buttonSelected ? "selected-button" : "unselected-button"}`}
      onClick={() => {
        setButtonSelected(!buttonSelected);
        filterOrigin({origin}) 
      }} 
    >{origin}
  </button>
  )
}