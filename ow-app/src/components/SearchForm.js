import React from 'react';

function SearchForm(props) {
  const { handleChange, handleSubmit, battlenetID } = props;
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <select>
        <option value="pc">PC</option>
        <option value="ps4">PS4</option>
        <option value="xbox">XBOX</option>
        <option value="switch">Switch</option>
      </select>
      <select>
        <option value="us">US</option>
        <option value="eu">Europe</option>
        <option value="asia">Asia</option>
      </select>
      <input
        placeholder="Battlenet ID"
        type="text"
        name="battlenetID"
        required
        onChange={handleChange}
        value={battlenetID}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
