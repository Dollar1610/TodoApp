import React from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/bulma.sass';
import './input-text.scss';

const InputText = ({ id }) => (
  <input id={id} className="input" type="text" placeholder="Enter text" />
);

export default InputText;
