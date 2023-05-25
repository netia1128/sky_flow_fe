import { useState } from "react";

export const FilterButton = ({filterOrigin, origin}) => {
  const [buttonColor, setButtonColor] = useState('white');
  const markButtonSelected = () => {
    buttonColor === "white" ? setButtonColor("lightBlue") : setButtonColor("white");
  }
  return (
    <button key={origin} className="filterButton"
    key={origin}
    onClick={() => {
    filterOrigin({origin}); 
    markButtonSelected();
  }} 
  style={{
    backgroundColor: buttonColor,
    borderRadius: '8px',
    marginBottom: '20px'
  }}>{origin}</button>
  )
}