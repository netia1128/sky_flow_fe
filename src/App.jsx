import React from 'react';
import './index.css';
import { TopNavBar } from './components/TopNavBar/TopNavBar.jsx';
import { SideNavBar } from './components/SideNavBar/SideNavBar';
import { FlightsTable } from './components/FlightsTable/FlightsTable';
import { getFlights } from './services/flightsDataService';

export const App = () => {
  const flights = getFlights()


  return (
    <React.StrictMode>
    
      <main className="app">
        
        <TopNavBar />
        <section className='homePageContent'>
          <SideNavBar />
          <FlightsTable />
        </section>
      </main>
    </React.StrictMode>
  );
}