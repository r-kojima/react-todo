import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completedTodos, setCompletedTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAddButton = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDeleteButton = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); // 第一引数: index, 第二引数: いくつ削除するか
    setIncompleteTodos(newTodos);
  };

  const onClickCompleteButton = (index) => {
    // 未完了のTODOから削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1); // 第一引数: index, 第二引数: いくつ削除するか
    // 完了のTODOに追加
    const newCompletedTodos = [...completedTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompletedTodos(newCompletedTodos);
  };

  const onClickBackButton = (index) => {
    // 完了のTODOから削除
    const newCompletedTodos = [...completedTodos];
    newCompletedTodos.splice(index, 1);
    // 未完了のTODOに追加
    const newIncompleteTodos = [...incompleteTodos, completedTodos[index]];
    setCompletedTodos(newCompletedTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAddButton}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="titile">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p className="row-title">{todo}</p>
                <button onClick={() => onClickCompleteButton(index)}>
                  完了
                </button>
                <button onClick={() => onClickDeleteButton(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p>未完了のTODO</p>
        <ul>
          {completedTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p className="row-title">{todo}</p>
                <button onClick={() => onClickBackButton(index)}>完了</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
