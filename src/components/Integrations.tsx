import { motion } from 'motion/react';

export default function Integrations() {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
          Integramos tu negocio con <br/>
          <span className="text-blue-400">las principales aplicaciones</span>
        </h2>
        
        {/* Simple integration icons representation */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
          {/* Stripe */}
          <div className="text-3xl font-bold text-white tracking-tighter">stripe</div>
          {/* WhatsApp */}
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
             <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </div>
          {/* Facebook */}
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </div>
          {/* Instagram */}
          <div className="w-12 h-12 rounded-xl border-2 border-white flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </div>
          {/* Google */}
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center font-bold text-2xl text-white">
            G
          </div>
          {/* PayPal */}
          <div className="text-2xl font-bold text-white italic">PayPal</div>
        </div>
        
        <div className="mt-16 text-2xl font-bold text-slate-400">
          Y Más...
        </div>
      </div>
    </section>
  );
}
