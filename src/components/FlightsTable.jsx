import { useState } from 'react';
import { FlightsTableRow } from './FlightsTableRow';

export const FlightsTable = ({originFilter, filteredFlights}) => {


  return (
    <section className="flights-table">
      <h1>Flights</h1>
      <section>
        {filteredFlights.map((flight) => (
          <FlightsTableRow flight={flight} key={flight.id}/>
        ))}
      </section>
    </section>
  )
}