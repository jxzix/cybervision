import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useLang } from '../i18n';

const text = {
  es: { h: 'No dejes tu negocio atrás', p: 'Haz que tu marca se vea seria, moderna y lista para crecer. Da el paso hoy mismo y transforma tu presencia digital con CyberVision.', b: 'Escríbenos por WhatsApp' },
  en: { h: "Don't leave your business behind", p: 'Make your brand look serious, modern and ready to grow. Take the step today and transform your digital presence with CyberVision.', b: 'Message us on WhatsApp' },
} as const;

export default function CTA() {
  const { lang, wa, waHello } = useLang();
  const t = text[lang];
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(closest-side,rgba(255,255,255,0.1),transparent)]"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            {t.h}
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            {t.p}
          </p>
          
          <a 
            href={wa(waHello)} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-5 rounded-full font-bold text-xl hover:bg-slate-50 hover:scale-105 transition-all shadow-xl"
          >
            <MessageCircle size={28} className="text-green-500" />
            {t.b}
          </a>
          
        </motion.div>
      </div>
    </section>
  );
}
