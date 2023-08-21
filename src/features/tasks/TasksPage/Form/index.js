import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import Input from "../../Input/styled";

const Form = () => {
  const [newTaskContent, sentNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    };

    dispatch(
      addTask({
        content: trimmedNewTaskContent,
        done: false,
        id: nanoid(),
      })
    );

    sentNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
        value={newTaskContent}
        onChange={({ target }) => sentNewTaskContent(target.value)}
      />
      <Button 
        onClick={focusInput}>Dodaj zadanie
      </Button>
    </StyledForm>
  );
};

export default Form;
