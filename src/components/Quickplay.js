import React from 'react';

function Quickplay(props) {
  const { profile } = props;

  const best = profile.quickPlayStats.careerStats.allHeroes.best;
  const assists = profile.quickPlayStats.careerStats.allHeroes.assists;
  const combat = profile.quickPlayStats.careerStats.allHeroes.combat;
  const game = profile.quickPlayStats.careerStats.allHeroes.game;
  const average = profile.quickPlayStats.careerStats.allHeroes.average;
  const misc = profile.quickPlayStats.careerStats.allHeroes.miscellaneous;
  const awards = profile.quickPlayStats.careerStats.allHeroes.matchAwards;

  return (
    <div className="section">
      <h1 className="subtitle">QUICKPLAY STATS</h1>
      <div className="table is-bordered is-striped">
        <thead className="subtitle">Best</thead>
        <tbody>
          <tr>
            <td>ALL DAMAGE DONE - MOST IN GAME: </td>
            <td>{best.allDamageDoneMostInGame}</td>
          </tr>
          <tr>
            <td>BARRIER DAMAGE DONE - MOST IN GAME: </td>
            <td>{best.barrierDamageDoneMostInGame}</td>
          </tr>
          <tr>
            <td>defensive assists - most in game: </td>
            <td>{best.defensiveAssistsMostInGame}</td>
          </tr>
          <tr>
            <td>eliminations - most in game: </td>
            <td>{best.eliminationsMostInGame}</td>
          </tr>
          <tr>
            <td>environmental kills - most in game: </td>
            <td>{best.environmentalKillsMostInGame}</td>
          </tr>
          <tr>
            <td>final blows - most in game: </td>
            <td>{best.finalBlowsMostInGame}</td>
          </tr>
          <tr>
            <td>healing done - most in game: </td>
            <td>{best.healingDoneMostInGame}</td>
          </tr>
          <tr>
            <td>hero damage done - most in game: </td>
            <td>{best.heroDamageDoneMostInGame}</td>
          </tr>
          <tr>
            <td>kills streak best: </td>
            <td>{best.killsStreakBest}</td>
          </tr>
          <tr>
            <td>melee final blows - most in game: </td>
            <td>{best.meleeFinalBlowsMostInGame}</td>
          </tr>
          <tr>
            <td>multikills best: </td>
            <td>{best.multikillsBest}</td>
          </tr>
          <tr>
            <td>objective kills - most in game: </td>
            <td>{best.objectiveKillsMostInGame}</td>
          </tr>
          <tr>
            <td>objective time - most in game: </td>
            <td>{best.objectiveTimeMostInGame}</td>
          </tr>
          <tr>
            <td>offensive assists - most in game: </td>
            <td>{best.offensiveAssistsMostInGame}</td>
          </tr>
          <tr>
            <td>environmental kills - most in game: </td>
            <td>{best.environmentalKillsMostInGame}</td>
          </tr>
          <tr>
            <td>solo kills - most in game: </td>
            <td>{best.soloKillsMostInGame}</td>
          </tr>
          <tr>
            <td>teleporter pads destroyed - most in game: </td>
            <td>{best.teleporterPadsDestroyedMostInGame}</td>
          </tr>
          <tr>
            <td>time spent on fire - most in game: </td>
            <td>{best.timeSpentOnFireMostInGame}</td>
          </tr>
          <tr>
            <td>turrets destroyed - most in game: </td>
            <td>{best.turretsDestroyedMostInGame}</td>
          </tr>
        </tbody>
      </div>
      <div className="table is-bordered is-striped">
        <thead className="subtitle">ASSISTS</thead>
        <tbody>
          <tr>
            <td>defensive assists: </td>
            <td>{assists.defensiveAssists}</td>
          </tr>
          <tr>
            <td>healing done: </td>
            <td>{assists.healingDone}</td>
          </tr>
          <tr>
            <td>offensive assists: </td>
            <td>{assists.offensiveAssists}</td>
          </tr>
        </tbody>
      </div>
      <div className="table is-bordered is-striped">
        <thead className="subtitle">COMBAT</thead>
        <tbody>
          <tr>
            <td>damage done: </td>
            <td>{combat.damageDone}</td>
          </tr>
          <tr>
            <td>barrier damage done: </td>
            <td>{combat.barrierDamageDone}</td>
          </tr>
          <tr>
            <td>deaths: </td>
            <td>{combat.deaths}</td>
          </tr>
          <tr>
            <td>eliminations: </td>
            <td>{combat.eliminations}</td>
          </tr>
          <tr>
            <td>environmental kills: </td>
            <td>{combat.environmentalKills}</td>
          </tr>
          <tr>
            <td>final blows: </td>
            <td>{combat.finalBlows}</td>
          </tr>
          <tr>
            <td>hero damage done: </td>
            <td>{combat.heroDamageDone}</td>
          </tr>
          <tr>
            <td>melee final blows: </td>
            <td>{combat.meleeFinalBlows}</td>
          </tr>
          <tr>
            <td>multikills: </td>
            <td>{combat.multikills}</td>
          </tr>
          <tr>
            <td>objective kills: </td>
            <td>{combat.objectiveKills}</td>
          </tr>
          <tr>
            <td>objective time: </td>
            <td>{combat.objectiveTime}</td>
          </tr>
          <tr>
            <td>solo kills: </td>
            <td>{combat.soloKills}</td>
          </tr>
          <tr>
            <td>time spent on fire: </td>
            <td>{combat.timeSpentOnFire}</td>
          </tr>
        </tbody>
      </div>
      <div className="table is-bordered is-striped">
        <thead className="subtitle">GAME</thead>
        <tbody>
          <tr>
            <td>games won: </td>
            <td>{game.gamesWon}</td>
          </tr>
          <tr>
            <td>time played: </td>
            <td>{game.timePlayed}</td>
          </tr>
        </tbody>
      </div>
      <div className="table is-bordered is-striped">
        <thead className="subtitle">AVERAGE</thead>
        <tbody>
          <tr>
            <td>all damage done - avg per 10 min: </td>
            <td>{average.allDamageDoneAvgPer10Min}</td>
          </tr>
          <tr>
            <td>barrier damage done - avg per 10 min: </td>
            <td>{average.barrierDamageDoneAvgPer10Min}</td>
          </tr>
          <tr>
            <td>deaths - avg per 10 min:</td>{' '}
            <td>{average.deathsAvgPer10Min}</td>
          </tr>
          <tr>
            <td>eliminations- avg per 10 min: </td>
            <td>{average.eliminationsAvgPer10Min}</td>
          </tr>
          <tr>
            <td>final blows - avg per 10 min: </td>
            <td>{average.finalBlowsAvgPer10Min}</td>
          </tr>
          <tr>
            <td>healing done - avg per 10 min: </td>
            <td>{average.healingDoneAvgPer10Min}</td>
          </tr>
          <tr>
            <td>hero damage done - avg per 10 min: </td>
            <td>{average.heroDamageDoneAvgPer10Min}</td>
          </tr>
          <tr>
            <td>objective kills - avg per 10 min: </td>
            <td>{average.objectiveKillsAvgPer10Min}</td>
          </tr>
          <tr>
            <td>objective time - avg per 10 min: </td>
            <td>{average.objectiveTimeAvgPer10Min}</td>
          </tr>
          <tr>
            <td>solo kills - avg per 10 min:</td>{' '}
            <td>{average.soloKillsAvgPer10Min}</td>
          </tr>
          <tr>
            <td>time spent on fire - avg per 10 min: </td>
            <td>{average.timeSpentOnFireAvgPer10Min}</td>
          </tr>
        </tbody>
      </div>
      <div className="table is-bordered is-striped">
        <thead className="subtitle">MISCELLANEOUS</thead>
        <tbody>
          <tr>
            <td>teleporter pads destroyed: </td>
            <td>{misc.teleporterPadsDestroyed}</td>
          </tr>
          <tr>
            <td>turrets destroyed: </td>
            <td>{misc.turretsDestroyed}</td>
          </tr>
        </tbody>
      </div>
      <div className="table is-bordered is-striped">
        <thead className="subtitle">MATCH AWARDS</thead>
        <tbody>
          <tr>
            <td>cards: </td>
            <td>{awards.cards}</td>
          </tr>
          <tr>
            <td>medals: </td>
            <td>{awards.medals}</td>
          </tr>
          <tr>
            <td>medals - bronze: </td>
            <td>{awards.medalsBronze}</td>
          </tr>
          <tr>
            <td>medals - silver: </td>
            <td>{awards.medalsSilver}</td>
          </tr>
          <tr>
            <td>medals - gold: </td>
            <td>{awards.medalsGold}</td>
          </tr>
        </tbody>
      </div>
    </div>
  );
}

export default Quickplay;
