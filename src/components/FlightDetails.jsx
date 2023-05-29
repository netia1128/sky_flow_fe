import { useEffect } from 'react';
import Drawer from 'react-modern-drawer';

export const FlightDetails = ({toggleDrawer, flightDetails}) => {
  const makeDurationHumanReadable = () => {
    const hours = Math.floor(flightDetails.duration / 60);
    const minutes = flightDetails.duration % 60;
    return hours ? `${hours} hours ${minutes} minutes` : `${minutes} minutes`;
  }

  const reformatDate = (rawDate) => {
    const date = new Date(rawDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${month}-${day}-${year}`;
  }

  const humanReadableDuration = makeDurationHumanReadable();
  const departureDate = reformatDate(flightDetails.departureDate);
  const returnDate = flightDetails.returnDate ? reformatDate(flightDetails.returnDate) : 'NA - One Way';

  return (
    <Drawer className="side-drawer" open={true} direction='right' style={{width: "20%"}}>
    <h2>Flight Details</h2>
      <table>
        <tbody>
          <tr>
            <td>Origin</td>
            <td>{flightDetails.origin}</td>
          </tr>
          <tr>
            <td>Destination</td>
            <td>{flightDetails.destination}</td>
          </tr>
          <tr>
            <td>Departure Date</td>
            <td>{departureDate}</td>
          </tr>
          <tr>
            <td>Return Date</td>
            <td>{returnDate}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{`$${flightDetails.priceUsd}`}</td>
          </tr>
          <tr>
            <td>Class</td>
            <td>{flightDetails.tripClassName}</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>{humanReadableDuration}</td>
          </tr>
          <tr>
            <td>Disatnce</td>
            <td>{`${flightDetails.distance} km`}</td>
          </tr>
        </tbody>
      </table>
    <button onClick={toggleDrawer}>Close Details</button>
  </Drawer>
  )
}