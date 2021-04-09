import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="titile">未完了のTODO</p>
        <ul>
          <li className="list-row">
            <p className="row-title">あああ</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p>未完了のTODO</p>
        <ul>
          <li className="list-row">
            <p className="row-title">あああ</p>
            <button>完了</button>
          </li>
        </ul>
      </div>
    </>
  );
};
