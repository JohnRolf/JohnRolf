import React from 'react';
import './App.css';
import { Header } from './Header/Header';

const App: React.FC = () => {
  return (
    <div className="jrss-app-container" style={{ boxSizing: "border-box"}}>
      <Header />
    </div>
  );
}

export default App;
