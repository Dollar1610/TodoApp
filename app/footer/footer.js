import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.scss';

const Footer = ({ copyright = 'copyright' }) =>
  (
    <footer>
      <div className="copyright">{copyright}</div>
    </footer>
  );

Footer.propTypes = {
  copyright: PropTypes.string,
};

export default Footer;
