import React from 'rect';
import PropTypes from 'prop-types';

import './footer.css';

const FILTER_BTN = [
  {
    text: 'All',
    id: 'all'
  },
  {
    text: 'Active',
    id: 'active'
  },
  {
    text: 'Completed',
    id: 'completed'
  },
];

const Footer = ({ amount, activeFilter }) => (
  <div className="footer">
    <span className="amount">{`${amount} Tasks left`}</span>
    <div className="btn-group">
      {FILTER_BTN.map(({ text, id }) => (
        <button
        key={id}
        className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
        >{text}</button>
      ))}

    </div>
  </div>
);

Footer.propTypes = {
  amount: PropTypes.number,
}

export default Footer