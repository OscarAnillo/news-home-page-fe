import { useState, useEffect } from 'react';

import NavComponent from './components/nav-component';
import HeroComponent from './components/hero-component';
import PicturesComponent from './components/pictures-components';

import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if(showMenu){
      document.body.style.backgroundColor = "rgba(0,0,0, 0.5)";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
  }, [showMenu])

  return (
    <div className="App">
      <div className="container">
        <NavComponent showMenu={showMenu} setShowMenu={setShowMenu} />
        <HeroComponent />
        <PicturesComponent />
      </div>
    </div>
  );
}

export default App;
