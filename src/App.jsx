import { useState, useEffect } from 'react';
import React from 'react';
import './index.scss';
import { getFlights } from './services/flightsDataService'
import { TopNavBar } from './components/TopNavBar/TopNavBar';
import { SideNavBar } from './components/SideNavBar/SideNavBar';
import { FlightsTable } from './components/FlightsTable/FlightsTable';

export const App = () => {
  const [flights, setFlights] = useState(null);
  const [origins, setOrigins] = useState([]);
  const [originFilter, setOriginFilter] = useState([]);

  useEffect(() => {
    const data = getFlights()
      .then( data => {
      setFlights(data);
      setOrigins([...new Set(data.map((dataPoint) => dataPoint.origin))])
    })
    }, []
  )

  const filterOrigin = ({origin, isButtonSelected}) => {
    console.log(originFilter)
    if(originFilter.includes(origin)) {
      setOriginFilter([...originFilter].filter((existingOrigin) => existingOrigin != origin))
    } else {
      setOriginFilter([...originFilter, origin]);
    }
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