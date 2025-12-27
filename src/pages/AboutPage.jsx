import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import './AboutPage.css';

const translations = {
  en: {
    missionTitle: 'Our Mission',
    missionText1: 'We believe that \'farmers will change only when they see it done.\'',
    missionText2: 'Por Jai Dee is a living example of a Low-Carbon farm that truly works.',
    description1: 'Por Jai Dee Co., Ltd. is a social enterprise founded in 2024 in Chiang Mai, Thailand, dedicated to building a more sustainable and resilient agricultural future. Our work is guided by a Low-Carbon Farming Model that responds directly to environmental challenges while strengthening local livelihoods. At the heart of everything we do is the belief that agriculture can protect the environment, support communities, and create shared value.',
    description2: 'Our mission focuses on three interconnected goals: reducing open burning to combat PM2.5 air pollution, restoring soil health and long-term fertility, and improving livelihoods by creating stable income opportunities for local farmers and communities. We see environmental protection and economic well-being not as separate goals, but as outcomes that grow stronger when pursued together.',
    coreValueTitle: 'Core value',
    coreValues: [
      {
        name: 'No Burning, Less Pollution',
        description: 'Every leaf has value, and responsible management helps protect our air and environment.'
      },
      {
        name: 'Safety & Care',
        description: 'Every crop is grown with responsibility for consumer health and long-term sustainability.'
      },
      {
        name: 'Sharing with the Community',
        description: 'Revenue and opportunities are reinvested into local farmers and community partners.'
      },
      {
        name: 'Learning Together',
        description: 'Lasting change begins with hands-on action, shared knowledge, and collective growth.'
      }
    ],
    partnersTitle: 'Government & Network Partners',
    partnersContent1: <>We maintain long-term partnerships with local farmer groups, schools, and organic markets. We collaborate with municipalities, NGOs, and schools on leaf collection, composting, and education programs. We also serve as a coordination hub for the <strong>Federation of Organic Agriculture of Thailand</strong> in Mae Rim District.</>,
    partnersContent2: <>Our work has received recognition across sectors, including visits from inspectors of the <strong>Ministry of Interior</strong> to the "Leaves for Cash" project in February 2025, participation by <strong>Nirun Phongsitthithorn</strong>, Governor of Chiang Mai, in our "Green Day" campaign and leaf-buying program, and study visits by executives from the <strong>Bank for Agriculture and Agricultural Cooperatives</strong> to learn from our project model.</>
  },
  th: {
    missionTitle: 'พันธกิจของเรา',
    missionText1: 'พอใจดีเชื่อว่า "เกษตรกรจะเปลี่ยนแปลงได้ ก็ต่อเมื่อได้เห็นของจริงที่ทำได้จริง',
    missionText2: 'พอใจดีคือฟาร์มคาร์บอนต่ำที่เป็นตัวอย่างมีชีวิต และพิสูจน์แล้วว่าสามารถทำงานได้จริง"',
    description1: 'บริษัท พอใจดี จำกัด เป็นวิสาหกิจเพื่อสังคมที่ก่อตั้งขึ้นในปี พ.ศ. 2567 (2024) ณ จังหวัดเชียงใหม่ ประเทศไทย โดยมุ่งมั่นในการสร้างอนาคตทางการเกษตรที่ยั่งยืนและมีความเข้มแข็งมากยิ่งขึ้น การดำเนินงานของเราขับเคลื่อนภายใต้ โมเดลเกษตรคาร์บอนต่ำ (Low-Carbon Farming Model) ซึ่งตอบโจทย์ความท้าทายด้านสิ่งแวดล้อมควบคู่ไปกับการเสริมสร้างความมั่นคงให้กับวิถีชีวิตของชุมชนท้องถิ่น หัวใจสำคัญของพอใจดีคือความเชื่อว่าเกษตรกรรมสามารถปกป้องสิ่งแวดล้อม สนับสนุนชุมชน และสร้างคุณค่าร่วมกันได้',
    description2: 'พันธกิจของเรามุ่งเน้นไปที่เป้าหมายหลักสามประการที่เชื่อมโยงถึงกัน ได้แก่ การลดการเผาในที่โล่งเพื่อลดปัญหามลพิษทางอากาศ PM2.5 การฟื้นฟูสุขภาพดินและความอุดมสมบูรณ์ในระยะยาว และการยกระดับคุณภาพชีวิตผ่านการสร้างโอกาสรายได้ที่มั่นคงให้แก่เกษตรกรและชุมชนท้องถิ่น เรามองว่าการปกป้องสิ่งแวดล้อมและความมั่นคงทางเศรษฐกิจไม่ใช่เป้าหมายที่แยกจากกัน แต่เป็นผลลัพธ์ที่สามารถเติบโตไปพร้อมกันได้เมื่อได้รับการพัฒนาอย่างควบคู่กัน',
    coreValueTitle: 'ค่านิยมหลัก',
    coreValues: [
      {
        name: 'ไม่เผา ลดมลพิษ',
        description: 'ใบไม้ทุกใบมีคุณค่า และการจัดการอย่างรับผิดชอบช่วยปกป้องอากาศและสิ่งแวดล้อมของเรา'
      },
      {
        name: 'ความปลอดภัยและความใส่ใจ',
        description: 'พืชผลทุกชนิดปลูกด้วยความรับผิดชอบต่อสุขภาพของผู้บริโภคและความยั่งยืนในระยะยาว'
      },
      {
        name: 'การแบ่งปันสู่ชุมชน',
        description: 'รายได้และโอกาสต่าง ๆ ถูกนำกลับไปลงทุนให้กับเกษตรกรและภาคีชุมชนในพื้นที่'
      },
      {
        name: 'การเรียนรู้ร่วมกัน',
        description: 'การเปลี่ยนแปลงที่ยั่งยืนเริ่มต้นจากการลงมือทำจริง การแบ่งปันความรู้ และการเติบโตไปด้วยกัน'
      }
    ],
    partnersTitle: 'ภาครัฐและเครือข่ายพันธมิตร',
    partnersContent1: <>พอใจดีมีความร่วมมือระยะยาวกับกลุ่มเกษตรกรในพื้นที่ โรงเรียน และตลาดเกษตรอินทรีย์ พร้อมทั้งทำงานร่วมกับองค์กรปกครองส่วนท้องถิ่น องค์กรพัฒนาเอกชน และสถานศึกษา ในกิจกรรมด้านการรวบรวมใบไม้ การทำปุ๋ยหมัก และโครงการด้านการเรียนรู้ นอกจากนี้ พอใจดียังทำหน้าที่เป็นศูนย์ประสานงานของ<strong>สหพันธ์เกษตรอินทรีย์แห่งประเทศไทย</strong>ในอำเภอแม่ริม</>,
    partnersContent2: <>การดำเนินงานของเราได้รับการยอมรับจากหลายภาคส่วน อาทิ การเข้าตรวจเยี่ยมโครงการ "Leaves for Cash" โดยเจ้าหน้าที่จาก<strong>กระทรวงมหาดไทย</strong>ในเดือนกุมภาพันธ์ พ.ศ. 2568 (2025) การเข้าร่วมกิจกรรม "Green Day" และโครงการรับซื้อใบไม้โดย <strong>นายณัฐนที พงศิทธิ์ธร</strong> ผู้ว่าราชการจังหวัดเชียงใหม่ รวมถึงการศึกษาดูงานจากผู้บริหาร<strong>ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร (ธ.ก.ส.)</strong>เพื่อเรียนรู้รูปแบบการดำเนินงานของโครงการ</>
  }
};

