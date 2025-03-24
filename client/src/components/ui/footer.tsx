import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF6B35] text-3xl">
                <path d="M12 8V4H8"/>
                <rect width="16" height="12" x="4" y="8" rx="2"/>
                <path d="M8 8v4"/>
                <path d="M12 8v4"/>
                <path d="M16 8v4"/>
              </svg>
              <span className="font-['Poppins'] font-bold text-2xl">Berman<span className="text-[#FF6B35]">FPV</span></span>
            </div>
            <p className="mb-6 text-gray-400" dir="rtl">
              שירותי בניה ותיקון רחפנים מקצועיים בישראל, מספקים פתרונות מותאמים אישית באיכות גבוהה לחובבים ואנשי מקצוע.
            </p>
          </div>
          
          <div>
            <h4 className="font-['Poppins'] font-semibold text-xl mb-6" dir="rtl">קישורים מהירים</h4>
            <ul className="space-y-3" dir="rtl">
              <li><Link href="/" className="text-gray-400 hover:text-[#FF6B35] transition duration-300">דף הבית</Link></li>
              <li><a href="/#services" className="text-gray-400 hover:text-[#FF6B35] transition duration-300">שירותים</a></li>
              <li><a href="/#gallery" className="text-gray-400 hover:text-[#FF6B35] transition duration-300">גלריה</a></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[#FF6B35] transition duration-300">אודות</Link></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-[#FF6B35] transition duration-300">צור קשר</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Poppins'] font-semibold text-xl mb-6" dir="rtl">השירותים שלנו</h4>
            <ul className="space-y-3" dir="rtl">
              <li><a href="/#services" className="text-gray-400 hover:text-[#FF6B35] transition duration-300">בניית רחפנים מותאמת אישית</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-[#FF6B35] transition duration-300">תיקונים ותחזוקה</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-[#FF6B35] transition duration-300">שדרוגי ביצועים</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-[#FF6B35] transition duration-300">הדרכת טיסת FPV</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-[#FF6B35] transition duration-300">ייעוץ ותכנון</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Poppins'] font-semibold text-xl mb-6" dir="rtl">צור קשר</h4>
            <ul className="space-y-3" dir="rtl">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF6B35] mt-1 ml-3 w-5 h-5">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-gray-400">מבוא חמה, 1293400</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF6B35] mt-1 ml-3 w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="https://wa.me/97248483335" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF6B35] transition duration-300">+972-4-848-3335</a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF6B35] mt-1 ml-3 w-5 h-5">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <a href="mailto:shachar@bermanfpv.com" className="text-gray-400 hover:text-[#FF6B35] transition duration-300">shachar@bermanfpv.com</a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF6B35] mt-1 ml-3 w-5 h-5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span className="text-gray-400">ראשון-חמישי: 9:00-18:00, שישי: 9:00-14:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0" dir="rtl">© {new Date().getFullYear()} BermanFPV. כל הזכויות שמורות.</p>
            <div className="flex space-x-6" dir="rtl">
              <a href="#" className="text-gray-400 hover:text-[#FF6B35] transition duration-300">מדיניות פרטיות</a>
              <a href="#" className="text-gray-400 hover:text-[#FF6B35] transition duration-300">תנאי שימוש</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
