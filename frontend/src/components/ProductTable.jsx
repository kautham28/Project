import React, { useState } from 'react';

const ProductTable = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [editRow, setEditRow] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Sample data - replace with your actual data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Green Sandal',
      code: '-',
      barcode: 'bt0055478',
      category: 'Level 1 Cat',
      tax: 'CST / HST',
      price: '125.25',
      store: '200 In Stock',
      warehouse: '350 In Stock'
    },
    {
      id: 2,
      name: 'Green Sandal',
      code: '-',
      barcode: 'bt0055478',
      category: 'Level 1 Cat',
      tax: 'CST / HST',
      price: '125.25',
      store: '200 In Stock',
      warehouse: '350 In Stock'
    },
    {
      id: 3,
      name: 'Green Sandal',
      code: '-',
      barcode: 'bt0055478',
      category: 'Level 1 Cat',
      tax: 'HST',
      price: '125.25',
      store: '25 In Stock',
      warehouse: '350 In Stock'
    },
    {
      id: 4,
      name: 'Green Sandal',
      code: '-',
      barcode: 'bt0055478',
      category: 'Level 1 Cat',
      tax: 'CST / HST',
      price: '125.25',
      store: '200 In Stock',
      warehouse: '20 In Stock'
    },
    {
      id: 5,
      name: 'Green Sandal',
      code: '1102',
      barcode: '-',
      category: 'Level 1 Cat',
      tax: 'CST',
      price: '125.25',
      store: '200 In Stock',
      warehouse: '500 In Stock'
    },
    {
      id: 6,
      name: 'Green Sandal',
      code: '1102',
      barcode: '-',
      category: 'Level 1 Cat',
      tax: 'CST',
      price: '125.25',
      store: 'Not Available',
      warehouse: '350 In Stock'
    },
    {
      id: 7,
      name: 'Green Sandal',
      code: '-',
      barcode: 'bt0055478',
      category: 'Level 1 Cat',
      tax: 'Not Applied',
      price: '125.25',
      store: '200 In Stock',
      warehouse: '350 In Stock'
    },
    {
      id: 8,
      name: 'Green Sandal',
      code: '-',
      barcode: 'bt0055478',
      category: 'Level 1 Cat',
      tax: 'Not Applied',
      price: '125.25',
      store: 'Not Available',
      warehouse: 'Not Available'
    }
  ]);

  const handleEditClick = (product, index) => {
    setEditRow(index);
    setEditedProduct({ ...product });
    setShowModal(true);
  };

  const handleSave = () => {
    const updatedProducts = [...products];
    updatedProducts[editRow] = { ...editedProduct };
    setProducts(updatedProducts);
    setEditRow(null);
    setShowModal(false);
    setEditedProduct({});
  };

  const handleCancel = () => {
    setEditRow(null);
    setEditedProduct({});
    setShowModal(false);
  };

  const handleChange = (e, field) => {
    setEditedProduct({ ...editedProduct, [field]: e.target.value });
  };

  const getStockStyle = (stock) => {
    if (stock === 'Not Available') {
      return {
        backgroundColor: '#ffebee',
        color: '#d32f2f',
        border: '1px solid #ffcdd2',
        borderRadius: '12px',
        padding: '4px 8px',
        fontSize: '12px',
        fontWeight: '500'
      };
    } else if (stock.includes('In Stock')) {
      const number = parseInt(stock.split(' ')[0]);
      if (number <= 50) {
        return {
          backgroundColor: '#fff3e0',
          color: '#f57c00',
          border: '1px solid #ffcc02',
          borderRadius: '12px',
          padding: '4px 8px',
          fontSize: '12px',
          fontWeight: '500'
        };
      } else {
        return {
          backgroundColor: '#e8f5e8',
          color: '#2e7d32',
          border: '1px solid #a5d6a7',
          borderRadius: '12px',
          padding: '4px 8px',
          fontSize: '12px',
          fontWeight: '500'
        };
      }
    }
    return {};
  };

  const tableHeaderStyle = {
    backgroundColor: '#f8f9fa',
    borderBottom: '2px solid #dee2e6',
    fontWeight: '600',
    color: '#495057',
    padding: '12px 8px',
    textAlign: 'left',
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const tableCellStyle = {
    padding: '12px 8px',
    borderBottom: '1px solid #e9ecef',
    fontSize: '14px',
    color: '#212529',
    verticalAlign: 'middle'
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      boxSizing: 'border-box',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Modal for editing */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(5px)'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '32px',
            minWidth: '500px',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
            border: '1px solid #e9ecef'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
              paddingBottom: '16px',
              borderBottom: '2px solid #f1f3f4'
            }}>
              <h2 style={{
                margin: 0,
                fontSize: '24px',
                fontWeight: '600',
                color: '#1a73e8'
              }}>
                ✏️ Edit Product
              </h2>
              <button
                onClick={handleCancel}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#6c757d',
                  padding: '4px'
                }}
              >
                ×
              </button>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              marginBottom: '24px'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#495057',
                  fontSize: '14px'
                }}>
                  Product Name
                </label>
                <input
                  value={editedProduct.name || ''}
                  onChange={e => handleChange(e, 'name')}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '14px',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1a73e8'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#495057',
                  fontSize: '14px'
                }}>
                  Product Code
                </label>
                <input
                  value={editedProduct.code || ''}
                  onChange={e => handleChange(e, 'code')}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '14px',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1a73e8'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#495057',
                  fontSize: '14px'
                }}>
                  Barcode
                </label>
                <input
                  value={editedProduct.barcode || ''}
                  onChange={e => handleChange(e, 'barcode')}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '14px',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1a73e8'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#495057',
                  fontSize: '14px'
                }}>
                  Category
                </label>
                <input
                  value={editedProduct.category || ''}
                  onChange={e => handleChange(e, 'category')}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '14px',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1a73e8'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#495057',
                  fontSize: '14px'
                }}>
                  Tax
                </label>
                <input
                  value={editedProduct.tax || ''}
                  onChange={e => handleChange(e, 'tax')}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '14px',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1a73e8'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#495057',
                  fontSize: '14px'
                }}>
                  Price
                </label>
                <input
                  value={editedProduct.price || ''}
                  onChange={e => handleChange(e, 'price')}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '14px',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1a73e8'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#495057',
                  fontSize: '14px'
                }}>
                  Store
                </label>
                <input
                  value={editedProduct.store || ''}
                  onChange={e => handleChange(e, 'store')}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '14px',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1a73e8'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#495057',
                  fontSize: '14px'
                }}>
                  Warehouse
                </label>
                <input
                  value={editedProduct.warehouse || ''}
                  onChange={e => handleChange(e, 'warehouse')}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '14px',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1a73e8'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              paddingTop: '16px',
              borderTop: '1px solid #e9ecef'
            }}>
              <button
                onClick={handleCancel}
                style={{
                  padding: '12px 24px',
                  border: '2px solid #6c757d',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  color: '#6c757d',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#6c757d';
                  e.target.style.color = '#ffffff';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#6c757d';
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                style={{
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: '#1a73e8',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#1557b0'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#1a73e8'}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Table */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        overflow: 'hidden',
        height: 'calc(100vh - 40px)',
        display: 'flex',
        flexDirection: 'column',
      
      }}>
        <div style={{ overflow: 'auto', flexGrow: 1, width: '100%', maxWidth: '1300px' }}>
          <table style={{
            width: '1300px',
            borderCollapse: 'collapse',
            backgroundColor: '#ffffff',
            tableLayout: 'fixed',
          }}>
            <thead style={{ position: 'sticky', top: 0, zIndex: 10 }}>
              <tr>
                <th style={{ ...tableHeaderStyle, width: '220px' }}>Products</th>
                <th style={{ ...tableHeaderStyle, width: '80px' }}>Product Code</th>
                <th style={{ ...tableHeaderStyle, width: '120px' }}>Barcode</th>
                <th style={{ ...tableHeaderStyle, width: '120px' }}>Category</th>
                <th style={{ ...tableHeaderStyle, width: '100px' }}>Tax</th>
                <th style={{ ...tableHeaderStyle, width: '80px' }}>Price</th>
                <th style={{ ...tableHeaderStyle, width: '110px' }}>Store</th>
                <th style={{ ...tableHeaderStyle, width: '110px' }}>Warehouse</th>
                <th style={{ ...tableHeaderStyle, width: '90px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  onClick={() => setSelectedRow(index)}
                  style={{
                    backgroundColor: selectedRow === index ? '#e3f2fd' : '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    borderLeft: selectedRow === index ? '4px solid #1a73e8' : '4px solid transparent'
                  }}
                  onMouseOver={(e) => {
                    if (selectedRow !== index) {
                      e.currentTarget.style.backgroundColor = '#f8f9fa';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (selectedRow !== index) {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                    }
                  }}
                >
                  <td style={{
                    ...tableCellStyle,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    wordBreak: 'break-word'
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#e8f5e8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px'
                    }}>
                      👡
                    </div>
                    {product.name}
                  </td>
                  <td style={{ ...tableCellStyle, width: '80px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.code}</td>
                  <td style={{ ...tableCellStyle, width: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.barcode}</td>
                  <td style={{ ...tableCellStyle, width: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.category}</td>
                  <td style={{ ...tableCellStyle, width: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.tax}</td>
                  <td style={{
                    ...tableCellStyle,
                    fontWeight: '600',
                    color: '#1a73e8',
                    width: '80px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    ${product.price}
                  </td>
                  <td style={{ ...tableCellStyle, width: '110px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    <span style={getStockStyle(product.store)}>
                      {product.store}
                    </span>
                  </td>
                  <td style={{ ...tableCellStyle, width: '110px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    <span style={getStockStyle(product.warehouse)}>
                      {product.warehouse}
                    </span>
                  </td>
                  <td style={{ ...tableCellStyle, width: '90px' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditClick(product, index);
                      }}
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#ffffff',
                        padding: '8px 12px',
                        fontSize: '12px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <span>✏️</span>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;