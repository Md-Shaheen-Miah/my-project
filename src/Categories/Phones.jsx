import React from 'react';

const products = [
  { id: 1, name: 'Product 1', description: 'Description for product 1', price: '$10', image: 'src/pages/Electronics/television.jpg' },
  { id: 2, name: 'Product 2', description: 'Description for product 2', price: '$20', image: 'src/pages/Electronics/phone1.avif' },
  { id: 3, name: 'Product 3', description: 'Description for product 3', price: '$30', image: 'image3.jpg' },
  { id: 4, name: 'Product 4', description: 'Description for product 4', price: '$40', image: 'image4.jpg' },
  { id: 5, name: 'Product 5', description: 'Description for product 5', price: '$50', image: 'image5.jpg' },
  { id: 6, name: 'Product 6', description: 'Description for product 6', price: '$60', image: 'image6.jpg' },
  { id: 7, name: 'Product 7', description: 'Description for product 7', price: '$70', image: 'image7.jpg' },
  { id: 8, name: 'Product 8', description: 'Description for product 8', price: '$80', image: 'image8.jpg' },
  { id: 9, name: 'Product 5', description: 'Description for product 5', price: '$50', image: 'image5.jpg' },
  { id: 10, name: 'Product 6', description: 'Description for product 6', price: '$60', image: 'image6.jpg' },
  { id: 11, name: 'Product 7', description: 'Description for product 7', price: '$70', image: 'image7.jpg' },
  { id: 12, name: 'Product 12', description: 'Description for product 8', price: '$80', image: 'image8.jpg' },
];

const App = () => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    padding: '20px',
  };

  const productStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '80%',
    height: '200px',
    objectFit: 'cover',
  };

  const nameStyle = {
    fontSize: '1.2em',
    margin: '10px 0',
  };

  const descriptionStyle = {
    fontSize: '0.9em',
    color: '#555',
  };

  const priceStyle = {
    fontSize: '1.1em',
    fontWeight: 'bold',
    color: '#000',
  };

  return (
    <div style={{marginTop:'50px',backgroundColor:'#ffffff',minHeight: '100vh'}}>
      <h1>product</h1>
    <div style={containerStyle}>
      {products.map(product => (
        <div key={product.id} style={productStyle}>
          <img src={product.image} alt={product.name} style={imageStyle} />
          <h2 style={nameStyle}>{product.name}</h2>
          <p style={descriptionStyle}>{product.description}</p>
          <p style={priceStyle}>{product.price}</p>
          <button>Buy Now</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default App;
