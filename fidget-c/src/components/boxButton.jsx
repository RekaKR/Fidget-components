import React, { useState } from 'react';
import '../style/app.css';

function BoxButton() {
  const [color, setButtonColor] = useState('#2fada1');
  const [colorTwo, setButtonColorTwo] = useState('#faa8a1');
  const [colorThree, setButtonColorThree] = useState('#2ffd1d');
  const [colorFour, setButtonColorFour] = useState('#dddd11');
  const [colorFive, setButtonColorFive] = useState('#1aedad');

  return (
    <div className="box-button">
      <button style={{ color }} onClick={() => { setButtonColor('#' + Math.random().toString(16).substr(-6)) }}>első</button>
      <button style={{ color: colorTwo }} onClick={() => { setButtonColorTwo('#' + Math.random().toString(16).substr(-6)) }}>második</button>
      <button style={{ color: colorThree }} onClick={() => { setButtonColorThree('#' + Math.random().toString(16).substr(-6)) }}>harmadik</button>
      <button style={{ color: colorFour }} onClick={() => { setButtonColorFour('#' + Math.random().toString(16).substr(-6)) }}>negyedik</button>
      <button style={{ color: colorFive }} onClick={() => { setButtonColorFive('#' + Math.random().toString(16).substr(-6)) }}>ötödik</button>
    </div>
  );
}

export default BoxButton;