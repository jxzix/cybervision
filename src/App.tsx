/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { useLang } from './i18n';

const homeMeta = {
  es: {
    title: 'CYBERVISION | Diseño web que impulsa negocios',
    description: 'Diseño web para negocios en México: landing pages, páginas con citas, sistemas a la medida y bots con IA. Cotiza tu proyecto con CyberVision.',
  },
  en: {
    title: 'CYBERVISION | Web design that grows businesses',
    description: 'Web design for businesses in Mexico: landing pages, booking websites, custom systems and AI bots. Get a quote from CyberVision.',
  },
} as const;

const Problem = lazy(() => import('./components/Problem'));
const Services = lazy(() => import('./components/Services'));
const Stats = lazy(() => import('./components/Stats'));
const Integrations = lazy(() => import('./components/Integrations'));
const Pricing = lazy(() => import('./components/Pricing'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CTA = lazy(() => import('./components/CTA'));
const BotsIA = lazy(() => import('./components/BotsIA'));
const Privacy = lazy(() => import('./components/Privacy'));
const CV = lazy(() => import('./components/CV'));
const NotFound = lazy(() => import('./components/NotFound'));
const Footer = lazy(() => import('./components/Footer'));

function Home() {
  const { hash } = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    document.title = homeMeta[lang].title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', homeMeta[lang].description);
  }, [lang]);

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Las secciones se cargan de forma diferida: esperamos a que exista el ancla.
    let tries = 0;
    const id = window.setInterval(() => {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.clearInterval(id);
      } else if (++tries > 40) {
        window.clearInterval(id);
      }
    }, 50);
    return () => window.clearInterval(id);
  }, [hash]);

  return (
    <main>
      <Hero />
      <Suspense fallback={null}>
        <Problem />
        <Services />
        <Stats />
        <Integrations />
        <Pricing />
        <Testimonials />
        <CTA />
      </Suspense>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-500 selection:text-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bots-ia" element={<Suspense fallback={null}><BotsIA /></Suspense>} />
            <Route path="/cv" element={<Suspense fallback={null}><CV /></Suspense>} />
            <Route path="/aviso-de-privacidad" element={<Suspense fallback={null}><Privacy /></Suspense>} />
            <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
          </Routes>
        </div>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}
