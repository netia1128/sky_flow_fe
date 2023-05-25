import React from 'react';
import './index.css';
import { TopNavBar } from './components/TopNavBar/TopNavBar.jsx';
import { getFlights } from './services/flightsDataService';

export const App = () => {
  const flights = getFlights()


  return (
    <React.StrictMode>
    
      <main className="app">
        
        <TopNavBar />
        <body>
          {Math.random()}
        </body>
      </main>
    </React.StrictMode>
  );
}