import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0F4C81] to-[#1a6cb3] text-white">
      <div className="container mx-auto px-4 text-center" dir="rtl">
        <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-6">מוכנים לשדרג את חווית ה-FPV שלכם?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
          בין אם אתם צריכים בנייה מותאמת אישית, שירות תיקונים או ייעוץ מקצועי, אנחנו כאן לעזור לכם להשיג את יעדי ה-FPV שלכם.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact">
            <Button className="bg-[#FF6B35] hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-['Poppins'] font-medium text-center transition duration-300 w-full sm:w-auto">
              צרו קשר עכשיו
            </Button>
          </a>
          <a href="https://wa.me/97248483335">
            <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0F4C81] px-8 py-3 rounded-lg font-['Poppins'] font-medium text-center transition duration-300 w-full sm:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-5 h-5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              וואטסאפ
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
