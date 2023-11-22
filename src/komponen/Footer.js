import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h2>Navigate</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>Contact</h2>
        <ul>
          <p className='isi'>Email: irsanmufid@gmail.com</p>
          <p className='isi'>Telepon: +6289648130367 (irsan) </p>
          <p className='isi'>Indonesia</p>
        </ul>
      </div>

      <div className="footer-section">
        <h2>Social</h2>
        <ul className="social-icons">
          <li>
            <a href="https://api.whatsapp.com/send?phone=6289648130367">
              <FontAwesomeIcon icon={faWhatsapp} size='xl' style={{ color: "#00000", }} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ir.mufid/">
              <FontAwesomeIcon icon={faInstagram} size="xl" style={{ color: "#00000", }} />
            </a>
          </li>
          <li>
            <a href='https://github.com/Mufidirsan'>
              <FontAwesomeIcon icon={faGithub} size="xl" style={{ color: "#00000", }} />
            </a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <p>Copyright &copy; 2023 Mufid Irsan</p>
      </div>
    </footer>
  );
}

export default Footer;