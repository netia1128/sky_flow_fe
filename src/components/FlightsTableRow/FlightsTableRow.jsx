export const FlightsTableRow = ({flight}) => {
  return (
    <section className="flight-preview" key={flight.id}>
    <h4>Flight {flight.id} </h4>
    <p>
      Origin: {flight.origin} Destination:{flight.destination}
    </p> 
  </section>
  )
}