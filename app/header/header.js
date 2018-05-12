import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ productName = 'Product name', mail = 'test@mail.ru' }) =>
  (
    <header>
      <div className="product-name">{productName}</div>
      <div className="mail">{mail}</div>
    </header>
  );

Header.propTypes = {
  productName: PropTypes.string,
  mail: PropTypes.string,
};

export default Header;
