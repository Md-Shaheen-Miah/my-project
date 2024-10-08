import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div style={{marginTop:'50px',minHeight: '100vh'}}>
    <div className="homepage">
      
      <main>
        <section className="hero">
          <h2>Welcome to Super Shop</h2>
          <p>Your one-stop shop for all your needs!</p>
          
        </section>
        
        <section className="featured-products">
          <h2>Electronics Categorie</h2>
          <div className="products">
            <div className="product-card">
              <img src="src/pages/Electronics/phone1.avif" alt="" />
              <h3>martphones</h3>
              <NavLink  style={{textDecoration:'none',color:'black'}} to="/Phones">More</NavLink>
            </div>
            <div className="product-card">
              <img src="src/pages/Electronics/laptop.jpg" alt="" />
              <h3>Laptops</h3>
              <NavLink  style={{textDecoration:'none',color:'black'}}>More</NavLink>
            </div>
            <div className="product-card">
              <img src="src/pages/Electronics/television.jpg" alt="" />
              <h3>Televisions</h3>
              <NavLink  style={{textDecoration:'none',color:'black'}}>More</NavLink>
            </div>
            <div className="product-card">
              <img src="src/pages/Electronics/headphone.webp" alt="" />
              <h3>Headphones</h3>
              <NavLink  style={{textDecoration:'none',color:'black'}}>More</NavLink>
            </div>
          </div>
        </section>
        
      </main>
      <footer>
        <p>&copy; 2024 ShopEasy. All rights reserved.</p>
      </footer>
    </div>
    </div>
  )
}

export default Dashboard
