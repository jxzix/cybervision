import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Reseñas</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">
            ¿Qué dicen de nosotros?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
          >
            <div className="flex gap-1 text-yellow-400 mb-6">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Grandiosos resultados</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              "Estamos increíblemente agradecidos por el trabajo de Cybervision. Gracias a su asistencia, hemos logrado ahorrar tiempo valioso al automatizar nuestras citas y mejorar nuestra presencia en línea. La página web ha atraído la atención de muchos nuevos clientes. Además, su experiencia en posicionamiento digital nos ha ayudado a destacar."
            </p>
            <div className="font-bold text-slate-900 border-t border-slate-100 pt-4">
              - BARBERÍA ALEMÁN
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
          >
            <div className="flex gap-1 text-yellow-400 mb-6">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">¡Crecimiento exponencial!</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              "El impacto que Cybervision ha tenido en nuestro negocio ha sido asombroso. Gracias a su plan de marketing y a la página web que diseñaron, hemos experimentado un crecimiento exponencial. Hemos ampliado nuestra presencia en redes lo que se ha traducido en un aumento significativo en la demanda de nuestros servicios. Su enfoque profesional ha sido fundamental para nuestro éxito."
            </p>
            <div className="font-bold text-slate-900 border-t border-slate-100 pt-4">
              - GUEMEX Comercializadora
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
