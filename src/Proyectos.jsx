import React from 'react';
// Importamos los iconos que usaremos en los botones y menús
import { ExternalLink, Code, Code2, BookOpen, Database, Calculator } from 'lucide-react';

// --- NUEVA SECCIÓN: IMPORTAMOS TUS CAPTURAS ---
// Asegúrate de guardar tus imágenes con estos nombres en la carpeta src
import inventarioPreview from './inventario_preview.png';
import matematicaPreview from './matematica_preview.png';
import modeloiapreview from './modeloiapreview.png'; 

const Proyectos = () => {
  // Lista de proyectos ACTUALIZADA para incluir imágenes
  const portafolio = [
    {
      id: 1,
      titulo: "Sistema de Inventario Bibliotecario",
      descripcion: "Aplicación robusta para la gestión completa de inventarios...",
      tecnologias: ["React", "POO", "Tailwind CSS"],
      
      // --- CAMBIO AQUÍ: USAMOS IMAGEN EN LUGAR DE ICONO GRANDE ---
      imagen: inventarioPreview, 
      
      // Mantenemos los iconos pequeños para los botones
      iconoBoton: <Database size={16} />,
      colorGradiante: "from-emerald-900/40 to-emerald-600/10",
      colorBorde: "border-emerald-500/30",
      linkGithub: "https://github.com/Alan1509A/App-Libreria-.git", // Reemplaza con tu link real
      linkDemo: "https://app-libreria-alan-eduardo101509.vercel.app/"
    },
    {
      id: 2,
      titulo: "Suite Matemática Interactiva",
      descripcion: "Herramienta analítica para resolver y visualizar cálculos...",
      tecnologias: ["Python", "Streamlit", "Matemáticas Aplicadas"],
      
      // --- CAMBIO AQUÍ: USAMOS IMAGEN EN LUGAR DE ICONO GRANDE ---
      imagen: matematicaPreview, 
      
      // Mantenemos los iconos pequeños para los botones
      iconoBoton: <Calculator size={16} />,
      colorGradiante: "from-blue-900/40 to-blue-600/10",
      colorBorde: "border-blue-500/30",
      linkGithub: "https://github.com/Alan1509A/simulador-matematico-.git",
      linkDemo: "https://alan-simulador-matematico.streamlit.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn_Om0CJb2WaDkx7BdiwpJdWdKnmegMJ6A3hmWhb0NJgpC6ucJif_a9rGs_fo_aem_2lA376jGTpKjdEIK1ib-jw"
    },
    {
      id: 3,
      titulo: "Blog: Entre Códigos y Discursos",
      descripcion: "Plataforma personal de artículos...",
      tecnologias: ["Blogger", "Redacción", "Filosofía"],
      
      // --- CAMBIO AQUÍ: MANTENEMOS EL ICONO PARA EL BLOG (NO ES SOFTWARE) ---
      imagen: null, 
      iconoBlog: <BookOpen size={40} className="text-purple-400" />,
      
      colorGradiante: "from-purple-900/40 to-purple-600/10",
      colorBorde: "border-purple-500/30",
      linkGithub: null, // Mantenemos la lógica de no mostrar GitHub
      linkDemo: "https://entrecodigosydiscursos.blogspot.com/"
    }, 
    {
      id: 4,
      titulo: "Mi Modelo IA sobre deportes y asesoria legal", 
      descripcion: "Modelo de IA para análisis de datos deportivos y asesoría legal...",
      tecnologias: ["Python", "Machine Learning", "Data Analysis"],
      imagen: modeloiapreview,
      iconoBoton: <Code2 size={16} />,
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
            
            {/* 1. CABECERA VISUAL (Imágenes o Íconos) */}
            <div className="h-48 flex items-center justify-center bg-gray-900/50 border-b border-gray-800 overflow-hidden relative group">
              {proyecto.imagen ? (
                <img 
                  src={proyecto.imagen} 
                  alt={`Vista previa de ${proyecto.titulo}`}
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                /* Si no hay imagen, intenta usar cualquier icono que hayas definido */
                proyecto.iconoBlog || proyecto.iconoGenuino || proyecto.iconoBoton
              )}
            </div>

            {/* 2. CONTENIDO DE LA TARJETA (Textos) */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">{proyecto.titulo}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-1">{proyecto.descripcion}</p>
              
              {/* 3. ETIQUETAS DE TECNOLOGÍAS */}
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

              {/* 4. BOTONES DE ACCIÓN (Con la lógica inteligente) */}
              <div className="flex gap-3 mt-auto">
                
                {/* El botón de código SOLO aparece si linkGithub NO es null */}
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
                
                {/* El botón azul siempre aparece */}
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