/* eslint-disable react/prop-types */
import "./todo-list-item.css";
import check from "../../assests/check.svg";
import toast from "react-hot-toast";

const TodoListItem = ({ item, setItems, setInput, setEditingItemId }) => {
  const handleCheck = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, check: !item.check } : item
      )
    );
  };

  const handleEdit = (id) => {
    setInput(item.text);
    setEditingItemId(id);
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast.success("task deleted successfully");
  };

  return (
    <div className="todo-list-item">
      <div className="left">
        <div
          className={!item.check ? "check-box" : "check-box check-box-active"}
          onClick={() => handleCheck(item.id)}
        >
          {item.check && <img src={check} alt="" />}
        </div>
        <p className="task-text">{item.text}</p>
      </div>
      <div className="right">
        <p className="edit" onClick={() => handleEdit(item.id)}>
          E
        </p>
        <p className="delete" onClick={() => handleDelete(item.id)}>
          X
        </p>
      </div>
    </div>
  );
};

export default TodoListItem;
