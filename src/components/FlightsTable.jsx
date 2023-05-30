import { FlightPreview } from './FlightPreview';

export const FlightsTable = ({filteredFlights}) => {
  return (
    <section className="flights-table-section">
      <h2>Flights</h2>
      <table className="flights-table">
        <thead>
          <tr>
            <th><div className="flight-table-header-div">Date</div></th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Price (usd) </th>
            <th>Round Trip</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
        {filteredFlights.map((flight) => (
          <FlightPreview flight={flight} key={flight.id}/>
        ))}
        </tbody>
      </table>
    </section>
  )
}