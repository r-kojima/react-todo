import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompletedTodos } from "./components/CompletedTodos";

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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAddButton}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickCompleteButton}
        onClickDelete={onClickDeleteButton}
      />
      <CompletedTodos todos={completedTodos} onClick={onClickBackButton} />
    </>
  );
};
