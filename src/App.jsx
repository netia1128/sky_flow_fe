import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import './index.scss';
// import { getFlights } from './services/flightsDataService'
import { TopNavBar } from './components/TopNavBar/TopNavBar';
import { SideNavBar } from './components/SideNavBar/SideNavBar';
import { FlightsTable } from './components/FlightsTable/FlightsTable';

export const App = () => {
  const [flights, setFlights] = useState(null);
  const [origins, setOrigins] = useState([]);
  const [originFilter, setOriginFilter] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getFlights = async () => {
      try {
        const {data} = await axios.get(`http://localhost:3030/flights`);
        setFlights(data);
        setFilteredFlights(data);
        setOrigins([...new Set(data.map((dataPoint) => dataPoint.origin))]);
      } catch (err) {
        setIsError(true);
      }
    }

    // Adding a timeout just to show off the loading effect 
    setTimeout(() => {
      getFlights()
      setIsLoading(false)
      }, 1000)
    }, []
  )

  const filterOrigin = ({origin}) => {
    if(originFilter.includes(origin)) {
        setOriginFilter(originFilter.filter((existingOrigin) => existingOrigin !== origin))
      } else {
      setOriginFilter([...originFilter, origin]);
    }
  }

  useEffect(() => {
      if(!originFilter.length) {
        setFilteredFlights(flights);
      } else {
        setFilteredFlights(flights.filter((flight) => originFilter.includes(flight.origin)));
      }
  }, [originFilter])
  
  return (
    <>
      <TopNavBar filterOrigin={filterOrigin} />
      <main className='home-page-content'>
        <SideNavBar filterOrigin={filterOrigin} origins={origins}/>
        {isLoading && <div className="flights-table">Flights Coming Soon!</div> }
        {isError && <div className="flights-table">Sorry, there was an error loading flights</div> }
        {flights && <FlightsTable originFilter={originFilter} filteredFlights={filteredFlights}/>}
      </main>
    </>
  );
}