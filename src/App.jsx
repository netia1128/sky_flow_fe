import { useState } from 'react';
import React from 'react';
import './index.css';
import { TopNavBar } from './components/TopNavBar/TopNavBar.jsx';
import { SideNavBar } from './components/SideNavBar/SideNavBar';
import { FlightsTable } from './components/FlightsTable/FlightsTable';

export const App = () => {
  const [flights, setFlights] = useState([
    { id: 1, origin: 'DEN', destination: 'BOS'},
    { id: 2, origin: 'DEN', destination: 'FLL'},
    { id: 3, origin: 'DEN', destination: 'PVD'},
    { id: 4, origin: 'ORD', destination: 'PVD'},
    { id: 5, origin: 'PBI', destination: 'BOS'},
  ]);

  const origins = [...new Set(flights.map((flight) => flight.origin))];

  const [originFilter, setOriginFilter] = useState([]);
  
  const filterOrigin = ({origin}) => {
    console.log('origin is', origin)
    const newOriginFilterArray = [...originFilter, origin];
    console.log('new arr is', newOriginFilterArray)
    setOriginFilter(newOriginFilterArray);
  }

  return (
    <React.StrictMode>
        <TopNavBar filterOrigin={filterOrigin} />
        <body className='homePageContent'>
          <SideNavBar filterOrigin={filterOrigin} origins={origins}/>
          <FlightsTable originFilter={originFilter} flights={flights}/>
        </body>
    </React.StrictMode>
  );
}