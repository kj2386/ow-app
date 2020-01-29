import React from 'react';

function ProfileHeader(props) {
  const { profile } = props;

  if (profile.length === 0) {
    return null;
  } else if (profile.private === true) {
    return <h1>This profile is private</h1>;
  }
  return (
    <div className="profileHeader">
      <img src={profile.icon} alt="player icon" />
      <h1>{profile.name}</h1>
      <h2>{profile.gamesWon} Games Won</h2>
      <div className="level-container">
        <img className="lvl-border" src={profile.levelIcon} alt="level icon" />
        <div>{profile.level}</div>
        <img
          className="lvl-stars"
          src={profile.prestigeIcon}
          alt="prestige icon"
        />
      </div>
      <div className="endorse-container">
        <img src={profile.endorsementIcon} alt="endorsement icon" />
        <div>{profile.endorsement}</div>
      </div>
      <div className="ratings-container">
        {profile.ratings.map(data => (
          <div key={data.role}>
            <img src={data.roleIcon} alt="role icon" />
            <img className="rank-icon" src={data.rankIcon} alt="rank icon" />
            <div>{data.level}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileHeader;
