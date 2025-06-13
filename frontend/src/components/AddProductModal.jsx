import React, { useState } from 'react';

const AddProductModal = ({ isOpen, onClose }) => {
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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field) => {
    setFormData(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-[800px] max-h-[90vh] overflow-auto border-4 border-emerald-500 shadow-2xl">
        {/* Header */}
        <div className="bg-gray-100 p-6 border-b border-gray-200 flex justify-between items-center rounded-t-md">
          <h2 className="text-xl font-semibold text-gray-800">Add New Product</h2>
          <button className="bg-red-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-600">
            Scan Barcode
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            {/* First Row */}
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  Category <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded text-sm bg-white appearance-none"
                  >
                    <option value="">Select Category</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.productName}
                  onChange={(e) => handleInputChange('productName', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>

            {/* Product Description */}
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Product Description
              </label>
              <textarea
                value={formData.productDescription}
                onChange={(e) => handleInputChange('productDescription', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded text-sm min-h-[80px] resize-y"
              />
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  Re Order Level (Stock) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.reOrderLevel}
                  onChange={(e) => handleInputChange('reOrderLevel', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  Expire Alert Days <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.expireAlertDays}
                  onChange={(e) => handleInputChange('expireAlertDays', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>

            {/* Tax Checkboxes */}
            <div className="flex gap-8 mb-6 items-center">
              {['gst', 'hst', 'vat', 'tax'].map((tax) => (
                <div key={tax} className="flex items-center gap-2">
                  <span className="text-base font-semibold text-gray-400 min-w-[40px]">{tax.toUpperCase()}</span>
                  <div
                    onClick={() => handleCheckboxChange(tax)}
                    className={`w-5 h-5 ${formData[tax] ? 'bg-emerald-500' : 'bg-gray-200'} rounded flex items-center justify-center cursor-pointer`}
                  >
                    {formData[tax] && <span className="text-white text-sm font-bold">✓</span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  Image Upload
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded p-5 text-center bg-gray-50 cursor-pointer">
                  <div className="text-2xl text-gray-400 mb-2">📁</div>
                  <span className="text-sm text-gray-500">Click to upload</span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-sm font-medium text-gray-800">Use Scale</span>
                  <div
                    onClick={() => handleCheckboxChange('useScale')}
                    className={`w-5 h-5 ${formData.useScale ? 'bg-emerald-500' : 'bg-gray-200'} rounded flex items-center justify-center cursor-pointer`}
                  >
                    {formData.useScale && <span className="text-white text-sm font-bold">✓</span>}
                  </div>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-800">
                  Product Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.productCode}
                  onChange={(e) => handleInputChange('productCode', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded text-sm mb-5"
                />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-800">
                      Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange('quantity', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-800">
                      Unit of Scale <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.unitOfScale}
                      onChange={(e) => handleInputChange('unitOfScale', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Location Section */}
            <div className="border border-gray-200 rounded-lg p-5 mb-6 bg-gray-50">
              <h3 className="text-base font-semibold text-gray-800 mb-4">Product Location</h3>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-800">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-800">
                    Rack Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.rackName}
                      onChange={(e) => handleInputChange('rackName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded text-sm bg-white appearance-none"
                    >
                      <option value="">Select Rack</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-800">
                    Rack Column <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.rackColumn}
                      onChange={(e) => handleInputChange('rackColumn', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded text-sm bg-white appearance-none"
                    >
                      <option value="">Select Column</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-800">
                    Rack Row <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.rackRow}
                      onChange={(e) => handleInputChange('rackRow', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded text-sm bg-white appearance-none"
                    >
                      <option value="">Select Row</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center pt-5">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-white text-lg font-bold">✓</span>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-2 bg-white text-red-500 border-2 border-red-500 rounded-md text-sm font-medium hover:bg-red-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-2 bg-emerald-500 text-white rounded-md text-sm font-medium hover:bg-emerald-600"
                >
                  Add Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;