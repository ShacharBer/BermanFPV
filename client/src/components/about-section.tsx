import { Button } from "@/components/ui/button";

const StatsItem = ({ number, label }: { number: string, label: string }) => {
  return (
    <div>
      <p className="font-['Poppins'] font-bold text-3xl text-[#FF6B35] mb-2">{number}</p>
      <p className="text-gray-600" dir="rtl">{label}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="צוות BermanFPV" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2" dir="rtl">
            <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-[#0F4C81] mb-6">אודות BermanFPV</h2>
            <p className="text-gray-700 mb-4">
              מאז היווסדה בשנת 2018, BermanFPV הפכה במהירות ליעד המוביל בישראל לבניית רחפני FPV, תיקונים ושירותים. התשוקה שלנו לטכנולוגיית רחפנים מניעה אותנו לספק איכות עבודה ושירות לקוחות יוצאי דופן.
            </p>
            <p className="text-gray-700 mb-4">
              הצוות שלנו מורכב מטכנאי רחפנים מוסמכים וטייסי FPV מנוסים המבינים את ההיבטים הטכניים והמעשיים של טיסת רחפנים. אנו מחויבים לעזור ללקוחותינו להפיק את המרב מחוויית ה-FPV שלהם, בין אם הם מתחילים או מקצוענים מנוסים.
            </p>
            <p className="text-gray-700 mb-6">
              ממוקמים במבוא חמה עם לקוחות בכל רחבי ישראל, אנו גאים בזמני טיפול מהירים, רכיבים איכותיים ושירות אישי המותאם לצרכים הספציפיים שלך.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <StatsItem number="250+" label="בניות מותאמות אישית" />
              <StatsItem number="1000+" label="תיקונים שהושלמו" />
              <StatsItem number="50+" label="לקוחות עסקיים" />
              <StatsItem number="100%" label="שיעור שביעות רצון" />
            </div>
            
            <a href="#contact">
              <Button className="bg-[#0F4C81] hover:bg-[#FF6B35] text-white px-8 py-3 rounded-lg font-['Poppins'] font-medium text-center transition duration-300">
                צור קשר
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
