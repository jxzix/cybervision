import { motion } from 'motion/react';
import { ArrowRight, Globe, Code, Zap } from 'lucide-react';
import { useLang } from '../i18n';

const text = {
  es: {
    badge: 'Agencia de Diseño y Desarrollo Web',
    l1: 'Diseño web que ',
    l2: 'sí impulsa negocios',
    p: 'Tu negocio ya no puede seguir viéndose improvisado. Hoy tus clientes deciden en segundos si te compran… o se van con alguien que se vea más profesional.',
    cta1: 'Cotiza tu proyecto',
    cta2: 'Ver soluciones',
    c1: 'Presencia 24/7',
    c2: 'Alta Conversión',
    c3: 'Tecnología Moderna',
  },
  en: {
    badge: 'Web Design & Development Agency',
    l1: 'Web design that ',
    l2: 'truly grows businesses',
    p: 'Your business can no longer afford to look improvised. Today your customers decide in seconds whether to buy from you… or go with someone who looks more professional.',
    cta1: 'Get a quote',
    cta2: 'See solutions',
    c1: 'Online 24/7',
    c2: 'High Conversion',
    c3: 'Modern Technology',
  },
} as const;

// Si la página llegó con la portada ya pintada (prerender), no repetimos la animación de entrada.
const pre = typeof window !== 'undefined' && (window as unknown as { __PRE?: boolean }).__PRE === true;

export default function Hero() {
  const { lang, wa, waHello } = useLang();
  const t = text[lang];
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[radial-gradient(closest-side,rgba(37,99,235,0.2),transparent)]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(closest-side,rgba(14,165,233,0.1),transparent)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={pre ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {t.badge}
            </motion.div>
            <motion.h1 
              initial={pre ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              {t.l1}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                {t.l2}
              </span>
            </motion.h1>
            <motion.p 
              initial={pre ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed">
              {t.p}
            </motion.p>
            <motion.div 
              initial={pre ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={wa(waHello)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                {t.cta1} <ArrowRight size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#servicios" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-slate-700">
                {t.cta2}
              </motion.a>
            </motion.div>
            
            <motion.div 
              initial={pre ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-6 text-slate-500 text-sm font-medium">
              <div className="flex items-center gap-2"><Globe size={16} className="text-blue-500"/> {t.c1}</div>
              <div className="flex items-center gap-2"><Zap size={16} className="text-blue-500"/> {t.c2}</div>
              <div className="flex items-center gap-2"><Code size={16} className="text-blue-500"/> {t.c3}</div>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={pre ? false : { opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Abstract 3D-like representation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-sky-400/20 rounded-[2rem] transform rotate-3 border border-blue-500/20"></div>
              <div className="absolute inset-0 bg-slate-900 rounded-[2rem] transform -rotate-3 border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
                {/* Browser Mockup Header */}
                <div className="h-10 bg-slate-950 border-b border-slate-800 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <div className="ml-4 flex-1 h-5 bg-slate-800 rounded-md"></div>
                </div>
                {/* Mockup Body */}
                <div className="flex-1 p-6 flex flex-col gap-4 relative">
                  <div className="w-1/3 h-8 bg-slate-800 rounded-lg"></div>
                  <div className="w-3/4 h-12 bg-gradient-to-r from-blue-500/20 to-transparent rounded-lg border border-blue-500/30"></div>
                  <div className="w-full h-32 bg-slate-800/50 rounded-lg mt-4"></div>
                  <div className="flex gap-4 mt-auto">
                    <div className="w-24 h-10 bg-blue-600 rounded-lg"></div>
                    <div className="w-24 h-10 bg-slate-800 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
