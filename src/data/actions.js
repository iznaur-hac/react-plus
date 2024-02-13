import { actionLoad } from "./todosReducer";
import { todosStart } from "./todosReducer";

export function LoadTodos() {
  return function (dispatch) {
    dispatch(todosStart());
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        dispatch(actionLoad(json));
      });
  };
}
