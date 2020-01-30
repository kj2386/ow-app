import React from 'react';

function ProfileHeader(props) {
  const { profile } = props;

  if (profile.length === 0) {
    return null;
  } else if (profile.private === true) {
    return <h1>This profile is private</h1>;
  }
  return (
    <div className="ProfileHeader">
      <div className="section">
        <div className="columns">
          <div className="column">
            <figure className="image is-128x128">
              <img src={profile.icon} alt="player icon" />
            </figure>
          </div>
          <div className="column">
            <h1 className="title">{profile.name}</h1>
          </div>
          <div className="column">
            <h2 className="title">{profile.gamesWon} Games Won</h2>
          </div>
          <div className="column">
            <img src={profile.ratings[0].roleIcon} alt="role icon" />
            <img
              className="rank-icon"
              src={profile.ratings[0].rankIcon}
              alt="rank icon"
            />
            <div className="subtitle">{profile.ratings[0].level}</div>
            <img src={profile.ratings[1].roleIcon} alt="role icon" />
            <img
              className="rank-icon"
              src={profile.ratings[1].rankIcon}
              alt="rank icon"
            />
            <div className="subtitle">{profile.ratings[1].level}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;

{
  /* {profile.ratings.map(data => (
  <div key={data.role}>
    <img src={data.roleIcon} alt="role icon" />
    <img className="rank-icon" src={data.rankIcon} alt="rank icon" />
    <div>{data.level}</div>
  </div>
))} */
}
