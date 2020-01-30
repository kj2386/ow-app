import React, { useEffect, useState } from 'react';
import Header from './components/Header.js';
import SearchForm from './components/SearchForm';
import Quickplay from './components/Quickplay';
import Competitive from './components/Competitive';
import ProfileHeader from './components/ProfileHeader';

function App() {
  const searchOptions = {
    api: 'https://ow-api.com/v1/stats/',
    endpoint: '/complete'
  };

  const [profile, setProfile] = useState([]);
  const [battlenetID, setBattlenetID] = useState('');
  const [platform, setPlatform] = useState('');
  const [region, setRegion] = useState('');
  const [show, setShow] = useState(true);
  const [buttonText, setButtonText] = useState('Competitive');

  useEffect(() => {
    getProfile(platform, region, battlenetID);
  }, []);

  function getProfile(platform, region, battlenetID) {
    const url = `${searchOptions.api}${platform}/${region}/${battlenetID}${searchOptions.endpoint}`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setProfile(response);
      })
      .catch(console.error);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getProfile(platform, region, battlenetID);
  }

  function toggle() {
    setShow(!show);
    setButtonText(buttonText === 'Competitive' ? 'Quickplay' : 'Competitive');
  }

  return (
    <div>
      <Header />
      <SearchForm
        setPlatform={setPlatform}
        setRegion={setRegion}
        setBattlenetID={setBattlenetID}
        handleSubmit={handleSubmit}
        battlenetID={battlenetID}
        platform={platform}
        region={region}
      />
      {profile.quickPlayStats && profile.quickPlayStats.careerStats ? (
        <ProfileHeader profile={profile} />
      ) : null}

      {profile && profile.quickPlayStats ? (
        <button
          className="button is-primary is-large is-fullwidth is-outlined is-focused is-hovered"
          onClick={toggle}
        >
          {buttonText}
        </button>
      ) : null}

      {show && profile.quickPlayStats && profile.quickPlayStats.careerStats ? (
        <Quickplay profile={profile} />
      ) : null}

      {!show &&
      profile.competitiveStats &&
      profile.competitiveStats.careerStats ? (
        <Competitive profile={profile} />
      ) : null}
    </div>
  );
}

export default App;
