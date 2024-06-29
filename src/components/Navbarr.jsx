import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      position:'fixed',
      width:'100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: '#fff',
    },
    navBrand: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navLink: {
      marginLeft: '15px',
      textDecoration: 'none',
      color: '#fff',
      fontSize: '18px',
    },
    activeNavLink: {
      color: '#4CAF50',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navBrand}>React Project</div>
      <ul style={styles.navLinks}>
        <li>
          <NavLink
            to="/Home"
            exact
            style={styles.navLink}
            activeStyle={styles.activeNavLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Login"
            style={styles.navLink}
            activeStyle={styles.activeNavLink}
          >
            Login
          </NavLink>
        </li>
        
      </ul>
      <ul style={{listStyle:'none',display:'flex',margin:'0',padding:'0'}}>
      <li>
          <NavLink
            to="/Profile"
            style={styles.navLink}
            activeStyle={styles.activeNavLink}
          >
            <img style={{width:'20px',borderRadius:'100%'}} src="src/components/images/shaheen.jpg" alt="" />
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
