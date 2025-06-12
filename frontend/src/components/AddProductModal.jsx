import React from 'react';

const AddProductModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: '#fff', padding: '20px', borderRadius: '5px', width: '400px', border: '1px solid #ddd' }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Add New Product</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={{ marginRight: '10px', color: '#333' }}>Category *</label>
          <input type="text" placeholder="Category" style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <label style={{ marginRight: '10px', color: '#333' }}>Product Name *</label>
          <input type="text" placeholder="Product Name" style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <label style={{ marginRight: '10px', color: '#333' }}>Re Order Level (Stock) *</label>
          <input type="text" placeholder="Re Order Level" style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <label style={{ marginRight: '10px', color: '#333' }}>Expire Alert Days *</label>
          <input type="text" placeholder="Expire Alert Days" style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <label style={{ marginRight: '10px', color: '#333' }}>GST</label><input type="checkbox" style={{ marginRight: '10px' }} />
          <label style={{ marginRight: '10px', color: '#333' }}>HST</label><input type="checkbox" style={{ marginRight: '10px' }} />
          <label style={{ marginRight: '10px', color: '#333' }}>VAT</label><input type="checkbox" style={{ marginRight: '10px' }} />
          <label style={{ marginRight: '10px', color: '#333' }}>Tax</label><input type="checkbox" style={{ marginRight: '10px' }} />
          <label style={{ marginRight: '10px', color: '#333' }}>Product Code *</label>
          <input type="text" placeholder="Product Code" style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <label style={{ marginRight: '10px', color: '#333' }}>Image upload</label>
          <input type="file" style={{ padding: '5px' }} />
          <label style={{ marginRight: '10px', color: '#333' }}>Use Scale</label><input type="checkbox" style={{ marginRight: '10px' }} />
          <label style={{ marginRight: '10px', color: '#333' }}>Quantity *</label>
          <input type="text" placeholder="Quantity" style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <label style={{ marginRight: '10px', color: '#333' }}>Unit of Scale *</label>
          <input type="text" placeholder="kg" style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <label style={{ marginRight: '10px', color: '#333' }}>Location</label>
          <input type="text" placeholder="Rack Name" style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <input type="text" placeholder="Rack Column" style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <input type="text" placeholder="Rack Row" style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <button type="button" onClick={onClose} style={{ padding: '5px 10px', backgroundColor: '#fff', color: '#333', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
          <button type="submit" style={{ padding: '5px 10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;