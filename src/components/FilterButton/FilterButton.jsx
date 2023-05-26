import { useState } from "react";

export const FilterButton = ({filterOrigin, origin}) => {
  const [buttonColor, setButtonColor] = useState('white');
  const [buttonSelected, setButtonSelected] = useState(false);

  return (
    <button key={origin} className={`filterButton ${buttonSelected ? "selectedButton" : "unselectedButton"}`}
      onClick={() => {
        setButtonSelected(!buttonSelected);
        filterOrigin({origin}) 
      }} 
    >{origin}
  </button>
  )
}