import Servicios from './Servicios';
import SobreMi from './SobreMi';   
import TerminalInteractiva from './TerminalInteractiva';
import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  BookOpen, 
  Coffee, 
  Mail, 
  User, 
  Briefcase, 
  Code, 
  Play, 
  Pause, 
  RotateCcw,
  Plus,
  Trash2,
  CheckCircle,
  Circle,
  ExternalLink,
  ChevronRight,
  ArrowLeft,
  Cpu,
  Landmark
} from 'lucide-react';

// --- COMPONENTES DE SECCIÓN ---

const Inicio = ({ setSeccionActiva }) => (
  <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fade-in">
    <div className="mb-6 relative">
      <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      <div className="w-32 h-32 bg-gray-800 rounded-full border-4 border-blue-500 flex items-center justify-center relative z-10">
        <Terminal size={48} className="text-blue-400" />
      </div>
    </div>
    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
      ¡Hola, Mundo! Soy Alan Eduardo
    </h1>
    <p className="text-xl text-gray-400 mb-8 max-w-2xl">
      Estudiante de Ciencias de la Informática. Apasionado por el código, los algoritmos y por compartir conocimiento con la comunidad estudiantil.
    </p>
    
       <div className="flex flex-col sm:flex-row justify-center gap-4">
      {/* Botón Principal (Generador de Clientes) */}
      <button 
        onClick={() => setSeccionActiva('servicios')}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
      >
        <Briefcase size={20} />
        Ver Servicios
      </button>

      {/* Botón Secundario (Autoridad y Comunidad) */}
      <button 
        onClick={() => setSeccionActiva('estudia')}
        className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-lg font-medium transition flex items-center justify-center gap-2"
      >
        <Coffee size={20} />
        Estudia Conmigo
      </button>
    </div>
    <div className="w-full mt-12 w-full max-w-3xl animate-fade-in">
        <TerminalInteractiva setCategoriaActiva={setSeccionActiva} /> 
      </div>
  </div>
);

