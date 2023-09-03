import React from "react";
import "./index.css";

import { Navbar } from "./components/navbar/Navbar";
import {Home }from './routes/Home'
import {Footer} from './components/footer/Footer'
import ExecutiveCommittee from './Pages/ExecutiveCommittee'
import Events from './Pages/Events'
import Membership from './Pages/Membership'
import Chencon2021 from './Pages/Chencon2021'
import Chencon2022 from './Pages/Chencon2022'
import ChenlinNo1 from './Pages/ChenlinNo1'
import ChenlinNo2 from './Pages/ChenlinNo2'
import ChenlinNo3 from './Pages/ChenlinNo3'
import Contact from './Pages/Contact'
import {Upcoming }from './Pages/Upcoming'
import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
  
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/excutive-committe' element={<ExecutiveCommittee/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/membership' element={<Membership/>} />
        <Route path='/chencon2021' element={<Chencon2021/>} />
        <Route path='/chencon2022' element={<Chencon2022/>} />
        <Route path='/chenlink1' element={<ChenlinNo1/>} />
        <Route path='/chenlink2' element={<ChenlinNo2/>} />
        <Route path='/chenlink3' element={<ChenlinNo3/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/upcoming' element={<Upcoming/>} />
      </Routes>
      {/* <  Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
