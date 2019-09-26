import React from "react";
import "./HighScoreBoard.css";
const HighScoreBoard = () => {
  const hs = JSON.parse(localStorage.getItem("hs") || "[]");
  const sorted = hs.sort((a, b) => b.score - a.score).slice(0, 10);
  return (
    <div className="highscore">
      <table>
        <thead>
          <tr>
            <th>Score</th>
            <th>Player name</th>
            <th>Merged by</th>
          </tr>
        </thead>
        <tbody>
        {sorted.map((result, i) => (
            <tr key={i}>
            <td>{result.score}</td>
            <td> {result.name}</td>
            <td> {result.killer}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighScoreBoard;
