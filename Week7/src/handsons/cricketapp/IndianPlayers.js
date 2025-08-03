import React from "react";


const T20 = ["Virat", "Rohit", "Pant", "Bumrah"];
const Ranji = ["Gill", "Jadeja", "Rahul", "Ashwin"];
const all = [...T20, ...Ranji];

const players = ["Virat", "Rohit", "Pant", "Jadeja", "Bumrah", "Shami"];
const odd = players.filter((_, i) => i % 2 === 0);
const even = players.filter((_, i) => i % 2 === 1);

function IndianPlayers() {
  return (
    <div>
      <h2>Odd Players</h2>
      <ul>{odd.map((p, i) => (
        <li key={i}>{`${getOrdinal(i * 2 + 1)} : ${p}${i * 2 + 1}`}</li>
      ))}</ul>

      <h2>Even Players</h2>
      <ul>{even.map((p, i) => (
        <li key={i}>{`${getOrdinal(i * 2 + 2)} : ${p}${i * 2 + 2}`}</li>
      ))}</ul>

    </div>
  );
}

function getOrdinal(n) {
  const ord = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'];
  return ord[n - 1] || `${n}th`;
}

export default IndianPlayers;
