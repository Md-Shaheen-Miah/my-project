import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbarr  from './components/Navbarr';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'
import Supplier_List from './pages/Supplier_List';
import Product_List from './pages/Product_List'
import Customer_List from './pages/Customer_List';
import Add_New_Customer from './pages/Add_New_Customer';
import Staff_List from './pages/Staff_List';
import Add_New_Staff from './pages/Add_New_Staff';
import Dashboard from './pages/Dashboard';
import Electronics from './pages/Electronics';
import Clothing from './pages/Clothing';
import Beauty_Product from './pages/Beauty_Product';
import Furniture from './pages/Furniture';
import Sporting_Goods from './pages/Sporting_Goods'
import { BrowserRouter,Routes,Route } from 'react-router-dom';





const App = () => {
  return (
    <BrowserRouter>
    <div ><Navbarr/></div>
    <div style={{width:'100%'}}>
    <div style={{width:'20%'}}><Sidebar/></div>
      <div style={{width:'80%', float:'right'}}>
        <Routes>
        <Route path="/Supplier_List" element={<Supplier_List/>} />
        <Route path="/Product_List" element={<Product_List/>} />
        <Route path="/Customer_List" element={<Customer_List/>} />
        <Route  path="/Add_New_Customer" element={<Add_New_Customer/>} />
        <Route  path="/Staff_List" element={<Staff_List/>} />
        <Route  path="/Add_New_Staff" element={<Add_New_Staff/>} />
        <Route  path="/Dashboard" element={<Dashboard/>} />
        <Route  path="/Electronics" element={< Electronics/>} />
        <Route  path="/Clothing" element={<Clothing/>} />
        <Route  path="/Beauty_Product" element={<Beauty_Product/>} />
        <Route  path="/Furniture" element={<Furniture/>} />
        <Route  path="/Sporting_Goods" element={<Sporting_Goods/>} />
        

        </Routes>
        <Footer/>
     
      </div>
      </div>
    </BrowserRouter>
  );
};

export default App;