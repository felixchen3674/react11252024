import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addTodo, Todo } from "../../redux/slices/todosSlice";
import uuid from "../../util/uuid";

export default function NewTodo() {
  const [task, setTask] = useState<string>("");

  const dispatch = useAppDispatch();

  // event handlers can be impure
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newTodo: Todo = {
      // always, the id should be coming from the server/backend
      // we are just doing this for now

      id: uuid(),
      task,
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input required value={task} onChange={(e) => setTask(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}
