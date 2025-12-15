import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './SupportPage.css';

export default function SupportPage() {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    const amount = customAmount || donationAmount;
    if (amount && donorInfo.name && donorInfo.email) {
      console.log('Donation submitted:', { amount, ...donorInfo });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setDonationAmount('');
        setCustomAmount('');
        setDonorInfo({ name: '', email: '' });
      }, 3000);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="support-page" data-name="Desktop - 7" data-node-id="8:122">
      <Navbar />
      
      <p className="support-description" data-node-id="32:25323">
        Funds description<br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        Funds already in use
      </p>

      <div className="fund-image fund-1" data-node-id="32:25324" />
      <div className="fund-image fund-2" data-node-id="32:25325" />

      <p className="fund-label label-1" data-node-id="32:25326">Image/description</p>
      <p className="fund-label label-2" data-node-id="32:25329">Image/description</p>

      <div className="donation-panel" data-node-id="32:25331">
        <form className="donation-form" onSubmit={handleDonationSubmit}>
          <h3 className="donation-title">Make a Donation</h3>
          
          <div className="donation-amounts">
            <p className="amount-label">Select Amount:</p>
            <div className="amount-buttons">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className={`amount-btn ${donationAmount === amount.toString() ? 'active' : ''}`}
                  onClick={() => {
                    setDonationAmount(amount.toString());
                    setCustomAmount('');
                  }}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <input
              type="number"
              className="custom-amount-input"
              placeholder="Custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setDonationAmount('');
              }}
            />
          </div>

          <div className="donor-fields">
            <input
              type="text"
              className="donor-input"
              placeholder="Your Name"
              value={donorInfo.name}
              onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
              required
            />
            <input
              type="email"
              className="donor-input"
              placeholder="Your Email"
              value={donorInfo.email}
              onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
              required
            />
          </div>

          {submitted && (
            <div className="donation-success">
              Thank you for your donation!
            </div>
          )}

          <button type="submit" className="donate-button">
            Donate Now
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
