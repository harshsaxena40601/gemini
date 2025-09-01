import React from 'react';

interface NavbarProps {
  navbarRef: React.RefObject<HTMLElement>;
  isOpen: boolean;
  toggleMenu: () => void;
  mobileMenuRef: React.RefObject<HTMLDivElement>;
  mobileMenuBtnRef: React.RefObject<HTMLButtonElement>;
  openModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  navbarRef,
  isOpen,
  toggleMenu,
  mobileMenuRef,
  mobileMenuBtnRef,
  openModal
}) => {
  return (
    <nav ref={navbarRef} className="fixed top-0 left-0 right-0 z-50 glass-effect transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold gradient-text">YourLogo</a>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="text-gray-300 hover:text-white transition duration-300">Features</a>
          <a href="#product" className="text-gray-300 hover:text-white transition duration-300">Product</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition duration-300">Pricing</a>
          <a href="#resources" className="text-gray-300 hover:text-white transition duration-300">Resources</a>
          <button
            data-modal-target="auth-modal"
            className="nav-button bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition duration-300 shadow-lg"
            onClick={openModal}
          >
            Log In
          </button>
          <button
            data-modal-target="auth-modal"
            className="nav-button bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg"
            onClick={openModal}
          >
            Sign Up
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button id="mobile-menu-btn" className="text-white focus:outline-none" onClick={toggleMenu} ref={mobileMenuBtnRef}>
            {isOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`md:hidden glass-effect absolute top-full left-0 w-full py-4 space-y-2 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
      >
        <a href="#features" className="block text-gray-300 hover:text-white px-6 py-2 transition duration-300">Features</a>
        <a href="#product" className="block text-gray-300 hover:text-white px-6 py-2 transition duration-300">Product</a>
        <a href="#pricing" className="block text-gray-300 hover:text-white px-6 py-2 transition duration-300">Pricing</a>
        <a href="#resources" className="block text-gray-300 hover:text-white px-6 py-2 transition duration-300">Resources</a>
        <button data-modal-target="auth-modal" className="w-full text-left nav-button bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300 shadow-lg mt-2" onClick={openModal}>Log In</button>
        <button data-modal-target="auth-modal" className="w-full text-left nav-button bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg mt-2" onClick={openModal}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
