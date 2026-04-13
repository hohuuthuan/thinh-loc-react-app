import { SERVICES } from '../../utils/data';
import { Card } from '../ui/Card';
import { ScrollAnimation } from '../ui/Badge';

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-16">
          <h2 className="section-title mb-4">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive construction solutions tailored to meet your unique needs
          </p>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollAnimation
              key={service.id}
              direction="up"
              delay={index * 0.1}
            >
              <Card
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
