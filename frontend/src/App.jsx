import React from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import ProductTable from './components/ProductTable';
import AddProductModal from './components/AddProductModal';

const App = () => {
  const [products] = React.useState([
    { name: "Green Sandal", code: "bt0055478", barcode: "-", category: "Level 1 Cat", tax: "CST / HST", price: 125.25, store: "200 In Stock", storeColor: "green", warehouse: "350 In Stock", warehouseColor: "green" },
    { name: "Green Sandal", code: "bt0055478", barcode: "-", category: "Level 1 Cat", tax: "CST / HST", price: 125.25, store: "200 In Stock", storeColor: "green", warehouse: "350 In Stock", warehouseColor: "green" },
    { name: "Green Sandal", code: "bt0055478", barcode: "-", category: "Level 1 Cat", tax: "CST / HST", price: 125.25, store: "25 In Stock", storeColor: "orange", warehouse: "350 In Stock", warehouseColor: "green" },
    { name: "Green Sandal", code: "bt0055478", barcode: "-", category: "Level 1 Cat", tax: "CST / HST", price: 125.25, store: "200 In Stock", storeColor: "green", warehouse: "20 In Stock", warehouseColor: "orange" },
    { name: "Green Sandal", code: "-", barcode: "1102", category: "Level 1 Cat", tax: "CST", price: 125.25, store: "200 In Stock", storeColor: "green", warehouse: "500 In Stock", warehouseColor: "green" },
    { name: "Green Sandal", code: "bt0055478", barcode: "-", category: "Level 1 Cat", tax: "Not Applied", price: 125.25, store: "Not Available", storeColor: "red", warehouse: "350 In Stock", warehouseColor: "green" },
    { name: "Green Sandal", code: "bt0055478", barcode: "-", category: "Level 1 Cat", tax: "Not Applied", price: 125.25, store: "Not Available", storeColor: "red", warehouse: "Not Available", warehouseColor: "red" },
    { name: "Green Sandal", code: "bt0055478", barcode: "-", category: "Level 1 Cat", tax: "Not Applied", price: 125.25, store: "200 In Stock", storeColor: "green", warehouse: "350 In Stock", warehouseColor: "green" },
    { name: "Green Sandal", code: "bt0055478", barcode: "-", category: "Level 1 Cat", tax: "CST / HST / VAT", price: 125.25, store: "200 In Stock", storeColor: "green", warehouse: "350 In Stock", warehouseColor: "green" },
  ]);
  const [filteredProducts, setFilteredProducts] = React.useState(products);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleEdit = (product) => {
    alert(`Editing: ${JSON.stringify(product)}`);
  };

  const handleRefresh = () => {
    setFilteredProducts(products);
  };

  const handleAddProduct = () => {
    setIsModalOpen(true);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f5f5f5' }}>
        <TopNav />
       
        <ProductTable products={filteredProducts} onEdit={handleEdit} />
        <AddProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default App;