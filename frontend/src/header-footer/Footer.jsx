import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="home-footer">
      <div className="home-footer__container">

        <div className="home-footer__top">

          <div className="home-footer__brand">
            <Link to="/" className="home-footer__logo">
              IRON<span>FIT</span>
            </Link>

            <p>
              Train with purpose. Build strength.
              Become the strongest version of yourself.
            </p>

            <Link
              to="/membership"
              className="home-footer__join"
            >
              Start Your Journey
              <span>→</span>
            </Link>
          </div>


          <div className="home-footer__column">
            <h3>Explore</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>


          <div className="home-footer__column">
            <h3>Membership</h3>

            <Link to="/membership">Basic</Link>
            <Link to="/membership">Pro</Link>
            <Link to="/membership">Elite</Link>
            <Link to="/membership">Join Now</Link>
          </div>


          <div className="home-footer__column home-footer__contact">
            <h3>Contact</h3>

            <a href="tel:+919999999999">
              +91 99999 99999
            </a>

            <a href="mailto:hello@ironfit.com">
              hello@ironfit.com
            </a>

            <p>
              Surat, Gujarat
              <br />
              India
            </p>
          </div>

        </div>


        <div className="home-footer__bottom">

          <p>
            © 2026 IronFit. All rights reserved.
          </p>

          <div className="home-footer__socials">
  <button type="button" aria-label="Instagram">
    <FaInstagram />
  </button>

  <button type="button" aria-label="Facebook">
    <FaFacebookF />
  </button>

  <button type="button" aria-label="YouTube">
    <FaYoutube />
  </button>
</div>

          <Link
            to="/"
            className="home-footer__back-top"
          >
            BACK TO TOP ↑
          </Link>

        </div>

      </div>
    </footer>
  );
};

export default Footer;