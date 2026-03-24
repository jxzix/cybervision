import { motion } from 'motion/react';
import { Layout, Database, Users, Settings, Bot, Cpu, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Layout size={24} />,
    title: "Landing pages que convierten",
    description: "Diseños enfocados en guiar al usuario hacia la acción, maximizando tus ventas y leads."
  },
  {
    icon: <Cpu size={24} />,
    title: "Sistemas web",
    description: "Desarrollo de plataformas a medida dentro de tu sitio para gestionar tu negocio."
  },
  {
    icon: <Users size={24} />,
    title: "Login y registro",
    description: "Áreas privadas para tus clientes, membresías y gestión de usuarios segura."
  },
  {
    icon: <Database size={24} />,
    title: "Bases de datos",
    description: "Almacenamiento y gestión estructurada de la información vital de tu empresa."
  },
  {
    icon: <Settings size={24} />,
    title: "Funciones personalizadas",
    description: "Desarrollamos exactamente lo que tu modelo de negocio necesita para operar online."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Automatizaciones",
    description: "Conectamos tus herramientas para que trabajen solas, ahorrándote horas de trabajo."
  },
  {
    icon: <Bot size={24} />,
    title: "Integración de IA",
    description: "Chatbots de atención, asistentes de ventas y optimización de procesos con Inteligencia Artificial."
  }
];

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
  return (
    <section id="servicios" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Soluciones digitales para <span className="text-blue-400">escalar tu negocio</span>
          </h2>
          <p className="text-slate-400 text-lg">
            En CyberVision creamos páginas web modernas, atractivas y funcionales, pensadas para ayudarte a vender más, dar confianza y llevar tu negocio a otro nivel.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">¿Necesitas algo específico?</h3>
            <p className="text-blue-100 mb-8 max-w-md relative z-10">
              Cuéntanos tu idea y nosotros la desarrollamos. Creamos tecnología a la medida de tus objetivos.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/525572832749?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20los%20servicios%20de%20CyberVision%20%F0%9F%91%80" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors relative z-10">
              Hablar con un experto
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
