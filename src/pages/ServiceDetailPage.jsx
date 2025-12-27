import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import './ServiceDetailPage.css';

const translations = {
  en: {
    backToServices: '← Back to Services',
    studyTourTopics: 'Study Tour Topics',
    serviceNotFound: 'Service not found'
  },
  th: {
    backToServices: '← กลับไปที่บริการ',
    studyTourTopics: 'หัวข้อการศึกษาดูงาน',
    serviceNotFound: 'ไม่พบบริการ'
  }
};

const serviceData = {
  'workshops-study-tours': {
    en: {
      title: 'Workshops & Study Tours',
      mainContent: [
        'We believe that meaningful learning begins with hands-on practice and is proven through real-world outcomes.',
        'Under the Low-Carbon Farming approach, we organize study tours and practical training workshops to transfer knowledge in organic agriculture and sustainable resource management, drawing directly from the operational experience of our model farms.',
        'Our workshops focus on real-world agricultural practices, including the management of fallen leaves and agricultural residues to reduce open burning and PM2.5 pollution, soil restoration through organic fertilizers, precision vegetable cultivation, and value-added processing of farm products. All activities are designed to be practical and adaptable to local conditions.',
        'Beyond technical training, these programs provide a platform for knowledge exchange among farmers, academics, and practitioners. By fostering a systems-based understanding, participants are empowered to adopt environmentally responsible farming practices, reduce production costs, and build long-term income stability.',
        <>Por Jai Dee believes that <strong>sustainable agriculture is achieved through the practical application of knowledge, and that real change begins with seeing workable solutions implemented in real communities</strong>.</>
      ],
      topics: [
        {
          title: 'Leaf Compost Production for PM2.5 Reduction',
          description: 'This training introduces leaf composting as a practical solution to PM2.5 pollution caused by open burning of agricultural residues. Participants learn the principles of circular economy–based biomass management, the fundamentals of organic matter decomposition, and the role of microorganisms in producing high-quality compost. The program covers essential materials, proper composting ratios, and a step-by-step process from material preparation to compost application, with an emphasis on quality control.',
          outcome: 'By the end of the training, participants are able to produce leaf compost independently, apply organic compost to restore soil health, and contribute directly to reducing open burning and PM2.5 pollution, while exploring community-based models that link environmental impact with additional income generation.'
        },
        {
          title: 'Application of Leaf Compost Across Different Crops',
          description: 'This training focuses on the practical use of leaf compost to improve soil health and crop performance. Participants learn how leaf compost affects soil structure, how to prepare soil before planting, and how to apply compost effectively across a range of crops, including leafy vegetables, fruiting crops, medicinal plants, and perennial trees. The program also covers appropriate application rates and timing, while comparing the performance of organic compost with chemical fertilizers.',
          outcome: 'By the end of the training, participants are able to use leaf compost correctly in different cropping systems, improve soil quality, reduce production costs, and enhance crop productivity in a way that is safe for both consumers and the environment.'
        },
        {
          title: 'Value Addition Through Vegetable Ice Cream Production',
          description: 'This training introduces food processing as a practical approach to increasing the value of agricultural produce. Participants learn how vegetables can be transformed into innovative products such as vegetable-based ice cream, covering raw material selection, basic food safety principles, and the full production process from preparation to finished product. The program also explores flavor, color, and texture development to meet the preferences of different consumer groups, as well as basic packaging concepts and value communication.',
          outcome: 'By the end of the training, participants understand how value-added food products can create new economic opportunities and learning experiences, and can apply these concepts to small-scale entrepreneurship, education, or experiential learning activities.'
        }
      ],
      stats: <>In 2025, Por Jai Dee collaborated with a wide range of partners to deliver learning activities, study tours, and hands-on training programs. These collaborations included <strong>15 government agencies, 3 educational institutions, 1 community and community enterprise</strong>. The activities covered multiple formats, including <strong>workshops, study tours, school trips, community consulting, and outdoor experiential learning programs</strong>.</>
    },
    th: {
      title: 'เวิร์กช็อปและศึกษาดูงาน',
      mainContent: [
        'พอใจดีเชื่อว่า การเรียนรู้ที่มีความหมายต้องเริ่มจากการลงมือปฏิบัติจริง และพิสูจน์ได้จากผลลัพธ์ที่เกิดขึ้นในโลกแห่งความเป็นจริง',
        'ภายใต้แนวคิด เกษตรคาร์บอนต่ำ (Low-Carbon Farming) เราจัดกิจกรรมศึกษาดูงานและการฝึกอบรมเชิงปฏิบัติการ เพื่อถ่ายทอดองค์ความรู้ด้านเกษตรอินทรีย์และการจัดการทรัพยากรอย่างยั่งยืน โดยอาศัยประสบการณ์จริงจากการดำเนินงานในฟาร์มต้นแบบของเรา',
        'กิจกรรมเวิร์กช็อปของพอใจดีมุ่งเน้นการเรียนรู้จากกระบวนการทำงานจริง ครอบคลุมการจัดการใบไม้และเศษวัสดุทางการเกษตรเพื่อลดการเผาและปัญหา PM2.5 การฟื้นฟูดินด้วยปุ๋ยอินทรีย์ การปลูกพืชผักอย่างประณีต และการแปรรูปผลผลิตทางการเกษตรเพื่อเพิ่มมูลค่า โดยทุกกิจกรรมได้รับการออกแบบให้สามารถนำไปประยุกต์ใช้ได้จริงในบริบทของแต่ละพื้นที่',
        'นอกเหนือจากการฝึกอบรมด้านเทคนิค โปรแกรมเหล่านี้ยังเป็นพื้นที่สำหรับการแลกเปลี่ยนความรู้และประสบการณ์ระหว่างเกษตรกร นักวิชาการ และผู้ปฏิบัติงาน เพื่อสร้างความเข้าใจเชิงระบบ และเสริมศักยภาพให้ผู้เข้าร่วมสามารถพัฒนาแนวทางการทำเกษตรที่เป็นมิตรต่อสิ่งแวดล้อม ลดต้นทุนการผลิต และสร้างความมั่นคงทางรายได้ในระยะยาว',
        <>พอใจดีเชื่อมั่นว่า <strong>เกษตรกรรมที่ยั่งยืนเกิดขึ้นได้จากการนำความรู้ไปใช้จริง และการเปลี่ยนแปลงที่แท้จริงเริ่มต้นจากการได้เห็นแนวทางที่สามารถทำได้จริงในชุมชนจริง</strong>.</>
      ],
      topics: [
        {
          title: 'การผลิตปุ๋ยจากใบไม้เพื่อลดปัญหา PM2.5',
          description: 'การฝึกอบรมนี้นำเสนอการทำปุ๋ยจากใบไม้ในฐานะทางออกเชิงปฏิบัติในการแก้ไขปัญหา PM2.5 ที่เกิดจากการเผาเศษวัสดุทางการเกษตร ผู้เข้าร่วมจะได้เรียนรู้หลักการจัดการชีวมวลตามแนวคิดเศรษฐกิจหมุนเวียน พื้นฐานการย่อยสลายของอินทรียวัตถุ และบทบาทของจุลินทรีย์ในการผลิตปุ๋ยคุณภาพสูง หลักสูตรครอบคลุมวัสดุที่จำเป็น อัตราส่วนที่เหมาะสม และกระบวนการผลิตปุ๋ยอย่างเป็นขั้นตอน ตั้งแต่การเตรียมวัตถุดิบจนถึงการนำไปใช้งาน โดยให้ความสำคัญกับการควบคุมคุณภาพ',
          outcome: 'เมื่อสิ้นสุดการฝึกอบรม ผู้เข้าร่วมสามารถผลิตปุ๋ยจากใบไม้ได้ด้วยตนเอง นำปุ๋ยอินทรีย์ไปใช้ฟื้นฟูคุณภาพดิน และมีส่วนร่วมอย่างเป็นรูปธรรมในการลดการเผาและปัญหา PM2.5 พร้อมทั้งเรียนรู้แนวทางการดำเนินงานระดับชุมชนที่เชื่อมโยงผลกระทบด้านสิ่งแวดล้อมเข้ากับการสร้างรายได้เสริม'
        },
        {
          title: 'การใช้ปุ๋ยจากใบไม้กับพืชหลากหลายชนิด',
          description: 'การฝึกอบรมนี้มุ่งเน้นการใช้ปุ๋ยจากใบไม้ในทางปฏิบัติเพื่อปรับปรุงคุณภาพดินและเพิ่มประสิทธิภาพการเจริญเติบโตของพืช ผู้เข้าร่วมจะได้เรียนรู้ผลของปุ๋ยใบไม้ต่อโครงสร้างดิน การเตรียมดินก่อนปลูก และการใช้ปุ๋ยอย่างเหมาะสมกับพืชหลากหลายประเภท ได้แก่ พืชผักใบ พืชผักกินผล พืชสมุนไพร และไม้ผลหรือพืชยืนต้น หลักสูตรยังครอบคลุมอัตราและช่วงเวลาการใช้ปุ๋ยที่เหมาะสม พร้อมทั้งเปรียบเทียบผลลัพธ์ระหว่างปุ๋ยอินทรีย์และปุ๋ยเคมี',
          outcome: 'เมื่อสิ้นสุดการฝึกอบรม ผู้เข้าร่วมสามารถใช้ปุ๋ยจากใบไม้ได้อย่างถูกต้องในระบบการปลูกพืชที่แตกต่างกัน ช่วยปรับปรุงคุณภาพดิน ลดต้นทุนการผลิต และเพิ่มผลผลิตทางการเกษตรอย่างปลอดภัยต่อทั้งผู้บริโภคและสิ่งแวดล้อม'
        },
        {
          title: 'การเพิ่มมูลค่าผลผลิตทางการเกษตรผ่านการผลิตไอศกรีมจากผัก',
          description: 'การฝึกอบรมนี้นำเสนอการแปรรูปอาหารในฐานะแนวทางเชิงปฏิบัติในการเพิ่มมูลค่าผลผลิตทางการเกษตร ผู้เข้าร่วมจะได้เรียนรู้การนำผักมาแปรรูปเป็นผลิตภัณฑ์สร้างสรรค์ เช่น ไอศกรีมจากผัก โดยครอบคลุมการคัดเลือกวัตถุดิบ หลักการพื้นฐานด้านความปลอดภัยอาหาร และกระบวนการผลิตตั้งแต่การเตรียมวัตถุดิบจนถึงผลิตภัณฑ์สำเร็จ หลักสูตรยังให้ความสำคัญกับการพัฒนารสชาติ สี และเนื้อสัมผัสให้เหมาะกับผู้บริโภคหลากหลายกลุ่ม รวมถึงแนวคิดเบื้องต้นด้านบรรจุภัณฑ์และการสื่อสารคุณค่าของสินค้า',
          outcome: 'เมื่อสิ้นสุดการฝึกอบรม ผู้เข้าร่วมจะเข้าใจว่าผลิตภัณฑ์อาหารที่มีการเพิ่มมูลค่าสามารถสร้างโอกาสทางเศรษฐกิจและประสบการณ์การเรียนรู้รูปแบบใหม่ได้ และสามารถนำแนวคิดเหล่านี้ไปประยุกต์ใช้กับการประกอบอาชีพขนาดเล็ก การเรียนการสอน หรือกิจกรรมการเรียนรู้เชิงประสบการณ์'
        }
      ],
      stats: <>ในปี 2568 (2025) พอใจดีได้ร่วมดำเนินกิจกรรมการเรียนรู้ การศึกษาดูงาน และการฝึกอบรมเชิงปฏิบัติการ ร่วมกับภาคีเครือข่ายจากหลากหลายภาคส่วน ประกอบด้วย <strong>หน่วยงานภาครัฐ 15 หน่วยงาน, สถานศึกษา 3 แห่ง, และ ชุมชนและวิสาหกิจชุมชน 1 แห่ง</strong> กิจกรรมที่ดำเนินการครอบคลุมหลากหลายรูปแบบ ได้แก่ <strong>เวิร์กช็อป การศึกษาดูงาน การทัศนศึกษาสำหรับโรงเรียน การให้คำปรึกษาชุมชน และกิจกรรมการเรียนรู้นอกห้องเรียน</strong>.</>
    }
  },
  'leaf-compost-starter-kits': {
    en: {
      title: 'Leaf Compost & Starter Kits',
      mainContent: [
        'Por Jai Dee develops organic leaf compost from fallen leaves and agricultural residues as an alternative to open burning, helping to reduce PM2.5 pollution while restoring soil health in a sustainable way. Alongside compost production, we offer vegetable growing starter kits designed to make organic farming accessible to everyone, including households and schools with limited space.',
        'This service includes the production and distribution of leaf-based organic compost, starter kits for home and school gardens, and basic guidance on soil care and safe vegetable growing systems. It is designed for households, beginner growers, schools, community learning centers, smallholder farmers, and community enterprises.',
        <>By promoting the use of organic compost, the program supports safer food production, reduces agricultural waste burning, and strengthens household and community-level food security. In 2025, the initiative helped <strong>reduce leaf burning by 22,000 kilograms</strong> and produced 30,000 kilograms of leaf compost, demonstrating measurable environmental and social impact.</>
      ],
      topics: null,
      stats: null
    },
    th: {
      title: 'ปุ๋ยใบไม้และชุดเริ่มต้นการปลูกผัก',
      mainContent: [
        'พอใจดีพัฒนาปุ๋ยอินทรีย์จากใบไม้ร่วงและเศษวัสดุทางการเกษตร เพื่อใช้เป็นทางเลือกแทนการเผา ช่วยลดปัญหา PM2.5 พร้อมทั้งฟื้นฟูคุณภาพดินอย่างยั่งยืน ควบคู่กับการจัดทำชุดเริ่มต้นการปลูกผัก ซึ่งออกแบบมาเพื่อให้ทุกคนสามารถเริ่มต้นเกษตรอินทรีย์ได้ง่าย แม้มีพื้นที่จำกัด เช่น ครัวเรือนและโรงเรียน',
        'บริการนี้ครอบคลุมการผลิตและจัดจำหน่ายปุ๋ยอินทรีย์จากใบไม้ ชุดปลูกผักสำหรับบ้านและโรงเรียน รวมถึงคำแนะนำพื้นฐานด้านการดูแลดินและการปลูกผักอย่างปลอดภัย เหมาะสำหรับครัวเรือน ผู้เริ่มต้นปลูกผัก โรงเรียน ศูนย์การเรียนรู้ ชุมชน เกษตรกรรายย่อย และวิสาหกิจชุมชน',
        <>การส่งเสริมการใช้ปุ๋ยอินทรีย์ช่วยสนับสนุนการผลิตอาหารที่ปลอดภัย ลดการเผาของเสียทางการเกษตร และเสริมสร้างความมั่นคงทางอาหารในระดับครัวเรือนและชุมชน ในปี 2568 (2025) โครงการนี้สามารถ<strong>ลดการเผาใบไม้ได้ 22,000 กิโลกรัม</strong> และผลิตปุ๋ยใบไม้ได้ 30,000 กิโลกรัม แสดงให้เห็นถึงผลกระทบเชิงสิ่งแวดล้อมและสังคมอย่างเป็นรูปธรรม.</>
      ],
      topics: null,
      stats: null
    }
  },
  'organic-vegetable-supply': {
    en: {
      title: 'Organic Vegetable Supply',
      subtitle: 'From Farm to Table',
      mainContent: [
        'Por Jai Dee supplies fresh organic vegetables grown through sustainable farming practices, with careful attention to every stage of the food system—from soil and seeds to consumers. Our goal is to deliver food that is safe, high-quality, and environmentally responsible.',
        'This service includes seasonal organic vegetable production, high-quality fresh delivery, traceability systems, and transparent communication about food origins. We serve restaurants, cafés, hotels, food businesses, schools, households, and health-conscious consumers who value responsible consumption and sustainable food systems.',
        'By connecting farmers directly with consumers, we help ensure stable farmer incomes, reduce environmental impact, and build trust in the food system. In 2025, Por Jai Dee supplied organic produce through five local markets, partnered with four restaurants, cafés, and resorts, and participated in five product exhibition and sales events.'
      ],
      topics: null,
      stats: null
    },
    th: {
      title: 'การจัดจำหน่ายผักอินทรีย์สด',
      subtitle: 'จากฟาร์มสู่โต๊ะอาหาร',
      mainContent: [
        'พอใจดีจัดจำหน่ายผักอินทรีย์สดที่ปลูกด้วยระบบเกษตรยั่งยืน โดยใส่ใจทุกขั้นตอนของระบบอาหาร ตั้งแต่ดินและเมล็ดพันธุ์ไปจนถึงผู้บริโภค เป้าหมายของเราคือการส่งมอบอาหารที่ปลอดภัย มีคุณภาพสูง และเป็นมิตรต่อสิ่งแวดล้อม',
        'บริการนี้ครอบคลุมการผลิตผักอินทรีย์ตามฤดูกาล การจัดส่งผักสดคุณภาพสูง ระบบตรวจสอบย้อนกลับ และการสื่อสารที่มาของอาหารอย่างโปร่งใส เราให้บริการแก่ร้านอาหาร คาเฟ่ โรงแรม ธุรกิจอาหาร โรงเรียน ครัวเรือน และผู้บริโภคที่ใส่ใจสุขภาพและการบริโภคอย่างรับผิดชอบ',
        'การเชื่อมโยงเกษตรกรโดยตรงกับผู้บริโภคช่วยสร้างรายได้ที่มั่นคงให้เกษตรกร ลดผลกระทบต่อสิ่งแวดล้อม และเสริมสร้างความเชื่อมั่นในระบบอาหาร ในปี 2568 (2025) พอใจดีจัดจำหน่ายผักอินทรีย์ผ่าน ตลาดท้องถิ่น 5 แห่ง ร่วมมือกับ ร้านอาหาร คาเฟ่ และรีสอร์ท 4 แห่ง และเข้าร่วมกิจกรรมออกบูธจำหน่ายสินค้า 5 ครั้ง'
      ],
      topics: null,
      stats: null
    }
  },
  'community-consulting': {
    en: {
      title: 'Community Consulting',
      subtitle: 'Low-Carbon Community & Organizational Development',
      mainContent: [
        <>Por Jai Dee provides consulting services for the design and development of <strong>low-carbon models</strong> for communities and organizations. Drawing on hands-on experience from our model farms and collaborations across diverse local contexts, we support partners in developing practical, scalable, and sustainable solutions.</>,
        'Our consulting services include contextual and resource analysis, the design of biomass and soil management systems, planning of agricultural and learning activities, and the development of low-carbon community economic models. We work with government agencies, private sector organizations and CSR programs, local communities and municipalities, as well as educational institutions.',
        'Through this service, communities and organizations are able to adopt development models tailored to their specific contexts, achieve measurable carbon emission reductions, and strengthen local resilience and self-reliance. In 2025, our consulting work supported one military unit, one local school, and one community in implementing low-carbon development initiatives.'
      ],
      topics: null,
      stats: null
    },
    th: {
      title: 'ที่ปรึกษาด้านการพัฒนาชุมชนและองค์กรคาร์บอนต่ำ',
      subtitle: 'การพัฒนาโมเดลชุมชนและองค์กรคาร์บอนต่ำ',
      mainContent: [
        <>พอใจดีให้บริการที่ปรึกษาด้านการออกแบบและพัฒนาโมเดล<strong>คาร์บอนต่ำ</strong>สำหรับชุมชนและองค์กร โดยอาศัยประสบการณ์ตรงจากการดำเนินงานฟาร์มต้นแบบและความร่วมมือกับพื้นที่หลากหลายบริบท เพื่อสนับสนุนภาคีในการพัฒนาแนวทางที่สามารถนำไปใช้ได้จริง ขยายผลได้ และมีความยั่งยืนในระยะยาว</>,
        'บริการที่ปรึกษาของเราครอบคลุมการวิเคราะห์บริบทพื้นที่และทรัพยากร การออกแบบระบบจัดการชีวมวลและดิน การวางแผนกิจกรรมด้านเกษตรและการเรียนรู้ รวมถึงการพัฒนาโมเดลเศรษฐกิจชุมชนคาร์บอนต่ำ เราทำงานร่วมกับหน่วยงานภาครัฐ องค์กรเอกชนและโครงการ CSR ชุมชนและองค์กรปกครองส่วนท้องถิ่น ตลอดจนสถาบันการศึกษา',
        'ผ่านการให้บริการนี้ ชุมชนและองค์กรสามารถนำโมเดลการพัฒนาที่เหมาะสมกับบริบทของตนไปปรับใช้ ลดการปล่อยคาร์บอนได้อย่างเป็นรูปธรรม และเสริมสร้างความเข้มแข็งและการพึ่งพาตนเองในระดับพื้นที่ ในปี 2568 (2025) งานที่ปรึกษาของพอใจดีได้สนับสนุน หน่วยงานทหาร 1 หน่วย, โรงเรียนในพื้นที่ 1 แห่ง, และ ชุมชน 1 ชุมชน ในการดำเนินโครงการพัฒนาคาร์บอนต่ำ'
      ],
      topics: null,
      stats: null
    }
  }
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const { language } = useLanguage();
  const rawService = serviceData[serviceId];
  const t = translations[language];

  if (!rawService) {
    return (
      <div className="service-detail-page">
        <Navbar />
        <div className="service-not-found">
          <p>{t.serviceNotFound}</p>
          <Link to="/services">{t.backToServices}</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Handle bilingual services (workshops-study-tours) vs single-language services
  const service = rawService.en ? rawService[language] : rawService;

  return (
    <div className={`service-detail-page service-${serviceId}`}>
      <Navbar />
      
      <div className="service-detail-container">
        <Link to="/services" className="back-link">{t.backToServices}</Link>
        
        <h1 className="service-detail-title">{service.title}</h1>
        {service.subtitle && <h2 className="service-detail-subtitle">{service.subtitle}</h2>}
        
        <div className="service-detail-content">
          {service.mainContent.map((paragraph, index) => (
            <div key={index}>
              <p className="service-detail-paragraph">{paragraph}</p>
              {serviceId === 'workshops-study-tours' && 
               index === service.mainContent.length - 1 && (
                <div className="service-detail-image">
                  <img src="/images/service-detail-1.jpg" alt="Workshop participants" />
                </div>
              )}
              {serviceId === 'leaf-compost-starter-kits' && 
               index === service.mainContent.length - 1 && (
                <div className="service-detail-images-row">
                  <div className="service-detail-image">
                    <img src="/images/leaf-compost-1.jpg" alt="Composting site with excavator" />
                  </div>
                  <div className="service-detail-image">
                    <img src="/images/leaf-compost-2.jpg" alt="Compost processing with workers" />
                  </div>
                </div>
              )}
              {serviceId === 'organic-vegetable-supply' && 
               index === service.mainContent.length - 1 && (
                <div className="service-detail-images-row">
                  <div className="service-detail-image">
                    <img src="/images/organic-vegetable-1.jpg" alt="Organic vegetable market stall" />
                  </div>
                  <div className="service-detail-image">
                    <img src="/images/organic-vegetable-2.jpg" alt="Fresh tomatoes display" />
                  </div>
                </div>
              )}
              {serviceId === 'community-consulting' && 
               index === service.mainContent.length - 1 && (
                <div className="service-detail-image">
                  <img src="/images/community-consulting-1.jpg" alt="Community consulting workshop presentation" />
                </div>
              )}
            </div>
          ))}
        </div>

        {service.topics && (
          <div className="service-topics">
            <h2 className="topics-title">{t.studyTourTopics}</h2>
            {service.topics.map((topic, index) => (
              <div key={index} className="topic-item">
                <h3 className="topic-title">{topic.title}</h3>
                <p className="topic-description">{topic.description}</p>
                <p className="topic-outcome">{topic.outcome}</p>
                {serviceId === 'workshops-study-tours' && (
                  <>
                    {index === 0 && topic.outcome.includes('produce leaf compost independently') && (
                      <div className="service-detail-image">
                        <img src="/images/service-detail-2.jpg" alt="Leaf compost training" />
                      </div>
                    )}
                    {index === 1 && topic.outcome.includes('use leaf compost correctly') && (
                      <div className="service-detail-image">
                        <img src="/images/service-detail-3.jpg" alt="Compost application training" />
                      </div>
                    )}
                    {index === 2 && topic.outcome.includes('value-added food products') && (
                      <div className="service-detail-image">
                        <img src="/images/service-detail-4.jpg" alt="Value addition training" />
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {service.stats && (
          <div className="service-stats">
            <p className="stats-text">{service.stats}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

