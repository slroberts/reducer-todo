import React from "react";

const TodoItem = (props) => {
  return (
    <div id={props.todo.id}>
      {props.todo.item}
      <button onClick={props.itemCompleted}>
        {!props.completed ? "Not Completed" : "Completed"}
      </button>
    </div>
  );
};

export default TodoItem;
