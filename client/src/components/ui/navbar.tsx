import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header id="home" className="relative">
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary text-3xl">
                <path d="M12 8V4H8"/>
                <rect width="16" height="12" x="4" y="8" rx="2"/>
                <path d="M8 8v4"/>
                <path d="M12 8v4"/>
                <path d="M16 8v4"/>
              </svg>
              <span className="font-['Poppins'] font-bold text-2xl text-primary">Berman<span className="text-[#FF6B35]">FPV</span></span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center" dir="rtl">
              <Link href="/" className={`font-['Poppins'] font-medium ${location === '/' ? 'text-[#FF6B35]' : 'hover:text-[#FF6B35]'} transition duration-300`}>
                דף הבית
              </Link>
              <a href="/#services" className="font-['Poppins'] font-medium hover:text-[#FF6B35] transition duration-300">
                שירותים
              </a>
              <a href="/#gallery" className="font-['Poppins'] font-medium hover:text-[#FF6B35] transition duration-300">
                גלריה
              </a>
              <Link href="/about" className={`font-['Poppins'] font-medium ${location === '/about' ? 'text-[#FF6B35]' : 'hover:text-[#FF6B35]'} transition duration-300`}>
                אודות
              </Link>
              <a href="/#contact">
                <Button className="bg-primary hover:bg-[#FF6B35] text-white px-6 py-2 rounded-md font-medium transition duration-300">
                  צור קשר
                </Button>
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-dark focus:outline-none">
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
                  className="text-2xl"
                >
                  {isOpen ? (
                    <path d="M18 6 6 18M6 6l12 12"/>
                  ) : (
                    <path d="M4 12h16M4 6h16M4 18h16"/>
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-4 pb-2`}>
            <div className="flex flex-col space-y-4" dir="rtl">
              <Link 
                href="/" 
                className={`font-['Poppins'] font-medium ${location === '/' ? 'text-[#FF6B35]' : 'hover:text-[#FF6B35]'} transition duration-300`}
                onClick={closeMenu}
              >
                דף הבית
              </Link>
              <a 
                href="/#services" 
                className="font-['Poppins'] font-medium hover:text-[#FF6B35] transition duration-300"
                onClick={closeMenu}
              >
                שירותים
              </a>
              <a 
                href="/#gallery" 
                className="font-['Poppins'] font-medium hover:text-[#FF6B35] transition duration-300"
                onClick={closeMenu}
              >
                גלריה
              </a>
              <Link 
                href="/about" 
                className={`font-['Poppins'] font-medium ${location === '/about' ? 'text-[#FF6B35]' : 'hover:text-[#FF6B35]'} transition duration-300`}
                onClick={closeMenu}
              >
                אודות
              </Link>
              <a 
                href="/#contact" 
                className="bg-primary hover:bg-[#FF6B35] text-white text-center px-6 py-2 rounded-md font-medium transition duration-300"
                onClick={closeMenu}
              >
                צור קשר
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
