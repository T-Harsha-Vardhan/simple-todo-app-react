/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import TodoListItem from "../todoListItem/TodoListItem";
import "./todo-list-container.css";

const TodoListContainer = ({ items, setItems, setInput, setEditingItemId }) => {
  return (
    <div className="todo-list-container">
      {items.map((item, idx) => (
        <TodoListItem
          key={idx}
          item={item}
          setItems={setItems}
          setInput={setInput}
          setEditingItemId={setEditingItemId}
        />
      ))}
    </div>
  );
};

export default TodoListContainer;
