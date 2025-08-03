import React, { useState } from "react";


function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome back</h2>;
  }
  return <h2>Please sign up.</h2>;
}

function Handson4() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ padding: "30px" }}>
      <Greeting isLoggedIn={isLoggedIn} />
      <button onClick={handleClick}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Handson4;
