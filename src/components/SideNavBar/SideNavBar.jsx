
import { filter-button } from '../filter-button/filter-button';

export const SideNavBar = ({filterOrigin, origins}) => {
  
  return (
    <aside className="sideNavBar">
      <h3>Filter Origin</h3>
      <div className="filter-button-div">
        {origins.map((origin) => {
            return <filter-button filterOrigin={filterOrigin} origin={origin}key={origin}/>
        })}
      </div>
    </aside>
  )
}