import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card'
import Sidebar from './components/Sidebar';

import './components/Sidebar.css'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar />
    <div className='card-container'>
    <Card />
    </div>
    
  </React.StrictMode>
);

