import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleTodo } from "../redux/slices/todosSlice";

export default function ArchivedPage() {
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <h2>TodosPage</h2>
      <div>
        {todos
          .filter((todo) => todo.completed)
          .map((todo) => {
            const { id, task } = todo;
            return (
              <div key={id}>
                <div>Task: {task}</div>
                <button onClick={() => handleToggle(id)}>Undo</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
