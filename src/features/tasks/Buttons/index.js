import { useSelector, useDispatch } from "react-redux";
import { StyledButtons, Button } from "./styled";
import { selectTasksState, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <StyledButtons>
      {tasks.length > 0 && (
        <>
          <Button 
            onClick={() => dispatch(toggleHideDone())}
          >
            {hideDone ? "Pokaż " : "Ukryj "} ukończone
          </Button>
          <Button
            as="button"
            disabled={tasks.every(({ done }) => done)}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </StyledButtons>
  );
};

export default Buttons;
