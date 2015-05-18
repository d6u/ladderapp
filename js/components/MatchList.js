var React = require('react');
var moment = require('moment');

var MatchListRow = React.createClass({
  render: function() {
    var match = this.props.match;
    return (
      <tr>
        <td>
          {moment(match.createdAt).fromNow()}
        </td>
        <td>
          {match.winner.name}
        </td>
        <td>
          {match.loser.name}
        </td>
      </tr>
    )
  }
});

var MatchList = React.createClass({

  render: function() {
    var matches = this.props.allMatches;
    var matchRows = [];

    for (var key in this.props.allMatches) {
      matchRows.push(<MatchListRow key={key} match={matches[key]} />);
    }

    return (
      <div className="ld-match-list ld-panel">
        <div className="ld-panel-title">Recent Matches</div>
        <table className="ld-table">
          <tr>
            <td>Date</td>
            <td>Winner</td>
            <td>Loser</td>
          </tr>
          {matchRows}
        </table>
      </div>
    )
  }

});

module.exports = MatchList;
