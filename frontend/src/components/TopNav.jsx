import React from 'react';

const TopNav = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px 24px',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#fff',
    width: 'calc(100vw - 150px)', // 150px is the sidebar width
    marginLeft: '150px', // push right to start after sidebar
    boxSizing: 'border-box',
    overflowX: 'hidden',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000
  }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input type="text" placeholder="Search Products..." style={{ padding: '5px', width: '160px', border: '1px solid #ccc', borderRadius: '4px', marginRight: '8px' }} />
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <span style={{ color: '#28a745', fontSize: '16px' }}>🔍</span>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '8px', color: '#000', fontWeight: 'bold' }}>Bill</span>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <span style={{ color: '#28a745', fontSize: '16px' }}>🔔</span>
        <span style={{ position: 'absolute', top: '-5px', right: '-5px', backgroundColor: 'red', color: 'white', borderRadius: '50%', width: '10px', height: '10px', fontSize: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
      </div>
      <img src="https://via.placeholder.com/30" alt="Profile" style={{ width: '28px', marginLeft: '8px', borderRadius: '50%' }} />
      <span style={{ color: '#000', marginLeft: '4px' }}>›</span>
    </div>
  </div>
);

export default TopNav;