const Blog = () => {
  // Estado para saber qué post está abierto (null significa que estamos viendo la lista)
  const [postActivo, setPostActivo] = useState(null);
  // Estado para saber qué categoría de blog estamos viendo
  const [categoriaActiva, setCategoriaActiva] = useState('tech'); // 'tech' o 'politica'

  // 👇 POSTS DE TECNOLOGÍA (El blog original)
  const postsTech = [ 
    {
      id: 1,
      titulo: "Entendiendo Estructuras de Datos: Árboles vs Grafos",
      fecha: "19 Jun, 2026",
      resumen: "Un vistazo a dos de las estructuras de datos más fundamentales en informática, sus diferencias clave y cuándo usar cada una.",
      contenido: "Dentro del mundo de la Informatica hay demasiados conceptos y metodos que seguir y sobre todo, entender, el dia de hoy hablaremos sobre grafos y arboles. En primer lugar tenemos a los grafos, que se definen como un conjunto de nodos (vertices) y conexiones (aristas), Dentro de estos tenemos tres tipos de grafos basicos: Grafo dirigido, grafo no dirigido y grafo ponderado. Por otro lado, tenemos a los arboles, que son un tipo especial de grafo que no tiene ciclos y tiene una estructura jerarquica, es decir, cada nodo tiene un unico padre excepto el nodo raiz que no tiene padre. Dentro de los arboles tenemos varios tipos, como el arbol binario, arbol AVL y arbol B. Ambos conceptos son fundamentales en la Informatica y se utilizan en una gran variedad de aplicaciones, desde bases de datos hasta inteligencia artificial.",
      tags: ["Algoritmos", "Estructuras", "Ordenamientos"],
      readTime: "10 min lectura"
    },
    {
      id: 2, 
      titulo: "Que es la recursividad",
      fecha: "20 Jun, 2026",
      resumen: "Esto siempre sera basico en programacion, siempre te salvara la vida", 
      contenido: "la recursividad es una tecnica de programacion en donde una funcion se llama a si misma para resolver un problema, es una forma elegante de resolver problemas que pueden ser divididos en subproblemas mas pequeños. Un ejemplo clasico de recursividad es el calculo del factorial de un numero, donde el factorial de n se define como n * factorial(n-1) con la condicion base de que factorial(0) es igual a 1. La recursividad puede ser muy poderosa, pero tambien puede llevar a problemas de rendimiento si no se maneja correctamente, como el desbordamiento de pila. Es importante siempre tener una condicion base clara y asegurarse de que cada llamada recursiva se acerque a esa condicion base para evitar ciclos infinitos.", 
      tags: ["Recursividad", "Programacion"],
      readTime: "10 min de lectura"
    },
    {
      id: 3,
      titulo: "Que son los algoritmos de ordenamiento y cuales son los mas comunes?",
      fecha: "20 Jun, 2026",
      resumen: "Los algoritmos de ordenamiento son fundamentales en informática para organizar datos. En este artículo, exploramos los más comunes y sus características.",
      contenido: "Los algoritmos de ordenamiento son un conjunto de instrucciones que se utilizan para organizar datos en un orden especifico, ya sea ascendente o descendente. Algunos de los algoritmos de ordenamiento mas comunes son: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort y Quick Sort. Cada uno de estos algoritmos tiene sus propias ventajas y desventajas en terminos de complejidad temporal y espacial, y la eleccion del algoritmo adecuado depende del tamaño y la naturaleza de los datos a ordenar.",
      tags: ["Algoritmos", "Ordenamientos"],
      readTime: "8 min lectura"
    },
    {
      id: 4,
      titulo: "Configurando el entorno de desarrollo perfecto",
      fecha: "20 Jun, 2026",
      resumen: "Extensiones de VS Code, configuraciones de terminal y atajos de teclado que me ahorran horas de trabajo a la semana.",
      contenido: "Mi stack actual de VS Code incluye: Prettier, ESLint, GitLens y el tema 'Dracula'. Además, cambié mi terminal por defecto a ZSH con Oh-My-Zsh y el tema 'Agnoster'. Esto no solo hace que mi pantalla se vea genial (como de hacker), sino que los autocompletados me ahorran muchísimo tiempo a la hora de navegar entre carpetas.",
      tags: ["Productividad", "Herramientas"],
      readTime: "4 min lectura"
    },
    {
      id: 5,
      titulo: "Que es WSL en Windows y como configurarlo",
      fecha: "20 Jun, 2026",
      resumen: "WSL (Windows Subsystem for Linux) es una herramienta que permite ejecutar un entorno Linux directamente en Windows. En este artículo, te guío paso a paso para configurarlo y sacarle el máximo provecho.",
      contenido: "WSL es un subsistema que permite a los usuarios de Windows ejecutar un entorno Linux sin necesidad de una máquina virtual. Para configurarlo, primero debes habilitar la característica de WSL en Windows, luego instalar una distribución de Linux desde la Microsoft Store (como Ubuntu) y finalmente configurar tu terminal para usar WSL. Esto te permitirá tener acceso a herramientas y comandos de Linux directamente desde tu entorno de desarrollo en Windows, lo que es especialmente útil para desarrolladores web y programadores que trabajan con tecnologías basadas en Linux.",
      tags: ["WSL", "Linux", "Windows 11"],
      readTime: "6 min lectura"
    }
  ];

  // 👇 POSTS DE POLÍTICA (La nueva sección)
  const postsPolitica = [
    {
      id: 101, // Usamos IDs diferentes para no confundirlos con los de Tech
      titulo: "El impacto de la Inteligencia Artificial en las elecciones",
      fecha: "20 Jun, 2026",
      resumen: "Cómo los algoritmos y las redes sociales están moldeando la opinión pública y los retos regulatorios que enfrentamos.",
      contenido: "En la era digital, la Inteligencia Artificial (IA) se ha convertido en una herramienta poderosa para influir en la opinión pública. Desde la segmentación de anuncios políticos hasta la creación de deepfakes, la IA está transformando la forma en que los ciudadanos reciben información y toman decisiones electorales. Sin embargo, esta revolución tecnológica también plantea serias preocupaciones sobre la manipulación de datos, la privacidad y la necesidad de una regulación efectiva para proteger la integridad de los procesos democráticos.",
      tags: ["Política", "IA", "Sociedad"],
      readTime: "7 min lectura"
    },
    {
      id: 102,
      titulo: "Privacidad de datos: Un derecho humano en la era digital",
      fecha: "20 Jun, 2026",
      resumen: "Una reflexión sobre las leyes de protección de datos y por qué los ciudadanos deben exigir mayor transparencia a las grandes tecnológicas.",
      contenido: "La privacidad de datos se ha convertido en un tema crucial en la era digital. Con la cantidad de información personal que compartimos en línea, es fundamental que existan leyes y regulaciones que protejan nuestros datos. Sin embargo, muchas de las grandes empresas tecnológicas han sido criticadas por su falta de transparencia y por no hacer lo suficiente para proteger la privacidad de sus usuarios. Es hora de que los ciudadanos exijan mayor responsabilidad y que los gobiernos implementen políticas más estrictas para garantizar que la privacidad de datos sea respetada como un derecho humano fundamental.",
      tags: ["Privacidad", "Derechos", "Leyes"],
      readTime: "6 min lectura"
    },
    {
      id: 103,
      titulo: "El entorno digital en Mexico",
      fecha: "20 , 2026",
      resumen: "Una mirada a cómo México está adoptando la tecnología y los desafíos que enfrenta en términos de infraestructura y educación digital.",
      contenido: "El entorno digital en México ha experimentado un crecimiento significativo en los últimos años, con un aumento en la adopción de tecnologías y una mayor conectividad. Sin embargo, el país aún enfrenta desafíos importantes en términos de infraestructura digital, acceso a internet en zonas rurales y educación tecnológica. Para que México pueda aprovechar plenamente las oportunidades que ofrece la era digital, es crucial que se implementen políticas que fomenten la inversión en infraestructura, promuevan la alfabetización digital y garanticen que todos los ciudadanos tengan acceso a las herramientas tecnológicas necesarias para prosperar en el siglo XXI.",
      tags: ["México", "Tecnología", "Desarrollo"],   
      readTime: "5 min lectura"
    },
  ];

  // Combinamos ambos para poder buscar el post activo, sin importar de qué categoría sea
  const todosLosPosts = [...postsTech, ...postsPolitica];
  
  // Decidimos qué lista renderizar dependiendo de la pestaña seleccionada
  const postsAMostrar = categoriaActiva === 'tech' ? postsTech : postsPolitica;

  // Si hay un post activo, mostramos su contenido completo
  if (postActivo) {
    const post = todosLosPosts.find(p => p.id === postActivo);
    return (
      <div className="max-w-3xl mx-auto animate-fade-in">
        <button 
          onClick={() => setPostActivo(null)}
          className="mb-6 flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
        >
          <ArrowLeft size={20} /> Volver a los artículos
        </button>
        
        <article className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700/50">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">{post.titulo}</h1>
          
          <div className="flex items-center gap-4 mb-8 text-sm text-gray-500 border-b border-gray-700 pb-6">
            <span>{post.fecha}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <div className="flex gap-2 ml-auto">
              {post.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-900 rounded-md text-emerald-400 border border-emerald-900/50">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg">
            <p>{post.contenido}</p>
          </div>
        </article>
      </div>
    );
  }

  // Si no hay post activo, mostramos la lista con las pestañas
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-4">
        <Terminal className="text-emerald-400" size={32} />
        <h2 className="text-3xl font-bold">Terminal Blog_</h2>
      </div>

      {/* 👇 Pestañas para cambiar entre Tech y Política */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setCategoriaActiva('tech')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition ${
            categoriaActiva === 'tech'
              ? 'bg-blue-600/20 text-blue-400 border border-blue-500/50'
              : 'bg-gray-800 text-gray-400 border border-transparent hover:bg-gray-700 hover:text-gray-200'
          }`}
        >
          <Cpu size={18} />
          Blog Tech
        </button>
        <button
          onClick={() => setCategoriaActiva('politica')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition ${
            categoriaActiva === 'politica'
              ? 'bg-purple-600/20 text-purple-400 border border-purple-500/50'
              : 'bg-gray-800 text-gray-400 border border-transparent hover:bg-gray-700 hover:text-gray-200'
          }`}
        >
          <Landmark size={18} />
          Blog Política
        </button>
      </div>
      
      {/* Lista de artículos dinámica */}
      <div className="grid gap-6">
        {postsAMostrar.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Aún no hay artículos en esta categoría.</p>
        ) : (
          postsAMostrar.map(post => (
            <article 
              key={post.id} 
              onClick={() => setPostActivo(post.id)}
              className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl hover:border-blue-500/50 hover:bg-gray-800 transition group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">{post.titulo}</h3>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{post.fecha}</span>
              </div>
              <p className="text-gray-400 mb-4">{post.resumen}</p>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-900 rounded-md text-emerald-400 border border-emerald-900/50">
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-blue-500 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                  Leer artículo <ChevronRight size={16} />
                </span>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

const EstudiaConmigo = () => {
  // Estado para el Pomodoro
  const [tiempo, setTiempo] = useState(25 * 60); // 25 minutos
  const [activo, setActivo] = useState(false);
  const [modo, setModo] = useState('pomodoro'); // pomodoro, descansoCorto
  
  // Estado para To-Do
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Estudiar POO en Java", completada: false },
    { id: 2, texto: "Terminar práctica de Base de Datos", completada: true }
  ]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  // Lógica del Temporizador
  useEffect(() => {
    let intervalo = null;
    if (activo && tiempo > 0) {
      intervalo = setInterval(() => {
        setTiempo((t) => t - 1);
      }, 1000);
    } else if (tiempo === 0) {
      setActivo(false);
      // Aquí se podría reproducir un sonido
      alert(modo === 'pomodoro' ? '¡Tiempo de un descanso!' : '¡A estudiar de nuevo!');
    }
    return () => clearInterval(intervalo);
  }, [activo, tiempo, modo]);

  const formatoTiempo = (segundos) => {
    const m = Math.floor(segundos / 60);
    const s = segundos % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const cambiarModo = (nuevoModo) => {
    setModo(nuevoModo);
    setActivo(false);
    if (nuevoModo === 'pomodoro') setTiempo(25 * 60);
    else if (nuevoModo === 'descansoCorto') setTiempo(5 * 60);
  };

  // Lógica de To-Do
  const agregarTarea = (e) => {
    e.preventDefault();
    if (!nuevaTarea.trim()) return;
    setTareas([...tareas, { id: Date.now(), texto: nuevaTarea, completada: false }]);
    setNuevaTarea('');
  };

  const toggleTarea = (id) => {
    setTareas(tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto animate-fade-in grid md:grid-cols-2 gap-8">
      {/* Columna Izquierda: Pomodoro & Info */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Coffee className="text-orange-400" size={32} />
          <h2 className="text-3xl font-bold">Focus Room</h2>
        </div>
        <p className="text-gray-400 mb-8">Únete a mi sesión de estudio. Usa el temporizador Pomodoro para mantener la concentración y anota tus tareas aquí abajo.</p>

        {/* Pomodoro Timer */}
        <div className="bg-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl border border-gray-700">
          <div className="flex gap-4 mb-8">
            <button 
              onClick={() => cambiarModo('pomodoro')}
              className={`px-4 py-1 rounded-full text-sm font-medium transition ${modo === 'pomodoro' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              Pomodoro (25m)
            </button>
            <button 
              onClick={() => cambiarModo('descansoCorto')}
              className={`px-4 py-1 rounded-full text-sm font-medium transition ${modo === 'descansoCorto' ? 'bg-emerald-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              Descanso (5m)
            </button>
          </div>

          <div className="text-7xl font-mono font-bold mb-8 text-white tracking-wider">
            {formatoTiempo(tiempo)}
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => setActivo(!activo)}
              className="w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white transition shadow-lg shadow-blue-500/20"
            >
              {activo ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
            </button>
            <button 
              onClick={() => cambiarModo(modo)} // Reinicia el tiempo del modo actual
              className="w-16 h-16 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition"
            >
              <RotateCcw size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Columna Derecha: To-Do y Música */}
      <div className="flex flex-col gap-6">
        
        {/* 👇 REPRODUCTOR DE MÚSICA (Spotify Iframe) 👇 */}
        <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden h-[152px]">
          <iframe 
            style={{ borderRadius: '12px' }} 

            src="https://open.spotify.com/embed/track/5TbzAWWc5eJaANpA9kfGCd?utm_source=generator"
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>

        {/* To-Do List */}
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="text-blue-400" size={20}/> Tareas de la Sesión
          </h3>
          
          <form onSubmit={agregarTarea} className="flex gap-2 mb-4">
            <input 
              type="text" 
              value={nuevaTarea}
              onChange={(e) => setNuevaTarea(e.target.value)}
              placeholder="¿Qué vas a estudiar hoy?" 
              className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition"
            />
            <button type="submit" className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition">
              <Plus size={20} />
            </button>
          </form>

          <div className="flex-1 overflow-y-auto pr-2 space-y-2">
            {tareas.length === 0 ? (
              <p className="text-gray-500 text-sm text-center mt-4">No hay tareas pendientes. ¡Agrega una!</p>
            ) : (
              tareas.map(tarea => (
                <div key={tarea.id} className="flex items-center justify-between group p-2 hover:bg-gray-750 rounded-lg transition bg-gray-900/50">
                  <div 
                    className="flex items-center gap-3 cursor-pointer flex-1"
                    onClick={() => toggleTarea(tarea.id)}
                  >
                    {tarea.completada ? (
                      <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                    ) : (
                      <Circle size={18} className="text-gray-500 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${tarea.completada ? 'line-through text-gray-500' : 'text-gray-300'}`}>
                      {tarea.texto}
                    </span>
                  </div>
                  <button 
                    onClick={() => eliminarTarea(tarea.id)}
                    className="text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition p-1"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="md:col-span-2 mt-4 bg-gradient-to-r from-blue-900/20 to-teal-900/20 border border-blue-500/30 rounded-xl p-8 text-center shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-3">
          ¿Atascado en un proyecto o preparándote para un examen?
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Reserva una sesión de asesoría personalizada 1 a 1. Ya sea para depurar código complejo, entender un poco de programación, o revisar temas de matematicas como Algebra, Geometria o Aritmetica, trabajaremos juntos para resolverlo.
        </p>
        
        <button 
          onClick={() => window.open('https://calendly.com/alaneduardo5788/30min', '_blank')}
          className="flex items-center justify-center gap-2 mx-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all"
        >
          Agendar Asesoría Personalizada 
        </button>
        
        <p className="text-sm text-gray-400 mt-4">
          * Horarios flexibles. Pago seguro al momento de reservar.
        </p>
      </div> 
    </div>
  );
};

const Recursos = () => {
  // 👇 AQUÍ PUEDES EDITAR LOS RECURSOS
  // Agregué una categoría nueva para Documentos/Apuntes.
  // En "url" puedes poner enlaces a Google Drive, Dropbox, o rutas de PDFs alojados en tu sitio.
  const categorias = [
    {
      titulo: "Mis Apuntes y Documentos",
      links: [
        { nombre: "Resumen POO (PDF)", url: "https://www.etsisi.upm.es/sites/default/files/curso_2013_14/MASTER/MIW.JEE.POOJ.pdf", desc: "Una guia para pasar Programación Orientada a Objetos jajajaja." },
        { nombre: "Libro sobre Álgebra Lineal", url: "https://www.cs.buap.mx/~sandoval/ALAverano2013/AlgebraLineal.pdf", desc: "Ejercicios resueltos y guías de estudio." },
        { nombre: "Mis proyectos en GitHub", url: "https://github.com/Alan1509A/mi-portafolio.git", desc: "Este repositorio contiene una guia visual sobre como cree este sitio web." }
      ]
    },
    {
      titulo: "Documentación Fundamental",
      links: [
        { nombre: "Aprende React de forma profesional", url: "https://react.dev/", desc: "React te permite crear interfaces de usuario a partir de piezas individuales llamadas componentes. Crea tus propios componentes de React como , , y . Luego, combínalos para crear pantallas, páginas y aplicaciones completas" },
        { nombre: "Cppreference", url: "https://cppreference.com/", desc: "Documentación oficial de C++." },
        { nombre: "Documentación de Python", url: "https://docs.python.org/3/", desc: "La documentación oficial de Python." },
        { nombre: "Curso de Linux desde cero (PDF)", url: "/curso_linux.pdf", desc: "Un curso completo para aprender Linux desde lo más básico." },
      ]
    },
    {    
      titulo: "Herramientas Útiles",
      links: [
        { nombre: "GitHub Student Developer Pack", url: "https://education.github.com/pack", desc: "Herramientas gratuitas para estudiantes." },
        { nombre: "Vercel", url: "https://vercel.com/", desc: "Para alojar tus proyectos gratis." },
        { nombre: "Figma", url: "https://figma.com/", desc: "Diseño de interfaces." },
        { nombre: "Mi App sobre Modelos y Herramientas Matematicas, desarrollada en Python", url: "https://alan-simulador-matematico.streamlit.app/", desc: "Una app que simula el comportamiento de diferentes modelos matematicos, como el modelo de crecimiento poblacional, el modelo de depredador-presa y el modelo de difusión de enfermedades. Es una herramienta interactiva para entender conceptos matemáticos complejos a través de la visualización y la simulación." },  
        { nombre: "Mi Modelo IA de Deportes y Asesoria Legal", url: "https://alan-modeloia.vercel.app/", desc: "Un modelo de Inteligencia Artificial que puede responder preguntas sobre deportes y asesoría legal. Entrenado con datos de Wikipedia y otras fuentes confiables, este modelo puede proporcionar información precisa y útil en tiempo real." }, 
      ]    
    },
    {
      titulo: "Cursos Tech", 
      links: [
        { nombre: "Curso de Linux desde cero (YouTube)", url: "https://youtu.be/jVQKk8IB9pA?si=wyJEjBksTy0P8UM_", desc: "Un curso completo para aprender Linux desde lo más básico." },
        { nombre: "Fundamentos de Ciberseguridad (Santander Open Academy)", url: "https://app.santanderopenacademy.com/es/course/cybersecurity-fundamentals", desc: "Curso gratuito de ciberseguridad." },
        { nombre: "Domina la IA con Gemini (Santander Open Academy)", url: "https://app.santanderopenacademy.com/es/course/master-ai-with-gemini", desc: "Curso gratuito sobre Inteligencia Artificial." },
        { nombre: "Fundamentos de Python (Cisco Networking Academy)", url: "https://www.netacad.com/courses/python-essentials-1?courseLang=en-US", desc: "Curso gratuito de Python." },
      ]
    },
  ];   

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
        <Code className="text-purple-400" size={32} />
        <h2 className="text-3xl font-bold">Recursos & Enlaces</h2>
      </div>
      <p className="text-gray-400 mb-8">Una colección curada de las herramientas y documentaciones que más utilizo en mi día a día como estudiante.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {categorias.map(cat => (
          <div key={cat.titulo} className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50">
            <h3 className="text-xl font-bold mb-4 text-gray-200">{cat.titulo}</h3>
            <div className="space-y-4">
              {cat.links.map(link => (
                <a key={link.nombre} href={link.url} className="block group bg-gray-900/50 p-4 rounded-xl border border-gray-800 hover:border-purple-500/50 transition">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-blue-400 group-hover:text-blue-300">{link.nombre}</span>
                    <ExternalLink size={14} className="text-gray-500 group-hover:text-blue-400" />
                  </div>
                  <p className="text-sm text-gray-400">{link.desc}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contacto = () => {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
        <Mail className="text-blue-400" size={32} />
        <h2 className="text-3xl font-bold">PingMe_</h2>
      </div>
      
      <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl">
        <p className="text-gray-400 mb-6">¿Quieres colaborar en un proyecto, tienes dudas sobre la carrera o simplemente quieres saludar? ¡Escríbeme!</p>
        
        {/* 👇 Formulario actualizado para usar FORMSPREE */}
        <form 
          action="https://formspree.io/f/xkolwjpj" 
          method="POST"  
          className="space-y-4"   
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Tu Nombre</label>
              <input type="text" name="nombre" required className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-blue-500 transition" placeholder="Ej. Ada Lovelace" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Tu Email</label>
              <input type="email" name="email" required className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-blue-500 transition" placeholder="ada@ejemplo.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
            <textarea name="mensaje" required rows="4" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-blue-500 transition resize-none" placeholder="Escribe tu mensaje aquí..."></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition flex justify-center items-center gap-2">
            <Mail size={18} />
            Enviar Mensaje
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-700 flex justify-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.23 4.2 4.2 0 0 0-.1-3.2s-1.1-.35-3.5 1.25a11.39 11.39 0 0 0-6 0c-2.4-1.6-3.5-1.25-3.5-1.25a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 2 8.98c0 5.6 3.36 6.65 6.5 7a4.8 4.8 0 0 0-1 3.02v4"></path></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// --- APLICACIÓN PRINCIPAL ---

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  const navItems = [
    { id: 'inicio', nombre: 'Inicio', icono: Terminal },
    { id: 'sobre-mi', nombre: 'Sobre Mí', icono: User },
    { id: 'servicios', nombre: 'Servicios', icono: Briefcase },
    { id: 'blog', nombre: 'Blog', icono: BookOpen },
    { id: 'estudia', nombre: 'Estudia Conmigo', icono: Coffee },
    { id: 'recursos', nombre: 'Recursos', icono: Code },
    { id: 'contacto', nombre: 'Contacto', icono: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-500/30">
      
      {/* Navegación Superior */}
      <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setSeccionActiva('inicio')}>
              <span className="text-blue-500 font-mono font-bold text-xl mr-1">{`<`}</span>
              <span className="font-bold text-xl tracking-tight">EstudianteCS</span>
              <span className="text-blue-500 font-mono font-bold text-xl ml-1">{`/>`}</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item) => {
                  const Icono = item.icono;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSeccionActiva(item.id)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition flex items-center gap-2 ${
                        seccionActiva === item.id 
                          ? 'bg-gray-800 text-blue-400' 
                          : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                      }`}
                    >
                      <Icono size={16} />
                      {item.nombre}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Button (Simplificado) */}
            <div className="md:hidden flex overflow-x-auto pb-2 -mb-2 no-scrollbar">
               <div className="flex space-x-2 mt-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSeccionActiva(item.id)}
                    className={`px-3 py-2 rounded-md text-xs font-medium whitespace-nowrap transition flex items-center gap-1 ${
                      seccionActiva === item.id 
                        ? 'bg-gray-800 text-blue-400' 
                        : 'text-gray-300'
                    }`}
                  >
                    {item.nombre}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenedor Principal Dinámico */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {seccionActiva === 'inicio' && <Inicio setSeccionActiva={setSeccionActiva} />}
        {seccionActiva === 'sobre-mi' && <SobreMi />}
        {seccionActiva === 'servicios' && <Servicios />}
        {seccionActiva === 'blog' && <Blog />}   
        {seccionActiva === 'estudia' && <EstudiaConmigo />}
        {seccionActiva === 'recursos' && <Recursos />}
        {seccionActiva === 'contacto' && <Contacto />}
      </main>

      {/* Footer / Pie de página */}
      <footer className="border-t border-gray-800 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-mono">
          
          {/* Firma izquierda */}
          <div>
            © {new Date().getFullYear()} Desarrollado por <span className="text-blue-400 font-bold hover:text-blue-300 transition-colors">Alan Eduardo Martinez</span>.
          </div>

          {/* Toque personal derecha */}
          <div className="flex items-center gap-2 group cursor-default">
            <span className="text-emerald-500 animate-pulse group-hover:text-emerald-400">{'>_'}</span>
            <span className="group-hover:text-gray-300 transition-colors">root@alan:~# computer_solutions_ae</span>
          </div>

        </div>
      </footer>

      {/* Estilos globales añadidos directamente (animaciones personalizadas de Tailwind) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
