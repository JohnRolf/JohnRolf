import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="jrss-app-container" style={{ boxSizing: "border-box"}}>
      <div style={{flex: 1}}>Pane 1</div>
      <div style={{flex: 4}}>Pane 2</div>
    </div>
  );
}

export default App;
