import React from 'react';

const Product_List= () => {
  const products = [
    {
      name: 'Square POS',
      description: 'A powerful POS system for retail and restaurants.',
      price: '$60/month'
    },
    {
      name: 'Shopify POS',
      description: 'An integrated POS system for Shopify users.',
      price: '$89/month'
    },
    {
      name: 'Vend POS',
      description: 'A cloud-based POS system for retailers.',
      price: '$99/month'
    },
    {
      name: 'Lightspeed POS',
      description: 'A versatile POS system for various industries.',
      price: '$69/month'
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>POS Software Products</h1>
      <ul style={styles.productList}>
        {products.map((product, index) => (
          <li key={index} style={styles.productItem}>
            <h2 style={styles.productName}>{product.name}</h2>
            <p style={styles.productDescription}>{product.description}</p>
            <p style={styles.productPrice}>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  },
  productList: {
    listStyleType: 'none',
    padding: '0'
  },
  productItem: {
    backgroundColor: '#fff',
    marginBottom: '15px',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)'
  },
  productName: {
    margin: '0 0 10px 0',
    fontSize: '1.5em',
    color: '#333'
  },
  productDescription: {
    margin: '0 0 10px 0',
    color: '#666'
  },
  productPrice: {
    margin: '0',
    fontWeight: 'bold',
    color: '#009688'
  }
};

export default Product_List;
