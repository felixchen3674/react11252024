import React, { useMemo } from "react";

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16)
  );
}

export default function Input() {
  const id = useMemo(() => uuidv4(), []);

  return (
    <div>
      <label htmlFor={id}>First name</label>
      <input id={id} />
    </div>
  );
}
