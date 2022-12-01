import React, { useState } from "react";
import Donations from "../components/Donations";
import NewDonation from "../components/userinputforms/NewDonation";
const DUMMY_DONATIONS = [
  {
    id: "e1",
    orgname: "ABC Org",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "d2", orgname: "DEF Org", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    orgname: "XYZ Org",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    orgname: "APX Org",
    amount: 345.9,
    date: new Date(2019, 2, 28),
  },
  {
    id: "e4",
    orgname: "QWERTY Org",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function Donate() {
  const [donations, setDonations] = useState(DUMMY_DONATIONS);

  const donationDataHandler = (donation) => {
    setDonations((prevDonations) => {
      return [donation, ...prevDonations];
    });
  };
  return (
    <div className="donate">
      <NewDonation onSaveDonation={donationDataHandler} />
      <Donations items={donations} />
    </div>
  );
}

export default Donate;
