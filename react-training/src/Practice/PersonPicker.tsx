import { useEffect, useState } from "react";

interface Person {
  name: string;
  picked: boolean;
}

const defaultPeople: Person[] = [
  { name: "Danny", picked: false },
  { name: "Grace", picked: false },
  { name: "Alvin", picked: false },
  { name: "Joyce", picked: false },
  { name: "Leo", picked: false },
  { name: "Nick", picked: false },
  { name: "Rui", picked: false },
  { name: "Ying", picked: false },
  { name: "Zhikang", picked: false },
];

export default function PersonPicker() {
  const [people, setPeople] = useState<Person[]>(defaultPeople);
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    const _people = localStorage.getItem("people");
    if (_people) {
      setPeople(JSON.parse(_people));
    }
  }, []);

  console.log(people);

  useEffect(() => {
    const remains = people.filter((person) => !person.picked);
    if (remains.length === 0) {
      setPeople(defaultPeople);
      setWinner(null);
    }

    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  const handlePick = () => {
    // used to select a random person
    const remains = people.filter((person) => !person.picked);
    const index = Math.floor(Math.random() * remains.length);
    const selectedPerson = remains[index];
    setWinner(selectedPerson.name);
    setPeople(
      people.map((person) => {
        return person.name === selectedPerson.name
          ? { ...person, picked: true }
          : person;
      })
    );
  };

  return (
    <div>
      <h2>Person Picker</h2>
      <div>Picked Person: {winner}</div>
      <button onClick={handlePick}>Pick Next</button>
      <ul>
        {people
          .filter((person) => !person.picked)
          .map((person) => (
            <li key={person.name}>{person.name}</li>
          ))}
      </ul>
    </div>
  );
}
