
import { FilterButton } from '../FilterButton/FilterButton';

export const SideNavBar = ({filterOrigin, origins}) => {
  
  return (
    <aside className="sideNavBar">
      <h3>Filter Origin</h3>
      <div className="filterButtonDiv">
        {origins.map((origin) => {
          console.log(origin)
            return <FilterButton filterOrigin={filterOrigin} origin={origin}key={origin}/>
        })}
      </div>
    </aside>
  )
}