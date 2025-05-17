import React, { useState } from 'react';
import AsciiBackground from './components/AsciiBackground';
import Navbar, { NavItem } from './components/Navbar';

// Páginas
import HomePage from './pages/HomePage';
import FormationPage from './pages/FormationPage';
import ProjectsPage from './pages/ProjectsPage';
import PresentationsPage from './pages/PresentationsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [activeNav, setActiveNav] = useState<NavItem>('Início');

  // Função para renderizar o conteúdo baseado no item de navegação ativo
  const renderContent = () => {
    switch (activeNav) {
      case 'Início':
        return <HomePage />;
      case 'Formação':
        return <FormationPage />;
      case 'Projetos':
        return <ProjectsPage />;
      case 'Apresentações':
        return <PresentationsPage />;
      case 'Contato':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <AsciiBackground>
      <div className='container mx-auto px-4 py-6'>
        <Navbar activeItem={activeNav} onNavChange={setActiveNav} />
        <main>{renderContent()}</main>
      </div>
    </AsciiBackground>
  );
}

export default App;
