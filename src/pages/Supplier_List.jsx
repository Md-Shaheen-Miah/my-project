import React from 'react'
import './style.css';


const Supplier_List = () => {

  const suppliers = [
    { id: 1, name: 'Supplier A', contact: 'contactA@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Supplier B', contact: 'contactB@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Supplier C', contact: 'contactC@example.com', phone: '456-789-0123' },
    { id: 1, name: 'Supplier A', contact: 'contactA@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Supplier B', contact: 'contactB@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Supplier C', contact: 'contactC@example.com', phone: '456-789-0123' },
    { id: 1, name: 'Supplier A', contact: 'contactA@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Supplier B', contact: 'contactB@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Supplier C', contact: 'contactC@example.com', phone: '456-789-0123' },
  ];
  return (
    <div className="table-container">
      <h2>Supplier List</h2>
      <table className="supplier-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(supplier => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.name}</td>
              <td>{supplier.contact}</td>
              <td>{supplier.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Supplier_List;
