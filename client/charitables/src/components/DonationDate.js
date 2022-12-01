import './DonationDate.css';

function DonationDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="donation-date">
      <div className="donation-month-and-day">{month}</div>
      <div className="donation-month-and-day">{day}</div>
      <div className="donation-year">{year}</div>

    </div>
  );
}

export default DonationDate;