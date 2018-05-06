import React from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';

const Header = ({ productName='Product name', mail='test@mail.ru' }) =>
  (
    <header>
      <div className="productName">{productName}</div>
      <div className="mail">{mail}</div>
    </header>
  );

export default Header;
