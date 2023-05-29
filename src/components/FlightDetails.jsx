import { useEffect } from 'react';
import Drawer from 'react-modern-drawer';

export const FlightDetails = ({toggleDrawer, flightDetails}) => {
  const makeDurationHumanReadable = () => {
    const hours = Math.floor(flightDetails.duration / 60);
    const minutes = flightDetails.duration % 60;
    return hours ? `${hours} hours ${minutes} minutes` : `${minutes} minutes`;
  }

  const humanReadableDuration = makeDurationHumanReadable();

  return (
    <Drawer open={true} direction='right'>
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
            <td>{flightDetails.departureDate}</td>
          </tr>
          <tr>
            <td>Return Date</td>
            <td>{flightDetails.departureDate || 'NA - One Way'}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{flightDetails.priceUsd || 'NA - One Way'}</td>
          </tr>
          <tr>
            <td>Class</td>
            <td>{flightDetails.tripClassName || 'NA - One Way'}</td>
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
    <button onClick={toggleDrawer}>Close</button>
  </Drawer>
  )
}