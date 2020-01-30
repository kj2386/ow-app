import React from 'react';

function Quickplay(props) {
  const { profile } = props;

  const best = profile.quickPlayStats.careerStats.allHeroes.best;

  return (
    <div className="Quickplay">
      <h1>Quickplay Stats</h1>
      <div className="best">
        <h2>Best</h2>
        <ul>
          <li>
            ALL DAMAGE DONE - MOST IN GAME: {best.allDamageDoneMostInGame}
          </li>
          <li>
            BARRIER DAMAGE DONE - MOST IN GAME:{' '}
            {best.barrierDamageDoneMostInGame}
          </li>
          <li>
            defensive assists - most in game: {best.defensiveAssistsMostInGame}
          </li>
          <li>eliminations - most in game: {best.eliminationsMostInGame}</li>
          <li>
            environmental kills - most in game:{' '}
            {best.environmentalKillsMostInGame}
          </li>
          <li>final blows - most in game: {best.finalBlowsMostInGame}</li>
          <li>healing done - most in game: {best.healingDoneMostInGame}</li>
          <li>
            hero damage done - most in game: {best.heroDamageDoneMostInGame}
          </li>
          <li>kills streak best: {best.killsStreakBest}</li>
          <li>
            melee final blows - most in game: {best.meleeFinalBlowsMostInGame}
          </li>
          <li>multikills best: {best.multikillsBest}</li>
          <li>
            objective kills - most in game: {best.objectiveKillsMostInGame}
          </li>
          <li>objective time - most in game: {best.objectiveTimeMostInGame}</li>
          <li>
            offensive assists - most in game: {best.offensiveAssistsMostInGame}
          </li>
          <li>
            environmental kills - most in game:{' '}
            {best.environmentalKillsMostInGame}
          </li>
          <li>solo kills - most in game: {best.soloKillsMostInGame}</li>
          <li>
            teleporter pads destroyed - most in game:{' '}
            {best.teleporterPadsDestroyedMostInGame}
          </li>
          <li>
            time spent on fire - most in game: {best.timeSpentOnFireMostInGame}
          </li>
          <li>
            turrets destroyed - most in game: {best.turretsDestroyedMostInGame}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Quickplay;
