import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './Pages/Admin/AddProduct';
import Allproduct from './Pages/Admin/AllProduct';
import Mobile from './Pages/Users/Mobile';
import Laptop from './Pages/Users/Laptop';
import Camera from './Pages/Users/Camera';
import Tablet from './Pages/Users/Tablet';
import Protected from './Pages/Protected/Protected';
import Addcart from './Pages/Users/Addcart';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Dashboard/Home';
import Navbar from './Pages/Navbar/Navbar';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        
        <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='addproduct' element={<Protected Component={<AddProduct/>}/>}> </Route>
          <Route path='/allproduct' element={<Protected Component={<Allproduct/>}/>}></Route>
          <Route path='/mobile' element={<Mobile/>}></Route>
          <Route path='/laptop' element={<Laptop/>}></Route>
          <Route path='/camera' element={<Camera/>}></Route>
          <Route path='/tablet' element={<Tablet/>}></Route>
          <Route path='/addcart' element={<Addcart/>}></Route>
          {/* <Route path='/mobile' element={<Mobile/>}> </Route>
          <Route path='/laptop' element={<Laptop/>}></Route>
          <Route path='/camera' element={<Camera/>}> </Route>
          <Route path='/tablet' element={<Tablet/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
