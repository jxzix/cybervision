import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Check, Coffee, CalendarCheck, LayoutDashboard, Sparkles } from 'lucide-react';

const wa = (msg: string) =>
  `https://wa.me/525572832749?text=${encodeURIComponent(msg)}`;

type Plan = {
  icon: ReactNode;
  name: string;
  tagline: string;
  examples: string;
  price: string;
  priceNote: string;
  features: string[];
  extra?: string;
  cta: string;
  message: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    icon: <Coffee size={24} />,
    name: 'Landing Page',
    tagline: 'Tu negocio en Google, con tu menú y tus fotos.',
    examples: 'Cafeterías, restaurantes, tiendas, servicios y más.',
    price: '$7,500',
    priceNote: 'Desde · pago único',
    features: [
      'Diseño a la medida con tus colores y tu marca',
      'Menú o catálogo digital con buscador',
      'Código QR listo para imprimir en tus mesas',
      'Botones directos a WhatsApp, mapa y redes',
      'Optimizada para celular y para aparecer en Google',
    ],
    cta: 'Quiero mi landing',
    message: 'Hola, me interesa el plan de Landing Page (desde $7,500) de CyberVision 👀',
  },
  {
    icon: <CalendarCheck size={24} />,
    name: 'Página con Citas',
    tagline: 'Tus clientes agendan solos, tú solo atiendes.',
    examples: 'Barberías, clínicas, dentistas, lashes, estéticas y más.',
    price: '$13,500',
    priceNote: 'Pago único',
    features: [
      'Todo lo del plan Landing Page',
      'Agenda conectada a Setmore: citas en la palma de tu mano',
      'Tus clientes reservan 24/7 desde el celular',
      'Gestiona tu calendario desde Setmore',
      'Ideal para dejar de agendar por mensajes',
    ],
    extra: '¿Prefieres una agenda propia, sin depender de Setmore? Se agrega como pago único adicional (se cotiza).',
    cta: 'Quiero agendar citas',
    message: 'Hola, me interesa el plan de Página con Citas ($13,500) de CyberVision 👀',
    popular: true,
  },
  {
    icon: <LayoutDashboard size={24} />,
    name: 'Sistema a la Medida',
    tagline: 'Administra todo tu negocio desde un solo lugar.',
    examples: 'Negocios con equipo, inventario o procesos propios.',
    price: 'A cotizar',
    priceNote: 'Pago único según el alcance',
    features: [
      'Panel de administración completo',
      'Registro y control de empleados',
      'Mercancía e inventario',
      'Usuarios con login, registro y permisos',
      'Base de datos, reportes y automatizaciones',
      'Agendar cita para cotizar, integraciones e IA según tu caso',
    ],
    extra: 'También puedes sumar una agenda propia, sin depender de Setmore, como pago único adicional.',
    cta: 'Agendar cita para cotizar',
    message: 'Hola, quiero agendar una cita para cotizar un Sistema a la Medida con CyberVision 👀',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">Precios</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">
            Planes claros, <span className="text-blue-400">sin letras chiquitas</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Pagas el desarrollo una sola vez y eliges cómo quieres mantener tu sitio en línea. Precios en pesos mexicanos (MXN).
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative flex flex-col rounded-3xl p-8 border ${
                plan.popular
                  ? 'bg-slate-900 border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.25)]'
                  : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  <Sparkles size={12} /> Más elegido
                </span>
              )}

              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-5">
                {plan.icon}
              </div>
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-slate-300 mt-2">{plan.tagline}</p>
              <p className="text-slate-500 text-sm mt-1">{plan.examples}</p>

              <div className="mt-6 mb-6 pb-6 border-b border-slate-800">
                <div className="text-4xl font-black tracking-tight">{plan.price}</div>
                <div className="text-sm text-slate-400 mt-1">{plan.priceNote}</div>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-slate-300">
                    <Check size={18} className="text-blue-400 mt-1 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {plan.extra && (
                <p className="text-sm text-slate-400 bg-slate-800/60 rounded-xl p-4 mb-6">{plan.extra}</p>
              )}

              <a
                href={wa(plan.message)}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center px-6 py-3.5 rounded-full font-bold transition-all ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                    : 'bg-white text-blue-600 hover:bg-slate-100'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Mensualidad */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={itemVariants}
          className="mt-16 max-w-5xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Después, elige cómo mantener tu sitio
          </h3>
          <p className="text-slate-400 text-center mb-8">
            Aplica a los tres planes. Eliges una de las dos opciones mensuales.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8">
              <div className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">Opción 1</div>
              <h4 className="text-xl font-bold">Hosting y seguridad</h4>
              <div className="mt-3 mb-4">
                <span className="text-4xl font-black">$750</span>
                <span className="text-slate-400"> / mes</span>
              </div>
              <p className="text-slate-400">
                Tu sitio siempre en línea, rápido y protegido. Ideal si tu página ya quedó como la quieres.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-sky-500/10 border border-blue-500/40 rounded-3xl p-8">
              <div className="text-sm font-bold text-blue-300 uppercase tracking-wider mb-2">Opción 2</div>
              <h4 className="text-xl font-bold">Hosting + desarrollo continuo</h4>
              <div className="mt-3 mb-4">
                <span className="text-4xl font-black">$1,500</span>
                <span className="text-slate-300"> / mes</span>
              </div>
              <p className="text-slate-300">
                Incluye el hosting y la seguridad, y además agregamos las mejoras que vayas pidiendo con el tiempo, sin cargos extra.
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-500 text-center mt-6 max-w-3xl mx-auto">
            El desarrollo continuo cubre mejoras y ajustes sobre tu sitio. Los cambios grandes que reconstruyan todo el sistema se cotizan por separado.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
