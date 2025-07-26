import React from 'react';
import styles from './CohortDetails.module.css';

export default function Handson5() {
  const cohorts = [
    {
      id: 1,
      name: 'INTADMDF10 - .NET FSD',
      status: 'Scheduled',
      startDate: '22-Feb-2022',
      endDate: '02-Mar-2022',
      coach: 'Aathma',
      trainer: 'Jojo Jose'
    },
    {
      id: 2,
      name: 'ADM21JF014 - Java FSD',
      status: 'Ongoing',
      startDate: '10-Sep-2021',
      endDate: '20-Sep-2021',
      coach: 'Apoorp',
      trainer: 'Elisa Smith'
    },
    {
      id: 3,
      name: 'CDBJF21025 - Java FSD',
      status: 'Ongoing',
      startDate: '24-Dec-2021',
      endDate: '31-Dec-2021',
      coach: 'Aathma',
      trainer: 'John Doe'
    }
  ];

  const getColor = (status) => {
    if (status === 'Ongoing') return 'green'; 
    return 'blue'; 
  };

  return (
    <div>
      <h2>Cohort Details</h2>
      {cohorts.map(c => (
        <div key={c.id} className={styles.box}>
          <h3 style={{ color: getColor(c.status) }}>{c.name}</h3>
          <dt>Start Date: {c.startDate}</dt>
          <dt>End Date: {c.endDate}</dt>
          <dt>Current Status: {c.status}</dt>
          <dt>Coach: {c.coach}</dt>
          <dt>Trainer: {c.trainer}</dt>
        </div>
      ))}
    </div>
  );
}
