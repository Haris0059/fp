// Write a PURE function "increaseScore" which updates the score of a "player" object (1st parameter)
// by a fixed amount (2nd parameter).
// Example of a player object:
player1 = {"name": "Osman", "score": 30}

const increaseScore = (player, score) => (
    {"name": player.name, "score": player.score + score}
);
