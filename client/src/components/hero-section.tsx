import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-[#0F4C81] to-[#1a6cb3] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="font-['Poppins'] font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" dir="rtl">
              שירותי <span className="text-[#FF6B35]">בנייה ותיקון</span> מקצועיים של רחפני FPV
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90" dir="rtl">
              מבנייה מותאמת אישית ועד תיקונים מקצועיים, אנחנו היעד המוביל בישראל לכל צרכי רחפני ה-FPV שלכם.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" dir="rtl">
              <a href="#services">
                <Button className="bg-[#FF6B35] hover:bg-orange-500 text-white px-8 py-6 rounded-lg font-['Poppins'] font-medium text-center transition duration-300 w-full sm:w-auto">
                  השירותים שלנו
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="bg-white hover:bg-gray-100 text-[#0F4C81] px-8 py-6 rounded-lg font-['Poppins'] font-medium text-center transition duration-300 w-full sm:w-auto">
                  צור קשר
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="FPV Drone in Flight" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
