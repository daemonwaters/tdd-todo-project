import React from "react";
import styles from "./Todo.module.scss";
import Button from "../button/Button";

export type TodoProps = {
  title: string;
  id: number;
  checked: boolean;
};

function Todo({ title, id, checked }: TodoProps) {
  return (
    <div key={id} className={styles.todo}>
      <p
        style={{
          textDecoration: checked ? "line-through" : "",
          color: checked ? "green" : "",
        }}
      >
        {title}
      </p>
      {!checked ? (
        <div className={styles.buttons}>
          <Button variant="check" onClick={() => {}} />
          <Button variant="trash" onClick={() => {}} />
        </div>
      ) : (
        <Button variant="trash" onClick={() => {}} />
      )}
    </div>
  );
}

export default Todo;
