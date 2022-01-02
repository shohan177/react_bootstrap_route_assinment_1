import './App.css';
import Hader from './components/Header/Hader.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer.js';
import Home from './components/pages/home/Home.js';
import About from './components/pages/about/About.js';


function App() {
  return (
    <>
      <Hader></Hader>
      <Home></Home>
      <About></About>
      <Footer></Footer>
    </>
  );
}

export default App;
