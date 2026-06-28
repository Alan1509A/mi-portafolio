import React from 'react';
import { Code, Monitor, Rocket, CheckCircle2, Mail, ArrowRight, MessageCircle } from 'lucide-react';

const Servicios = () => {
  const servicios = [
    {
      titulo: "Desarrollo Web Empresarial",
      icono: <Code className="text-blue-400" size={32} />,
      descripcion: "Páginas web modernas, rápidas y adaptables a cualquier dispositivo. Diseñadas para convertir visitantes en clientes.",
      detalles: ["Portafolios y Landing Pages", "Catálogos de productos", "Interfaces modernas (React/Tailwind)"],
      color: "from-blue-900/40 to-blue-600/10",
      borde: "border-blue-500/30"
    },
    {
      titulo: "Digitalización de Negocios",
      icono: <Rocket className="text-emerald-400" size={32} />,
      descripcion: "Automatización de procesos para que tu negocio opere de forma inteligente. Dejamos el papel y pasamos al código.",
      detalles: ["Sistemas de Inventario", "Gestión de bases de datos", "Análisis y modelado de datos (Python)"],
      color: "from-emerald-900/40 to-emerald-600/10",
      borde: "border-emerald-500/30"
    },
    {
      titulo: "Soporte y Sistemas Operativos",
      icono: <Monitor className="text-purple-400" size={32} />,
      descripcion: "Instalación, optimización y mantenimiento de entornos de trabajo seguros para máxima productividad.",
      detalles: ["Windows (Pro/Enterprise)", "Distribuciones Linux", "Optimización de rendimiento"],
      color: "from-purple-900/40 to-purple-600/10",
      borde: "border-purple-500/30"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-fade-in text-gray-300">
      
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Soluciones Tecnológicas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Negocios</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Aplico el rigor de las Ciencias de la Informática para resolver problemas organizacionales reales. Escalabilidad, rendimiento y control total.
        </p>
      </div>

      {/* Grid de Servicios */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {servicios.map((servicio, index) => (
          <div 
            key={index} 
            className={`bg-gradient-to-b ${servicio.color} border ${servicio.borde} rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full`}
          >
            <div className="mb-6">{servicio.icono}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{servicio.titulo}</h3>
            <p className="text-gray-400 mb-6 flex-1">{servicio.descripcion}</p>
            
            <ul className="space-y-3 mb-8">
              {servicio.detalles.map((detalle, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-teal-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{detalle}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call to Action (Llamado a la acción) */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-10 text-center max-w-3xl mx-auto mt-12">
        <h3 className="text-2xl font-bold text-white mb-4">¿Listo para modernizar tu entorno?</h3>
        <p className="text-gray-400 mb-8">
          Cuéntame sobre tu proyecto o las necesidades de infraestructura de tu negocio. Te prepararé una propuesta técnica sin compromiso.
        </p>
        
        {/* Contenedor de los botones */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
         {/* Botón de Correo Mejorado */}
          <a 
            href="mailto:alaneduardo5788@gmail.com?subject=Cotización%20de%20Servicios"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all w-full sm:w-auto"
          >
            <Mail size={20} />
            Solicitar Cotización
          </a> 

          {/* Botón de WhatsApp */}
          <button 
            // Cambia el 525500000000 por tu número real (52 + tus 10 dígitos)
            onClick={() => window.open('https://wa.me/5552485628?text=Hola%20Alan,%20me%20interesa%20una%20cotización%20de%20tos%20servicios.', '_blank')}
            className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all w-full sm:w-auto"
          >
            <MessageCircle size={20} />
            WhatsApp
            <ArrowRight size={18} />
          </button>

        </div>
      </div>

    </div>
  );
};

export default Servicios;