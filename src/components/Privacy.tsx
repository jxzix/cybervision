import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const EMAIL = 'cybvisinfo@gmail.com';

export default function Privacy() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Aviso de privacidad | CYBERVISION';
    window.scrollTo(0, 0);
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <section className="pt-32 pb-24 bg-slate-950 text-slate-300">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link to="/" className="text-sm text-blue-400 hover:text-blue-300">← Volver al inicio</Link>
        <h1 className="text-3xl md:text-5xl font-bold text-white mt-6 mb-2">Aviso de privacidad</h1>
        <p className="text-slate-500 mb-10">Última actualización: 28 de octubre de 2026</p>

        <div className="space-y-8 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">1. Quién es el responsable</h2>
            <p>
              CyberVision (sitio <span className="text-white">cybervision.com.mx</span>) es responsable del uso y protección de tus datos personales. Puedes contactarnos en{' '}
              <a href={`mailto:${EMAIL}`} className="text-blue-400 hover:text-blue-300">{EMAIL}</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">2. Qué datos recopilamos</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Los que nos compartes por WhatsApp o correo: nombre, teléfono, correo electrónico e información de tu negocio o proyecto.</li>
              <li>Datos de navegación recabados automáticamente mediante cookies y herramientas de Google: dirección IP, tipo de dispositivo y navegador, y las páginas que visitas.</li>
            </ul>
            <p className="mt-2">Este sitio no tiene formularios que almacenen tus datos. Lo que nos envías llega directamente por tus propios medios de contacto.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">3. Para qué los usamos</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responder tus mensajes y atender tus dudas.</li>
              <li>Elaborar cotizaciones y prestar los servicios que contrates.</li>
              <li>Medir el desempeño del sitio y de nuestros anuncios para mejorarlos.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">4. Con quién los compartimos</h2>
            <p>
              No vendemos tus datos. Pueden intervenir proveedores necesarios para operar, como Google (analítica y publicidad), WhatsApp (mensajería) y nuestro proveedor de hosting. Solo tratan los datos para prestarnos su servicio.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">5. Tus derechos</h2>
            <p>
              Puedes solicitar el acceso, rectificación o cancelación de tus datos, y oponerte a su uso, escribiendo a{' '}
              <a href={`mailto:${EMAIL}`} className="text-blue-400 hover:text-blue-300">{EMAIL}</a>. Indica tu nombre, el derecho que quieres ejercer y una forma de contactarte. Responderemos en un plazo máximo de 20 días hábiles.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">6. Cookies</h2>
            <p>
              Usamos cookies y tecnologías similares de Google para medir visitas y la eficacia de la publicidad. Puedes desactivarlas o eliminarlas desde la configuración de tu navegador; algunas funciones del sitio podrían verse afectadas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">7. Cambios a este aviso</h2>
            <p>
              Podemos actualizar este aviso. La versión vigente siempre estará publicada en esta página, con su fecha de actualización.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
