import React from 'react';
import { Award, ExternalLink, ShieldCheck, Calendar } from 'lucide-react';

const Certificados = () => {
  // Lista de tus certificados. Puedes agregar tus imágenes reales o dejar iconos.
  const certificaciones = [
    {
      id: 1,
      titulo: "Asistente Web",
      emisor: "Fundacion Carlos Slim - Capacítate para el Empleo",
      fecha: "Mayo 2021",
      tecnologias: ["Diseño web", "Desarrollo web", "HTML", "CSS", "JavaScript"],
      urlCredencial: "https://capacitateparaelempleo.org/verifica/24cbdac2-43a8-45ac-8a8d-56a782825a6a/b5a18a52-48ba-4c50-8da0-81ab194f11bc", // Aquí pon el link real de tu certificado
      iconoColor: "text-blue-400",
      bordeHover: "hover:border-blue-500/50"
    },
    {
      id: 2,
      titulo: "Computo Basico",
      emisor: "Fundacion Carlos Slim - Capacítate para el Empleo",
      fecha: "Mayo 2021",
      tecnologias: ["Ofimatica", "Office", "Programación"],
      urlCredencial: "https://capacitateparaelempleo.org/verifica/24cbdac2-43a8-45ac-8a8d-56a782825a6a/42e82f70-463d-4ce6-979f-ef462306b6e0",
      iconoColor: "text-purple-400",
      bordeHover: "hover:border-purple-500/50"
    },
    {
      id: 3,
      titulo: "Tecnico en Informatica",
      emisor: "Fundacion Carlos Slim - Capacítate para el Empleo",
      fecha: "Mayo 2021",
      tecnologias: ["Ofimatica", "Computacion", "Seguridad"],
      urlCredencial: "https://capacitateparaelempleo.org/verifica/24cbdac2-43a8-45ac-8a8d-56a782825a6a/09e19913-28f1-497b-b2ac-99fbc722c0ef",
      iconoColor: "text-emerald-400",
      bordeHover: "hover:border-emerald-500/50"
    },
    {
        id: 4,
        titulo: "Introduccion a la Ingenieria en Inteligencia Artifical", 
        emisor: "Iberoamerican Technology Foundation",
        fecha: "Abril 2026",
        tecnologias: ["Inteligencia Artificial", "Machine Learning", "Salesforce"],
        urlCredencial: "/Certificado-IF.pdf", 
        iconoColor: "text-amber-400",
        bordeHover: "hover:border-amber-500/50"
    },
    {
        id: 5,
        titulo: "Domina la IA con Gemini", 
        emisor: "Santander Open Academy",
        fecha: "Mayo 2026",
        tecnologias: ["Google Gemini", "Machine Learning", "IA Generativa"],
        urlCredencial: "/Certificado-Gemini.pdf",
        iconoColor: "text-violet-400",
        bordeHover: "hover:border-violet-500/50"
    }, 
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-fade-in">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Certificaciones</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Validación continua de habilidades técnicas y conocimientos estructurados.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificaciones.map((cert) => (
          <div 
            key={cert.id} 
            className={`bg-gray-800/40 border border-gray-700/50 rounded-xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cert.bordeHover}`}
          >
            {/* Cabecera de la tarjeta */}
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 bg-gray-900/80 rounded-lg ${cert.iconoColor}`}>
                <ShieldCheck size={28} />
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-xs font-mono bg-gray-900/50 px-2 py-1 rounded-full">
                <Calendar size={12} />
                {cert.fecha}
              </div>
            </div>

            {/* Información del Certificado */}
            <h3 className="text-xl font-bold text-white mb-1 leading-tight">
              {cert.titulo}
            </h3>
            <p className="text-gray-400 text-sm mb-6 flex-1">
              Emitido por: <span className="text-gray-300 font-medium">{cert.emisor}</span>
            </p>

            {/* Etiquetas */}
            <div className="flex flex-wrap gap-2 mb-6">
              {cert.tecnologias.map((tech, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-900/80 text-gray-400 text-xs rounded border border-gray-700">
                  {tech}
                </span>
              ))}
            </div>

            {/* Botón de verificación */}
            <a 
              href={cert.urlCredencial} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 bg-gray-700/30 hover:bg-gray-700/70 text-white text-sm font-medium rounded-lg transition-colors border border-gray-600/30"
            >
              <Award size={16} />
              Ver Credencial
              <ExternalLink size={14} className="ml-1 opacity-50" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificados;