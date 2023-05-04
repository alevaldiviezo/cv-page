import React, { useState } from 'react';
import 'tachyons';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Content from './components/Content';
import Home from './components/Home';
import {parts} from './db/parts';
import Header from './components/Header';

import Experience from './pages/experience';
import Education from './pages/education';
import Contact from './pages/conatct';

function App() {
  const [route, setRoute] = useState('home')

  const onRouteChange = (route) => {
    setRoute(route);
  }
  return (
    <div>
      <Nav onRouteChange={onRouteChange}/>
      <Header/>
      <div className='ma5'>
        
        {
          route==='home'? <Content parts={parts} onRouteChange={onRouteChange}/> : ( route==='experience'? <Experience/> : (route==='education'? <Education/> : (route==='contact'? <Contact/> : <p>Not Found</p>)))
        }
      </div>
      <Footer/>
      {/* <Nav/>
      <Content/>
      <Footer/> */}
    </div>
    
  );
}

export default App;
