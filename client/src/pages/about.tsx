import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#0F4C81] to-[#1a6cb3] text-white">
        <div className="container mx-auto px-4 text-center" dir="rtl">
          <h1 className="font-['Poppins'] font-bold text-4xl md:text-5xl mb-6">
            אודות BermanFPV
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
            היעד המוביל בישראל למומחיות ברחפני FPV, בנייה מותאמת אישית ותיקונים
            מקצועיים.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1564507831143-4daa9fb60e07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Drone Workshop"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>

            <div className="md:w-1/2" dir="rtl">
              <div className="inline-block bg-[#FF6B35] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                הסיפור שלנו
              </div>
              <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-[#0F4C81] mb-6">
                מחובבים למובילי תעשייה
              </h2>
              <p className="text-gray-700 mb-4">
                נוסד בשנת 2025 על ידי שחר ברמן חובבי רחפני FPV נלהבים, התחלנו
                כסדנה קטנה במבוא חמה בה שירתנו מרוצי רחפנים וחובבים מקומיים.
                המחויבות שלנו לאיכות ולמצוינות טכנית הפכה אותנו במהירות למומחים
                המועדפים לשירותי רחפני FPV בישראל.
              </p>
              <p className="text-gray-700 mb-4">
                ככל שקהילת רחפני ה-FPV בישראל צמחה, כך גם BermanFPV. הרחבנו את
                השירותים שלנו כדי לענות על הצרכים של צלמי וידאו מקצועיים, לקוחות
                תעשייתיים, וטייסים חובבים. כיום, אנו גאים להיות ספק שירותי רחפני
                FPV המוביל בישראל עם בסיס לקוחות נאמן בכל רחבי המדינה.
              </p>
              <p className="text-gray-700">
                עקרונות היסוד שלנו נשארו ללא שינוי: לספק שירות טכני מומחה,
                להשתמש רק ברכיבים באיכות הגבוהה ביותר, ולטפל ברחפן של כל לקוח
                באותה דאגה ותשומת לב שאנו מעניקים לציוד שלנו.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" dir="rtl">
            <div className="inline-block bg-[#FF6B35] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              הצוות שלנו
            </div>
            <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-[#0F4C81] mb-4">
              הכירו את המומחים
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              הצוות שלנו משלב מומחיות טכנית עם תשוקה אמיתית לרחפני FPV.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg text-center">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-['Poppins'] font-semibold text-xl text-[#0F4C81] mb-1">
                  דוד כהן
                </h3>
                <p className="text-[#FF6B35] font-medium mb-3">
                  מייסד וטכנאי ראשי
                </p>
                <p className="text-gray-600 mb-4" dir="rtl">
                  מהנדס תעופה וחלל לשעבר עם למעלה מ-10 שנות ניסיון בטכנולוגיית
                  רחפנים ומערכות FPV.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-[#0F4C81]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#0F4C81]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#0F4C81]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg text-center">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-['Poppins'] font-semibold text-xl text-[#0F4C81] mb-1">
                  שרה לוי
                </h3>
                <p className="text-[#FF6B35] font-medium mb-3">מנהלת טכנית</p>
                <p className="text-gray-600 mb-4" dir="rtl">
                  טייסת FPV זוכת פרסים המתמחה בבניות מותאמות אישית ותצורות
                  מתקדמות של בקרי טיסה.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-[#0F4C81]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#0F4C81]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#0F4C81]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg text-center">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-['Poppins'] font-semibold text-xl text-[#0F4C81] mb-1">
                  מיכאל רוזנברג
                </h3>
                <p className="text-[#FF6B35] font-medium mb-3">
                  מנהל הדרכה ותמיכה
                </p>
                <p className="text-gray-600 mb-4" dir="rtl">
                  מדריך רחפנים מוסמך עם התמחות באימון מתחילים וטכניקות טיסה
                  מתקדמות.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-[#0F4C81]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#0F4C81]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#0F4C81]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" dir="rtl">
            <div className="inline-block bg-[#FF6B35] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              הערכים שלנו
            </div>
            <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-[#0F4C81] mb-4">
              מה מניע אותנו
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              העקרונות המרכזיים המנחים את העבודה והשירות שלנו.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#0F4C81] text-white flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <line x1="12" x2="12" y1="2" y2="22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3
                className="font-['Poppins'] font-semibold text-xl mb-2 text-[#0F4C81]"
                dir="rtl"
              >
                איכות
              </h3>
              <p className="text-gray-600" dir="rtl">
                לעולם איננו מתפשרים על איכות הרכיבים או העבודה. כל בנייה ותיקון
                מבוצעים לפי הסטנדרטים הגבוהים ביותר.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#0F4C81] text-white flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <h3
                className="font-['Poppins'] font-semibold text-xl mb-2 text-[#0F4C81]"
                dir="rtl"
              >
                חדשנות
              </h3>
              <p className="text-gray-600" dir="rtl">
                אנו חוקרים ומיישמים באופן מתמיד את הטכנולוגיות והטכניקות
                העדכניות ביותר כדי לספק פתרונות מתקדמים.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#0F4C81] text-white flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3
                className="font-['Poppins'] font-semibold text-xl mb-2 text-[#0F4C81]"
                dir="rtl"
              >
                קהילה
              </h3>
              <p className="text-gray-600" dir="rtl">
                אנו תומכים באופן פעיל ומטפחים את הצמיחה של קהילת רחפני ה-FPV
                בישראל באמצעות סדנאות ואירועים.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#0F4C81] text-white flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3
                className="font-['Poppins'] font-semibold text-xl mb-2 text-[#0F4C81]"
                dir="rtl"
              >
                חינוך
              </h3>
              <p className="text-gray-600" dir="rtl">
                אנו מאמינים בהעצמת הלקוחות שלנו עם ידע ומיומנויות כדי שיוכלו
                להפיק את המרב מחוויית ה-FPV שלהם.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div
                className="inline-block bg-[#FF6B35] text-white px-4 py-1 rounded-full text-sm font-medium mb-4"
                dir="rtl"
              >
                המיקום שלנו
              </div>
              <h2
                className="font-['Poppins'] font-bold text-3xl md:text-4xl text-[#0F4C81] mb-6"
                dir="rtl"
              >
                בקרו בסדנה שלנו
              </h2>
              <p className="text-gray-700 mb-4" dir="rtl">
                הסדנה המתקדמת שלנו במבוא חמה מצוידת בכלים ובטכנולוגיה העדכניים
                ביותר לכל צרכי רחפני ה-FPV שלכם. אתם מוזמנים לבקר אותנו בשעות
                הפעילות כדי לדון בפרויקט שלכם או להביא את הרחפן שלכם לתיקון.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#FF6B35] mr-3 mt-1 w-5 h-5"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div dir="rtl">
                    <p className="font-medium">כתובת:</p>
                    <p className="text-gray-600">מבוא חמה, 1293400, ישראל</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#FF6B35] mr-3 mt-1 w-5 h-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div dir="rtl">
                    <p className="font-medium">שעות פעילות:</p>
                    <p className="text-gray-600">ראשון - חמישי: 9:00 - 18:00</p>
                    <p className="text-gray-600">שישי: 9:00 - 14:00</p>
                    <p className="text-gray-600">שבת: סגור</p>
                  </div>
                </div>
              </div>
              <a href="/#contact">
                <Button className="bg-[#0F4C81] hover:bg-[#FF6B35] text-white px-8 py-3 rounded-lg font-['Poppins'] font-medium text-center transition duration-300">
                  צור קשר
                </Button>
              </a>
            </div>

            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl h-96 bg-gray-200">
                {/* This would be a map in a real implementation */}
                <div className="h-full w-full flex items-center justify-center bg-gray-300">
                  <div className="text-center p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-4 w-16 h-16 text-gray-500"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="text-gray-600" dir="rtl">
                      מפה של המיקום שלנו במבוא חמה
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0F4C81] to-[#1a6cb3] text-white">
        <div className="container mx-auto px-4 text-center" dir="rtl">
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-6">
            התחילו את מסע ה-FPV שלכם איתנו
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
            בין אם אתם מתחילים שרוצים להתחיל או מקצוענים המחפשים שירות מומחה,
            אנחנו כאן כדי לעזור.
          </p>
          <a href="/#contact">
            <Button className="bg-[#FF6B35] hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-['Poppins'] font-medium text-center transition duration-300">
              צור קשר
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
