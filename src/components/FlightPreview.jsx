import { useState, useEffect } from 'react';
import 'react-modern-drawer/dist/index.css';
import '../index.scss';
import { FlightDetails } from './FlightDetails';

export const FlightPreview = ({flight}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    console.log('world')
      setIsOpen((prevState) => !prevState)
      console.log(isOpen);
  }

  useEffect(() => {
    console.log('hi')
}, [isOpen])

  return (
    <li className="flight-preview" key={flight.id}>
      <h3>Flight {flight.id} </h3>
        <p>
          Origin: {flight.origin} Destination:{flight.destination}
        </p> 
        <button onClick={toggleDrawer}>Show Details</button>
        {isOpen && <FlightDetails toggleDrawer={toggleDrawer} flightDetails={flight} />}
    </li>
  )
}