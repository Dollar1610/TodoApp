import React from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.scss';

const Footer = ({ copyright='copyright' }) =>
  (
    <footer>
      <div className="copyright">{copyright}</div>
    </footer>
  );

export default Footer;
