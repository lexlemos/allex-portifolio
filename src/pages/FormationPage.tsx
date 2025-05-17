import React from 'react';

const FormationPage: React.FC = () => {
  return (
    <section className='bg-dark-container hover:bg-black transition-colors duration-300 backdrop-blur-sm rounded-container shadow-lg p-6 border border-green-500/30'>
      <h2 className='text-2xl font-semibold text-green-300 mb-6'>Formação Acadêmica</h2>

      <div className='space-y-6'>
        <div className='border-l-2 border-green-500 pl-4 py-2'>
          <h3 className='text-xl font-medium text-green-300'>Ciência da Computação</h3>
          <p className='text-green-400 text-sm'>
            Universidade Federal de Sergipe - 2023 até o presente
          </p>
          <p className='text-green-200 mt-2'>
            Bacharelado em Ciência da Computação com foco em desenvolvimento de software e sistemas
            distribuídos.
          </p>
        </div>
        <div className='border-l-2 border-green-500 pl-4 py-2'>
          <p className='text-green-200 mt-2'>
            Acessor de Projetos em Innovation Hub, Liga Academica de Inovação e Empreendedorismo -
            2025
          </p>
        </div>
        <h2 className='text-2xl font-semibold text-green-300 mb-6'>Formação Complementar</h2>
        <div className='border-l-2 border-green-500 pl-4 py-2'>
          <h3 className='text-xl font-medium text-green-300'>UX Design</h3>
          <p className='text-green-400 text-sm'>Ebac</p>
        </div>

        <div className='border-l-2 border-green-500 pl-4 py-2'>
          <h3 className='text-xl font-medium text-green-300'>Fundamentos de IA para devs</h3>
          <p className='text-green-400 text-sm'>DIO</p>
        </div>

        <div className='border-l-2 border-green-500 pl-4 py-2'>
          <h3 className='text-xl font-medium text-green-300'>HTML, CSS, JS</h3>
          <p className='text-green-400 text-sm'>Freecodecamp</p>
        </div>

        <div className='border-l-2 border-green-500 pl-4 py-2'>
          <h3 className='text-xl font-medium text-green-300'>Versionamento de código</h3>
          <p className='text-green-400 text-sm'>DIO</p>
        </div>
      </div>

      <h2 className='text-2xl font-semibold text-green-300 mt-8 mb-6'>Habilidades Técnicas</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='bg-black/50 p-3 rounded-lg border border-green-700/30'>
          <p className='text-green-300 font-medium'>JavaScript/TypeScript</p>
        </div>
        <div className='bg-black/50 p-3 rounded-lg border border-green-700/30'>
          <p className='text-green-300 font-medium'>React.js</p>
        </div>
        <div className='bg-black/50 p-3 rounded-lg border border-green-700/30'>
          <p className='text-green-300 font-medium'>VUE.js</p>
        </div>
        <div className='bg-black/50 p-3 rounded-lg border border-green-700/30'>
          <p className='text-green-300 font-medium'>Tailwind CSS</p>
        </div>
        <div className='bg-black/50 p-3 rounded-lg border border-green-700/30'>
          <p className='text-green-300 font-medium'>PostgreSQL</p>
        </div>
        <div className='bg-black/50 p-3 rounded-lg border border-green-700/30'>
          <p className='text-green-300 font-medium'>MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default FormationPage;
