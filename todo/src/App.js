import React, {useState, useReducer} from "react";
import {
  todoReducer,
  initialTodoState,
  ADD_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED,
} from "../src/reducers/";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodoSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_TODO,
      payload: newTodo,
    });

    setNewTodo("");
  };

  return (
    <div>
      <TodoForm
        handleChanges={handleChanges}
        addTodoSubmit={addTodoSubmit}
        newTodo={newTodo}
      />
      {state.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            completed={todo.completed}
            itemCompleted={() => {
              dispatch({
                type: TOGGLE_COMPLETED,
                id: todo.id,
              });
            }}
          />
        );
      })}

      <button onClick={() => dispatch({type: CLEAR_COMPLETED})}>
        Clear Completed
      </button>
    </div>
  );
}

export default App;
