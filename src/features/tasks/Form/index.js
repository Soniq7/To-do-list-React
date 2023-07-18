import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

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
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
        value={newTaskContent}
        onChange={( {target} ) => sentNewTaskContent(target.value)}
      />
      <Button 
        onClick={focusInput}
      >
        Dodaj zadanie
      </Button>
    </StyledForm>
  );
};

export default Form;