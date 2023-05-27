import { useState } from "react";

export const filter-button = ({filterOrigin, origin}) => {
  const [buttonSelected, setButtonSelected] = useState(false);

  return (
    <button className={`filter-button ${buttonSelected ? "selectedButton" : "unselectedButton"}`}
      onClick={() => {
        setButtonSelected(!buttonSelected);
        filterOrigin({origin}) 
      }} 
    >{origin}
  </button>
  )
}