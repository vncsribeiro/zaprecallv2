import logo from './assets/images/logo.png'
import { useState } from 'react';
import PlayScreen from './assets/components/PlayScreen';

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible ? (<PlayScreen />) :
        (<div className="home">
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
          <button onClick={() => setVisible(true)}>Iniciar Recall!</button>
        </div>)}

    </>

  )
}


