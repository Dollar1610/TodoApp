import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './todo';
require('offline-plugin/runtime').install();

ReactDOM.render(<Todo />,
  document.getElementById('app'));
