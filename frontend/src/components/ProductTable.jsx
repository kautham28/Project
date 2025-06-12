import React, { useState } from 'react';

const ProductTable = ({ products, onEdit }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [editRow, setEditRow] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = (product) => {
    setEditRow(product);
    setEditedProduct({ ...product });
    setShowModal(true);
  };

  const handleSave = () => {
    onEdit({ ...editRow, ...editedProduct });
    setEditRow(null);
    setShowModal(false);
  };

  const handleCancel = () => {
    setEditRow(null);
    setEditedProduct({});
    setShowModal(false);
  };

  const handleChange = (e, field) => {
    setEditedProduct({ ...editedProduct, [field]: e.target.value });
  };

  return (
    <div style={{ width: '100vw', height: '100vh', padding: 0, margin: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
      {/* Modal for editing */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '10px',
            minWidth: '350px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}>
            <h3 style={{marginTop:0}}>Edit Product</h3>
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
              <label>
                Name:
                <input value={editedProduct.name || ''} onChange={e => handleChange(e, 'name')} style={{marginLeft:8}} />
              </label>
              <label>
                Code:
                <input value={editedProduct.code || ''} onChange={e => handleChange(e, 'code')} style={{marginLeft:8}} />
              </label>
              <label>
                Barcode:
                <input value={editedProduct.barcode || ''} onChange={e => handleChange(e, 'barcode')} style={{marginLeft:8}} />
              </label>
              <label>
                Category:
                <input value={editedProduct.category || ''} onChange={e => handleChange(e, 'category')} style={{marginLeft:8}} />
              </label>
              <label>
                Tax:
                <input value={editedProduct.tax || ''} onChange={e => handleChange(e, 'tax')} style={{marginLeft:8}} />
              </label>
              <label>
                Price:
                <input value={editedProduct.price || ''} onChange={e => handleChange(e, 'price')} style={{marginLeft:8}} />
              </label>
              <label>
                Store:
                <input value={editedProduct.store || ''} onChange={e => handleChange(e, 'store')} style={{marginLeft:8}} />
              </label>
              <label>
                Warehouse:
                <input value={editedProduct.warehouse || ''} onChange={e => handleChange(e, 'warehouse')} style={{marginLeft:8}} />
              </label>
            </div>
            <div style={{marginTop:'20px',textAlign:'right'}}>
              <button onClick={handleSave} style={{ background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', padding: '6px 16px', marginRight: '8px' }}>Save</button>
              <button onClick={handleCancel} style={{ background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', padding: '6px 16px' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {/* Table */}
      <table style={{
        width: '90vw',
        maxWidth: '1200px',
        borderCollapse: 'separate',
        borderSpacing: '0',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '30px auto 0 auto',
      }}>
        <thead>
          <tr style={{
            backgroundColor: '#f2f2f2',
            borderBottom: '2px solid #ddd',
          }}>
            <th style={thStyle}>Products</th>
            <th style={thStyle}>Product Code</th>
            <th style={thStyle}>Barcode</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Tax</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Store</th>
            <th style={thStyle}>Warehouse</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            const isNotAvailableStore = product.store === 'Not Available';
            const isNotAvailableWarehouse = product.warehouse === 'Not Available';
            const isInStockStore = !isNotAvailableStore && product.store.includes('In Stock');
            const isInStockWarehouse = !isNotAvailableWarehouse && product.warehouse.includes('In Stock');
            const isSelected = selectedRow === index;
            return (
              <tr
                key={index}
                onClick={() => setSelectedRow(index)}
                style={{
                  border: '1px solid #ddd',
                  backgroundColor: isSelected ? '#e6ffe6' : '#fff',
                  transition: 'background-color 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                <td style={tdStyle}>{product.name}</td>
                <td style={tdStyle}>{product.code}</td>
                <td style={tdStyle}>{product.barcode}</td>
                <td style={tdStyle}>{product.category}</td>
                <td style={tdStyle}>{product.tax}</td>
                <td style={tdStyle}>{`$${product.price}`}</td>
                <td style={{ ...tdStyle, color: isNotAvailableStore ? '#dc3545' : (isInStockStore ? '#28a745' : product.storeColor), ...(isNotAvailableStore || isInStockStore) && { borderRadius: '8px', backgroundColor: isNotAvailableStore ? '#fff3f3' : '#e6ffe6', display: 'inline-block', padding: '2px 8px', transition: 'all 0.3s ease' } }}>{product.store}</td>
                <td style={{ ...tdStyle, color: isNotAvailableWarehouse ? '#dc3545' : (isInStockWarehouse ? '#28a745' : product.warehouseColor), ...(isNotAvailableWarehouse || isInStockWarehouse) && { borderRadius: '8px', backgroundColor: isNotAvailableWarehouse ? '#fff3f3' : '#e6ffe6', display: 'inline-block', padding: '2px 8px', transition: 'all 0.3s ease' } }}>{product.warehouse}</td>
                <td style={tdStyle}>
                  <button
                    onClick={e => { e.stopPropagation(); handleEditClick(product); }}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#28a745',
                      fontSize: '18px',
                    }}
                  >
                    ✏️
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Table cell and header styles
const thStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
  color: '#333',
  fontWeight: 'bold',
  background: 'linear-gradient(90deg, #f2f2f2, #e0e0e0)'
};
const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  color: '#333',
  maxWidth: '120px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

export default ProductTable;