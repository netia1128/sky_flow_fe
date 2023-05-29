import { useState } from 'react';
import React from 'react';
import { SideNavBar } from '../components/SideNavBar';
import { FlightsTable } from '../components/FlightsTable';
import { useAxiosGet } from '../hooks/useAxiosGet';
import { IngestFlightsButton } from '../components/IngestFlightsButton';


export const Home = () => {

  const [originFilter, setOriginFilter] = useState([]);

  const { data: flights, isLoading, isError } = useAxiosGet(`/flights`);

  const origins = [...new Set(flights?.map((flight) => flight.origin))];

  const filterOrigin = ({origin}) => {
    if(originFilter.includes(origin)) {
        setOriginFilter(originFilter.filter((existingOrigin) => existingOrigin !== origin))
      } else {
      setOriginFilter([...originFilter, origin]);
    }
  }

  let filteredFlights = flights;

  if(originFilter.length) {
    filteredFlights = flights.filter((flight) => originFilter.includes(flight.origin));
  }
  
  return (
    <>
      <main className='home-page-content'>
        <div className="ingest-flight-button-container">
          <IngestFlightsButton/>
        </div>
        <div className="flight-explorer-container">
          {origins && <SideNavBar filterOrigin={filterOrigin} origins={origins}/>}
          {isLoading && <div className="flights-list">Flights Coming Soon!</div> }
          {isError && <div className="flights-list">Sorry, there was an error loading flights</div> }
          {flights && <FlightsTable filteredFlights={filteredFlights}/>}
        </div>
      </main>
    </>
  );
}