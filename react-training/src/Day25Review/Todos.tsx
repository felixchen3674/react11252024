import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then(setTodos);
    //   .then((data)=>setTodos(data));
  }, []);

  return (
    <div>
      <Pagination
        items={todos}
        itemsPerPage={10}
        // {/* render props */}
        renderItem={(todo: any) => {
          const { id, title } = todo;
          return (
            <div key={id}>
              {id}: {title}
            </div>
          );
        }}
      />
    </div>
  );
}
