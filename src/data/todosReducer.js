const initialState = {
  todos: [],
  loading: false,
};

const load = "load";
const remove = "remove";
const active = "active";
const statr = "start";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case load:
      return {
        todos: action.payload,
        loading: false,
      };

    case remove:
      return {
        todos: [...state.todos.filter((item) => item.id !== action.payload)],
        loading: false,
      };

    case active:
      return {
        todos: [
          ...state.todos.map((item) => {
            if (item.id === action.payload) {
              return { ...item, completed: !item.completed };
            } else {
              return item;
            }
          }),
        ],
        loading: false,
      };

    case statr:
      return {
        loading: true,
      };

    default:
      return state;
  }
};

export const actionLoad = (payload) => ({ type: load, payload });
export const removeAction = (payload) => ({ type: remove, payload });
export const activeAction = (payload) => ({ type: active, payload });
export const todosStart = (payload) => ({ type: statr, payload });
