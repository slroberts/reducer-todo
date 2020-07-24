export const initialTodoState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const addNewTodo = {
        item: action.payload,
        completed: false,
        id: Date.now(),
      };
      return [...state, addNewTodo];
    }

    case TOGGLE_COMPLETED: {
      return state.map((todo) =>
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo
      );
    }

    case CLEAR_COMPLETED: {
      return state.filter((todo) => !todo.completed);
    }

    default:
      return state;
  }
};
