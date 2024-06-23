import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbarr  from './components/Navbarr';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'
import Supplier_List from './pages/Supplier_List';
import Product_List from './pages/Product_List'

import { BrowserRouter,Routes,Route } from 'react-router-dom';




const App = () => {
  return (
    <BrowserRouter>
    <div><Navbarr/></div>
    <div style={{width:'100%'}}>
    <div style={{width:'20%'}}><Sidebar/></div>
      <div style={{width:'80%', float:'right'}}>
        <Routes>
        <Route path="/Supplier_List" element={<Supplier_List/>} />
        <Route path="/Product_List" element={<Product_List/>} />

        </Routes>
        <Footer/>
     
      </div>
      </div>
    </BrowserRouter>
  );
};

export default App;