import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LOGO_W = 96;
const LOGO_H = 96;
const SPEED = 140; // px por segundo
const HUES = [210, 150, 40, 330, 270, 180, 20];
const TOP = 80; // deja libre la barra de navegación

export default function NotFound() {
  const navigate = useNavigate();
  const areaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLButtonElement>(null);
  const [hue, setHue] = useState(HUES[0]);
  const [corners, setCorners] = useState(0);

  useEffect(() => {
    document.title = 'Página no encontrada | CYBERVISION';
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  useEffect(() => {
    const area = areaRef.current;
    const logo = logoRef.current;
    if (!area || !logo) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = area.clientWidth;
    let h = area.clientHeight;
    let x = Math.random() * Math.max(1, w - LOGO_W);
    let y = TOP + Math.random() * Math.max(1, h - LOGO_H - TOP);
    let dx = Math.random() < 0.5 ? 1 : -1;
    let dy = Math.random() < 0.5 ? 1 : -1;
    let hueIndex = 0;
    let last = performance.now();
    let raf = 0;

    const draw = () => {
      logo.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    if (reduce) {
      x = (w - LOGO_W) / 2;
      y = TOP + (h - LOGO_H - TOP) / 2;
      draw();
      return;
    }

    const onResize = () => {
      w = area.clientWidth;
      h = area.clientHeight;
      x = Math.min(x, Math.max(0, w - LOGO_W));
      y = Math.min(y, Math.max(TOP, h - LOGO_H));
    };
    window.addEventListener('resize', onResize);

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      x += dx * SPEED * dt;
      y += dy * SPEED * dt;

      let bouncedX = false;
      let bouncedY = false;
      if (x <= 0) { x = 0; dx = 1; bouncedX = true; }
      else if (x >= w - LOGO_W) { x = w - LOGO_W; dx = -1; bouncedX = true; }
      if (y <= TOP) { y = TOP; dy = 1; bouncedY = true; }
      else if (y >= h - LOGO_H) { y = h - LOGO_H; dy = -1; bouncedY = true; }

      if (bouncedX || bouncedY) {
        hueIndex = (hueIndex + 1) % HUES.length;
        setHue(HUES[hueIndex]);
        if (bouncedX && bouncedY) setCorners((c) => c + 1);
      }

      draw();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div ref={areaRef} className="relative h-screen min-h-[560px] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.12),transparent_65%)] pointer-events-none"></div>

      <button
        ref={logoRef}
        type="button"
        onClick={() => navigate('/')}
        aria-label="Volver al inicio"
        title="Volver al inicio"
        className="absolute top-0 left-0 z-20 cursor-pointer will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-2xl p-2 transition-colors duration-200"
        style={{
          width: LOGO_W,
          height: LOGO_H,
          backgroundColor: `hsl(${hue} 85% 62%)`,
          boxShadow: `0 0 28px hsl(${hue} 85% 55% / 0.6)`,
        }}
      >
        <img
          src="/cyb_logo_192.png"
          alt=""
          width={LOGO_W}
          height={LOGO_H}
          draggable={false}
          className="h-full w-full object-contain rounded-lg"
        />
      </button>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <div className="text-7xl md:text-9xl font-black tracking-tighter text-white/10 select-none">404</div>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          Uy, esa dirección <span className="text-blue-400">no existe</span>
        </h1>
        <p className="text-slate-400 text-lg mt-4 max-w-md">
          Pero relájate un rato. Cuando quieras volver, oprime el logo.
        </p>
        {corners > 0 && (
          <p className="text-blue-300 text-sm font-semibold mt-4">
            ¡Esquina perfecta! x{corners} 🎯
          </p>
        )}
      </div>

      <Link
        to="/"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-sm text-slate-400 hover:text-white underline underline-offset-4"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
