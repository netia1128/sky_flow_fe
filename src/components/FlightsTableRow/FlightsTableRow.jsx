const FlightsTableRow = ({flight}) => {
  return (
    <article>
      <p>{flight.id}</p>
      <p>{flight.origin}</p>
      <p>{flight.destination}</p>
    </article>
  )
}