import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "013-109-2903", id: 1 },
    { name: "Pierce Davis", number: "193-124-1253", id: 2 },
    { name: "Max Rutherford", number: "193-658-2940", id: 3 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const personsToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(searchValue.toLowerCase()),
      );

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    const nameFound = persons.find(
      (person) => person.name.toLowerCase() === personObject.name.toLowerCase(),
    );
    if (nameFound) {
      alert(`${personObject.name} is already in the phonebook.`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    setShowAll(false);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
      />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
