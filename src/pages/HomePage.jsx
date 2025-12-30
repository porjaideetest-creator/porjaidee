import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './HomePage.css';

// Image assets - using local paths from /public/images

const translations = {
  en: {
    heroTitle: 'From Fallen Leaves to Fresh Plates',
    heroDescription: (
      <>
        Por Jai Dee transforms fallen leaves into compost,<br aria-hidden="true" />
        restores the soil, reduces PM2.5,<br aria-hidden="true" />
        and opens our farm as a living classroom.
      </>
    ),
    sectionTitle: 'Farming, Training, Sustainability',
    supportedBy: 'Supported By',
    aboutUs: 'About us',
    ctaTitle: 'Call to action',
    newsUpdate: 'news updates'
  },
  th: {
    heroTitle: 'จากใบไม้ร่วงสู่จานอาหารสดใหม่',
    heroDescription: (
      <>
        พอใจดีนำใบไม้ร่วงมาแปรรูปเป็นปุ๋ยอินทรีย์ฟื้นฟูดิน<br aria-hidden="true" />
        ลดปัญหา PM2.5และเปิดฟาร์มให้เป็นห้องเรียนมีชีวิต<br aria-hidden="true" />
        สำหรับการเรียนรู้
      </>
    ),
    sectionTitle: 'เกษตรกรรม · การฝึกอบรม · ความยั่งยืน',
    supportedBy: 'สนับสนุนโดย',
    aboutUs: 'เกี่ยวกับเรา',
    ctaTitle: 'ร่วมลงมือทำ',
    newsUpdate: 'ข่าวสารล่าสุด'
  }
};

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="home-page" data-name="Home Page" data-node-id="6:4">
      <Navbar />
      
      <p className="hero-title" data-node-id="8:10">
        {t.heroTitle}
      </p>
      
      <p className="hero-description" data-node-id="8:39">
        {t.heroDescription}
      </p>
      
      <div className="hero-image-bg" data-node-id="8:40" />
      <div className="hero-image" data-name="506613215_122248739240243162_596900854839290210_n 1" data-node-id="107:1081">
        <div className="hero-image-inner">
          <img alt="" src="/images/hero-image.jpg" />
        </div>
      </div>
      
      <p className="section-title" data-node-id="8:46">
        {t.sectionTitle}
      </p>
      
      <div className="project-card project-1" data-name="Example Project 1" data-node-id="8:60">
        <div className="project-bg" data-node-id="8:48" />
        <div className="project-image" data-name="467235088_122193737036243162_8915996321142650166_n 1" data-node-id="107:1089">
          <div className="project-image-inner">
            <img alt="" src="/images/project-1.jpg" />
          </div>
        </div>
      </div>
      
      <div className="project-card project-2" data-name="Example Project 2" data-node-id="8:61">
        <div className="project-bg" data-node-id="8:51" />
        <div className="project-image" data-name="490003386_122233624088243162_256006985192082019_n 1" data-node-id="107:1091">
          <div className="project-image-inner">
            <img alt="" src="/images/project-2.jpg" />
          </div>
        </div>
      </div>
      
      <div className="project-card project-3" data-name="Example Project 3" data-node-id="8:62">
        <div className="project-bg" data-node-id="8:53" />
        <div className="project-image" data-name="Mini Green Camp 1" data-node-id="107:1090">
          <div className="project-image-inner">
            <img alt="" src="/images/project-3.jpg" />
          </div>
        </div>
      </div>
      
      <p className="supported-title" data-node-id="20:185">
        {t.supportedBy}
      </p>
      <div className="supported-bar" data-node-id="20:184" />
      
      <div className="sponsor-logo logo-1" data-name="download 1" data-node-id="107:1093">
        <img alt="" src="/images/sponsor-1.png" />
      </div>
      <div className="sponsor-logo logo-2" data-name="MJU_LOGO.svg 1" data-node-id="108:1094">
        <img alt="" src="/images/sponsor-2.png" />
      </div>
      <div className="sponsor-logo logo-3" data-name="Untitled design (3) 1" data-node-id="108:1096">
        <img alt="" src="/images/sponsor-3.png" />
      </div>
      <div className="sponsor-logo logo-4" data-name="Logo_25630402142624_728956 1" data-node-id="107:1092">
        <img alt="" src="/images/sponsor-4.png" />
      </div>
      
      <Link to="/about" className="about-button-link">
        <div className="about-button" data-node-id="30:116">
          <div className="about-button-bg" data-node-id="20:191" />
          <p className="about-button-text" data-node-id="20:190">
            {t.aboutUs}
          </p>
        </div>
      </Link>
      
      <p className="cta-title" data-node-id="8:47">
        {t.ctaTitle}
      </p>
      
      <Link to="/blog" className="blog-button-link">
        <div className="blog-button" data-name="Blog Button" data-node-id="13:138">
          <div className="blog-button-bg" data-node-id="13:135" />
          <p className="blog-button-text" data-node-id="13:137">
            {t.newsUpdate}
          </p>
        </div>
      </Link>
      
      <Footer />
    </div>
  );
}
