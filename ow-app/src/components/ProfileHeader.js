import React from 'react';

function ProfileHeader(props) {
  const { profile } = props;
  console.log(profile)
  if (!profile.length) {
    return <h2>No profile found!</h2>;
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
