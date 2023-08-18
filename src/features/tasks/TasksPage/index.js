import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container/styled";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function TasksPage() {
  const location = useLocation();

  return (
    <Container>
      <Header 
        title="Lista zadań" 
      />
      <Section 
        title="Dodaj nowe zadanie" 
        body={<Form />} 
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        headerContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
