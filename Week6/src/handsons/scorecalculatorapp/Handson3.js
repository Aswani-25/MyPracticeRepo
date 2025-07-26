import React, { useState } from 'react';
import './Handson3.css';

export default function Handson3() {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [total, setTotal] = useState('');
  const [goal, setGoal] = useState('');
  const [percentage, setPercentage] = useState(null);

  const calculate = () => {
    if (parseFloat(goal) > 0) {
      const percent = ((parseFloat(total) / parseFloat(goal)) * 100).toFixed(2);
      setPercentage(percent);
    } else {
      setPercentage(null);
      alert('Maximum marks must be greater than 0');
    }
  };

  return (
    <div className="container">
      <h2>Student Details</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="School" value={school} onChange={e => setSchool(e.target.value)} />
      <input placeholder="Marks Obtained" value={total} onChange={e => setTotal(e.target.value)} />
      <input placeholder="Maximum Marks" value={goal} onChange={e => setGoal(e.target.value)} />
      <button onClick={calculate}>Calculate Percentage</button>
      {percentage && <p>{name} from {school} has scored {percentage}%</p>}
    </div>
  );
}
