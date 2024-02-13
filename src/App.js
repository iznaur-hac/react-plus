import { useEffect } from "react";
import Bin from "./assets/bin.svg";
import { useDispatch, useSelector } from "react-redux";
import { LoadTodos } from "./data/actions";
import { removeAction } from "./data/todosReducer";
import { activeAction } from "./data/todosReducer";

function App() {
  const todos = useSelector((state) => state.todos);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadTodos());
  }, []);

  const remove = (id) => {
    dispatch(removeAction(id));
  };

  const active = (id) => {
    dispatch(activeAction(id));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="logo">
          <h1>TodoList</h1>
        </div>

        <div className="tasks">
          <h2 className="tasks__title">tasks</h2>

          <div className="tasks__items">
            {loading ? (
              <h2 className="load">loading...</h2>
            ) : (
              todos.map((item) => {
                return (
                  <div
                    className={
                      item.completed
                        ? "tasks__item"
                        : "tasks__item tasks__item_active"
                    }
                    key={item.id}>
                    <p>{item.title}</p>
                    <input
                      type="checkbox"
                      checked={item.completed}
                      className="tasks__input"
                      onChange={() => active(item.id)}
                    />
                    <img
                      src={Bin}
                      className="tasks__bin"
                      alt="bin"
                      onClick={() => remove(item.id)}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
