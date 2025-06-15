import React, { useState } from 'react';
import './ProductTable.css';

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
      barcode: '',
      category: formData.category,
      tax: [formData.gst && 'GST', formData.hst && 'HST', formData.vat && 'VAT', formData.tax && 'Tax']
        .filter(Boolean)
        .join(' / ') || 'Not Applied',
      price: '',
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
      return 'stock-not-available';
    } else if (stock.includes('In Stock')) {
      const number = parseInt(stock.split(' ')[0]) || 0;
      if (number <= 50) {
        return 'stock-low';
      } else {
        return 'stock-available';
      }
    }
    return '';
  };

  return (
    <div className="main-container">
      {showAddModal && (
        <div className="modal-overlay">
          <div className="add-modal">
            <div className="modal-header">
              <h2>Add New Product</h2>
              <button className="scan-button">Scan Barcode</button>
            </div>
            <div className="modal-content">
              <div className="form-row">
                <div className="form-group">
                  <label>
                    Category <span className="required">*</span>
                  </label>
                  <div className="select-wrapper">
                    <select
                      value={formData.category}
                      onChange={e => handleInputChange('category', e.target.value)}
                      className="select-input"
                    >
                      <option value="">Select Category</option>
                      <option value="Level 1 Cat">Level 1 Cat</option>
                    </select>
                    <div className="select-arrow">▼</div>
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    Product Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.productName}
                    onChange={e => handleInputChange('productName', e.target.value)}
                    className="text-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Product Descriptions</label>
                <textarea
                  value={formData.productDescription}
                  onChange={e => handleInputChange('productDescription', e.target.value)}
                  className="textarea-input"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    Re Order Level (Stock) <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.reOrderLevel}
                    onChange={e => handleInputChange('reOrderLevel', e.target.value)}
                    className="text-input"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Expire Alert Days <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.expireAlertDays}
                    onChange={e => handleInputChange('expireAlertDays', e.target.value)}
                    className="text-input"
                  />
                </div>
              </div>
              <div className="tax-checkboxes">
                {['gst', 'hst', 'vat', 'tax'].map((tax) => (
                  <div key={tax} className="checkbox-group">
                    <span className="tax-label">{tax.toUpperCase()}</span>
                    <div
                      className={`checkbox ${formData[tax] ? 'checked' : ''}`}
                      onClick={() => handleInputChange(tax, !formData[tax])}
                    >
                      {formData[tax] && <span className="checkmark">✓</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Image upload</label>
                  <div className="image-upload">
                    <div className="upload-icon">📁</div>
                    <span>Click to upload</span>
                  </div>
                  <div className="checkbox-group">
                    <span>Use Scale</span>
                    <div
                      className={`checkbox ${formData.useScale ? 'checked' : ''}`}
                      onClick={() => handleInputChange('useScale', !formData.useScale)}
                    >
                      {formData.useScale && <span className="checkmark">✓</span>}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    Product Code <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.productCode}
                    onChange={e => handleInputChange('productCode', e.target.value)}
                    className="text-input product-code"
                  />
                  <div className="quantity-row">
                    <div>
                      <label>
                        Quantity <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={e => handleInputChange('quantity', e.target.value)}
                        className="text-input"
                      />
                    </div>
                    <div>
                      <label>
                        Unit of Scale <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.unitOfScale}
                        onChange={e => handleInputChange('unitOfScale', e.target.value)}
                        className="text-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="location-section">
                <h3>Product Location</h3>
                <div className="location-grid">
                  <div>
                    <label>Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={e => handleInputChange('location', e.target.value)}
                      className="text-input"
                    />
                  </div>
                  <div>
                    <label>
                      Rack Name <span className="required">*</span>
                    </label>
                    <div className="select-wrapper">
                      <select
                        value={formData.rackName}
                        onChange={e => handleInputChange('rackName', e.target.value)}
                        className="select-input"
                      >
                        <option value="">Select Rack</option>
                      </select>
                      <div className="select-arrow">▼</div>
                    </div>
                  </div>
                  <div>
                    <label>
                      Rack Column <span className="required">*</span>
                    </label>
                    <div className="select-wrapper">
                      <select
                        value={formData.rackColumn}
                        onChange={e => handleInputChange('rackColumn', e.target.value)}
                        className="select-input"
                      >
                        <option value="">Select Column</option>
                      </select>
                      <div className="select-arrow">▼</div>
                    </div>
                  </div>
                  <div>
                    <label>
                      Rack Row <span className="required">*</span>
                    </label>
                    <div className="select-wrapper">
                      <select
                        value={formData.rackRow}
                        onChange={e => handleInputChange('rackRow', e.target.value)}
                        className="select-input"
                      >
                        <option value="">Select Row</option>
                      </select>
                      <div className="select-arrow">▼</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="save-icon" onClick={handleAddSave}>
                  <span>✓</span>
                </div>
                <div className="button-group">
                  <button type="button" onClick={handleAddCancel} className="cancel-button">
                    Cancel
                  </button>
                  <button type="button" onClick={handleAddSave} className="save-button">
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showEditModal && (
        <div className="modal-overlay">
          <div className="edit-modal">
            <div className="edit-modal-header">
              <h2>✏️ Edit Product</h2>
              <button onClick={handleEditCancel} className="close-button">
                ×
              </button>
            </div>
            <div className="edit-form-grid">
              <div className="form-group">
                <label>Product Name</label>
                <input
                  value={editedProduct.name || ''}
                  onChange={e => handleEditChange(e, 'name')}
                  className="edit-input"
                />
              </div>
              <div className="form-group">
                <label>Product Code</label>
                <input
                  value={editedProduct.code || ''}
                  onChange={e => handleEditChange(e, 'code')}
                  className="edit-input"
                />
              </div>
              <div className="form-group">
                <label>Barcode</label>
                <input
                  value={editedProduct.barcode || ''}
                  onChange={e => handleEditChange(e, 'barcode')}
                  className="edit-input"
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input
                  value={editedProduct.category || ''}
                  onChange={e => handleEditChange(e, 'category')}
                  className="edit-input"
                />
              </div>
              <div className="form-group">
                <label>Tax</label>
                <input
                  value={editedProduct.tax || ''}
                  onChange={e => handleEditChange(e, 'tax')}
                  className="edit-input"
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  value={editedProduct.price || ''}
                  onChange={e => handleEditChange(e, 'price')}
                  className="edit-input"
                />
              </div>
              <div className="form-group">
                <label>Store</label>
                <input
                  value={editedProduct.store || ''}
                  onChange={e => handleEditChange(e, 'store')}
                  className="edit-input"
                />
              </div>
              <div className="form-group">
                <label>Warehouse</label>
                <input
                  value={editedProduct.warehouse || ''}
                  onChange={e => handleEditChange(e, 'warehouse')}
                  className="edit-input"
                />
              </div>
            </div>
            <div className="edit-modal-footer">
              <button onClick={handleEditCancel} className="edit-cancel-button">
                Cancel
              </button>
              <button onClick={handleEditSave} className="edit-save-button">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="table-container">
        <div className="filters-section">
          <div className="filter-row">
            <span className="filter-label">Products</span>
            <input
              type="text"
              placeholder="Search product by name or id..."
              className="search-input"
            />
            <select className="search-by-select">
              <option value="">Search By</option>
            </select>
            <button onClick={handleAddClick} className="add-button">
              <span>➕</span>
              Add Products
            </button>
          </div>
          <div className="filter-row">
            <span className="filter-label">Category</span>
            <input type="text" className="category-input" />
            <span className="filter-label">Select Product</span>
            <input
              type="text"
              placeholder="Search product by name or id..."
              className="search-input"
            />
            <span className="filter-label">Short By</span>
            <select className="sort-by-select">
              <option value="">Short By</option>
            </select>
          </div>
          <div className="attribute-filter">
            <div className="attribute-group">
              <span className="filter-label">Color</span>
              <input type="text" className="attribute-input" />
              <span className="filter-label">Thickness</span>
              <input type="text" className="attribute-input" />
              <span className="filter-label">Diameter</span>
              <input type="text" className="attribute-input" />
            </div>
            <button className="refresh-button">
              <span>🔄</span>
              Refresh
            </button>
          </div>
        </div>
        <div className="table-wrapper">
          <table className="product-table">
            <thead>
              <tr>
                <th className="table-header products">Products</th>
                <th className="table-header product-code">Product Code</th>
                <th className="table-header barcode">Barcode</th>
                <th className="table-header category">Category</th>
                <th className="table-header tax">Tax</th>
                <th className="table-header price">Price</th>
                <th className="table-header store">Store</th>
                <th className="table-header warehouse">Warehouse</th>
                <th className="table-header action">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  onClick={() => setSelectedRow(index)}
                  className={`table-row ${selectedRow === index ? 'selected' : ''}`}
                >
                  <td className="table-cell products-cell">
                    <div className="product-icon">👡</div>
                    {product.name}
                  </td>
                  <td className="table-cell product-code-cell">{product.code}</td>
                  <td className="table-cell barcode-cell">{product.barcode}</td>
                  <td className="table-cell category-cell">{product.category}</td>
                  <td className="table-cell tax-cell">{product.tax}</td>
                  <td className="table-cell price-cell">${product.price}</td>
                  <td className="table-cell store-cell">
                    <span className={getStockStyle(product.store)}>
                      {product.store}
                    </span>
                  </td>
                  <td className="table-cell warehouse-cell">
                    <span className={getStockStyle(product.warehouse)}>
                      {product.warehouse}
                    </span>
                  </td>
                  <td className="table-cell action-cell">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditClick(product, index);
                      }}
                      className="edit-button"
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