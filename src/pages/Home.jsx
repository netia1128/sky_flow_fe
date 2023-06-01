import { useState } from 'react';
import { SideNavBar } from '../components/SideNavBar';
import { FlightsTable } from '../components/FlightsTable';
import { useAxiosGet } from '../hooks/useAxiosGet';
import { IngestFlightsButton } from '../components/IngestFlightsButton';
import { OriginContext } from '../context/OriginContext';

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
        <IngestFlightsButton/>
        <div className="flight-explorer-container">
          {origins && 
            <OriginContext.Provider value={origins}>
              <SideNavBar filterOrigin={filterOrigin} origins={origins}/>
            </OriginContext.Provider>
          }
          {isLoading && <div className="flights-table-section">Flights Coming Soon!</div> }
          {isError && <div className="flights-table-section">Sorry, there was an error loading flights</div> }
          {flights && <FlightsTable filteredFlights={filteredFlights}/>}
        </div>
      </main>
    </>
  );
}