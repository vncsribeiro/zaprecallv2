import logo from './assets/images/logo.png'
import React from 'react';

export default function App() {
  

  return (
    <div className="home">
        <img src={logo} alt="logo" />
        <h1>ZapRecall</h1>
        <button>Iniciar Recall!</button>
      
    </div>
  )
}


