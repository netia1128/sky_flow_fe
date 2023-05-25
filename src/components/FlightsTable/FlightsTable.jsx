import { useState } from 'react';
// import { getFlights } from '../../services/flightsDataService';
// import { FlightsTableRow } from '../FlightsTableRow';

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
          <section className="flightPreview" key={flight.id}>
            <h4>Flight {flight.id} </h4>
            <p>
              Origin: {flight.origin} Destination:{flight.destination}
            </p> 
          </section>
        ))}
      </section>
    </section>
  )
}