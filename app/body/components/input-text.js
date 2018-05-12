import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/bulma.sass';
import './input-text.scss';

const InputText = ({ id, inputClass, error, inputRef }) => (
  <div className="field">
    <input ref={inputRef} id={id} className={inputClass} type="text" placeholder="Enter text" />
    {error ? <p className="help is-danger">Empty text field</p> : '' }
  </div>
);

InputText.propTypes = {
  id: PropTypes.string,
  inputClass: PropTypes.string,
  error: PropTypes.bool,
  inputRef: PropTypes.func,
};

export default InputText;
