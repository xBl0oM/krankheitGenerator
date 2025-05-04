// src/App.js
import React, { useState } from 'react';
import data from './data.json';
import './index.css';

export default function App() {
  const [item, setItem] = useState(getRandom());

  function getRandom() {
    const idx = Math.floor(Math.random() * data.length);
    return data[idx];
  }

  function handleClick() {
    setItem(getRandom());
  }

  return (
    <div className="card">
      <h1>Krankheit: {item.krankheit}</h1>
      <h2>Symptome:</h2>
      <ul>
        {item.symptome.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Neue Krankheit</button>
    </div>
  );
}
