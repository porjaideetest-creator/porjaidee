import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactPage.css';

// Image assets - using local paths from /public/images

export default function ContactPage() {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    inquiry: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    { 
      question: 'What services does Por Jai Dee offer?', 
      answer: 'Por Jai Dee offers workshops, study tours, leaf compost starter kits, community consulting, and organic vegetable supply. We provide educational programs and sustainable farming solutions.' 
    },
    { 
      question: 'How can I get involved?', 
      answer: 'You can get involved by signing up for our workshops, joining our volunteer programs, or participating in our community initiatives. Visit the "Get Involved" page to learn more.' 
    },
    { 
      question: 'Where is Por Jai Dee located?', 
      answer: 'We are located at 9 Rai Suan Haeng Khwam Suk (Garden of Happiness), 384, Moo 2, Huai Sai Sub-district, Mae Rim District, Chiang Mai 50180.' 
    },
    { 
      question: 'How can I contact Por Jai Dee?', 
      answer: 'You can contact us via email using the contact form on this page, or call us at +66 92-263-8008 or +66 65-946-9361. You can also find us on Facebook: Por Jai Dee พอใจดี.' 
    },
    { 
      question: 'Do you offer delivery services?', 
      answer: 'Yes, we offer delivery services for our organic vegetables and compost products. Please contact us for more information about delivery areas and schedules.' 
    },
  ];

  const handleFormChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactForm({ name: '', email: '', inquiry: '' });
    }, 3000);
  };

  return (
    <div className="contact-page" data-name="Desktop - 9" data-node-id="25:80">
      <Navbar />
      
      <p className="faqs-title" data-node-id="25:90">
        FAQs
      </p>

      <div className="faqs-accordion" data-node-id="33:25397">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={`accordion-item ${openAccordion === index ? 'open' : ''}`}
            data-node-id={`I33:25397;7753:${4753 + index}`}
            onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
          >
            <div className="accordion-title">
              <p className="accordion-question">{faq.question}</p>
              <div className="accordion-icon">
                <img 
                  alt="" 
                  src={openAccordion === index ? "/images/chevron-up.svg" : "/images/chevron-down.svg"} 
                />
              </div>
            </div>
            {openAccordion === index && faq.answer && (
              <div className="accordion-content">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="contact-title" data-node-id="25:96">
        Contact
      </p>

      <p className="socials-title" data-node-id="32:25333">
        Our socials:
      </p>

      <a 
        href="https://www.facebook.com/PorJaiDee" 
        target="_blank" 
        rel="noopener noreferrer"
        className="socials-text socials-link"
        data-node-id="110:1173"
      >
        Facebook : Por Jai Dee พอใจดี
      </a>

      <div className="contact-form-container" data-node-id="25:106">
        <div className="contact-form-bg" data-node-id="25:97" />
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <p className="contact-label name-label" data-node-id="25:98">Name:</p>
          <input
            type="text"
            className="contact-input name-input"
            name="name"
            value={contactForm.name}
            onChange={handleFormChange}
            placeholder="Enter your name"
            required
            data-node-id="110:1170"
          />
          <p className="contact-label email-label" data-node-id="25:99">Email:</p>
          <input
            type="email"
            className="contact-input email-input"
            name="email"
            value={contactForm.email}
            onChange={handleFormChange}
            placeholder="Enter your email"
            required
            data-node-id="25:102"
          />
          <p className="contact-label inquiry-label" data-node-id="25:100">Inquiry Details:</p>
          <textarea
            className="contact-input inquiry-input"
            name="inquiry"
            value={contactForm.inquiry}
            onChange={handleFormChange}
            placeholder="Enter your inquiry"
            rows="4"
            required
            data-node-id="25:103"
          />
          
          {submitted && (
            <div className="contact-success">
              Thank you! Your message has been sent.
            </div>
          )}

          <button type="submit" className="contact-submit-btn">
            Send Message
          </button>
        </form>
        <p className="contact-address" data-node-id="110:1169">
          9 Rai Suan Haeng Khwam Suk (Garden of Happiness)<br />
          384, Moo 2, Huai Sai Sub-district, Mae Rim District, Chiang Mai 50180<br />
          Tel: +66 92-263-8008, +66 65-946-9361
        </p>
      </div>

      <div className="contact-image" data-name="1754126895376 1" data-node-id="110:1172">
        <img alt="" src="/images/contact-image.jpg" />
      </div>

      <Footer />
    </div>
  );
}
