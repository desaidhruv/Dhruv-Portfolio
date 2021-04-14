import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <hr />
      <div className="footer-top">
        <div className="message">Say Hello</div>
        <div className="links">
          <div className="link">
            <p>
              <a
                data-text="wa.me/oluwaseyi"
                href="https://wa.me/+919819975174"
                target="_blank"
                rel="noopener noreferrer"
              >
                wa.me/desaidhruv
              </a>
            </p>
            <p>
              <a
                data-text="dhruvshah28@gmail.com"
                href="mailto:dhruvshah28@gmail.com"
              >
                dhruvshah28@gmail.com
              </a>
            </p>
          </div>
          <div className="link">

            <p>
              <Link data-text="Resume" to="/about">
                Resume
              </Link>
            </p>

            <p>
              <Link data-text="Contact" to="/contact">
                Contact
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© Dhruv Desai 2021</div>
    </footer>
  );
};

export default Footer;
