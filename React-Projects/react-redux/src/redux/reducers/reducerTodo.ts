import IAction from "./IAction";
/*
[{id:1, title:""}]
*/
const defaultState = { todos: [{ id: 1, title: "task1" }] };

const reducerTodo = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DEL_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducerTodo;
