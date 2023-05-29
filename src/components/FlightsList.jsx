import { useState } from 'react';
import { FlightPreview } from './FlightPreview';

export const FlightsList = ({originFilter, filteredFlights}) => {


  return (
    <section className="flights-list">
      <h1>Flights</h1>
      <ul>
        {filteredFlights.map((flight) => (
          <FlightPreview flight={flight} key={flight.id}/>
        ))}
      </ul>
    </section>
  )
}