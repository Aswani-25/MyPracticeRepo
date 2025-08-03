import React from "react";


const players = [
  { name: "Virat", score: 95 },
  { name: "Rohit", score: 88 },
  { name: "Rahul", score: 45 },
  { name: "Pant", score: 71 },
  { name: "Jadeja", score: 30 },
  { name: "Bumrah", score: 60 },
  { name: "Shami", score: 50 },
  { name: "Ashwin", score: 79 },
  { name: "Dhawan", score: 63 },
  { name: "Gill", score: 91 },
  { name: "Kohli", score: 80 }
];

const lowScorers = players.filter(p => p.score < 70);

function ListofPlayers() {
  return (
    <div>
      <h2>All Players and Scores</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{p.name}: {p.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {lowScorers.map((p, i) => (
          <li key={i}>{p.name}: {p.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
