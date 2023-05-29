import { FilterCheckBox } from './FilterCheckBox';

export const SideNavBar = ({filterOrigin, origins}) => {
  
  return (
    <aside className="side-nav-bar">
      <h2>Filter Origin</h2>
      <div className="filter-checkbox-div">
        {origins.map((origin) => {
            return <FilterCheckBox filterOrigin={filterOrigin} origin={origin} key={origin}/>
        })}
      </div>
    </aside>
  )
}