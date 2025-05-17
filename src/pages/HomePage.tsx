import React from 'react';

const HomePage: React.FC = () => {
  return (
    <section className='bg-dark-container hover:bg-black transition-colors duration-300 backdrop-blur-sm rounded-container shadow-lg p-6 border border-green-500/30 mb-8'>
      <div className='mt-8'>
        <h2 className='text-xl font-semibold text-green-300 mb-3'>Sobre Mim</h2>
        <p className='text-green-200'>
          Minha jornada na programação começou com a curiosidade sobre como os sistemas funcionam.
          Desde pequeno consumia jogos e com a progressão tecnológica acabei me interessando cada
          vez mais por como esses programas eram criados. Ao crescer, com as redes sociais
          facilitando o acesso a novas tecnologias e a comunicação entre comunidades, conheci o
          mundo da programação. Atualmente, sou apaixonado por criar soluções elegantes para
          problemas complexos, utilizando as melhores práticas e tecnologias modernas para criar
          experiências incríveis.
        </p>
      </div>
      <div className='mt-8'>
        <p className='text-green-200 mb-4'>
          Este é um projeto de portfólio construído com React e Tailwind CSS, com uma temática
          inspirada em código.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
