import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ImpactPage.css';

export default function ImpactPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Store-1', conversion: '90%', description: 'Conversion rate', bodyText: 'Store-1 has shown excellent performance with high conversion rates.' },
    { label: 'Store-2', conversion: '30%', description: 'Conversion rate', bodyText: 'Store-2 is improving steadily with new initiatives.' },
    { label: 'Store-3', conversion: '20%', description: 'Conversion rate', bodyText: 'Store-3 is in early stages with promising growth.' },
    { label: 'Store-4', conversion: '40%', description: 'Conversion rate', bodyText: 'Store-4 demonstrates strong market presence.' },
    { label: 'Store-5', conversion: '20%', description: 'Conversion rate', bodyText: 'Store-5 is expanding its reach in new markets.' },
    { label: 'Store-6', conversion: '40%', description: 'Conversion rate', bodyText: 'Store-6 shows consistent performance metrics.' },
    { label: 'Store-7', conversion: '10%', description: 'Conversion rate', bodyText: 'Store-7 is a new location with growing potential.' },
    { label: 'Overall', conversion: '90%', description: 'Total conversion', bodyText: 'Overall impact shows significant positive results across all stores.' },
  ];

  return (
    <div className="impact-page" data-name="Desktop - 5" data-node-id="8:100">
      <Navbar />
      
      <div className="impact-card" data-node-id="32:1580">
        <div className="impact-header" data-node-id="I32:1580;43676:536">
          <div className="impact-tabs">
            {tabs.map((tab, index) => (
              <div 
                key={index}
                className={`impact-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <div className="tab-content">
                  <p className="tab-label">{tab.label}</p>
                  <div className="tab-stats">
                    <p className="tab-secondary">{tab.description}</p>
                    <p className="tab-primary">{tab.conversion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="impact-body" data-node-id="I32:1580;43676:538">
          <p className="body-text-primary">{tabs[activeTab].bodyText}</p>
          <p className="body-text-secondary">Learn more about our impact metrics and success stories.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
