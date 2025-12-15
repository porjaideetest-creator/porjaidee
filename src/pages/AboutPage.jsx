import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AboutPage.css';

const img4665999181221937372822431625164657571554732780N1 = "https://www.figma.com/api/mcp/asset/3c8f61bc-39ed-456f-ae68-fc342f3ef665";
const img506613215122248739240243162596900854839290210N2 = "https://www.figma.com/api/mcp/asset/e224f2dc-2d32-4cec-b12b-82bd66ebc406";

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
          <img alt="" src={img4665999181221937372822431625164657571554732780N1} />
        </div>
      </div>
      
      <div className="mission-text" data-node-id="110:1099">
        <p className="mb-0">We believe that 'farmers will change only when they see it done.'</p>
        <p>Por Jai Dee is a living example of a Low-Carbon farm that truly works.</p>
      </div>
      
      <p className="team-title" data-node-id="25:258">
        Meet The Team
      </p>
      
      <p className="founder-label-1" data-node-id="110:1106">
        Founder
      </p>
      
      <div className="team-photo photo-1" data-name="506613215_122248739240243162_596900854839290210_n 2" data-node-id="110:1101">
        <div className="team-photo-inner">
          <img alt="" src={img506613215122248739240243162596900854839290210N2} />
        </div>
      </div>
      
      <div className="team-photo photo-2" data-name="506613215_122248739240243162_596900854839290210_n 3" data-node-id="110:1102">
        <div className="team-photo-inner">
          <img alt="" src={img506613215122248739240243162596900854839290210N2} />
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
