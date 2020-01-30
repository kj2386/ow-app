import React from 'react';

function Competitive(props) {
  const { profile } = props;

  const best = profile.competitiveStats.careerStats.allHeroes.best;
  const assists = profile.competitiveStats.careerStats.allHeroes.assists;
  const combat = profile.competitiveStats.careerStats.allHeroes.combat;
  const game = profile.competitiveStats.careerStats.allHeroes.game;
  const average = profile.competitiveStats.careerStats.allHeroes.average;
  const misc = profile.competitiveStats.careerStats.allHeroes.miscellaneous;
  const awards = profile.competitiveStats.careerStats.allHeroes.matchAwards;

  return (
    
    <div className="Competitive">
      <h1>Competitive Stats</h1>
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
      <div className="Assists">
        <h2>Assists</h2>
        <ul>
          <li>defensive assists: {assists.defensiveAssists}</li>
          <li>healing done: {assists.healingDone}</li>
          <li>offensive assists: {assists.offensiveAssists}</li>
        </ul>
      </div>
      <div className="Combat">
        <h2>Combat</h2>
        <ul>
          <li>damage done: {combat.damageDone}</li>
          <li>barrier damage done: {combat.barrierDamageDone}</li>
          <li>deaths: {combat.deaths}</li>
          <li>eliminations: {combat.eliminations}</li>
          <li>environmental kills: {combat.environmentalKills}</li>
          <li>final blows: {combat.finalBlows}</li>
          <li>hero damage done: {combat.heroDamageDone}</li>
          <li>melee final blows: {combat.meleeFinalBlows}</li>
          <li>multikills: {combat.multikills}</li>
          <li>objective kills: {combat.objectiveKills}</li>
          <li>objective time: {combat.objectiveTime}</li>
          <li>solo kills: {combat.soloKills}</li>
          <li>time spent on fire: {combat.timeSpentOnFire}</li>
        </ul>
      </div>
      <div className="Game">
        <h2>Game</h2>
        <ul>
          <li>games lost: {game.Lost}</li>
          <li>games played: {game.gamesPlayed}</li>
          <li>games won: {game.gamesWon}</li>
          <li>time played: {game.timePlayed}</li>
        </ul>
      </div>
      <div className="Average">
        <h2>Average</h2>
        <ul>
          <li>
            all damage done - avg per 10 min: {average.allDamageDoneAvgPer10Min}{' '}
          </li>
          <li>
            barrier damage done - avg per 10 min:{' '}
            {average.barrierDamageDoneAvgPer10Min}{' '}
          </li>
          <li>deaths - avg per 10 min: {average.deathsAvgPer10Min} </li>
          <li>
            eliminations- avg per 10 min: {average.eliminationsAvgPer10Min}{' '}
          </li>
          <li>
            final blows - avg per 10 min: {average.finalBlowsAvgPer10Min}{' '}
          </li>
          <li>
            healing done - avg per 10 min: {average.healingDoneAvgPer10Min}{' '}
          </li>
          <li>
            hero damage done - avg per 10 min:{' '}
            {average.heroDamageDoneAvgPer10Min}{' '}
          </li>
          <li>
            objective kills - avg per 10 min:{' '}
            {average.objectiveKillsAvgPer10Min}{' '}
          </li>
          <li>
            objective time - avg per 10 min: {average.objectiveTimeAvgPer10Min}{' '}
          </li>
          <li>solo kills - avg per 10 min: {average.soloKillsAvgPer10Min} </li>
          <li>
            time spent on fire - avg per 10 min:{' '}
            {average.timeSpentOnFireAvgPer10Min}{' '}
          </li>
        </ul>
      </div>
      <div className="Misc">
        <h2>Miscellaneous</h2>
        <ul>
          <li>teleporter pads destroyed: {misc.teleporterPadsDestroyed}</li>
          <li>turrets destroyed: {misc.turretsDestroyed}</li>
        </ul>
      </div>
      <div className="Awards">
        <h2>Match Awards</h2>
        <ul>
          <li>cards: {awards.cards}</li>
          <li>medals: {awards.medals}</li>
          <li>medals - bronze: {awards.medalsBronze}</li>
          <li>medals - silver: {awards.medalsSilver}</li>
          <li>medals - gold: {awards.medalsGold}</li>
        </ul>
      </div>
    </div>
  );
}

export default Competitive;
