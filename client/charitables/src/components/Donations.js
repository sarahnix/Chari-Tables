import React, { useState } from 'react';
import DonationItem from "./DonationItem";
import DonationFilter from "./DonationFilter";
import DonationsChart from "./DonationsChart";

import './Donations.css';

function Donations(props){

  const [filteredYear, setFilteredYear] = useState('2021');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredDonations = props.items.filter((donation) => {
    return donation.date.getFullYear().toString() === filteredYear;
  });

  let donationHis = <p className="nodonations">No donations found.</p>;

  if (filteredDonations.length > 0) {
    donationHis = filteredDonations.map((donation) => (
      <DonationItem 
      key = {donation.id}
      orgname = {donation.orgname} 
      hours = {donation.hours}
      date = {donation.date}
       />
    ));
  }



    return (
    <div className="donations">
      <DonationFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <DonationsChart donations ={filteredDonations} />
        {donationHis}
    </div>
    );
};

export default Donations;