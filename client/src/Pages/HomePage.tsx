import React from 'react';
import './HomePage.css';

function Home() {
  return (
    <div>
      <div className="fancy-background" />
      <div style={{ textAlign: 'center', paddingTop: '150px', position: 'relative', zIndex: 1 }}>
        <h1 style={{ color: '#4d2600' }}>AI Q&A System</h1>
        <p style={{ color: '#5c3d00' }}>Chào mừng!</p>
      </div>
    </div>
  );
}

export default Home;
