import React from 'react';
import 'bulma/bulma.sass';
import './button.scss';


const Buttons = ({ buttonName='Button', event }) => (
  <button onClick={event} className={'button'}>{buttonName}</button>
);

export default Buttons;
