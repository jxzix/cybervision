import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Printer } from 'lucide-react';

type Lang = 'es' | 'en';

const WHATSAPP = 'https://wa.me/525572832749';
const EMAIL = 'josiass318@gmail.com';

const content = {
  es: {
    title: 'Josías Sánchez | Currículum',
    role: 'Desarrollador Fullstack | Abogado | Legal Tech, Fintech y Comercio Exterior',
    location: 'Ciudad de México',
    back: '← Volver al inicio',
    print: 'Imprimir / PDF',
    sections: {
      profile: 'Perfil profesional',
      experience: 'Experiencia profesional',
      projects: 'Proyectos propios',
      education: 'Educación',
      skills: 'Habilidades técnicas',
      soft: 'Habilidades blandas',
      languages: 'Idiomas',
    },
    profile:
      'Desarrollador fullstack y abogado: construyo productos web rápidos y orientados a conversión, y los entiendo desde el lado legal y del negocio. Trabajo con React, TypeScript, PHP y MySQL en SinergiaWeb, donde desarrollo sitios y plataformas para clientes de salud, servicios financieros, turismo y fitness, y lanzo proyectos propios como FiniquitoMX. Mi experiencia previa como abogado litigante (civil, penal, pensiones e inmobiliario) y mi servicio social en Auditoría de Comercio Exterior del SAT me dan criterio analítico, atención al detalle y facilidad para trabajar bajo normativa estricta, un perfil poco común y muy útil en legal tech, fintech y proyectos regulados. Inglés avanzado (B2, TOEFL iBT).',
    experience: [
      {
        role: 'Desarrollador Web Fullstack',
        org: 'SinergiaWeb · Ciudad de México',
        date: '2025 — Presente',
        points: [
          'Desarrollo de sitios y plataformas web para clientes de salud, servicios financieros, turismo y fitness.',
          'Frontend moderno con React, TypeScript, Tailwind CSS y Vite; backend en PHP (Flight) con MySQL.',
          'Proyectos: LuggageKeeper (migración de versión PHP legacy a React + PHP), Health Forward by C-LART, Fincerta, Distrito Dental, Hipertrofit y portal de clientes SWPES.',
          'Interfaces funcionales orientadas a conversión y trabajo directo con clientes y equipo.',
        ],
        stack: 'React · TypeScript · JavaScript · PHP (Flight) · MySQL · Tailwind CSS · Vite',
      },
      {
        role: 'Servicio Social — Subadministración de Auditoría de Comercio Exterior',
        org: 'Servicio de Administración Tributaria (SAT) · Ciudad de México',
        date: 'Mar 2026 — Sep 2026',
        points: [
          'Apoyo en la revisión de expedientes y documentación de comercio exterior.',
          'Participación en auditorías de operaciones de importación y exportación.',
          'Análisis de pedimentos y verificación del cumplimiento de la normativa aduanera.',
          'Participación activa en comités de trabajo de la subadministración.',
        ],
      },
      {
        role: 'Abogado Litigante y Asesor Integral',
        org: 'Despacho Legal / Tu Casa CDMX (Gestión Independiente) · Ciudad de México',
        date: '2021 — 2025',
        points: [
          'Litigio y asesoría en materia civil y penal.',
          'Gestión integral de trámites de pensiones.',
          'Asesoría inmobiliaria: compraventa, arrendamiento y regularización de propiedades.',
          'Integración de herramientas digitales y marketing para la captación y gestión de clientes.',
          'Logros: cierre exitoso de casos de litigio y de transacciones inmobiliarias.',
        ],
      },
      {
        role: 'Programador Web y Desarrollador',
        org: 'CyberVision · Ciudad de México',
        date: '2018 — 2022',
        points: [
          'Desarrollo de software y aplicaciones web.',
          'Implementación de medidas básicas de ciberseguridad.',
          'Diseño de interfaces de usuario funcionales orientadas a conversión.',
        ],
      },
    ],
    projects: [
      {
        name: 'FiniquitoMX',
        url: 'https://calculafiniquito.mx',
        text: 'Calculadora de finiquitos y liquidaciones para México, basada en la Ley Federal del Trabajo. Une mi formación legal con desarrollo web.',
      },
      { name: 'PDFSmash', text: 'Aplicación web para trabajar con archivos PDF.' },
    ],
    education: [
      {
        title: 'Licenciatura en Derecho',
        badge: 'En proceso de titulación',
        org: 'Universidad de Londres · Estudios concluidos en 2025',
      },
      { title: 'Técnico en Informática', org: 'Instituto Politécnico Nacional (IPN) · Jul 2018 — Jul 2021' },
    ],
    skills: [
      ['Desarrollo', 'React, TypeScript, JavaScript, PHP (Flight), MySQL, Tailwind CSS, Vite, Git, ciberseguridad básica.'],
      ['Legal', 'Derecho civil, penal e inmobiliario, litigio, redacción jurídica, trámites de pensiones, comercio exterior y auditoría.'],
      ['Negocio', 'Manejo de CRM y marketing digital.'],
    ],
    soft: ['Negociación y oratoria', 'Creatividad e iniciativa', 'Aprendizaje ágil', 'Liderazgo y trabajo en comité'],
    languages: [
      ['Inglés', 'Avanzado (B2) — TOEFL iBT'],
      ['Español', 'Nativo'],
    ],
  },
  en: {
    title: 'Josías Sánchez | Résumé',
    role: 'Fullstack Developer | Lawyer | Legal Tech, Fintech & Foreign Trade',
    location: 'Mexico City, Mexico',
    back: '← Back to home',
    print: 'Print / PDF',
    sections: {
      profile: 'Professional summary',
      experience: 'Professional experience',
      projects: 'Personal projects',
      education: 'Education',
      skills: 'Technical skills',
      soft: 'Soft skills',
      languages: 'Languages',
    },
    profile:
      "Fullstack developer and lawyer: I build fast, conversion-focused web products and understand them from the legal and business side. I work with React, TypeScript, PHP and MySQL at SinergiaWeb, where I develop websites and platforms for clients in healthcare, financial services, travel and fitness, and I launch my own projects such as FiniquitoMX. My background as a litigation lawyer (civil, criminal, pensions and real estate) and my social service term in Foreign Trade Audit at Mexico's tax authority (SAT) give me analytical judgment, attention to detail and the ability to work under strict regulation, an uncommon profile that adds value in legal tech, fintech and regulated products. Advanced English (B2, TOEFL iBT).",
    experience: [
      {
        role: 'Fullstack Web Developer',
        org: 'SinergiaWeb · Mexico City',
        date: '2025 — Present',
        points: [
          'Development of websites and web platforms for clients in healthcare, financial services, travel and fitness.',
          'Modern frontend with React, TypeScript, Tailwind CSS and Vite; backend in PHP (Flight) with MySQL.',
          'Projects: LuggageKeeper (migration from legacy PHP to React + PHP), Health Forward by C-LART, Fincerta, Distrito Dental, Hipertrofit and the SWPES client portal.',
          'Functional, conversion-oriented interfaces and direct collaboration with clients and team.',
        ],
        stack: 'React · TypeScript · JavaScript · PHP (Flight) · MySQL · Tailwind CSS · Vite',
      },
      {
        role: 'Social Service Intern — Foreign Trade Audit Sub-Administration',
        org: "Servicio de Administración Tributaria (SAT), Mexico's tax authority · Mexico City",
        date: 'Mar 2026 — Sep 2026',
        points: [
          'Supported the review of case files and foreign trade documentation.',
          'Took part in audits of import and export operations.',
          'Analyzed customs declarations (pedimentos) and verified compliance with customs regulations.',
          "Actively participated in the sub-administration's working committees.",
        ],
      },
      {
        role: 'Litigation Lawyer & Legal Advisor',
        org: 'Despacho Legal / Tu Casa CDMX (Self-employed) · Mexico City',
        date: '2021 — 2025',
        points: [
          'Litigation and legal advice in civil and criminal matters.',
          'End-to-end management of pension procedures.',
          'Real estate advisory: purchase and sale, leasing and property regularization.',
          'Integration of digital tools and marketing for client acquisition and management.',
          'Achievements: successful closing of litigation cases and real estate transactions.',
        ],
      },
      {
        role: 'Web Programmer & Developer',
        org: 'CyberVision · Mexico City',
        date: '2018 — 2022',
        points: [
          'Software and web application development.',
          'Implementation of basic cybersecurity measures.',
          'Design of functional, conversion-oriented user interfaces.',
        ],
      },
    ],
    projects: [
      {
        name: 'FiniquitoMX',
        url: 'https://calculafiniquito.mx',
        text: 'Severance and settlement calculator for Mexico, based on the Federal Labor Law. Combines my legal background with web development.',
      },
      { name: 'PDFSmash', text: 'Web application for working with PDF files.' },
    ],
    education: [
      {
        title: "Bachelor's Degree in Law (Licenciatura en Derecho)",
        badge: 'Degree pending',
        org: 'Universidad de Londres · Coursework completed 2025 · Professional degree (titulación) in progress',
      },
      {
        title: 'Technical Degree in Computer Science (Técnico en Informática)',
        org: 'Instituto Politécnico Nacional (IPN) · Jul 2018 — Jul 2021',
      },
    ],
    skills: [
      ['Development', 'React, TypeScript, JavaScript, PHP (Flight), MySQL, Tailwind CSS, Vite, Git, basic cybersecurity.'],
      ['Legal', 'Civil, criminal and real estate law, litigation, legal writing, pension procedures, foreign trade and auditing.'],
      ['Business', 'CRM management and digital marketing.'],
    ],
    soft: ['Negotiation and public speaking', 'Creativity and initiative', 'Fast learner', 'Leadership and committee work'],
    languages: [
      ['English', 'Advanced (B2) — TOEFL iBT'],
      ['Spanish', 'Native'],
    ],
  },
} as const;

