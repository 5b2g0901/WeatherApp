// src/App.jsx
import Card from "./Card";
import TodoList from "./TodoList"; 
import WeatherApp from "./WeatherApp"; // 1. 成功引入全新天氣組件
import "./App.css";

function App() {
  // 原本的團隊成員資料
  const members = [
    { id: 1, name: "張小明", title: "前端工程師", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdxP-awyQIA812UJptzXQ9hhY-TLUkB61ng&s" },
    { id: 2, name: "李美玲", title: "UI/UX 設計師", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKstkObOhdDq6HPins65-guz-H3WbhKzQLGQ&s" }
  ];

  return (
    <div className="container">
      {/* ==================== 1. 團隊名片區 ==================== */}
      <h1 style={{ textAlign: "center", padding: "20px" }}>我的團隊與任務</h1>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {members.map(m => (
          <Card key={m.id} name={m.name} title={m.title} avatar={m.avatar} />
        ))}
      </div>

      {/* ==================== 2. 待辦任務區 ==================== */}
      <hr style={{ margin: "40px 0", opacity: 0.3 }} />
      <TodoList /> 

      {/* ==================== 3. 全球天氣儀表板 ==================== */}
      <hr style={{ margin: "60px 0", borderStyle: "dashed", opacity: 0.3 }} />
      <WeatherApp />
      
    </div>
  );
}

export default App;