import { motion } from 'motion/react';
import { Star, ExternalLink } from 'lucide-react';
import { useLang } from '../i18n';

const text = {
  es: {
    tag: 'Reseñas',
    h: '¿Qué dicen de nosotros?',
    a: ['Grandiosos resultados', '"Estamos increíblemente agradecidos por el trabajo de Cybervision. Gracias a su asistencia, hemos logrado ahorrar tiempo valioso al automatizar nuestras citas y mejorar nuestra presencia en línea. La página web ha atraído la atención de muchos nuevos clientes. Además, su experiencia en posicionamiento digital nos ha ayudado a destacar."'],
    b: ['¡Crecimiento exponencial!', '"El impacto que Cybervision ha tenido en nuestro negocio ha sido asombroso. Gracias a su plan de marketing y a la página web que diseñaron, hemos experimentado un crecimiento exponencial. Hemos ampliado nuestra presencia en redes lo que se ha traducido en un aumento significativo en la demanda de nuestros servicios. Su enfoque profesional ha sido fundamental para nuestro éxito."'],
    sr: '(abre su sitio web)',
  },
  en: {
    tag: 'Reviews',
    h: 'What do they say about us?',
    a: ['Great results', '"We are incredibly grateful for the work of Cybervision. Thanks to their help, we have saved valuable time by automating our appointments and improving our online presence. The website has attracted the attention of many new customers. In addition, their experience in digital positioning has helped us stand out."'],
    b: ['Exponential growth!', '"The impact Cybervision has had on our business has been amazing. Thanks to their marketing plan and the website they designed, we have experienced exponential growth. We have expanded our presence on social media, which has translated into a significant increase in demand for our services. Their professional approach has been key to our success."'],
    sr: '(opens their website)',
  },
} as const;

export default function Testimonials() {
  const { lang } = useLang();
  const t = text[lang];
  return (
    <section id="testimonios" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">{t.tag}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">
            {t.h}
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
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t.a[0]}</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              {t.a[1]}
            </p>
            <div className="font-bold text-slate-900 border-t border-slate-100 pt-4">
              - <a
                href="https://barberialeman.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors underline-offset-4 hover:underline"
              >
                BARBERÍA ALEMÁN <ExternalLink size={14} aria-hidden="true" />
                <span className="sr-only">{t.sr}</span>
              </a>
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
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t.b[0]}</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              {t.b[1]}
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
