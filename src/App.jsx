// src/App.jsx
import React from 'react';
import Card from './Card'; // 💡 引入剛剛建立的 Card 組件

function App() {
  const userData = [
    { id: 1, name: "張小明", title: "前端工程師", avatar: "https://i.pravatar.cc/150?img=11" },
    { id: 2, name: "李美玲", title: "UI/UX 設計師", avatar: "https://i.pravatar.cc/150?img=5" },
    { id: 3, name: "王大同", title: "產品經理", avatar: "https://i.pravatar.cc/150?img=12" },
    { id: 4, name: "陳小美", title: "公關經理", avatar: "https://i.pravatar.cc/150?img=7" }
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    border: '1px dotted gray',
    margin: '10px',
    borderRadius: '20px'
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>團隊成員</h1>
      <div style={containerStyle}>
        {/* 使用 .map() 渲染多個 Card */}
        {userData.map((user) => (
          <Card 
            key={user.id} 
            name={user.name} 
            title={user.title} 
            avatar={user.avatar} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;