var React = require('react');

var LeaderBoardRow = React.createClass({
  render: function() {
    var player = this.props.player;
    return (
      <tr>
        <td>
          {this.props.rank}
        </td>
        <td>
          {player.name}
        </td>
        <td>
          {player.wins}
        </td>
        <td>
          {player.losses}
        </td>
        <td>
          {player.points}
        </td>
      </tr>
    )
  }
});

var LeaderBoard = React.createClass({

  render: function() {
    var players = [];
    var rank = 1;

    for (var key in this.props.allPlayers) {
      players.push(<LeaderBoardRow key={key} rank={rank} player={this.props.allPlayers[key]} />);
      rank++;
    }

    return (
      <div className="ld-leaderboard ld-panel">
        <div className="ld-panel-title">Leader Board</div>
        <table className="ld-table">
          <tr>
            <td>Rank</td>
            <td>Name</td>
            <td>Wins</td>
            <td>Losses</td>
            <td>Points</td>
          </tr>
          {players}
        </table>
      </div>
    )
  }

});

module.exports = LeaderBoard;
