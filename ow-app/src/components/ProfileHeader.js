import React from 'react';

function ProfileHeader(props) {
  const { profile } = props;

  if (profile.length === 0) {
    return null;
  } else {
    return (
      <div className='profileHeader'>
        <h1>{profile.name}</h1>
        <img src={profile.icon} alt='player icon' />
        <h2>{profile.gamesWon} Games Won</h2>
      </div>
    );
  }
}

export default ProfileHeader;
