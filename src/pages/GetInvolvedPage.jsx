import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './GetInvolvedPage.css';

export default function GetInvolvedPage() {
  const [formData, setFormData] = useState({
    name: '',
    goalDescription: '',
    project: '',
    skills: '',
    additional: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        goalDescription: '',
        project: '',
        skills: '',
        additional: ''
      });
    }, 3000);
  };

  return (
    <div className="get-involved-page" data-name="Desktop - 4" data-node-id="8:89">
      <Navbar />
      
      <p className="get-involved-title" data-node-id="32:25321">
        Signup to contribute
      </p>

      <div className="form-container" data-node-id="32:7139">
        <form className="contribute-form" data-node-id="32:7143" onSubmit={handleSubmit}>
          <div className="form-field" data-node-id="I32:7143;47211:209">
            <label className="form-label">Name:</label>
            <input 
              type="text" 
              className="form-input" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-field" data-node-id="I32:7143;47211:209;4473:15">
            <label className="form-label">Goal description:</label>
            <textarea 
              className="form-input form-textarea" 
              name="goalDescription"
              value={formData.goalDescription}
              onChange={handleChange}
              placeholder="Describe your goals"
              rows="3"
              required
            />
          </div>

          <div className="form-field" data-node-id="I32:7143;47211:209;4473:16">
            <label className="form-label">Select a Project to Join:</label>
            <select 
              className="form-input form-select"
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
            >
              <option value="">Select a project</option>
              <option value="compost">Leaf Compost Program</option>
              <option value="workshop">Workshops & Study Tours</option>
              <option value="consulting">Community Consulting</option>
              <option value="vegetables">Organic Vegetable Supply</option>
            </select>
          </div>

          <div className="form-field" data-node-id="I32:7143;47211:209;4473:17">
            <label className="form-label">Skills and availability:</label>
            <textarea 
              className="form-input form-textarea" 
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Describe your skills and availability"
              rows="3"
              required
            />
          </div>

          <div className="form-field" data-node-id="I32:7143;47211:209;4588:0">
            <label className="form-label">Additional Information:</label>
            <input 
              type="text" 
              className="form-input" 
              name="additional"
              value={formData.additional}
              onChange={handleChange}
              placeholder="Any additional information"
            />
          </div>

          {submitted && (
            <div className="success-message">
              Thank you! Your submission has been received.
            </div>
          )}

          <button type="submit" className="submit-button" data-node-id="I32:7143;47211:209;4588:3">
            Submit Application
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
