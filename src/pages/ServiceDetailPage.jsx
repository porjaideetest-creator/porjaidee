import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ServiceDetailPage.css';

const serviceData = {
  'workshops-study-tours': {
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
  'leaf-compost-starter-kits': {
    title: 'Leaf Compost & Starter Kits',
    mainContent: [
      'Por Jai Dee develops organic leaf compost from fallen leaves and agricultural residues as an alternative to open burning, helping to reduce PM2.5 pollution while restoring soil health in a sustainable way. Alongside compost production, we offer vegetable growing starter kits designed to make organic farming accessible to everyone, including households and schools with limited space.',
      'This service includes the production and distribution of leaf-based organic compost, starter kits for home and school gardens, and basic guidance on soil care and safe vegetable growing systems. It is designed for households, beginner growers, schools, community learning centers, smallholder farmers, and community enterprises.',
      <>By promoting the use of organic compost, the program supports safer food production, reduces agricultural waste burning, and strengthens household and community-level food security. In 2025, the initiative helped <strong>reduce leaf burning by 22,000 kilograms</strong> and produced 30,000 kilograms of leaf compost, demonstrating measurable environmental and social impact.</>
    ],
    topics: null,
    stats: null
  },
  'organic-vegetable-supply': {
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
  'community-consulting': {
    title: 'Community Consulting',
    subtitle: 'Low-Carbon Community & Organizational Development',
    mainContent: [
      <>Por Jai Dee provides consulting services for the design and development of <strong>low-carbon models</strong> for communities and organizations. Drawing on hands-on experience from our model farms and collaborations across diverse local contexts, we support partners in developing practical, scalable, and sustainable solutions.</>,
      'Our consulting services include contextual and resource analysis, the design of biomass and soil management systems, planning of agricultural and learning activities, and the development of low-carbon community economic models. We work with government agencies, private sector organizations and CSR programs, local communities and municipalities, as well as educational institutions.',
      'Through this service, communities and organizations are able to adopt development models tailored to their specific contexts, achieve measurable carbon emission reductions, and strengthen local resilience and self-reliance. In 2025, our consulting work supported one military unit, one local school, and one community in implementing low-carbon development initiatives.'
    ],
    topics: null,
    stats: null
  }
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="service-detail-page">
        <Navbar />
        <div className="service-not-found">
          <p>Service not found</p>
          <Link to="/services">Back to Services</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`service-detail-page service-${serviceId}`}>
      <Navbar />
      
      <div className="service-detail-container">
        <Link to="/services" className="back-link">← Back to Services</Link>
        
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
            <h2 className="topics-title">Study Tour Topics</h2>
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

