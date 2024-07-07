/* eslint-disable react/prop-types */
import "./todo-input.css";
import toast from "react-hot-toast";

const TodoInput = ({
  input,
  setInput,
  items,
  setItems,
  editingItemId,
  setEditingItemId,
}) => {
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      if (editingItemId !== null) {
        // Update existing item
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === editingItemId ? { ...item, text: input } : item
          )
        );
        localStorage.setItem("items", JSON.stringify(items));
        toast.success("Task successfully updated");
        setEditingItemId(null);
      } else {
        // Add new item
        const checkSameTextItem = items.filter((item) => item.text === input);
        if (checkSameTextItem.length <= 0) {
          setItems((prev) => [
            ...prev,
            {
              id: prev.length ? prev[prev.length - 1].id + 1 : 1,
              text: input,
              check: false,
            },
          ]);
          toast.success("Successfully created your task!");
        } else {
          toast("Task already available");
        }
      }

      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        name="inputList"
        id="inputList"
        placeholder="Input List"
        value={input}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <div className="button-wrapper">
        <button className="btn" onClick={handleSubmit}>
          {editingItemId !== null ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
