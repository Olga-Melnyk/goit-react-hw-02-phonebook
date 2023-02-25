export const Filter = ({ value, onFilterChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onFilterChange} />
    </div>
  );
};
