import React from 'react';

const Staff_List = () => {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890',Address:'Dhaka' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' ,Address:'Dhaka'},
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '456-789-0123' ,Address:'Dhaka'},
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890',Address:'Dhaka' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' ,Address:'Dhaka'},
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '456-789-0123' ,Address:'Dhaka'},
  ];

  const handleEdit = (id) => {
    // Handle the edit action
    console.log(`Edit customer with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle the delete action
    console.log(`Delete customer with ID: ${id}`);
  };

  return (
    <div style={{marginTop:'50px',backgroundColor:'#ffffff',minHeight: '100vh'}}>
      <h1 style={{textAlign:'center',padding:'10px'}}>Our Staffs</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2', textAlign: 'left' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2', textAlign: 'left' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2', textAlign: 'left' }}>Email</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2', textAlign: 'left' }}>Phone</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2', textAlign: 'left' }}>Address</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2', textAlign: 'left' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id} style={{ backgroundColor: customer.id % 2 === 0 ? '#f9f9f9' : '#fff' }}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{customer.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{customer.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{customer.email}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{customer.phone}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{customer.Address}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button
                  onClick={() => handleEdit(customer.id)}
                  style={{ marginRight: '8px', padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(customer.id)}
                  style={{ padding: '5px 10px', backgroundColor: '#f44336', color: 'white', border: 'none', cursor: 'pointer' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Staff_List;
