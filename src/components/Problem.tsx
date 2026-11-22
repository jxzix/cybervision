import { motion } from 'motion/react';
import { AlertTriangle, Clock, TrendingUp } from 'lucide-react';
import { useLang } from '../i18n';

const text = {
  es: {
    h1: 'Mientras tú lo piensas, ',
    h2: 'tu competencia avanza',
    p: 'Muchos negocios siguen dependiendo solo de redes sociales, limitando su alcance y profesionalismo. Otros ya están creciendo con una página web que trabaja por ellos 24/7.',
    a: ['Pérdida de Confianza', 'Un negocio sin sitio web genera dudas. Los clientes buscan validación en línea antes de comprar o contratar.'],
    b: ['Oportunidades Perdidas', 'Cada día sin presencia web profesional es una venta potencial que se va a la competencia.'],
    c: ['La Solución', 'Una plataforma digital que proyecte seriedad, capte leads automáticamente y cierre ventas por ti.'],
  },
  en: {
    h1: 'While you think about it, ',
    h2: 'your competition moves ahead',
    p: 'Many businesses still rely only on social media, limiting their reach and professional image. Others are already growing with a website that works for them 24/7.',
    a: ['Loss of Trust', 'A business without a website raises doubts. Customers look for validation online before they buy or hire.'],
    b: ['Missed Opportunities', 'Every day without a professional web presence is a potential sale going to your competition.'],
    c: ['The Solution', 'A digital platform that projects credibility, captures leads automatically and closes sales for you.'],
  },
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Problem() {
  const { lang } = useLang();
  const t = text[lang];
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {t.h1}<br/>
            <span className="text-blue-600">{t.h2}</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.p}
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
              <AlertTriangle size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.a[0]}</h3>
            <p className="text-slate-600">
              {t.a[1]}
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.b[0]}</h3>
            <p className="text-slate-600">
              {t.b[1]}
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-blue-600 p-8 rounded-2xl shadow-xl text-white transform md:-translate-y-4 transition-all"
          >
            <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">{t.c[0]}</h3>
            <p className="text-blue-100">
              {t.c[1]}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
