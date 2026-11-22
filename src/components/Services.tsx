import { motion } from 'motion/react';
import { Layout, Database, Users, Settings, Bot, Cpu, Smartphone } from 'lucide-react';
import { useLang } from '../i18n';

const icons = [
  <Layout size={24} />,
  <Cpu size={24} />,
  <Users size={24} />,
  <Database size={24} />,
  <Settings size={24} />,
  <Smartphone size={24} />,
  <Bot size={24} />,
];

const text = {
  es: {
    h1: 'Soluciones digitales para ',
    h2: 'escalar tu negocio',
    p: 'En CyberVision creamos páginas web modernas, atractivas y funcionales, pensadas para ayudarte a vender más, dar confianza y llevar tu negocio a otro nivel.',
    items: [
      ['Landing pages que convierten', 'Diseños enfocados en guiar al usuario hacia la acción, maximizando tus ventas y leads.'],
      ['Sistemas web', 'Desarrollo de plataformas a medida dentro de tu sitio para gestionar tu negocio.'],
      ['Login y registro', 'Áreas privadas para tus clientes, membresías y gestión de usuarios segura.'],
      ['Bases de datos', 'Almacenamiento y gestión estructurada de la información vital de tu empresa.'],
      ['Funciones personalizadas', 'Desarrollamos exactamente lo que tu modelo de negocio necesita para operar online.'],
      ['Automatizaciones', 'Conectamos tus herramientas para que trabajen solas, ahorrándote horas de trabajo.'],
      ['Integración de IA', 'Chatbots de atención, asistentes de ventas y optimización de procesos con Inteligencia Artificial.'],
    ],
    ctaTitle: '¿Necesitas algo específico?',
    ctaText: 'Cuéntanos tu idea y nosotros la desarrollamos. Creamos tecnología a la medida de tus objetivos.',
    ctaBtn: 'Hablar con un experto',
  },
  en: {
    h1: 'Digital solutions to ',
    h2: 'scale your business',
    p: 'At CyberVision we build modern, attractive and functional websites designed to help you sell more, build trust and take your business to the next level.',
    items: [
      ['Landing pages that convert', 'Designs focused on guiding users to take action, maximizing your sales and leads.'],
      ['Web systems', 'Custom platforms built into your site to manage your business.'],
      ['Login and sign-up', 'Private areas for your customers, memberships and secure user management.'],
      ['Databases', "Structured storage and management of your company's vital information."],
      ['Custom features', 'We build exactly what your business model needs to operate online.'],
      ['Automations', 'We connect your tools so they work on their own, saving you hours of work.'],
      ['AI integration', 'Support chatbots, sales assistants and process optimization with Artificial Intelligence.'],
    ],
    ctaTitle: 'Need something specific?',
    ctaText: 'Tell us your idea and we will build it. We create technology tailored to your goals.',
    ctaBtn: 'Talk to an expert',
  },
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Services() {
  const { lang, wa, waHello } = useLang();
  const t = text[lang];
  return (
    <section id="servicios" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(closest-side,rgba(37,99,235,0.05),transparent)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(closest-side,rgba(14,165,233,0.05),transparent)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.h1}<span className="text-blue-400">{t.h2}</span>
          </h2>
          <p className="text-slate-400 text-lg">
            {t.p}
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.items.map(([title, description], index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
          
          {/* CTA Card inside grid */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-600 to-sky-500 p-8 rounded-2xl flex flex-col justify-center items-start relative overflow-hidden transition-all"
          >
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
              <Bot size={200} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">{t.ctaTitle}</h3>
            <p className="text-blue-100 mb-8 max-w-md relative z-10">
              {t.ctaText}
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={wa(waHello)} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors relative z-10">
              {t.ctaBtn}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
