import React, { useState } from 'react';
import '../style/app.css';

function BoxButton() {
  const [color, setButtonColor] = useState('#2fadad');

  return (
    <div className="box-button">
      <button style={{ color }} onClick={() => { setButtonColor('#' + Math.random().toString(16).substr(-6)) }}>első</button>
      <button style={{ color }} onClick={() => { setButtonColor('#' + Math.random().toString(16).substr(-6)) }}>második</button>
      <button style={{ color }} onClick={() => { setButtonColor('#' + Math.random().toString(16).substr(-6)) }}>harmadik</button>
      <button style={{ color }} onClick={() => { setButtonColor('#' + Math.random().toString(16).substr(-6)) }}>negyedik</button>
      <button style={{ color }} onClick={() => { setButtonColor('#' + Math.random().toString(16).substr(-6)) }}>ötödik</button>
    </div>
  );
}

export default BoxButton;