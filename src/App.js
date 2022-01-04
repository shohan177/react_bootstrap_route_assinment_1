import {React, useState} from 'react';
import './App.css';
import Hader from './components/Header/Hader.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer.js';
import Home from './components/pages/home/Home.js';
import About from './components/pages/about/About.js';
import Contact from './components/pages/contact/Contact';
import {  Route, Routes  } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Team from './components/pages/team/Team.js';


function App() {
  const [progress, setProgress] = useState(100)
  
  return (
    <>
      
        <LoadingBar
          color='red'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height={5}
         
        />
        <Hader />
        <Routes>
          <Route path='/' element={  <Home/> }/>
          <Route path='/about' element={  <About/> }/>
          <Route path='/contact' element={  <Contact/> }/>
          <Route path='/team' element={  <Team/> }/>
        </Routes>
        <Footer/>
      
    </>
  );
}

export default App;
