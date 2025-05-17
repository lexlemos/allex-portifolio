import React from 'react';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Site de Portfólio e notícias da liga',
      description:
        'Aplicação web para postagem de noticias, editais e atualizações sobre a Liga Academica de Inovação e Empreendedorismo da UFS.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://via.placeholder.com/300x200',
      link: 'https://github.com',
    },
    {
      id: 2,
      title: 'SIAAC - Software Integrado de Análise de Adicionais Ocupacionais',
      description:
        'software em desenvolvimento para a análise de adicionais ocupacionais para conseguir diminuir o gargalo existente na implementação de acordo com a legislação brasileira.',
      technologies: ['Vue.js', 'Node.js', 'tailwindcss', 'Docker'],
      image: 'https://via.placeholder.com/300x200',
      link: 'https://github.com',
    },
    {
      id: 3,
      title: 'Jogo da Cobrinha',
      description:
        'Aplicativo executavel para web que simula o jogo da cobrinha, com interface e funcionalidades semelhantes ao jogo original.',
      technologies: ['Java', 'Java Swing', 'POO'],
      image: 'https://via.placeholder.com/300x200',
      link: 'https://github.com/lexlemos/snake_game_poo/tree/master/src/game',
    },
  ];

  return (
    <section className='bg-dark-container hover:bg-black transition-colors duration-300 backdrop-blur-sm rounded-container shadow-lg p-6 border border-green-500/30'>
      <h2 className='text-2xl font-semibold text-green-300 mb-6'>Projetos Desenvolvidos</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='bg-black/40 rounded-lg overflow-hidden border border-green-500/30 hover:border-green-500/70 transition-all group'
          >
            <div className='h-48 overflow-hidden'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-xl font-medium text-green-300'>{project.title}</h3>
              <p className='text-green-200 mt-2 text-sm'>{project.description}</p>
              <div className='mt-3 flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='text-xs px-2 py-1 bg-green-900/40 text-green-300 rounded'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='mt-4'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm inline-block px-3 py-1 bg-green-700/50 hover:bg-green-700 text-white rounded transition-colors'
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
