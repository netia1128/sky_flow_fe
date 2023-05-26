import { useState } from "react";

export const FilterButton = ({filterOrigin, origin}) => {
  const [buttonColor, setButtonColor] = useState('white');
  const [buttonSelected, setButtonSelected] = useState(false);


  const markButtonSelected = () => {
    buttonSelected ? setButtonColor("white") : setButtonColor("lightBlue");
  }
  return (
    <button key={origin} className="filterButton"
    key={origin}
    onClick={() => {
    filterOrigin({origin}); 
    setButtonSelected(!buttonSelected);
    markButtonSelected();
  }} 
  style={{
    backgroundColor: buttonColor,
    borderRadius: '8px',
    marginBottom: '20px'
  }}>{origin}</button>
  )
}