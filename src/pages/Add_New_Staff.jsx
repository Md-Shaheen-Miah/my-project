import React, { useState } from 'react';


const Add_New_Staff = () => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or update state
    console.log('Customer submitted: ', customer);
  };
  

  const formStyle = {
   
    display: 'flex',
    flexDirection: 'column',
    width: '600px',
    margin: '0 auto',
    padding: '30px',
    border: '2px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const labelStyle = {
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333'
  };

  const inputStyle = {
    width:'100%',
    padding: '15px 15px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#555'
  };

  const buttonStyle = {
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3'
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{marginTop:'50px',backgroundColor:'#e6f2ff',minHeight: '100vh'}}>
        <h1 style={{textAlign:'center',backgroundColor:'#008000',padding:'10px'}}>Add New Staff</h1>
    <form onSubmit={handleSubmit} style={formStyle}>
      <label style={labelStyle}>
        Name:
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          style={inputStyle}
        />
      </label>
      <label style={labelStyle}>
        Email:
        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </label>
      <label style={labelStyle}>
        Phone:
        <input
          type="number"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          style={inputStyle}
        />
      </label>
      <label style={labelStyle}>
        Address:
        <input
          type="text"
          name="address"
          value={customer.address}
          onChange={handleChange}
          style={inputStyle}
        />
      </label>
      <button
        type="submit"
        style={isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Add Customer
      </button>
    </form>
    </div>
  );
};

export default Add_New_Staff;
