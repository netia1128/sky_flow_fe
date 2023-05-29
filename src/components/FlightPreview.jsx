export const FlightPreview = ({flight}) => {
  return (
    <li className="flight-preview" key={flight.id}>
    <h3>Flight {flight.id} </h3>
    <p>
      Origin: {flight.origin} Destination:{flight.destination}
    </p> 
  </li>
  )
}