import React from 'react';
import {  BrowserRouter,Routes, Route } from 'react-router-dom';

import Destination from './Destination'
import Home from './Home';
import About from './About';
 import Contact from './Contact';
import Naving from './Naving';


const App = () => {
  return (
   <div className="App">
    <BrowserRouter>
          <Naving/>
<Routes>
           <Route path="/" element={<Home />}/>
          {/*<Route index element={<Home />} />*/}
          <Route path="*" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/destination" element={<Destination/>} />
          <Route path="/contact" element={<Contact/>} />
          
          
</Routes>
</BrowserRouter>
</div>
   
  );
};

export default App;
