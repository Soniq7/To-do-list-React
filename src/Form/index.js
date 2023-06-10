import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, sentNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    sentNewTaskContent("");

    if (newTaskContent.trim() !== "") {
      addNewTask(newTaskContent.trim());
    } 
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        onChange={( {target} ) => sentNewTaskContent(target.value)}
        className="form__input"
        autoFocus
        placeholder="Co jest do zrobienia?"
      />
      <button className="form__button">
        Dodaj zadanie
      </button>
    </form>
  );
};

export default Form;