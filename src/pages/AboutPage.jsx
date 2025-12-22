import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AboutPage.css';

// Image assets - using local paths from /public/images

export default function AboutPage() {
  return (
    <div className="about-page" data-name="Desktop - 2" data-node-id="8:42">
      <Navbar />
      
      <p className="mission-title" data-node-id="25:293">
        Our Mission
      </p>
      
      <div className="mission-image-bg" data-node-id="97:1081" />
      <div className="mission-image" data-name="466599918_122193737282243162_5164657571554732780_n 1" data-node-id="110:1098">
        <div className="mission-image-inner">
          <img alt="" src="/images/mission-image.jpg" />
        </div>
      </div>
      
      <div className="mission-text" data-node-id="110:1099">
        <p className="mb-0">We believe that 'farmers will change only when they see it done.'</p>
        <p>Por Jai Dee is a living example of a Low-Carbon farm that truly works.</p>
      </div>
      
      <div className="about-description">
        <p>Por Jai Dee Co., Ltd. is a social enterprise founded in 2024 in Chiang Mai, Thailand, dedicated to building a more sustainable and resilient agricultural future. Our work is guided by a Low-Carbon Farming Model that responds directly to environmental challenges while strengthening local livelihoods. At the heart of everything we do is the belief that agriculture can protect the environment, support communities, and create shared value.</p>
        <p>Our mission focuses on three interconnected goals: <strong>reducing open burning to combat PM2.5 air pollution, restoring soil health and long-term fertility, and improving livelihoods by creating stable income opportunities for local farmers and communities</strong>. We see environmental protection and economic well-being not as separate goals, but as outcomes that grow stronger when pursued together.</p>
      </div>
      
      <p className="core-value-title">Core value</p>
      
      <div className="core-values">
        <div className="core-value-item">
          <p className="core-value-name">No Burning, Less Pollution</p>
          <p className="core-value-description">Every leaf has value, and responsible management helps protect our air and environment.</p>
        </div>
        <div className="core-value-item">
          <p className="core-value-name">Safety & Care</p>
          <p className="core-value-description">Every crop is grown with responsibility for consumer health and long-term sustainability.</p>
        </div>
        <div className="core-value-item">
          <p className="core-value-name">Sharing with the Community</p>
          <p className="core-value-description">Revenue and opportunities are reinvested into local farmers and community partners.</p>
        </div>
        <div className="core-value-item">
          <p className="core-value-name">Learning Together</p>
          <p className="core-value-description">Lasting change begins with hands-on action, shared knowledge, and collective growth.</p>
        </div>
      </div>
      
      <p className="partners-title">Government & Network Partners</p>
      
      <div className="partners-content">
        <p>We maintain long-term partnerships with local farmer groups, schools, and organic markets. We collaborate with municipalities, NGOs, and schools on leaf collection, composting, and education programs. We also serve as a coordination hub for the <strong>Federation of Organic Agriculture of Thailand</strong> in Mae Rim District.</p>
        <p>Our work has received recognition across sectors, including visits from inspectors of the <strong>Ministry of Interior</strong> to the "Leaves for Cash" project in February 2025, participation by <strong>Nirun Phongsitthithorn</strong>, Governor of Chiang Mai, in our "Green Day" campaign and leaf-buying program, and study visits by executives from the <strong>Bank for Agriculture and Agricultural Cooperatives</strong> to learn from our project model.</p>
      </div>
      
      <p className="team-title" data-node-id="25:258">
        Meet The Team
      </p>
      
      <p className="founder-label-1" data-node-id="110:1106">
        Founder
      </p>
      
      <div className="team-photo photo-1" data-name="506613215_122248739240243162_596900854839290210_n 2" data-node-id="110:1101">
        <div className="team-photo-inner">
          <img alt="" src="/images/team-photo.jpg" />
        </div>
      </div>
      
      <div className="team-photo photo-2" data-name="506613215_122248739240243162_596900854839290210_n 3" data-node-id="110:1102">
        <div className="team-photo-inner">
          <img alt="" src="/images/team-photo.jpg" />
        </div>
      </div>
      
      <p className="team-name name-1" data-node-id="110:1104">
        EMMA LIANG
      </p>
      
      <p className="founder-label-2" data-node-id="110:1108">
        Founder / Farm Manager
      </p>
      
      <p className="team-name name-2" data-node-id="110:1109">
        Natee Kampangkaew
      </p>
      
      <Footer />
    </div>
  );
}
