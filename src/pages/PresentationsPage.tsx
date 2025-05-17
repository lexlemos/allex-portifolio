import React from 'react';

const PresentationsPage: React.FC = () => {
  const presentations = [
    {
      id: 1,
      title: 'Capacitação em Figma',
      event: 'procedimento interno da Innovation Hub',
      date: 'abril, 2025',
      description: 'Apresentação sobre as melhores práticas de design de interfaces com o Figma.',
    },
    {
      id: 2,
      title: 'Engenharia de Prompt- Extraindo o máximo de uma IA',
      event: 'World Creativity and Day',
      date: 'Maio, 2025',
      description:
        'Palestra abordando como as ferramentas de IA estão transformando o dia a dia e como podemos melhorar a produtividade com o bom uso delas.',
      link: 'https://slideshare.net',
    },
    {
      id: 3,
      title: 'Disciplina de Fonotech',
      event: 'Disciplina do departamento de fonoaudiologia da UFS',
      date: 'Março, 2023',
      description:
        'Workshop prático sobre o uso de tecnologias para a criação de projetos de fonoaudiologia, englobando desde o design thinking até a criação de um projeto completo e a apresentação de um pitch para investidores.',
      link: 'https://slideshare.net',
    },
  ];

  return (
    <section className='bg-dark-container hover:bg-black transition-colors duration-300 backdrop-blur-sm rounded-container shadow-lg p-6 border border-green-500/30'>
      <h2 className='text-2xl font-semibold text-green-300 mb-6'>Apresentações e Palestras</h2>

      <div className='space-y-6'>
        {presentations.map((presentation) => (
          <div
            key={presentation.id}
            className='bg-black/40 rounded-lg p-4 border-l-4 border-green-500 hover:border-green-400 transition-colors'
          >
            <h3 className='text-xl font-medium text-green-300'>{presentation.title}</h3>
            <div className='flex items-center gap-4 mt-2'>
              <p className='text-green-400 text-sm'>{presentation.event}</p>
              <span className='text-green-600'>•</span>
              <p className='text-green-400 text-sm'>{presentation.date}</p>
            </div>
            <p className='text-green-200 mt-3'>{presentation.description}</p>
            <div className='mt-4'>
              <a
                href={presentation.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm inline-flex items-center px-3 py-1 bg-green-700/50 hover:bg-green-700 text-white rounded transition-colors'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 10l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
                Ver Apresentação
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-8 bg-black/30 p-4 rounded-lg border border-green-700/30'>
        <h3 className='text-xl font-medium text-green-300 mb-3'>Próximas Palestras</h3>
        <p className='text-green-200'>
          Fique atento às minhas redes sociais para informações sobre minhas próximas apresentações
          em eventos e conferências.
        </p>
      </div>
    </section>
  );
};

export default PresentationsPage;
