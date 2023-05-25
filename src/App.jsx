import React from 'react';
import './index.css';
import { TopNavBar } from './components/TopNavBar/TopNavBar.jsx';
import { SideNavBar } from './components/SideNavBar/SideNavBar';
import { FlightsTable } from './components/FlightsTable/FlightsTable';

export const App = () => {
  return (
    <React.StrictMode>
        <TopNavBar />
        <body className='homePageContent'>
          <SideNavBar />
          <FlightsTable />
        </body>
    </React.StrictMode>
  );
}