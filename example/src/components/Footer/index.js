import React from 'react';
// import PropTypes from 'prop-types';
import './style.sass';

import { FaGithub, FaLinkedinIn, FaNpm } from 'react-icons/fa';

const socials = [
  ['https://github.com/Leon31', FaGithub],
  ['https://www.linkedin.com/in/leonardo-di-vittorio/', FaLinkedinIn],
  ['https://www.npmjs.com/package/gallereact', FaNpm],
];

// const A = ({ children, href }) => {
//   return (
//     <a rel="noopener noreferrer" href={href} target="_blank">
//       {children}
//     </a>
//   );
// };

const Footer = () => (
  <>
    <div className="power_container">
      Power with{' '}
      <span role="img" aria-label="love">
        ❤️
      </span>
      by{' '}
      <a href="https://www.leonardodivittorio.com" target="blank">
        div.leo
      </a>
    </div>
    <div className="footer_socials">
      {socials.map(([url, Icon]) => (
        <a key={url} rel="noopener noreferrer" href={url} target="_blank">
          <Icon />
        </a>
      ))}
    </div>
  </>
);

// A.propTypes = {
//   setCheckboxOpts: PropTypes.func.isRequired,
//   checkboxOpts: PropTypes.objectOf(PropTypes.any).isRequired,
// };

export default Footer;
