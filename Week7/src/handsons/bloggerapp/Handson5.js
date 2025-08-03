import React from "react";
import "./handson5.css"; // Import your custom CSS

function Handson5() {
  return (
    <div className="container">
      <div className="column">
        <h2>Course Details</h2>
        <h3>Angular</h3>
        <p>4/5/2021</p>
        <h3>React</h3>
        <p>6/3/20201</p>
      </div>
      <div className="column">
        <h2>Book Details</h2>
        <p><strong>Master React</strong></p>
        <p>670</p>
        <p><strong>Deep Dive into Angular 11</strong></p>
        <p>800</p>
        <p><strong>Mongo Essentials</strong></p>
        <p>450</p>
      </div>
      <div className="column">
        <h2>Blog Details</h2>
        <h3>React Learning</h3>
        <p><strong>Stephen Biz</strong></p>
        <p>Welcome to learning React!</p>
        <h3>Installation</h3>
        <p><strong>Schwezdneier</strong></p>
        <p>You can install React from npm.</p>
      </div>
    </div>
  );
}

export default Handson5;
