import React from "react";
import "../Footer/Footer.css";
import instagram from "../Footer/instagram.png";
import facebook from "../Footer/facebook.png";
import twitter from "../Footer/twitter.png";
import "../../Css/aem-grid.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--3">
              <div className="footer__account">
                <h4>Account</h4>
                <ul>
                  <li>
                    <a href="#">Sign In</a>
                  </li>
                  <li>
                    <a href="#">Register</a>
                  </li>
                  <li>
                    <a href="#">Order Status</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--3">
              <div className="footer__about">
                <h4>About Us</h4>
                <ul>
                  <li>
                    <a href="#">Our Story</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--3">
              <div className="footer__help">
                <h4>Help</h4>
                <ul>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Order Status</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--3">
              <div className="footer__follow">
                <h4>Follow Us!</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <ul className="footer__social-links">
                  <li>
                    <a href="#">
                      <img src={instagram} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={facebook} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={twitter} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyrights">
          <div className="container">
            <div className="copyrights__content">
            <a href="/">VENIA</a>
              <p>&copy; Company Name Address Ave, City Name, State ZIP</p>
              <ul>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
