import { services } from "@/data/services";

const ServiceCard = ({ 
  image, 
  title, 
  description, 
  features 
}: { 
  image: string, 
  title: string, 
  description: string, 
  features: string[] 
}) => {
  return (
    <div className="service-card bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6" dir="rtl">
        <h3 className="font-['Poppins'] font-semibold text-xl mb-3 text-[#0F4C81]">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <ul className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF6B35] ml-2 w-5 h-5">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-[#0F4C81] mb-4">השירותים המקצועיים שלנו</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            אנו מספקים פתרונות מקצה לקצה לחובבי ואנשי מקצוע של רחפני FPV בכל רחבי ישראל.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
