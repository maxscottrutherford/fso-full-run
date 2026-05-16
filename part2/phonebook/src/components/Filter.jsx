const Filter = ({ searchValue, handleSearchChange }) => {
  return (
    <div>
      <h3>Search</h3>
      Enter Name: <input value={searchValue} onChange={handleSearchChange} />
    </div>
  );
};

export default Filter;
