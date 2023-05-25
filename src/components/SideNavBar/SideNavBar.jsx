
import { useState } from 'react';

export const SideNavBar = ({filterOrigin}) => {
  const [buttonColor, setButtonColor] = useState('white');
  const markButtonSelected = () => {
    console.log(buttonColor);
    buttonColor === "white" ? setButtonColor("lightBlue") : setButtonColor("white");
  }

  return (
    <aside className="sideNavBar">
      <h3>Filter Origin</h3>
      <button className="filterButton"
        onClick={() => {
        filterOrigin('DEN'); 
        markButtonSelected();
      }} 
      style={{
        backgroundColor: buttonColor,
        borderRadius: '8px',
        marginBottom: '20px'
      }}>DEN</button>

      <button className="filterButton"
        onClick={() => {
        filterOrigin('ORD'); 
        markButtonSelected();
      }} 
      style={{
        backgroundColor: buttonColor,
        borderRadius: '8px',
        marginBottom: '20px'
      }}>ORD</button>

      <button className="filterButton"
        onClick={() => {
        filterOrigin('PBI'); 
        markButtonSelected();
      }} 
      style={{
        backgroundColor: buttonColor,
        borderRadius: '8px',
        marginBottom: '20px'
      }}>DEN</button>
    </aside>
  )
}