import { useState } from 'react';
import React from 'react';
import './index.css';
import { TopNavBar } from './components/TopNavBar/TopNavBar.jsx';
import { SideNavBar } from './components/SideNavBar/SideNavBar';
import { FlightsTable } from './components/FlightsTable/FlightsTable';

export const App = () => {

  const [originFilter, setOriginFilter] = useState([]);
  
  const filterOrigin = (origin) => {
    const newOriginFilterArray = [...originFilter, origin];
    setOriginFilter(newOriginFilterArray);
  }

  return (
    <React.StrictMode>
        <TopNavBar filterOrigin={filterOrigin} />
        <body className='homePageContent'>
          <SideNavBar filterOrigin={filterOrigin}/>
          <FlightsTable originFilter={originFilter}/>
        </body>
    </React.StrictMode>
  );
}