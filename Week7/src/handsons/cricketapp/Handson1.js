import React, { useState } from "react";
import IndianPlayers from "./IndianPlayers";
import ListofPlayers from "./ListofPlayers";


function Handson1() {
  const [flag, setFlag] = useState(false);

  const toggleView = () => setFlag(prev => !prev);

  return (
    <div>
      <br>
      </br>
      <button onClick={toggleView}>
        {flag ?"Show Player Scores": "Show Indian Players (Odd/Even)" }
      </button>

      <hr />

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default Handson1;
