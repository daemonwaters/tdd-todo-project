import React from "react";
import styles from "./Button.module.scss";
import { FaCheck, FaPlus, FaTrash } from "react-icons/fa6";

type ButtonProps = {
  variant: "add" | "check" | "trash"
  onClick: () => void;
};

function Button({ variant, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {variant === "add" ? (
        <FaPlus />
      ) : variant === "check" ? (
        <FaCheck />
      ) : (
        <FaTrash />
      )}
      {
        variant === "add" ? (
            "Add"
          ) : variant === "check" ? (
            "Check"
          ) : (
                "Delete"
          )
      }
    </button>
  );
}

export default Button;
