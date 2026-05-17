import { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

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

    const foundPerson = persons.find(
      (person) => person.name.toLowerCase() === personObject.name.toLowerCase(),
    );
    if (foundPerson) {
      if (
        window.confirm(
          `${foundPerson.name} is already in the phonebook, would you like to replace their number with ${newNumber}?`,
        )
      ) {
        const changedPerson = {
          ...foundPerson,
          number: newNumber,
        };

        personService
          .update(foundPerson.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === foundPerson.id ? returnedPerson : person,
              ),
            );
            setNewName("");
            setNewNumber("");
          });
      }
    } else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
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

  const handleRemove = (id) => {
    const personToRemove = persons.find((person) => person.id === id);
    if (
      window.confirm(`Are you sure you want to delete ${personToRemove.name}`)
    ) {
      personService.remove(id);
      setPersons(persons.filter((p) => p.id !== id));
    }
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
      <Persons personsToShow={personsToShow} handleRemove={handleRemove} />
    </div>
  );
};

export default App;
