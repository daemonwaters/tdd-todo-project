import React from "react";
import styles from "./Inbox.module.scss";
import Todo from "../todo/Todo";
import { TodoProps } from "../todo/Todo";
import { FaCheck, FaQuestionCircle } from "react-icons/fa";

export type InboxProps = {
  todos: Array<TodoProps>;
};

function Inbox({ todos }: InboxProps) {
  if (todos === undefined || null) {
    return (
      <div className={styles.inbox}>
        <div className={styles.error}>
          <FaQuestionCircle />
          <h5>Something went wrong!</h5>
        </div>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className={styles.inbox}>
        <div className={styles.empty}>
          <FaCheck />
          <h5>Seems you have no tasks!</h5>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.inbox}>
      {[
        ...todos.filter((todo) => todo.checked),
        ...todos.filter((todo) => !todo.checked),
      ].map((todo) => {
        return <Todo id={todo.id} title={todo.title} checked={todo.checked} />;
      })}
    </div>
  );
}

export default Inbox;
