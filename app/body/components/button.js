import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';


const Buttons = ({ buttonName = 'Button', event }) => (
  <button onClick={event} className={'application_button button'}>{buttonName}</button>
);

Buttons.propTypes = {
  buttonName: PropTypes.string,
  event: PropTypes.func,
};

export default Buttons;
