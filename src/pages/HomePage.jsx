import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './HomePage.css';

// Image assets from Figma
const imgImg47851 = "https://www.figma.com/api/mcp/asset/95d140e2-d1b3-4856-848c-25e6caf2ab18";
const img506613215122248739240243162596900854839290210N1 = "https://www.figma.com/api/mcp/asset/2742d79e-a265-453d-aace-66f4e172e77d";
const img4672350881221937370362431628915996321142650166N1 = "https://www.figma.com/api/mcp/asset/37ad8f92-c167-46f1-ab6e-b590ca76ddbc";
const imgMiniGreenCamp1 = "https://www.figma.com/api/mcp/asset/5e604737-3112-48d0-96e1-e96e77856e4a";
const img490003386122233624088243162256006985192082019N1 = "https://www.figma.com/api/mcp/asset/08de3647-ce0f-4f2e-85b8-05dd2a1285e7";
const imgLogo256304021426247289561 = "https://www.figma.com/api/mcp/asset/f2cff1f7-1e91-40b9-bbd7-2cd00e540848";
const imgDownload1 = "https://www.figma.com/api/mcp/asset/0766179c-1acf-43e1-a36c-e104aa417c37";
const imgMjuLogoSvg1 = "https://www.figma.com/api/mcp/asset/d3758360-7759-4c55-a108-dd2cce73555d";
const imgUntitledDesign31 = "https://www.figma.com/api/mcp/asset/d3ca828a-00d3-4a6a-b512-ac0c93f9f649";

export default function HomePage() {
  return (
    <div className="home-page" data-name="Home Page" data-node-id="6:4">
      <Navbar />
      
      <p className="hero-title" data-node-id="8:10">
        From Fallen Leaves to Fresh Plates
      </p>
      
      <p className="hero-description" data-node-id="8:39">
        Por Jai Dee transforms fallen leaves into compost,<br aria-hidden="true" />
        restores the soil, reduces PM2.5,<br aria-hidden="true" />
        and opens our farm as a living classroom.
      </p>
      
      <div className="hero-image-bg" data-node-id="8:40" />
      <div className="hero-image" data-name="506613215_122248739240243162_596900854839290210_n 1" data-node-id="107:1081">
        <div className="hero-image-inner">
          <img alt="" src={img506613215122248739240243162596900854839290210N1} />
        </div>
      </div>
      
      <p className="section-title" data-node-id="8:46">
        Farming, Training, Sustainability
      </p>
      
      <div className="project-card project-1" data-name="Example Project 1" data-node-id="8:60">
        <div className="project-bg" data-node-id="8:48" />
        <div className="project-image" data-name="467235088_122193737036243162_8915996321142650166_n 1" data-node-id="107:1089">
          <div className="project-image-inner">
            <img alt="" src={img4672350881221937370362431628915996321142650166N1} />
          </div>
        </div>
      </div>
      
      <div className="project-card project-2" data-name="Example Project 2" data-node-id="8:61">
        <div className="project-bg" data-node-id="8:51" />
        <div className="project-image" data-name="490003386_122233624088243162_256006985192082019_n 1" data-node-id="107:1091">
          <div className="project-image-inner">
            <img alt="" src={img490003386122233624088243162256006985192082019N1} />
          </div>
        </div>
      </div>
      
      <div className="project-card project-3" data-name="Example Project 3" data-node-id="8:62">
        <div className="project-bg" data-node-id="8:53" />
        <div className="project-image" data-name="Mini Green Camp 1" data-node-id="107:1090">
          <div className="project-image-inner">
            <img alt="" src={imgMiniGreenCamp1} />
          </div>
        </div>
      </div>
      
      <p className="supported-title" data-node-id="20:185">
        Supported By
      </p>
      <div className="supported-bar" data-node-id="20:184" />
      
      <div className="sponsor-logo logo-1" data-name="download 1" data-node-id="107:1093">
        <img alt="" src={imgDownload1} />
      </div>
      <div className="sponsor-logo logo-2" data-name="MJU_LOGO.svg 1" data-node-id="108:1094">
        <img alt="" src={imgMjuLogoSvg1} />
      </div>
      <div className="sponsor-logo logo-3" data-name="Untitled design (3) 1" data-node-id="108:1096">
        <img alt="" src={imgUntitledDesign31} />
      </div>
      <div className="sponsor-logo logo-4" data-name="Logo_25630402142624_728956 1" data-node-id="107:1092">
        <img alt="" src={imgLogo256304021426247289561} />
      </div>
      
      <Link to="/about" className="about-button-link">
        <div className="about-button" data-node-id="30:116">
          <div className="about-button-bg" data-node-id="20:191" />
          <p className="about-button-text" data-node-id="20:190">
            About us
          </p>
        </div>
      </Link>
      
      <p className="cta-title" data-node-id="8:47">
        Call to action
      </p>
      
      <Link to="/blog" className="blog-button-link">
        <div className="blog-button" data-name="Blog Button" data-node-id="13:138">
          <div className="blog-button-bg" data-node-id="13:135" />
          <p className="blog-button-text" data-node-id="13:137">
            news updates
          </p>
        </div>
      </Link>
      
      <Footer />
    </div>
  );
}
