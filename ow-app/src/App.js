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

  function handleChange(event) {
    setPlatform(event.target.value);
    setRegion(event.target.value);
    setBattlenetID(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getProfile(platform, region, battlenetID);
  }

  return (
    <div>
      <Header />
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        battlenetID={battlenetID}
        platform={platform}
        region={region}
      />
      <ProfileHeader profile={profile} />
      <Quickplay profile={profile} />
      <Competitive profile={profile} />
    </div>
  );
}

export default App;
