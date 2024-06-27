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
          <h2>Sporting Goods Categorie</h2>
          <div className="products">
            <div className="product-card">
              <img src="src/pages/sports-img/basketball.avif" alt="" />
              <h3>Basketballs</h3>
              <NavLink>More</NavLink>
            </div>
            <div className="product-card">
              <img src="src/pages/sports-img/tennis.jpg" alt="" />
              <h3>Tennis Rackets</h3>
              <NavLink>More</NavLink>
            </div>
            <div className="product-card">
              <img src="src/pages/sports-img/cycle.jpeg" alt="" />
              <h3>Bicycles</h3>
              <NavLink>More</NavLink>
            </div>
            <div className="product-card">
              <img src="src/pages/sports-img/shoes.webp" alt="" />
              <h3>sports Shoes</h3>
              <NavLink>More</NavLink>
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
