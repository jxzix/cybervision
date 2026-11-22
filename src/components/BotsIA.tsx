import { useEffect } from 'react';
import { CheckCircle2, Bot, CalendarClock, Dumbbell, Apple, LayoutList, CheckSquare, BellRing, BookOpen, MessageSquare, Users, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '../i18n';

const text = {
  es: {
    badge: 'Automatización a tu medida',
    h1: 'Asistentes Inteligentes ',
    h2: 'Hechos para Ti',
    intro: 'En CyberVision creamos asistentes inteligentes adaptados a ti, a tu negocio y a tu forma de trabajar. No ofrecemos soluciones genéricas. Diseñamos bots personalizados que pueden ayudarte a responder mensajes, organizar tareas, atender clientes, dar seguimiento, enviar recordatorios y automatizar procesos según lo que tú necesites.',
    adapt: 'Nos adaptamos completamente a cada persona.',
    biz: ['Si tienes un negocio:', ' programamos un asistente que responda clientes, explique tus servicios, ayude a agendar citas y trabaje por ti 24/7.'],
    personal: ['Si no tienes negocio:', ' creamos un asistente personal para apoyarte en tu día a día.'],
    forExample: 'Por ejemplo, podemos programar bots para:',
    examples: ['Recordatorios de medicina', 'Rutinas de ejercicio', 'Seguimiento de dieta', 'Organización personal', 'Tareas y pendientes', 'Recordatorios importantes', 'Apoyo con estudio o actividades diarias', 'Respuestas automáticas para clientes', 'Seguimiento de prospectos', 'Atención por WhatsApp'],
    howTitle: '¿Cómo funciona?',
    steps: ['Nos explicas qué necesitas', 'Analizamos cómo quieres que trabaje tu asistente', 'Lo programamos a tu medida', 'Lo ajustamos según tu estilo, objetivos y tipo de uso', 'Lo dejamos listo para ayudarte en tu vida personal o en tu negocio'],
    howQuote: '"Cada asistente se configura de forma distinta, porque cada cliente necesita algo diferente."',
    plansTitle: 'Planes y Precios',
    plansNote: 'Todos los precios están en pesos mexicanos (MXN).',
    recommended: 'Recomendado',
    setupLabel: 'Instalación:',
    monthlyLabel: 'Mensualidad:',
    choose: 'Elegir Plan',
    plans: [
      { title: 'Plan Básico Personal', subtitle: 'Ideal para personas que quieren un asistente personal adaptado a su rutina', features: ['Asistente personalizado', 'Recordatorios', 'Organización de tareas', 'Apoyo en hábitos, dieta, ejercicio o medicina', 'Ajuste básico a tus necesidades'], setup: '$2,997 MXN', monthly: '$897 MXN', recommended: false },
      { title: 'Plan Emprendedor', subtitle: 'Ideal para negocios pequeños que quieren responder mensajes y atender mejor a sus clientes', features: ['Bot personalizado para negocio', 'Respuestas automáticas', 'Información de servicios o productos', 'Atención básica a clientes', 'Adaptación al estilo del negocio'], setup: '$5,997 MXN', monthly: '$1,797 MXN', recommended: true },
      { title: 'Plan Negocio Pro', subtitle: 'Ideal para negocios que quieren automatizar ventas y maximizar clientes', features: ['Bot avanzado con enfoque en conversión', 'Simulación de vendedor profesional', 'Respuestas optimizadas para persuadir y agendar', 'Seguimiento automático a clientes interesados', 'Configuración estratégica según tu negocio'], setup: '$11,997 MXN', monthly: '$2,997 MXN', recommended: false },
    ],
    planMsg: (title: string, setup: string, monthly: string) => `Hola, me interesa el ${title} de Bots y Asistentes con IA de CyberVision (instalación ${setup} + mensualidad ${monthly}) 👀`,
    closeQuote: '"En CyberVision entendemos que cada persona y cada negocio funcionan diferente, por eso nuestros asistentes no son iguales para todos. Nos adaptamos a lo que tú necesitas y construimos una solución pensada específicamente para ti."',
    closeH1: '"Tu asistente ideal, ',
    closeH2: 'hecho a tu medida',
    closeH3: '"',
    btn1: 'Solicitar mi asistente',
    btn2: 'Quiero más información',
  },
  en: {
    badge: 'Automation made to measure',
    h1: 'Smart Assistants ',
    h2: 'Made for You',
    intro: 'At CyberVision we build smart assistants tailored to you, your business and the way you work. We do not offer generic solutions. We design custom bots that can help you reply to messages, organize tasks, serve customers, follow up, send reminders and automate processes according to what you need.',
    adapt: 'We adapt completely to each person.',
    biz: ['If you have a business:', ' we program an assistant that answers customers, explains your services, helps book appointments and works for you 24/7.'],
    personal: ["If you don't have a business:", ' we create a personal assistant to support you in your daily life.'],
    forExample: 'For example, we can program bots for:',
    examples: ['Medication reminders', 'Exercise routines', 'Diet tracking', 'Personal organization', 'Tasks and to-dos', 'Important reminders', 'Help with study or daily activities', 'Automatic replies for customers', 'Lead follow-up', 'WhatsApp customer service'],
    howTitle: 'How does it work?',
    steps: ['You tell us what you need', 'We analyze how you want your assistant to work', 'We program it to your needs', 'We fine-tune it to your style, goals and type of use', 'We leave it ready to help you in your personal life or your business'],
    howQuote: '"Every assistant is set up differently, because every client needs something different."',
    plansTitle: 'Plans and Pricing',
    plansNote: 'All prices are in US dollars (USD).',
    recommended: 'Recommended',
    setupLabel: 'Setup:',
    monthlyLabel: 'Monthly:',
    choose: 'Choose Plan',
    plans: [
      { title: 'Personal Basic Plan', subtitle: 'Ideal for people who want a personal assistant adapted to their routine', features: ['Personalized assistant', 'Reminders', 'Task organization', 'Support with habits, diet, exercise or medication', 'Basic adjustment to your needs'], setup: '$154 USD', monthly: '$46 USD', recommended: false },
      { title: 'Entrepreneur Plan', subtitle: 'Ideal for small businesses that want to reply to messages and serve their customers better', features: ['Custom bot for your business', 'Automatic replies', 'Information about services or products', 'Basic customer service', 'Adapted to your business style'], setup: '$308 USD', monthly: '$92 USD', recommended: true },
      { title: 'Business Pro Plan', subtitle: 'Ideal for businesses that want to automate sales and maximize customers', features: ['Advanced bot focused on conversion', 'Professional salesperson simulation', 'Replies optimized to persuade and book', 'Automatic follow-up with interested customers', 'Strategic setup for your business'], setup: '$615 USD', monthly: '$154 USD', recommended: false },
    ],
    planMsg: (title: string, setup: string, monthly: string) => `Hello, I'm interested in the ${title} for CyberVision's AI Bots & Assistants (setup ${setup} + monthly ${monthly}) 👀`,
    closeQuote: '"At CyberVision we understand that every person and every business works differently, which is why our assistants are not the same for everyone. We adapt to what you need and build a solution designed specifically for you."',
    closeH1: '"Your ideal assistant, ',
    closeH2: 'made to measure',
    closeH3: '"',
    btn1: 'Request my assistant',
    btn2: 'I want more information',
  },
} as const;

export default function BotsIA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { lang, wa, waHello } = useLang();
  const t = text[lang];
  const ic = 'w-5 h-5 text-blue-500';
  const exampleIcons = [
    <BellRing className={ic} />, <Dumbbell className={ic} />, <Apple className={ic} />, <LayoutList className={ic} />, <CheckSquare className={ic} />,
    <CalendarClock className={ic} />, <BookOpen className={ic} />, <MessageSquare className={ic} />, <Users className={ic} />, <MessageCircle className={ic} />,
  ];
  const examples = t.examples.map((text, i) => ({ text, icon: exampleIcons[i] }));
  const steps = t.steps;
  const plans = t.plans;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="bots-ia" className="pt-32 pb-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(closest-side,rgba(37,99,235,0.1),transparent)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* TEXTO PRINCIPAL */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400 font-medium text-sm mb-6">
            <Bot size={18} />
            <span>{t.badge}</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black tracking-tight mb-8">
            {t.h1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">{t.h2}</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
            {t.intro}
          </motion.p>
          
          <motion.div variants={itemVariants} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-left mb-12">
            <h3 className="text-xl font-bold mb-4 text-white">{t.adapt}</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-blue-500/20 p-1 rounded text-blue-400"><Bot size={16} /></div>
                <span><strong className="text-white">{t.biz[0]}</strong>{t.biz[1]}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-blue-500/20 p-1 rounded text-blue-400"><Bot size={16} /></div>
                <span><strong className="text-white">{t.personal[0]}</strong>{t.personal[1]}</span>
              </li>
            </ul>
          </motion.div>

          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-center">{t.forExample}</motion.h3>
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left"
          >
            {examples.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex items-center gap-3 bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl hover:border-blue-500/30 transition-colors"
              >
                {item.icon}
                <span className="text-slate-200 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CÓMO FUNCIONA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto mb-24"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">{t.howTitle}</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-slate-900 border border-blue-500/30 flex items-center justify-center text-2xl font-black text-blue-400 mb-4 shadow-[0_0_15px_rgba(37,99,235,0.15)] z-10">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-blue-500/30 to-transparent"></div>
                )}
                <p className="text-slate-300 font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
          <motion.p variants={itemVariants} className="text-center text-slate-400 mt-10 italic">
            {t.howQuote}
          </motion.p>
        </motion.div>

        {/* PLANES Y PRECIOS */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-3">{t.plansTitle}</motion.h2>
          <motion.p variants={itemVariants} className="text-center text-slate-400 mb-12">{t.plansNote}</motion.p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`flex flex-col rounded-3xl p-8 border ${
                  plan.recommended 
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.15)] relative transform lg:-translate-y-4' 
                    : 'bg-slate-900/50 border-slate-800'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                    {t.recommended}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-3 text-white">{plan.title}</h3>
                <p className="text-slate-400 text-sm mb-8 min-h-[40px]">{plan.subtitle}</p>
                
                <div className="mb-8 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-8 border-t border-slate-800">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-slate-400 text-sm">{t.setupLabel}</span>
                    <span className="text-xl font-semibold text-white">{plan.setup}</span>
                  </div>
                  <div className="flex justify-between items-end mb-6">
                    <span className="text-slate-400 text-sm">{t.monthlyLabel}</span>
                    <span className="text-3xl font-black text-blue-400">{plan.monthly}</span>
                  </div>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={wa(t.planMsg(plan.title, plan.setup, plan.monthly))}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${
                      plan.recommended
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    {t.choose}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CIERRE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(closest-side,rgba(37,99,235,0.1),transparent)] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(closest-side,rgba(37,99,235,0.1),transparent)] pointer-events-none"></div>
          
          <div className="relative z-10">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
              {t.closeQuote}
            </p>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-12">
              {t.closeH1}<span className="text-blue-400">{t.closeH2}</span>{t.closeH3}
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={wa(waHello)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
              >
                {t.btn1}
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={wa(waHello)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-lg transition-all border border-slate-700"
              >
                {t.btn2}
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
