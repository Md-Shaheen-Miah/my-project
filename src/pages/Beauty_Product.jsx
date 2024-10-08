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
          <h2>Beauty Product Categorie</h2>
          <div className="products">
            <div className="product-card">
              <img src="src/pages/Beauty-img/skincare.avif" alt="" />
              <h3>Skincare</h3>
              <NavLink  style={{textDecoration:'none',color:'black'}}>More</NavLink>
            </div>
            <div className="product-card">
              <img src="src/pages/Beauty-img/makeup.jpg" alt="" />
              <h3>Makeup</h3>
              <NavLink  style={{textDecoration:'none',color:'black'}}>More</NavLink>
            </div>
            <div className="product-card">
              <img src="src/pages/Beauty-img/haircare.jpg" alt="" />
              <h3>Haircare</h3>
              <NavLink  style={{textDecoration:'none',color:'black'}}>More</NavLink>
            </div>
            <div className="product-card">
              <img src="src/pages/Beauty-img/nailcare.webp" alt="" />
              <h3>Nailcare</h3>
              <NavLink style={{textDecoration:'none',color:'black'}} >More</NavLink>
            </div>
          </div>
        </section>
        
      </main>
      <footer>
        <p>&copy; 2024 Super Shop. All rights reserved.</p>
      </footer>
    </div>
    </div>
  )
}

export default Dashboard
