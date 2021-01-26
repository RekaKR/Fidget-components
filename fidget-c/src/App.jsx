import React from 'react';
import './style/app.css';
import BoxButton from './components/BoxButton.jsx'
import BoxCounter from './components/BoxCounter.jsx'

function App() {
  return (
    <div className="app">
      <BoxButton />
      <BoxCounter />
    </div>
  );
}

export default App;