function initialLang(): Lang {
  try {
    const q = new URLSearchParams(window.location.search).get('lang');
    if (q === 'en' || q === 'es') return q;
    const saved = window.localStorage.getItem('cv-lang');
    if (saved === 'en' || saved === 'es') return saved;
  } catch {
    /* sin almacenamiento: seguimos con el idioma del navegador */
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="cv-card rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-5">{title}</h2>
      {children}
    </section>
  );
}

export default function CV() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.title;
    try {
      window.localStorage.setItem('cv-lang', lang);
    } catch {
      /* ignorar */
    }
  }, [lang, t.title]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex';
    document.head.appendChild(robots);
    return () => {
      robots.remove();
      document.title = previousTitle;
      document.documentElement.lang = 'es';
    };
  }, []);

  return (
    <div className="cv-root bg-slate-950 text-slate-300 pt-28 pb-24">
      <style>{`@media print{header,footer,.cv-noprint{display:none!important}.cv-root{background:#fff!important;padding-top:0!important}.cv-root *{color:#111!important;background:transparent!important;border-color:#d4d4d8!important;box-shadow:none!important}.cv-card{break-inside:avoid;padding:14px 0!important;border-width:0 0 1px 0!important;border-radius:0!important}}`}</style>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="cv-noprint flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link to="/" className="text-sm text-blue-400 hover:text-blue-300">{t.back}</Link>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-full px-4 py-2 transition-colors"
            >
              <Printer size={14} /> {t.print}
            </button>
            <div role="group" aria-label="Idioma / Language" className="inline-flex rounded-full border border-slate-700 p-1 text-sm font-semibold">
              {(['es', 'en'] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`px-4 py-1 rounded-full transition-colors ${lang === l ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  {l === 'es' ? 'ES' : 'EN'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <header className="mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">Josías Israel Sánchez Gutiérrez</h1>
          <p className="mt-3 text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300 font-semibold">{t.role}</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><MapPin size={14} className="text-blue-500" /> {t.location}</span>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-white"><Mail size={14} className="text-blue-500" /> {EMAIL}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white"><MessageCircle size={14} className="text-blue-500" /> +52 55 7283 2749 (WhatsApp)</a>
          </div>
        </header>

        <div className="space-y-6">
          <Section title={t.sections.profile}>
            <p className="leading-relaxed">{t.profile}</p>
          </Section>

          <Section title={t.sections.experience}>
            <div className="space-y-8">
              {t.experience.map((job) => (
                <div key={job.role + job.date}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-lg font-bold text-white">{job.role}</h3>
                    <span className="text-sm text-slate-500 font-medium">{job.date}</span>
                  </div>
                  <p className="text-sm text-blue-300 mb-3">{job.org}</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm leading-relaxed marker:text-slate-600">
                    {job.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  {'stack' in job && job.stack && <p className="mt-3 text-xs text-slate-500">Stack: {job.stack}</p>}
                </div>
              ))}
            </div>
          </Section>

          <Section title={t.sections.projects}>
            <div className="space-y-4">
              {t.projects.map((p) => (
                <div key={p.name}>
                  <h3 className="font-bold text-white">
                    {'url' in p && p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">{p.name} ↗</a>
                    ) : p.name}
                  </h3>
                  <p className="text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title={t.sections.education}>
            <div className="space-y-5">
              {t.education.map((e) => (
                <div key={e.title}>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-bold text-white">{e.title}</h3>
                    {'badge' in e && e.badge && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-300 border border-sky-400/30 rounded-full px-2.5 py-0.5">{e.badge}</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-400">{e.org}</p>
                </div>
              ))}
            </div>
          </Section>

          <div className="grid md:grid-cols-2 gap-6">
            <Section title={t.sections.skills}>
              <dl className="space-y-3 text-sm leading-relaxed">
                {t.skills.map(([k, v]) => (
                  <div key={k}><dt className="inline font-bold text-white">{k}: </dt><dd className="inline">{v}</dd></div>
                ))}
              </dl>
            </Section>
            <div className="space-y-6">
              <Section title={t.sections.soft}>
                <div className="flex flex-wrap gap-2">
                  {t.soft.map((s) => (
                    <span key={s} className="text-sm border border-slate-700 rounded-full px-3 py-1">{s}</span>
                  ))}
                </div>
              </Section>
              <Section title={t.sections.languages}>
                <ul className="space-y-1.5 text-sm">
                  {t.languages.map(([k, v]) => (
                    <li key={k}><span className="font-bold text-white">{k}:</span> {v}</li>
                  ))}
                </ul>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
