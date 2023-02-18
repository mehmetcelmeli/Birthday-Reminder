import React, { useState } from "react";
import "./index.css";
import List from "./components/List";
import Data from "./components/Data";

function App() {
  const [people, setPeople] = useState(Data);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div>
      <h3>{people.length} birthdays today</h3>
      <List people={people} removePerson={removePerson} />
    </div>
  );
}

export default App;
