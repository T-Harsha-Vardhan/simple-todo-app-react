import { useEffect, useState } from "react";
import "./app.css";
import TodoInput from "./components/todoInput/TodoInput";
import TodoListContainer from "./components/todoListContainer/TodoListContainer";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [completedItems, setCompletedItems] = useState(null);
  const [input, setInput] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    const completedItems = items.filter((item) => {
      return item.check === true;
    });
    setCompletedItems(completedItems.length);
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="app">
      <h1 className="title">ToDo-List App</h1>
      <TodoInput
        input={input}
        setInput={setInput}
        items={items}
        setItems={setItems}
        editingItemId={editingItemId}
        setEditingItemId={setEditingItemId}
      />
      <p className="todo-info">
        {completedItems} from {items.length} lists complete
      </p>
      <TodoListContainer
        items={items}
        setItems={setItems}
        setInput={setInput}
        setEditingItemId={setEditingItemId}
      />
      <Toaster />
    </div>
  );
};

export default App;
