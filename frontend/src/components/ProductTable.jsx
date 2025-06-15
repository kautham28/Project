import React, { useState } from 'react';

const ProductTable = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [editRow, setEditRow] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    productName: '',
    productDescription: '',
    reOrderLevel: '',
    expireAlertDays: '',
    gst: true,
    hst: true,
    vat: true,
    tax: true,
    productCode: '',
    useScale: true,
    quantity: '',
    unitOfScale: 'kg',
    location: '',
    rackName: '',
    rackColumn: '',
    rackRow: ''
  });

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

  const handleAddClick = () => {
    setFormData({
      category: '',
      productName: '',
      productDescription: '',
      reOrderLevel: '',
      expireAlertDays: '',
      gst: true,
      hst: true,
      vat: true,
      tax: true,
      productCode: '',
      useScale: true,
      quantity: '',
      unitOfScale: 'kg',
      location: '',
      rackName: '',
      rackColumn: '',
      rackRow: ''
    });
    setShowAddModal(true);
  };

  const handleEditClick = (product, index) => {
    setEditRow(index);
    setEditedProduct({ ...product });
    setShowEditModal(true);
  };

  const handleAddSave = () => {
    const newProduct = {
      id: products.length + 1,
      name: formData.productName,
      code: formData.productCode,
      barcode: '', // Not in form, default to empty
      category: formData.category,
      tax: [formData.gst && 'GST', formData.hst && 'HST', formData.vat && 'VAT', formData.tax && 'Tax']
        .filter(Boolean)
        .join(' / ') || 'Not Applied',
      price: '', // Not in form, default to empty
      store: formData.quantity ? `${formData.quantity} In Stock` : 'Not Available',
      warehouse: formData.location ? `${formData.location} In Stock` : 'Not Available'
    };
    setProducts([...products, newProduct]);
    setShowAddModal(false);
    setFormData({
      category: '',
      productName: '',
      productDescription: '',
      reOrderLevel: '',
      expireAlertDays: '',
      gst: true,
      hst: true,
      vat: true,
      tax: true,
      productCode: '',
      useScale: true,
      quantity: '',
      unitOfScale: 'kg',
      location: '',
      rackName: '',
      rackColumn: '',
      rackRow: ''
    });
  };

  const handleEditSave = () => {
    const updatedProducts = [...products];
    updatedProducts[editRow] = { ...editedProduct };
    setProducts(updatedProducts);
    setEditRow(null);
    setShowEditModal(false);
    setEditedProduct({});
  };

  const handleAddCancel = () => {
    setShowAddModal(false);
    setFormData({
      category: '',
      productName: '',
      productDescription: '',
      reOrderLevel: '',
      expireAlertDays: '',
      gst: true,
      hst: true,
      vat: true,
      tax: true,
      productCode: '',
      useScale: true,
      quantity: '',
      unitOfScale: 'kg',
      location: '',
      rackName: '',
      rackColumn: '',
      rackRow: ''
    });
  };

  const handleEditCancel = () => {
    setEditRow(null);
    setEditedProduct({});
    setShowEditModal(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEditChange = (e, field) => {
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
      const number = parseInt(stock.split(' ')[0]) || 0;
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
      {/* Add Product Modal */}
      {showAddModal && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{ 
            backgroundColor: '#fff', 
            borderRadius: '8px', 
            width: '800px',
            maxHeight: '90vh',
            overflow: 'auto',
            border: '3px solid #10b981',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
          }}>
            {/* Header */}
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '15px 25px', 
              borderBottom: '1px solid #e9ecef',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px'
            }}>
              <h2 style={{ 
                margin: 0, 
                fontSize: '20px', 
                fontWeight: '600',
                color: '#333'
              }}>Add New Product</h2>
              <button style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Scan Barcode
              </button>
            </div>

            {/* Form Content */}
            <div style={{ padding: '25px' }}>
              <div>
                {/* First Row */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      fontSize: '14px', 
                      fontWeight: '500',
                      color: '#333'
                    }}>
                      Category <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <div style={{ position: 'relative' }}>
                      <select 
                        value={formData.category}
                        onChange={e => handleInputChange('category', e.target.value)}
                        style={{ 
                          width: '100%', 
                          padding: '10px 35px 10px 12px', 
                          border: '1px solid #d1d5db', 
                          borderRadius: '4px',
                          fontSize: '14px',
                          backgroundColor: '#fff',
                          appearance: 'none'
                        }}>
                        <option value="">Select Category</option>
                        <option value="Level 1 Cat">Level 1 Cat</option>
                      </select>
                      <div style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                        fontSize: '12px',
                        color: '#6b7280'
                      }}>▼</div>
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      fontSize: '14px', 
                      fontWeight: '500',
                      color: '#333'
                    }}>
                      Product Name <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <input 
                      type="text" 
                      value={formData.productName}
                      onChange={e => handleInputChange('productName', e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '10px 12px', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '4px',
                        fontSize: '14px'
                      }} 
                    />
                  </div>
                </div>

                {/* Product Description */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    fontSize: '14px', 
                    fontWeight: '500',
                    color: '#333'
                  }}>
                    Product Descriptions
                  </label>
                  <textarea 
                    value={formData.productDescription}
                    onChange={e => handleInputChange('productDescription', e.target.value)}
                    style={{ 
                      width: '100%', 
                      padding: '10px 12px', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '4px',
                      fontSize: '14px',
                      minHeight: '60px',
                      resize: 'vertical'
                    }} 
                  />
                </div>

                {/* Second Row */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      fontSize: '14px', 
                      fontWeight: '500',
                      color: '#333'
                    }}>
                      Re Order Level (Stock) <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <input 
                      type="text" 
                      value={formData.reOrderLevel}
                      onChange={e => handleInputChange('reOrderLevel', e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '10px 12px', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '4px',
                        fontSize: '14px'
                      }} 
                    />
                  </div>
                  
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      fontSize: '14px', 
                      fontWeight: '500',
                      color: '#333'
                    }}>
                      Expire Alert Days <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <input 
                      type="text" 
                      value={formData.expireAlertDays}
                      onChange={e => handleInputChange('expireAlertDays', e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '10px 12px', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '4px',
                        fontSize: '14px'
                      }} 
                    />
                  </div>
                </div>

                {/* Tax Checkboxes */}
                <div style={{ 
                  display: 'flex', 
                  gap: '30px', 
                  marginBottom: '25px',
                  alignItems: 'center'
                }}>
                  {['gst', 'hst', 'vat', 'tax'].map((tax) => (
                    <div key={tax} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ 
                        fontSize: '16px', 
                        fontWeight: '600', 
                        color: '#9ca3af',
                        minWidth: '40px'
                      }}>
                        {tax.toUpperCase()}
                      </span>
                      <div 
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: formData[tax] ? '#10b981' : '#d1d5db',
                          borderRadius: '3px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                        onClick={() => handleInputChange(tax, !formData[tax])}
                      >
                        {formData[tax] && (
                          <span style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Third Row */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      fontSize: '14px', 
                      fontWeight: '500',
                      color: '#333'
                    }}>
                      Image upload
                    </label>
                    <div style={{
                      border: '2px dashed #d1d5db',
                      borderRadius: '4px',
                      padding: '20px',
                      textAlign: 'center',
                      backgroundColor: '#f9fafb',
                      cursor: 'pointer'
                    }}>
                      <div style={{ fontSize: '24px', color: '#9ca3af', marginBottom: '8px' }}>📁</div>
                      <span style={{ fontSize: '14px', color: '6b7280' }}>Click to upload</span>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      marginTop: '10px'
                    }}>
                      <span style={{ 
                        fontSize: '14px', 
                        fontWeight: '500', 
                        color: '#333'
                      }}>
                        Use Scale
                      </span>
                      <div 
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: formData.useScale ? '#10b981' : '#d1d5db',
                          borderRadius: '3px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                        onClick={() => handleInputChange('useScale', !formData.useScale)}
                      >
                        {formData.useScale && (
                          <span style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      fontSize: '14px', 
                      fontWeight: '500',
                      color: '#333'
                    }}>
                      Product Code <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <input 
                      type="text" 
                      value={formData.productCode}
                      onChange={e => handleInputChange('productCode', e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '10px 12px', 
                        border: '1px solid #d1d5db', 
                        borderRadius: '4px',
                        fontSize: '14px',
                        marginBottom: '20px'
                      }} 
                    />

                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: '1fr 1fr', 
                      gap: '10px'
                    }}>
                      <div>
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '8px', 
                          fontSize: '14px', 
                          fontWeight: '500',
                          color: '#333'
                        }}>
                          Quantity <span style={{ color: '#dc3545' }}>*</span>
                        </label>
                        <input 
                          type="text" 
                          value={formData.quantity}
                          onChange={e => handleInputChange('quantity', e.target.value)}
                          style={{ 
                            width: '100%', 
                            padding: '10px 12px', 
                            border: '1px solid #d1d5db', 
                            borderRadius: '4px',
                            fontSize: '14px'
                          }} 
                        />
                      </div>
                      
                      <div>
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '8px', 
                          fontSize: '14px', 
                          fontWeight: '500',
                          color: '#333'
                        }}>
                          Unit of Scale <span style={{ color: '#dc3545' }}>*</span>
                        </label>
                        <input 
                          type="text" 
                          value={formData.unitOfScale}
                          onChange={e => handleInputChange('unitOfScale', e.target.value)}
                          style={{ 
                            width: '100%', 
                            padding: '10px 12px', 
                            border: '1px solid #d1d5db', 
                            borderRadius: '4px',
                            fontSize: '14px'
                          }} 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Location Section */}
                <div style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  padding: '20px',
                  marginBottom: '25px',
                  backgroundColor: '#fafafa'
                }}>
                  <h3 style={{ 
                    margin: '0 0 15px 0', 
                    fontSize: '16px', 
                    fontWeight: '600',
                    color: '#333'
                  }}>
                    Product Location
                  </h3>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr 1fr 1fr', 
                    gap: '15px'
                  }}>
                    <div>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '8px', 
                        fontSize: '14px', 
                        fontWeight: '500',
                        color: '#333'
                      }}>
                        Location
                      </label>
                      <input 
                        type="text" 
                        value={formData.location}
                        onChange={e => handleInputChange('location', e.target.value)}
                        style={{ 
                          width: '100%', 
                          padding: '10px 12px', 
                          border: '1px solid #d1d5db', 
                          borderRadius: '4px',
                          fontSize: '14px'
                        }} 
                      />
                    </div>
                    
                    <div>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '8px', 
                        fontSize: '14px', 
                        fontWeight: '500',
                        color: '#333'
                      }}>
                        Rack Name <span style={{ color: '#dc3545' }}>*</span>
                      </label>
                      <div style={{ position: 'relative' }}>
                        <select 
                          value={formData.rackName}
                          onChange={e => handleInputChange('rackName', e.target.value)}
                          style={{ 
                            width: '100%', 
                            padding: '10px 35px 10px 12px', 
                            border: '1px solid #d1d5db', 
                            borderRadius: '4px',
                            fontSize: '14px',
                            backgroundColor: '#fff',
                            appearance: 'none'
                          }}>
                          <option value="">Select Rack</option>
                        </select>
                        <div style={{
                          position: 'absolute',
                          right: '12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none',
                          fontSize: '12px',
                          color: '#6b7280'
                        }}>▼</div>
                      </div>
                    </div>
                    
                    <div>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '8px', 
                        fontSize: '14px', 
                        fontWeight: '500',
                        color: '#333'
                      }}>
                        Rack Column <span style={{ color: '#dc3545' }}>*</span>
                      </label>
                      <div style={{ position: 'relative' }}>
                        <select 
                          value={formData.rackColumn}
                          onChange={e => handleInputChange('rackColumn', e.target.value)}
                          style={{ 
                            width: '100%', 
                            padding: '10px 35px 10px 12px', 
                            border: '1px solid #d1d5db', 
                            borderRadius: '4px',
                            fontSize: '14px',
                            backgroundColor: '#fff',
                            appearance: 'none'
                          }}>
                          <option value="">Select Column</option>
                        </select>
                        <div style={{
                          position: 'absolute',
                          right: '12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none',
                          fontSize: '12px',
                          color: '#6b7280'
                        }}>▼</div>
                      </div>
                    </div>
                    
                    <div>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '8px', 
                        fontSize: '14px', 
                        fontWeight: '500',
                        color: '#333'
                      }}>
                        Rack Row <span style={{ color: '#dc3545' }}>*</span>
                      </label>
                      <div style={{ position: 'relative' }}>
                        <select 
                          value={formData.rackRow}
                          onChange={e => handleInputChange('rackRow', e.target.value)}
                          style={{ 
                            width: '100%', 
                            padding: '10px 35px 10px 12px', 
                            border: '1px solid #d1d5db', 
                            borderRadius: '4px',
                            fontSize: '14px',
                            backgroundColor: '#fff',
                            appearance: 'none'
                          }}>
                          <option value="">Select Row</option>
                        </select>
                        <div style={{
                          position: 'absolute',
                          right: '12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none',
                          fontSize: '12px',
                          color: '#6b7280'
                        }}>▼</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '20px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#10b981',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={handleAddSave}
                  >
                    <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                      type="button"
                      onClick={handleAddCancel}
                      style={{ 
                        padding: '10px 30px', 
                        backgroundColor: '#fff', 
                        color: '#dc3545', 
                        border: '2px solid #dc3545', 
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                    >
                      Cancel
                    </button>
                    <button 
                      type="button"
                      onClick={handleAddSave}
                      style={{ 
                        padding: '10px 30px', 
                        backgroundColor: '#10b981', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                    >
                      Add Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {showEditModal && (
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
                onClick={handleEditCancel}
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
                  onChange={e => handleEditChange(e, 'name')}
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
                  onChange={e => handleEditChange(e, 'code')}
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
                  onChange={e => handleEditChange(e, 'barcode')}
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
                  onChange={e => handleEditChange(e, 'category')}
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
                  onChange={e => handleEditChange(e, 'tax')}
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
                  onChange={e => handleEditChange(e, 'price')}
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
                  onChange={e => handleEditChange(e, 'store')}
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
                  onChange={e => handleEditChange(e, 'warehouse')}
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
                onClick={handleEditCancel}
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
                onClick={handleEditSave}
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

      {/* Main Table Container */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        overflow: 'hidden',
        height: 'calc(100vh - 40px)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Filters and Search */}
        <div style={{
          padding: '16px',
          borderBottom: '1px solid #e9ecef',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '90px' }}>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#495057' }}>Products</span>
            <input
              type="text"
              placeholder="Search product by name or id..."
              style={{
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '14px',
                width: '200px'
              }}
            />
            <select
              style={{
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '14px',
                width: '150px',
                appearance: 'none',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' fill=\'%236b7280\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z\'/%3E%3C/svg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center'
              }}
            >
              <option value="">Search By</option>
            </select>
            <button
              onClick={handleAddClick}
              style={{
                background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
                border: 'none',
                borderRadius: '4px',
                color: '#ffffff',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(46, 204, 113, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <span>➕</span>
              Add Products
            </button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#495057' }}>Category</span>
            <input
              type="text"
              placeholder=""
              style={{
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '14px',
                width: '150px'
              }}
            />
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#495057' }}>Select Product</span>
            <input
              type="text"
              placeholder="Search product by name or id..."
              style={{
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '14px',
                width: '200px'
              }}
            />
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#495057' }}>Short By</span>
            <select
              style={{
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '14px',
                width: '150px',
                appearance: 'none',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' fill=\'%236b7280\' viewBox=\'0 0 16 16\'%3E%3Cpath d=\'M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z\'/%3E%3C/svg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center'
              }}
            >
              <option value="">Short By</option>
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '10px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '64px',
              border: '3px solid #10b981',
              borderRadius: '16px',
              padding: '16px',
              background: '#f9fefb',
              width: 'fit-content'
            }}>
              <span style={{ fontSize: '16px', fontWeight: '600', color: '#495057' }}>Color</span>
              <input
                type="text"
                placeholder=""
                style={{
                  padding: '8px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '14px',
                  width: '150px'
                }}
              />
              <span style={{ fontSize: '16px', fontWeight: '600', color: '#495057' }}>Thickness</span>
              <input
                type="text"
                placeholder=""
                style={{
                  padding: '8px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '14px',
                  width: '150px'
                }}
              />
              <span style={{ fontSize: '16px', fontWeight: '600', color: '#495057' }}>Diameter</span>
              <input
                type="text"
                placeholder=""
                style={{
                  padding: '8px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '14px',
                  width: '150px'
                }}
              />
            </div>
            <button
              style={{
                backgroundColor: '#e9ecef',
                border: 'none',
                borderRadius: '4px',
                padding: '8px 12px',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                color: '#495057'
              }}
            >
              <span style={{ marginRight: '4px' }}>🔄</span>
              Refresh
            </button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflow: 'auto', flexGrow: 1, width: '100%', maxWidth: '1300px' }}>
          <table style={{
            width: '1300px',
            borderCollapse: 'collapse',
            backgroundColor: '#ffffff',
            tableLayout: 'fixed'
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