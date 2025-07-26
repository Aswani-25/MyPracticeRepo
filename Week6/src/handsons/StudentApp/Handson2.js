import React from 'react';

function Home() { return <h3>Welcome to the Home page of Student Management Portal</h3>; }
function About() { return <h3>Welcome to the About page of the Student Management Portal</h3>; }
function Contact() { return <h3>Welcome to the Contact page of the Student Management Portal</h3>; }

export default function Handson2() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
}
