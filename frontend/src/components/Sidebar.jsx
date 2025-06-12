import React, { useState } from 'react';
import { Home, DollarSign, Package, Settings, BarChart2, FileText, Users, Heart, Cog, LogOut, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{
      width: '150px',
      backgroundColor: '#f8f9fa',
      padding: '5px',
      borderRight: '1px solid #ddd',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{
        fontSize: '18px',
        marginBottom: '10px',
        color: '#333',
        textAlign: 'center'
      }}>POS NAME</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '3px', textAlign: 'center' }}>
          <button style={{
            width: '100%',
            padding: '4px',
            backgroundColor: '#fff',
            color: selected === 'Home' ? '#28a745' : '#808080',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px'
          }}
          onClick={() => setSelected('Home')}
          onMouseEnter={(e) => {
            e.target.style.color = '#28a745';
            e.target.querySelector('svg').style.color = '#28a745';
            e.target.style.backgroundColor = '#fff';
          }}
          onMouseLeave={(e) => {
            if (selected !== 'Home') {
              e.target.style.color = '#808080';
              e.target.querySelector('svg').style.color = '#808080';
            }
            e.target.style.backgroundColor = '#fff';
          }}>
            Home
            <Home size={28} weight="bold" color={selected === 'Home' ? '#28a745' : '#808080'} style={{ marginTop: '2px' }} />
          </button>
        </li>
        <li style={{ marginBottom: '3px', textAlign: 'center' }}>
          <button style={{
            width: '100%',
            padding: '4px',
            backgroundColor: '#fff',
            color: selected === 'Sales' ? '#28a745' : '#808080',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px'
          }}
          onClick={() => setSelected('Sales')}
          onMouseEnter={(e) => {
            e.target.style.color = '#28a745';
            e.target.querySelector('svg').style.color = '#28a745';
            e.target.style.backgroundColor = '#fff';
          }}
          onMouseLeave={(e) => {
            if (selected !== 'Sales') {
              e.target.style.color = '#808080';
              e.target.querySelector('svg').style.color = '#808080';
            }
            e.target.style.backgroundColor = '#fff';
          }}>
            Sales
            <DollarSign size={28} weight="bold" color={selected === 'Sales' ? '#28a745' : '#808080'} style={{ marginTop: '2px' }} />
          </button>
        </li>
        <li style={{ marginBottom: '3px', textAlign: 'center' }}>
          <button style={{
            width: '100%',
            padding: '4px',
            backgroundColor: '#fff',
            color: selected === 'Products' ? '#28a745' : '#808080',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px'
          }}
          onClick={() => setSelected('Products')}
          onMouseEnter={(e) => {
            e.target.style.color = '#28a745';
            e.target.querySelector('svg').style.color = '#28a745';
            e.target.style.backgroundColor = '#fff';
          }}
          onMouseLeave={(e) => {
            if (selected !== 'Products') {
              e.target.style.color = '#808080';
              e.target.querySelector('svg').style.color = '#808080';
            }
            e.target.style.backgroundColor = '#fff';
          }}>
            Products
            <Package size={28} weight="bold" color={selected === 'Products' ? '#28a745' : '#808080'} style={{ marginTop: '2px' }} />
          </button>
        </li>
        <li style={{ marginBottom: '3px', textAlign: 'center' }}>
          <button style={{
            width: '100%',
            padding: '4px',
            backgroundColor: '#fff',
            color: selected === 'Utilities' ? '#28a745' : '#808080',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px'
          }}
          onClick={() => setSelected('Utilities')}
          onMouseEnter={(e) => {
            e.target.style.color = '#28a745';
            e.target.querySelector('svg').style.color = '#28a745';
            e.target.style.backgroundColor = '#fff';
          }}
          onMouseLeave={(e) => {
            if (selected !== 'Utilities') {
              e.target.style.color = '#808080';
              e.target.querySelector('svg').style.color = '#808080';
            }
            e.target.style.backgroundColor = '#fff';
          }}>
            Utilities
            <Settings size={28} weight="bold" color={selected === 'Utilities' ? '#28a745' : '#808080'} style={{ marginTop: '2px' }} />
          </button>
        </li>
        <li style={{ marginBottom: '3px', textAlign: 'center' }}>
          <button style={{
            width: '100%',
            padding: '4px',
            backgroundColor: '#fff',
            color: selected === 'Stocks' ? '#28a745' : '#808080',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px'
          }}
          onClick={() => setSelected('Stocks')}
          onMouseEnter={(e) => {
            e.target.style.color = '#28a745';
            e.target.querySelector('svg').style.color = '#28a745';
            e.target.style.backgroundColor = '#fff';
          }}
          onMouseLeave={(e) => {
            if (selected !== 'Stocks') {
              e.target.style.color = '#808080';
              e.target.querySelector('svg').style.color = '#808080';
            }
            e.target.style.backgroundColor = '#fff';
          }}>
            Stocks
            <BarChart2 size={28} weight="bold" color={selected === 'Stocks' ? '#28a745' : '#808080'} style={{ marginTop: '2px' }} />
          </button>
        </li>
        <li style={{ marginBottom: '3px', textAlign: 'center' }}>
          <button style={{
            width: '100%',
            padding: '4px',
            backgroundColor: '#fff',
            color: selected === 'Reports' ? '#28a745' : '#808080',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px'
          }}
          onClick={() => setSelected('Reports')}
          onMouseEnter={(e) => {
            e.target.style.color = '#28a745';
            e.target.querySelector('svg').style.color = '#28a745';
            e.target.style.backgroundColor = '#fff';
          }}
          onMouseLeave={(e) => {
            if (selected !== 'Reports') {
              e.target.style.color = '#808080';
              e.target.querySelector('svg').style.color = '#808080';
            }
            e.target.style.backgroundColor = '#fff';
          }}>
            Reports
            <FileText size={28} weight="bold" color={selected === 'Reports' ? '#28a745' : '#808080'} style={{ marginTop: '2px' }} />
          </button>
        </li>
        <li style={{ marginBottom: '3px', textAlign: 'center' }}>
          <button style={{
            width: '100%',
            padding: '4px',
            backgroundColor: '#fff',
            color: selected === 'Users' ? '#28a745' : '#808080',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px'
          }}
          onClick={() => setSelected('Users')}
          onMouseEnter={(e) => {
            e.target.style.color = '#28a745';
            e.target.querySelector('svg').style.color = '#28a745';
            e.target.style.backgroundColor = '#fff';
          }}
          onMouseLeave={(e) => {
            if (selected !== 'Users') {
              e.target.style.color = '#808080';
              e.target.querySelector('svg').style.color = '#808080';
            }
            e.target.style.backgroundColor = '#fff';
          }}>
            Users
            <Users size={28} weight="bold" color={selected === 'Users' ? '#28a745' : '#808080'} style={{ marginTop: '2px' }} />
          </button>
        </li>
        <li style={{ marginBottom: '3px', textAlign: 'center' }}>
          <button style={{
            width: '100%',
            padding: '4px',
            backgroundColor: '#fff',
            color: selected === 'Suppliers' ? '#28a745' : '#808080',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px'
          }}
          onClick={() => setSelected('Suppliers')}
          onMouseEnter={(e) => {
            e.target.style.color = '#28a745';
            e.target.querySelector('svg').style.color = '#28a745';
            e.target.style.backgroundColor = '#fff';
          }}
          onMouseLeave={(e) => {
            if (selected !== 'Suppliers') {
              e.target.style.color = '#808080';
              e.target.querySelector('svg').style.color = '#808080';
            }
            e.target.style.backgroundColor = '#fff';
          }}>
            Suppliers
            <Heart size={28} weight="bold" color={selected === 'Suppliers' ? '#28a745' : '#808080'} style={{ marginTop: '2px' }} />
          </button>
        </li>
        <li style={{ marginBottom: '3px', textAlign: 'center' }}>
          <button style={{
            width: '100%',
            padding: '4px',
            backgroundColor: '#fff',
            color: selected === 'Settings' ? '#28a745' : '#808080',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px'
          }}
          onClick={() => setSelected('Settings')}
          onMouseEnter={(e) => {
            e.target.style.color = '#28a745';
            e.target.querySelector('svg').style.color = '#28a745';
            e.target.style.backgroundColor = '#fff';
          }}
          onMouseLeave={(e) => {
            if (selected !== 'Settings') {
              e.target.style.color = '#808080';
              e.target.querySelector('svg').style.color = '#808080';
            }
            e.target.style.backgroundColor = '#fff';
          }}>
            Settings
            <Cog size={28} weight="bold" color={selected === 'Settings' ? '#28a745' : '#808080'} style={{ marginTop: '2px' }} />
          </button>
        </li>
        <li style={{ marginBottom: '3px', textAlign: 'center' }}>
          <button style={{
            width: '100%',
            padding: '4px',
            backgroundColor: '#fff',
            color: selected === 'Exit' ? '#28a745' : '#dc3545',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px'
          }}
          onClick={() => setSelected('Exit')}
          onMouseEnter={(e) => {
            e.target.style.color = '#28a745';
            e.target.querySelector('svg').style.color = '#28a745';
            e.target.style.backgroundColor = '#fff';
          }}
          onMouseLeave={(e) => {
            if (selected !== 'Exit') {
              e.target.style.color = '#dc3545';
              e.target.querySelector('svg').style.color = '#dc3545';
            }
            e.target.style.backgroundColor = '#fff';
          }}>
            Exit
            <LogOut size={28} weight="bold" color={selected === 'Exit' ? '#28a745' : '#dc3545'} style={{ marginTop: '2px' }} />
          </button>
        </li>
        <li style={{ marginBottom: '3px', textAlign: 'center' }}>
          <button style={{
            width: '100%',
            padding: '4px',
            backgroundColor: '#fff',
            color: selected === 'Help' ? '#28a745' : '#808080',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px'
          }}
          onClick={() => setSelected('Help')}
          onMouseEnter={(e) => {
            e.target.style.color = '#28a745';
            e.target.querySelector('svg').style.color = '#28a745';
            e.target.style.backgroundColor = '#fff';
          }}
          onMouseLeave={(e) => {
            if (selected !== 'Help') {
              e.target.style.color = '#808080';
              e.target.querySelector('svg').style.color = '#808080';
            }
            e.target.style.backgroundColor = '#fff';
          }}>
            Help
            <HelpCircle size={28} weight="bold" color={selected === 'Help' ? '#28a745' : '#808080'} style={{ marginTop: '2px' }} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;