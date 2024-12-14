import React, {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  SyntheticEvent,
  useState,
} from "react";

// to check the Synthetic Events type
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events
export default function FormInputs() {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {};

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSomething = (e: SyntheticEvent) => {};

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={handleClick}>Click</button>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}
