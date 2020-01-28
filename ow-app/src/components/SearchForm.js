import React from 'react';

function SearchForm(props) {
  const {
    setPlatform,
    setRegion,
    setBattlenetID,
    handleSubmit,
    battlenetID,
    platform,
    region
  } = props;
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <select
        name="platform"
        value={platform}
        onChange={event => setPlatform(event.target.value)}
      >
        <option>Platform</option>
        <option value="pc">PC</option>
        <option value="ps4">PS4</option>
        <option value="xbox">XBOX</option>
        <option value="switch">Switch</option>
      </select>
      <select
        name="region"
        value={region}
        onChange={event => setRegion(event.target.value)}
      >
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
        value={battlenetID}
        onChange={event => setBattlenetID(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
