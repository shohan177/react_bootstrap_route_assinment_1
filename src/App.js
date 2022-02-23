import {React, useState} from 'react';
import './App.css';
import Hader from './components/Header/Hader.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer.js';
import Home from './components/pages/home/Home.js';
import About from './components/pages/about/About.js';
import Contact from './components/pages/contact/Contact';
import {  Route, Routes  } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Team from './components/pages/team/Team.js';
import Shop from './components/pages/shop/Shop';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Index from './components/pages/Dashboard/Index';
import TodoList from './components/pages/Dashboard/TodoList';
import Profile from './components/pages/Dashboard/Profile';
import Password from './components/pages/Dashboard/Password';
// import SignUp from './components/SignUp/SignUp';
import ProductIndex from './components/pages/Dashboard/product/ProductIndex';


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
          <Route path='/shop' element={  <Shop/> }/>
          <Route path='/Dashboard' element={<Dashboard />}>
              <Route path='/Dashboard' element={  <Index/> }/>
              <Route path='/Dashboard/payment' element={  <TodoList/> }/>
              <Route path='/Dashboard/profile' element={  <Profile/> }/>
              <Route path='/Dashboard/password' element={  <Password/> }/>
              <Route path='/Dashboard/product' element={  <ProductIndex/> }/>

          </Route>
        </Routes>
      <Footer />
      {/* <SignUp /> */}
      
    </>
  );
}

export default App;
