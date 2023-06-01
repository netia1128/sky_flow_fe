import { useContext } from 'react';
import { OriginContext } from '../context/OriginContext'
import { FilterCheckBox } from './FilterCheckBox';

export const SideNavBar = ({filterOrigin}) => {
  const origins = useContext(OriginContext);
  
  return (
    <aside className="side-nav-bar">
      <h2>Filter By Origin</h2>
      <div className="filter-checkbox-div">
        {origins.map((origin) => {
            return <FilterCheckBox filterOrigin={filterOrigin} origin={origin} key={origin}/>
        })}
      </div>
    </aside>
  )
}