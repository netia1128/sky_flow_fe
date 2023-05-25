
import { useState } from 'react';

export const SideNavBar = () => {
  const [buttonColor, setButtonColor] = useState('lightBlue');
  const clickTestButton = () => {
    console.log(buttonColor);
    buttonColor === "lightBlue" ? setButtonColor("pink") : setButtonColor("lightBlue");
  }
  return (
    <aside className="sideNavBar">
      <h3>Filters</h3>
      <button onClick={clickTestButton} style={{
        backgroundColor: buttonColor,
        borderRadius: '8px',
        marginBottom: '20px'
      }}>Test Button</button>
    </aside>
  )
}