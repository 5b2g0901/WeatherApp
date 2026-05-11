import { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('my-todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem('my-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue("");
  };

  return (
    <div className="todo-card">
      <h2 className="todo-title">🚀 任務儀表板</h2>
      
      <div className="input-box">
        <input 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="輸入新任務..." 
        />
        <button onClick={addTodo}>新增</button>
      </div>

      <div className="todo-stats">
        <span>全部: {todos.length}</span>
        <span>未完成: {todos.filter(t => !t.completed).length}</span>
      </div>

      <ul className="modern-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'item-done' : ''}>
            <span onClick={() => {
              setTodos(todos.map(t => t.id === todo.id ? {...t, completed: !t.completed} : t))
            }}>
              {todo.text}
            </span>
            <button className="del-btn" onClick={() => setTodos(todos.filter(t => t.id !== todo.id))}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;