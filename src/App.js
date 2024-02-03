import { useEffect } from "react";
import { useState } from "react";
import Bin from "./assets/bin.svg";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  const deleteBtn = (id) => {
    setData([...data.filter((item) => item.id !== id)]);
  };

  useEffect(() => {});

  return (
    <div className="wrapper">
      <div className="container">
        <div className="logo">
          <h1>TodoList</h1>
        </div>

        <div className="tasks">
          <h2 className="tasks__title">tasks</h2>

          <div className="tasks__items">
            {data.map((item) => {
              return (
                <div
                  className={
                    item.completed
                      ? "tasks__item tasks__item_active"
                      : "tasks__item"
                  }
                  key={item.id}>
                  <p>{item.title}</p>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    className="tasks__input"
                  />
                  <img
                    src={Bin}
                    className="tasks__bin"
                    onClick={() => deleteBtn(item.id)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
