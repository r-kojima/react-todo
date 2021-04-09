import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいいい"
  ]);

  const [completedTodos, setCompletedTodos] = useState(["ううううう"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="titile">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <p className="row-title">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p>未完了のTODO</p>
        <ul>
          {completedTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <p className="row-title">todo</p>
                <button>完了</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
