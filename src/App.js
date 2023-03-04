import React, { useEffect, useRef } from 'react';
import './App.scss';
import Header from './components/header';
import loader from './utils/loader';
import Home from './views/home';


function App() {
  const appRef = useRef(false)
  
  useEffect(() => {
    if (appRef.current) return;
    appRef.current = true;
    loader();
  },[])

  return (
    <div className="App">
      <Header />
      <Home/>
    </div>
  );
}

export default App;
