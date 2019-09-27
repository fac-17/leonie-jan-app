import React from "react";
import "./HighScoreBoard.css";
const HighScoreBoard = ({hiscore}) => {
 
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
        {hiscore.map((result, i) => (
            <tr key={JSON.stringify(result)+i}>
            <td>{result.score}</td>
            <td>{result.name}</td>
            <td>{result.killer}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighScoreBoard;
