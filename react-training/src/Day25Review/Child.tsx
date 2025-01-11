import React from "react";

interface ChildProps {
  a: string;
  handleClick?: () => void;
  address?: {
    street: string;
    zip: string;
  };
}

function Child(props: ChildProps) {
//   const { a, address, handleClick } = props;
  console.log("child rendering");

  return <div>Child</div>;
}

export default React.memo(Child);
