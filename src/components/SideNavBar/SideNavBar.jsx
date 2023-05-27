
import { FilterButton } from '../FilterButton/FilterButton';

export const SideNavBar = ({filterOrigin, origins}) => {
  
  return (
    <aside className="side-nav-bar">
      <h3>Filter Origin</h3>
      <div className="filter-button-div">
        {origins.map((origin) => {
            return <FilterButton filterOrigin={filterOrigin} origin={origin} key={origin}/>
        })}
      </div>
    </aside>
  )
}