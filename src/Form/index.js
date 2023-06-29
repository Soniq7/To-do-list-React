import { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, sentNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  }

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
        className="form__input"
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
        value={newTaskContent}
        onChange={( {target} ) => sentNewTaskContent(target.value)}
      />
      <button 
        className="form__button"
        onClick={focusInput}
      >
        Dodaj zadanie
      </button>
    </form>
  );
};

export default Form;