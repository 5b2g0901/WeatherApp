import Card from "./Card";
import TodoList from "./TodoList"; // 1. 確保有引入檔案
import "./App.css";

function App() {
  const members = [
    { id: 1, name: "張小明", title: "前端工程師", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdxP-awyQIA812UJptzXQ9hhY-TLUkB61ng&s" },
    { id: 2, name: "李美玲", title: "UI/UX 設計師", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKstkObOhdDq6HPins65-guz-H3WbhKzQLGQ&s" }
  ];

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", padding: "20px" }}>我的團隊與任務</h1>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {members.map(m => (
          <Card key={m.id} name={m.name} title={m.title} avatar={m.avatar} />
        ))}
      </div>

      {/* 2. 加上這兩行，TodoList 才會出現在畫面上 */}
      <hr style={{ margin: "40px 0", opacity: 0.3 }} />
      <TodoList /> 
    </div>
  );
}

export default App;