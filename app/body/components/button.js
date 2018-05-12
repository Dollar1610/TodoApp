import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/bulma.sass';
import './button.scss';


const Buttons = ({ buttonName = 'Button', event }) => (
  <button onClick={event} className={'application_button button'}>{buttonName}</button>
);

Buttons.propTypes = {
  buttonName: PropTypes.string,
  event: PropTypes.func,
};

export default Buttons;
