import { useState } from 'react';
// import { getFlights } from '../../services/flightsDataService';
import { FlightsTableRow } from '../FlightsTableRow/FlightsTableRow';

export const FlightsTable = ({originFilter}) => {

  const [flights, setFlights] = useState([
    { id: 1, origin: 'DEN', destination: 'BOS'},
    { id: 2, origin: 'DEN', destination: 'FLL'},
    { id: 3, origin: 'DEN', destination: 'PVD'},
    { id: 4, origin: 'ORD', destination: 'PVD'},
    { id: 5, origin: 'PBI', destination: 'BOS'},
  ]);

  return (
    <section className="flightsTable">
      <h3>Flights</h3>
      <section>
        {flights.filter((flight) => (
          originFilter.length ? originFilter.includes(flight.origin) : flight
        )).map((flight) => (
          <FlightsTableRow flight={flight} key={flight.id}/>
        ))}
      </section>
    </section>
  )
}