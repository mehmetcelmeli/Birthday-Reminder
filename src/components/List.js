import React from "react";
import "./list.css";

function List({ people, removePerson }) {
  return (
    <div>
      {people.map((person) => {
        const { id, name, image, age } = person;

        return (
          <article className="container" key={id}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{age} Years</p>
            <div className="button">
              <button className="btn" onClick={() => removePerson(id)}>
                Dismiss
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
