import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n';

const text = {
  es: { prices: 'Precios', bots: 'Bots y Asistentes con IA', contact: 'Contactar', contactWa: 'Contactar por WhatsApp', open: 'Abrir menú', close: 'Cerrar menú' },
  en: { prices: 'Pricing', bots: 'AI Bots & Assistants', contact: 'Contact', contactWa: 'Contact us on WhatsApp', open: 'Open menu', close: 'Close menu' },
} as const;

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div role="group" aria-label="Idioma / Language" className="inline-flex rounded-full border border-slate-700 p-0.5 text-xs font-bold">
      {(['es', 'en'] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-3 py-1 rounded-full transition-colors ${lang === l ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { lang, waHello, wa } = useLang();
  const t = text[lang];
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 py-4 shadow-lg border-b border-slate-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/cyb_logo_192.png" alt="CyberVision Logo" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
          <span className="text-2xl font-black tracking-tighter text-white drop-shadow-sm">
            CYBER<span className="text-blue-500">VISION</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/#precios" className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-blue-400">{t.prices}</Link>
          <Link to="/bots-ia" className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 after:bg-blue-400">{t.bots}</Link>
          <LangToggle />
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={wa(waHello)} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]">
            {t.contact}
          </motion.a>
        </nav>

        {/* Mobile: idioma + menú */}
        <div className="md:hidden flex items-center gap-3">
          <LangToggle />
          <button className="text-blue-500" aria-label={isMobileMenuOpen ? t.close : t.open} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
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
            <Link to="/#precios" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium">{t.prices}</Link>
            <Link to="/bots-ia" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium">{t.bots}</Link>
            <a href={wa(waHello)} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center mt-4">
              {t.contactWa}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
