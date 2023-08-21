import Form from "./Form";
import TaskList from "./TaskList";
import TaskListButtons from "./TaskListButtons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container/styled";
import Search from "./Search";
import SectionButton from "./SectionButton";


function TasksPage() {  
  return (
    <Container>
      <Header 
        title="Lista zadań" 
      />
      <Section 
        title="Dodaj nowe zadanie" 
        body={<Form />}
        headerContent={<SectionButton />}
      />
      <Section 
        title="Wyszukiwarka" 
        body={<Search />} 
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        headerContent={<TaskListButtons />}
      />
    </Container>
  );
}

export default TasksPage;
