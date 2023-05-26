import {createContext, useContext} from 'react';
import axios from 'axios';

const FlightsDataServiceContext = createContext( null );

// Raven will set this window variable based on environment config
// If not embedded in Raven, the other endpoint will be used.
const rootURL = "http://localhost:3030/";


export const getFlights = async () => {
    const response = await axios.get(`${ rootURL }flights` );
    return response.data;
}

export const FlightsDataServiceProvider = ( props ) => {
  const value = {
    getFlights: props.getFlights || getFlights
  }

  return (
    <FlightsDataServiceContext.Provider value={value}>
      {props.children}
    </FlightsDataServiceContext.Provider>
  )
}
