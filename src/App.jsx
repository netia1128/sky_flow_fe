import React from 'react';
import logo from './assets/SkyFlowLogo.png';
import './App.css';
import { TopNavBar } from './components/TopNavBar/TopNavBar.jsx';

export const App = () => {
  return (
    <React.StrictMode>
    
      <main className="App">
        <img src={logo} className="AppLogo" alt="logo" />
        <TopNavBar>
          
        </TopNavBar>
      </main>
    </React.StrictMode>
  );
}