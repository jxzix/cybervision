import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 shadow-lg border-b border-slate-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/cyb_logo.png" alt="CyberVision Logo" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
          <span className="text-2xl font-black tracking-tighter text-white drop-shadow-sm">
            CYBER<span className="text-blue-500">VISION</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/bots-ia" className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-blue-400">Bots y Asistentes con IA</Link>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/525572832749?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20los%20servicios%20de%20CyberVision%20%F0%9F%91%80" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]">
            Contactar
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-blue-500" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900 shadow-xl border-t border-slate-800 p-6 flex flex-col gap-4 md:hidden"
          >
            <Link to="/bots-ia" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium">Bots y Asistentes con IA</Link>
            <a href="https://wa.me/525572832749?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20los%20servicios%20de%20CyberVision%20%F0%9F%91%80" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center mt-4">
              Contactar por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
