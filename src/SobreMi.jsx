import React from 'react';
import { Terminal, Code, BookOpen, Cpu } from 'lucide-react'; // Asumiendo que usas lucide-react para los íconos

const SobreMi = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in text-gray-300">
      <h2 className="text-3xl font-bold text-teal-400 mb-6 border-b border-gray-800 pb-2">Sobre Mí</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="space-y-4 text-lg">
          <p>
            Soy <span className="text-white font-semibold">Alan Eduardo</span>, estudiante de <span className="text-blue-400">Ciencias de la Informática en la UPIICSA</span>. 
          </p>
          <p>
            Me apasiona el cruce entre la lógica matemática, la programación estructurada y el pensamiento crítico. A menudo encuentro inspiración en la filosofía para abordar el diseño de software y la resolución de problemas complejos.
          </p>
          <p>
            Actualmente me desempeño como <strong>Titular de Tecnología e Innovación Digital en PJI Nicolás Romero</strong>, donde busco aplicar el rigor técnico a escenarios organizacionales reales. Mi objetivo a mediano plazo es continuar mi formación académica cursando una maestría en informática.
          </p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 h-fit">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Terminal size={20} className="text-teal-400"/> Stack y Habilidades
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Code size={18} className="text-blue-400"/> 
              <span><strong>Desarrollo Web:</strong> React, Tailwind CSS, Node.js</span>
            </li>
            <li className="flex items-center gap-3">
              <Cpu size={18} className="text-green-400"/> 
              <span><strong>Software & Lógica:</strong> Python, C, C++, Programación Orientada a Objetos (POO)</span>
            </li>
            <li className="flex items-center gap-3">
              <Terminal size={18} className="text-yellow-400"/> 
              <span><strong>Entorno & SO:</strong> Linux Mint, Windows 11 Enterprise</span>
            </li>
            <li className="flex items-center gap-3">
              <BookOpen size={18} className="text-purple-400"/> 
              <span><strong>Áreas Analíticas:</strong> Algebra, Cálculo, Geometría</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;