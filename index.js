// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';  // <-- hier
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);             // <-- statt ReactDOM.render
root.render(<App />);
