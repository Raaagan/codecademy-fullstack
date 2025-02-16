const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 19
    },
    {
      firstName: 'Lucas',
      lastName: 'Jordan',
      age: 21
    },
    {
      firstName: 'Willy',
      lastName: 'Gomez',
      age: 30
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: 'Wings',
      teamPoints: 23,
      opponentPoints: 12,
    },
    {
      opponent: 'Patriots',
      teamPoints: 8,
      opponentPoints: 36,
    }
  ],

  //Getters
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },

  //Methods
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    const game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    }
    this._games.push(game);
  }

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Nets', 50, 22)
console.log(team.games);