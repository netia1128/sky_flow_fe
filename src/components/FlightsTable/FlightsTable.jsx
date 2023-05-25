import { useState } from 'react';
// import { getFlights } from '../../services/flightsDataService';
import { FlightsTableRow } from '../FlightsTableRow/FlightsTableRow';

export const FlightsTable = () => {

  const [flights, setFlights] = useState([
    { id: 1, origin: 'DEN', destination: 'BOS'},
    { id: 2, origin: 'DEN', destination: 'FLL'},
    { id: 3, origin: 'DEN', destination: 'PVD'},
  ]);

  return (
    <section className="flightsTable">
      <h3>Flights</h3>
      <section>
        {flights.map((flight) => (
          <FlightsTableRow flight={flight} />
        ))}
      </section>
    </section>
  )
}