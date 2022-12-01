import DonationDate from './DonationDate';
import './DonationItem.css';

function DonationItem(props) {
  return (
    <div className='donation-item'>
      <DonationDate date={props.date} />
      <div className='donation-item__description'>
        <h2>{props.orgname}</h2>
        <div className='donation-item__price'>{props.hours} hours</div>
      </div>
    </div>
  );
}

export default DonationItem;