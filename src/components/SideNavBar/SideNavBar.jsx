
export const SideNavBar = () => {
  let buttonColor = "lightBlue"
  const clickTestButton = () => {
    console.log(buttonColor);
    buttonColor === "lightBlue" ? buttonColor = "pink" : buttonColor = "lightBlue";
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