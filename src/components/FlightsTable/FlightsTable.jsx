import { useState } from 'react';
// import { getFlights } from '../../services/flightsDataService';
import { FlightsTableRow } from '../FlightsTableRow/FlightsTableRow';

export const FlightsTable = ({originFilter, flights}) => {
  return (
    <section className="flightsTable">
      <h3>Flights</h3>
      <section>
        {flights?.filter((flight) => (
          originFilter.length ? originFilter.includes(flight.origin) : flight
        ))?.map((flight) => (
          <FlightsTableRow flight={flight} key={flight.id}/>
        ))}
      </section>
    </section>
  )
}