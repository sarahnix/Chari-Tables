import React, { useState } from 'react';

import UserDonation from './UserDonation';
import './NewDonation.css';

const NewDonation = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const logDonationDataHandler = (enteredDonationData) => {
    const donationDatatoSave = {
      ...enteredDonationData,
      id : Math.random().toString()
    };
    props.onSaveDonation(donationDatatoSave);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className='new-donation'>
     {!isEditing && (<button onClick={startEditingHandler}>Log Volunatary Hours</button> )}
     {isEditing && (
        <UserDonation
        onLogDonation={logDonationDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewDonation;