import React from "react";

export const CompletedTodos = (props) => {
  const { todos, onClick } = props;
  return (
    <div className="complete-area">
      <p>未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <p className="row-title">{todo}</p>
              <button onClick={() => onClick(index)}>完了</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
