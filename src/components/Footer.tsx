export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/cyb_logo.png" alt="CyberVision Logo" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
            <span className="text-2xl font-black tracking-tighter text-white">
              CYBER<span className="text-blue-500">VISION</span>
            </span>
          </div>
          
          <div className="text-sm">
            © {new Date().getFullYear()} CyberVision. Todos los derechos reservados.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
