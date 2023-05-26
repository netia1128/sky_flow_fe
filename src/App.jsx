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
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Adding a timeout just to show off the loading effect 
    setTimeout(() => {
      getFlights()
        .then(data => {
        setFlights(data);
        setOrigins([...new Set(data.map((dataPoint) => dataPoint.origin))]);
      })
      .catch(err => {
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
      }, 1000)
    }, []
  )

  const filterOrigin = ({origin}) => {
    if(originFilter.includes(origin)) {
      setOriginFilter([originFilter].filter((existingOrigin) => existingOrigin != origin))
    } else {
      setOriginFilter([originFilter, origin]);
    }
  }

  return (
    <React.StrictMode>
        <TopNavBar filterOrigin={filterOrigin} />
        <body className='homePageContent'>
          <SideNavBar filterOrigin={filterOrigin} origins={origins}/>
          {isLoading && <div className="flightsTable">Flights Coming Soon!</div> }
          {isError && <div className="flightsTable">Sorry, there was an error loading flights</div> }
          {flights && <FlightsTable originFilter={originFilter} flights={flights}/>}
        </body>
    </React.StrictMode>
  );
}