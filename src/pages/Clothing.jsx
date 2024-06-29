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
          <h2>Clothing Categorie</h2>
          <div className="products">
            <div className="product-card">
              <img src="src/pages/Clothing-img/shirt.jpg" alt="" />
              <h3>Shirts</h3>
              <NavLink  style={{textDecoration:'none',color:'black'}}>More</NavLink>
            </div>
            <div className="product-card">
              <img src="src/pages/Clothing-img/pant.jfif" alt="" />
              <h3>Pants</h3>
              <NavLink  style={{textDecoration:'none',color:'black'}}>More</NavLink>
            </div>
            <div className="product-card">
              <img src="src/pages/Clothing-img/jacket.jfif" alt="" />
              <h3>Jackets</h3>
              <NavLink  style={{textDecoration:'none',color:'black'}}>More</NavLink>
            </div>
            <div className="product-card">
              <img src="src/pages/Clothing-img/shoe.webp" alt="" />
              <h3>Shoes</h3>
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
