import React from 'react';

function SearchForm(props) {
  const { handleChange, handleSubmit, battlenetID, platform, region } = props;
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <select name="platform" value={platform} onChange={handleChange}>
        <option>Platform</option>
        <option value="pc">PC</option>
        <option value="ps4">PS4</option>
        <option value="xbox">XBOX</option>
        <option value="switch">Switch</option>
      </select>
      <select name="region" value={region} onChange={handleChange}>
        <option>Region</option>
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
