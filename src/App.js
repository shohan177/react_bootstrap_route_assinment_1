import './App.css';
import Hader from './components/Header/Hader.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer.js';
import Home from './components/pages/home/Home.js';
import About from './components/pages/about/About.js';
import Contact from './components/pages/contact/Contact';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
      
        <Hader />
        <Routes>
          <Route path='/' element={  <Home/> }/>
          <Route path='/about' element={  <About/> }/>
          <Route path='/contact' element={  <Contact/> }/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
