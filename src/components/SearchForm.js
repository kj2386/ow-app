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
    <div className="tile">
      <form onSubmit={handleSubmit} className="field is-grouped">
        <p className="control">
          <span className="select">
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
          </span>
        </p>

        <p className="control">
          <span className="select">
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
          </span>
        </p>
        <p className="control is-expanded">
          <input
            className="input"
            placeholder="Battlenet ID"
            type="text"
            name="battlenetID"
            required
            value={battlenetID}
            onChange={event =>
              setBattlenetID(event.target.value.replace('#', '-'))
            }
          />
        </p>

        <div className="control">
          <button className="button is-primary" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
