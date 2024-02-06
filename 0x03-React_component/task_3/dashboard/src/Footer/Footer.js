import './Footer.css';
import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils.js';

function Footer() {
  return (
      <div className="App-Footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
   </div>
  );
}
export default Footer;
