import React from 'react';

function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-white shadow-md'>
        <div className='container mx-auto px-6 py-4'>
          <h1 className='text-3xl font-bold text-gray-800'>Allex Portfolio</h1>
        </div>
      </header>
      <main className='container mx-auto px-6 py-8'>
        <section className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Bem-vindo ao meu Portfólio</h2>
          <p className='text-gray-600'>
            Este é um projeto de portfólio construído com React e Tailwind CSS.
          </p>
          <div className='mt-6'>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors'
            >
              Ver Projetos
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
