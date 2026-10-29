import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/cyb_logo_192.png" alt="CyberVision Logo" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" loading="lazy" />
            <span className="text-2xl font-black tracking-tighter text-white">
              CYBER<span className="text-blue-500">VISION</span>
            </span>
          </div>

          <div className="text-sm text-center">
            © {new Date().getFullYear()} CyberVision. Todos los derechos reservados.
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="mailto:cybvisinfo@gmail.com" className="hover:text-white transition-colors">cybvisinfo@gmail.com</a>
            <Link to="/aviso-de-privacidad" className="hover:text-white transition-colors">Aviso de privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
