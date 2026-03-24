import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            No dejes tu negocio atrás
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Haz que tu marca se vea seria, moderna y lista para crecer. Da el paso hoy mismo y transforma tu presencia digital con CyberVision.
          </p>
          
          <a 
            href="https://wa.me/525572832749?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20los%20servicios%20de%20CyberVision%20%F0%9F%91%80" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-5 rounded-full font-bold text-xl hover:bg-slate-50 hover:scale-105 transition-all shadow-xl"
          >
            <MessageCircle size={28} className="text-green-500" />
            Escríbenos por WhatsApp
          </a>
          
        </motion.div>
      </div>
    </section>
  );
}
