import { useState } from "react";

export const FilterButton = ({filterOrigin, origin}) => {
  const [buttonSelected, setButtonSelected] = useState(false);

  return (
    <button className={`filterButton ${buttonSelected ? "selectedButton" : "unselectedButton"}`}
      onClick={() => {
        setButtonSelected(!buttonSelected);
        filterOrigin({origin}) 
      }} 
    >{origin}
  </button>
  )
}