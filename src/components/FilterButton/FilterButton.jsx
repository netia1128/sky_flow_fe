import { useState } from "react";

export const FilterButton = ({filterOrigin, origin}) => {
  const [buttonColor, setButtonColor] = useState('white');
  const [buttonSelected, setButtonSelected] = useState(false);

  const markButtonSelected = () => {
    buttonSelected ? setButtonColor("white") : setButtonColor("lightBlue");
  }

  return (
    <button key={origin} className="filterButton"
      onClick={() => {
        const isButtonSelected = setButtonSelected(!buttonSelected);
        filterOrigin({origin, isButtonSelected}) 
      markButtonSelected();
      }} 
      style={{
        backgroundColor: buttonColor,
        borderRadius: '8px',
        marginBottom: '20px'
      }}>{origin}
  </button>
  )
}