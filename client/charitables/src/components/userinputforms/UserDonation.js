import React, { useState } from 'react';

import './UserDonation.css';

const UserDonation = (props) => {
  
  const [enteredOrg, setEnteredOrg]  = useState('');
  const [enteredHours, setEnteredHours] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const orgChangeHandler = (event) => {
    setEnteredOrg(event.target.value);
  };

  const hoursChangeHandler = (event) => {
    setEnteredHours(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    const donationData = {
      orgname: enteredOrg,
      hours: +enteredHours,
      date: new Date(enteredDate) ,
    };

    props.onLogDonation(donationData);
    setEnteredHours('');
    setEnteredDate('');
    setEnteredOrg('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='donation__controls'>
        <div className='donation__control'>
          <label>Organisation Name</label>
          <input type='text' value={enteredOrg} onChange={orgChangeHandler}/>
        </div>
        <br></br>
        <div className='donation__control'>
          <label>Hours</label>
          <input type='number' min='0.01' step='0.01' value={enteredHours} onChange={hoursChangeHandler}/>
        </div>
        <br></br>
        <div className='donation__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
        </div>
        <br></br>
        <div className='donation__actions'>
        <button type='submit' align>Log Hours</button>
        </div>
      </div>
    </form>
  );
};

export default UserDonation;