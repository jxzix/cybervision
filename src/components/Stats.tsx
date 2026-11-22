import { motion } from 'motion/react';
import { useLang } from '../i18n';

const text = {
  es: ['Miembros en el equipo', 'Usuarios Satisfechos', 'Resultados Garantizados'],
  en: ['Team members', 'Satisfied Users', 'Guaranteed Results'],
} as const;

export default function Stats() {
  const { lang } = useLang();
  const t = text[lang];
  return (
    <section className="py-20 bg-slate-950 border-y border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl font-black text-white mb-2">3</div>
            <div className="text-slate-400 font-medium text-lg">{t[0]}</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-6xl font-black text-white mb-2">118</div>
            <div className="text-slate-400 font-medium text-lg">{t[1]}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300 mb-2">100%</div>
            <div className="text-slate-400 font-medium text-lg">{t[2]}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
