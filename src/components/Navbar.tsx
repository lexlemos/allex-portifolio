import React from 'react';

export type NavItem = 'Início' | 'Formação' | 'Projetos' | 'Apresentações' | 'Contato';

interface NavItemProps {
  text: NavItem;
  active: boolean;
  onClick(): void;
}

const NavItemComponent: React.FC<NavItemProps> = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 mx-1 ${
        active
          ? 'text-green-400 border-b-2 border-green-400'
          : 'text-green-200 hover:text-green-300'
      } transition-colors duration-200`}
    >
      {text}
    </button>
  );
};

interface NavbarProps {
  activeItem: NavItem;
  // eslint-disable-next-line no-unused-vars
  onNavChange(navItem: NavItem): void;
}

const Navbar: React.FC<NavbarProps> = ({ activeItem, onNavChange }) => {
  const navItems: NavItem[] = ['Início', 'Formação', 'Projetos', 'Apresentações', 'Contato'];

  // Toggle menu for mobile
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Criar handlers para cada item
  const createClickHandler = (item: NavItem) => () => onNavChange(item);

  return (
    <nav className='bg-black/70 backdrop-blur-md border border-green-800/30 rounded-container shadow-lg py-3 px-6 mb-8 sticky top-4 z-20'>
      <div className='flex justify-between items-center'>
        <div className='text-green-400 font-bold text-xl'>{'<Lexlemos.dev />'}</div>
        <div className='hidden md:flex'>
          {navItems.map((item) => (
            <NavItemComponent
              key={item}
              text={item}
              active={activeItem === item}
              onClick={createClickHandler(item)}
            />
          ))}
        </div>
        {/* Mobile menu button */}
        <div className='md:hidden'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-green-200 hover:text-green-400'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className='md:hidden mt-4 space-y-2'>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                onNavChange(item);
                setMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 ${
                activeItem === item
                  ? 'bg-green-900/20 text-green-400 border-l-2 border-green-400'
                  : 'text-green-200 hover:bg-black/30'
              } transition-colors duration-200`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
