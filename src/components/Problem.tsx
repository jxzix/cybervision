import { motion } from 'motion/react';
import { AlertTriangle, Clock, TrendingUp } from 'lucide-react';

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
            Mientras tú lo piensas, <br/>
            <span className="text-blue-600">tu competencia avanza</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Muchos negocios siguen dependiendo solo de redes sociales, limitando su alcance y profesionalismo. Otros ya están creciendo con una página web que trabaja por ellos 24/7.
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
            <h3 className="text-xl font-bold text-slate-900 mb-3">Pérdida de Confianza</h3>
            <p className="text-slate-600">
              Un negocio sin sitio web genera dudas. Los clientes buscan validación en línea antes de comprar o contratar.
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
            <h3 className="text-xl font-bold text-slate-900 mb-3">Oportunidades Perdidas</h3>
            <p className="text-slate-600">
              Cada día sin presencia web profesional es una venta potencial que se va a la competencia.
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
            <h3 className="text-xl font-bold mb-3">La Solución</h3>
            <p className="text-blue-100">
              Una plataforma digital que proyecte seriedad, capte leads automáticamente y cierre ventas por ti.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
