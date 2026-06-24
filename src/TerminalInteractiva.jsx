import React, { useState, useRef, useEffect } from 'react';

const TerminalInteractiva = ({ setSeccionActiva }) => {
  const [history, setHistory] = useState([
    { text: 'Bienvenido al sistema. Teclea "help" para ver los comandos disponibles.', type: 'info' }
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);

  // Auto-scrollear al final cuando hay comandos nuevos
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const ejecutarComando = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim().toLowerCase();
      let response = '';

      if (command === 'help') {
        response = 'Comandos disponibles: whoami, ls, blog, clear, secret';
      } else if (command === 'whoami') {
        response = 'Alan Eduardo: Estudiante de Ciencias de la Informática en la UPIICSA y Titular de Tecnología e Innovación Digital en Politica Juvenil Internacional - Nicolas Romero.';
      } else if (command === 'ls') {
        response = 'proyectos/  recursos/  simulador-matematico/  notas_filosofia.md';
      } else if (command === 'blog') {
        response = 'Iniciando protocolo de salto... Redirigiendo a "Entre códigos y discursos".';
        setTimeout(() => {
            window.open('https://entrecodigosydiscursos.blogspot.com/', '_blank');
        }, 1200); // 1200 milisegundos de espera para el efecto dramático
      } else if (command === 'clear') {
        setHistory([]);
        setInput('');
        return;
      } else if (command === 'secret') {
        response = '🤖 "Aquel que tiene un porqué para programar, puede soportar casi cualquier cómo."';
      } else if (command === '') {
        response = '';
      } else {
        response = `comando no encontrado: ${command}. Intenta con "help".`;
      }

      setHistory([...history, { text: `alan@pc:~$ ${input}`, type: 'command' }, { text: response, type: 'output' }]);
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black border border-gray-800 rounded-lg shadow-2xl font-mono text-sm text-green-400 p-4 overflow-hidden mb-8">
      <div className="flex items-center gap-2 border-b border-gray-900 pb-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-xs text-gray-500 ml-2">bash - alan_eduardo</span>
      </div>
      
      <div className="h-48 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-gray-800">
        {history.map((line, index) => (
          <div key={index} className={line.type === 'command' ? 'text-white' : line.type === 'info' ? 'text-blue-400' : 'text-green-400'}>
            {line.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      <div className="flex items-center gap-2 mt-2 border-t border-gray-900 pt-2">
        <span className="text-white">alan@pc:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={ejecutarComando}
          className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
          autoFocus
        />
      </div>
    </div>
  );
};

export default TerminalInteractiva;