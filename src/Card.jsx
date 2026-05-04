// src/Card.jsx
import React from 'react';

const Card = ({ name, title, avatar }) => {
  // 定義組件專用的樣式物件
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
    width: '220px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '10px',
    border: '2px solid #eee'
  };

  return (
    <div style={cardStyle}>
      <img src={avatar} alt={name} style={imageStyle} />
      <h3 style={{ margin: '10px 0 5px 0' }}>{name}</h3>
      <p style={{ color: '#888', fontSize: '14px' }}>{title}</p>
    </div>
  );
};

export default Card;