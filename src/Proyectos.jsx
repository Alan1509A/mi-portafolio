import React from 'react';
import { ExternalLink, Code, Code2, Database, Calculator, BookOpen } from 'lucide-react';

const Proyectos = () => {
  // Lista de proyectos preconfigurada
  const portafolio = [
    {
      id: 1,
      titulo: "Sistema de Inventario Bibliotecario",
      descripcion: "Aplicación robusta para la gestión completa de inventarios. Arquitectura diseñada bajo los principios de la Programación Orientada a Objetos (POO) para garantizar escalabilidad y fácil mantenimiento.",
      tecnologias: ["React", "POO", "Tailwind CSS"],
      icono: <Database size={40} className="text-emerald-400" />,
      colorGradiante: "from-emerald-900/40 to-emerald-600/10",
      colorBorde: "border-emerald-500/30",
      linkGithub: "https://github.com/Alan1509A/App-Libreria-.git", // Aquí pondrás tu link de GitHub
      linkDemo: "https://app-libreria-alan-eduardo101509.vercel.app/"    // Aquí pondrás el link de Vercel si está publicado
    },
    {
      id: 2,
      titulo: "Suite Matemática Interactiva",
      descripcion: "Herramienta analítica para resolver y visualizar cálculos complejos de álgebra y geometría. Diseñada para procesar datos matemáticos de forma rápida y con una interfaz amigable.",
      tecnologias: ["Python", "Streamlit", "Matemáticas Aplicadas"],
      icono: <Calculator size={40} className="text-blue-400" />,
      colorGradiante: "from-blue-900/40 to-blue-600/10",
      colorBorde: "border-blue-500/30",
      linkGithub: "https://github.com/Alan1509A/simulador-matematico-.git",
      linkDemo: "https://alan-simulador-matematico.streamlit.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn_Om0CJb2WaDkx7BdiwpJdWdKnmegMJ6A3hmWhb0NJgpC6ucJif_a9rGs_fo_aem_2lA376jGTpKjdEIK1ib-jw"
    },
    {
      id: 3,
      titulo: "Blog: Entre Códigos y Discursos",
      descripcion: "Plataforma personal de artículos donde convergen la rigurosidad de las Ciencias de la Informática y el análisis del pensamiento crítico. Un espacio para documentar aprendizaje y reflexiones.",
      tecnologias: ["Desarrollo Web", "Markdown", "Diseño UI"],
      icono: <BookOpen size={40} className="text-purple-400" />,
      colorGradiante: "from-purple-900/40 to-purple-600/10",
      colorBorde: "border-purple-500/30",
      linkGithub: null, 
      linkDemo: "https://entrecodigosydiscursos.blogspot.com/"
    },
    {
      id: 4,
      titulo: "Modelo IA sobre deportes y asesoria legal",
      descripcion: "Modelo de Inteligencia Artificial entrenado para analizar y predecir resultados deportivos, así como ofrecer asesoría legal básica. Combina técnicas de Machine Learning con procesamiento de lenguaje natural.",
      tecnologias: ["Python", "Machine Learning", "NLP"],
      icono: <Code2 size={40} className="text-yellow-400" />,
      colorGradiante: "from-yellow-900/40 to-yellow-600/10",
      colorBorde: "border-yellow-500/30",
      linkGithub: "https://github.com/Alan1509A/Modelo-IA.git", 
      linkDemo: "https://alan-modeloia.vercel.app/"
    }, 
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Destacados</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Una selección de mis desarrollos recientes. Desde aplicaciones analíticas hasta sistemas estructurados y plataformas de contenido.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portafolio.map((proyecto) => (
          <div 
            key={proyecto.id} 
            className={`bg-gradient-to-b ${proyecto.colorGradiante} border ${proyecto.colorBorde} rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl`}
          >
            {/* Cabecera visual del proyecto (Reemplaza la imagen por ahora con un gradiente y un ícono) */}
            <div className="h-40 flex items-center justify-center bg-gray-900/50 border-b border-gray-800">
               {proyecto.icono}
            </div>

            {/* Contenido de la tarjeta */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">{proyecto.titulo}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-1">{proyecto.descripcion}</p>
              
              {/* Etiquetas de Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proyecto.tecnologias.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            
              {/* Botones de acción */}
              <div className="flex gap-3 mt-auto">
                
                {/* Magia de React: Este botón solo se dibuja si linkGithub NO es null */}
                {proyecto.linkGithub && (
                  <a 
                    href={proyecto.linkGithub} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition border border-gray-700 w-full justify-center"
                  >
                    <Code size={16} />
                    Código
                  </a>
                )}
                
                {/* Este botón de Demo/Visitar siempre aparece */}
                <a 
                  href={proyecto.linkDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition w-full justify-center shadow-lg shadow-blue-500/20"
                >
                  <ExternalLink size={16} />
                  {proyecto.linkGithub === null ? "Leer Blog" : "Demo"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;