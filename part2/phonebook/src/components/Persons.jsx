const Persons = ({ personsToShow, handleRemove }) => {
  return (
    <div>
      <h3>Numbers</h3>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick={() => handleRemove(person.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Persons