// Image assets - using local paths from /public/images

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="about-page" data-name="Desktop - 2" data-node-id="8:42">
      <Navbar />
      
      <p className="mission-title" data-node-id="25:293">
        {t.missionTitle}
      </p>
      
      <div className="mission-image-bg" data-node-id="97:1081" />
      <div className="mission-image" data-name="466599918_122193737282243162_5164657571554732780_n 1" data-node-id="110:1098">
        <div className="mission-image-inner">
          <img alt="" src="/images/mission-image.jpg" />
        </div>
      </div>
      
      <div className="mission-text" data-node-id="110:1099">
        <p className="mb-0">{t.missionText1}</p>
        <p>{t.missionText2}</p>
      </div>
      
      <div className="about-description">
        <p>{t.description1}</p>
        <p>{t.description2}</p>
      </div>
      
      <p className="core-value-title">{t.coreValueTitle}</p>
      
      <div className="core-values">
        {t.coreValues.map((value, index) => (
          <div key={index} className="core-value-item">
            <p className="core-value-name">{value.name}</p>
            <p className="core-value-description">{value.description}</p>
          </div>
        ))}
      </div>
      
      <p className="partners-title">{t.partnersTitle}</p>
      
      <div className="partners-content">
        <p>{t.partnersContent1}</p>
        <p>{t.partnersContent2}</p>
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
