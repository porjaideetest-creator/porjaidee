import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer" data-name="Footer" data-node-id="12:134">
      <div className="footer-bg" data-node-id="12:133" />
      <p className="footer-brand" data-node-id="13:140">
        Porjaidee
      </p>
      <Link to="/contact" className="footer-link" data-node-id="8:64">
        FAQs/Contact us
      </Link>
    </div>
  );
}
