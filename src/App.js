import { useState, useEffect } from 'react';

import NavComponent from './components/nav-component';

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
      </div>
    </div>
  );
}

export default App;
