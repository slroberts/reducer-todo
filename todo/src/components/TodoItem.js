import React from "react";

const TodoItem = (props) => {
  return <div key={props.todo.id}>{props.todo.item}</div>;
};

export default TodoItem;
