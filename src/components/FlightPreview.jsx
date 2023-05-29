import { useState } from 'react';
import 'react-modern-drawer/dist/index.css';
import '../index.scss';
import { FlightDetails } from './FlightDetails';

export const FlightPreview = ({flight}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  const reformatDate = () => {
    const date = new Date(flight.departureDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const dayRaw = date.getDate().toString().length === 1 ? `0${date.getDate().toString()}` : date.getDate();
    return `${month}-${dayRaw}-${year}`;
  }

  const departureDate = reformatDate();
  const isRoundTrip = flight.returnDate ? `Yes` : `No`;

  return (
    <tr className="flight-preview" key={flight.id}>
      <td>{departureDate} </td>
      <td>{flight.origin}</td>
      <td>{flight.destination}</td>
      <td>{flight.priceUsd}</td>
      <td>Yes</td>
      <td onClick={toggleDrawer} style={{color: "blue", textDecoration: "underline"}}>See Full Details</td>
      {isOpen && <FlightDetails toggleDrawer={toggleDrawer} flightDetails={flight} />}
    </tr>
  )
}