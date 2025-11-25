import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Twitter, Linkedin, Github, GraduationCap } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Placements', path: '/placements' },
    { name: 'Notices', path: '/notices' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative bg-rez-bg text-white font-sans">
      
      {/* --- Grid Pattern Background --- */}
      <div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none opacity-50"></div>

      {/* --- Navbar (Floating Neo Block) --- */}
      <header className="fixed top-0 left-0 right-0 z-50 px-2 md:px-4 py-4">
        <div className="max-w-[1600px] mx-auto bg-black border-2 border-white shadow-neo-white flex justify-between items-center p-4 relative z-50">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <div className="bg-rez-purple text-black p-1 md:p-2 border-2 border-white font-bold sticker-2 group-hover:rotate-0 transition-transform shadow-[2px_2px_0px_white]">
              <GraduationCap size={20} className="md:w-6 md:h-6" />
            </div>
            <span className="text-lg md:text-2xl font-black tracking-tighter uppercase italic leading-none">
              Medinipur<span className="text-rez-purple">.BCA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
               <Link 
                 key={link.name} 
                 to={link.path}
                 className={`text-sm font-bold uppercase tracking-wide px-3 py-2 transition-all border-2 ${
                   location.pathname === link.path 
                     ? 'bg-rez-purple text-white border-white shadow-[3px_3px_0px_white] -translate-y-1' 
                     : 'text-gray-300 border-transparent hover:border-gray-600 hover:text-white'
                 }`}
               >
                 {link.name}
               </Link>
            ))}
            
            <div className="h-8 w-[2px] bg-gray-800 mx-3"></div>

            <Link to="/admin" className="text-sm font-mono text-rez-pink hover:text-white font-bold px-3 py-2 border-2 border-transparent hover:border-rez-pink uppercase">
              [ADMIN_PANEL]
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="xl:hidden bg-rez-purple text-white p-2 border-2 border-white shadow-[2px_2px_0px_white] active:translate-y-1 active:shadow-none transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center space-y-6 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-3xl font-black uppercase italic transition-all ${
                location.pathname === link.path ? 'text-rez-purple scale-110' : 'text-white hover:text-rez-pink'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="neo-btn px-8 py-4 mt-8 text-xl border-white">Admin Portal</Link>
        </div>
      )}

      {/* --- Main Content --- */}
      <main className="flex-grow relative z-10 px-4 pt-32 pb-12 w-full overflow-x-hidden">
        {children}
      </main>

      {/* --- Footer --- */}
      <footer className="relative z-10 bg-black border-t-2 border-white mt-auto">
        <div className="max-w-[1400px] mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <h2 className="text-2xl font-black uppercase text-rez-purple mb-2 flex items-center gap-2">
              <span className="w-4 h-4 bg-rez-pink border border-white block"></span>
              Medinipur College
            </h2>
            <p className="text-sm text-gray-400 font-mono pl-6">Department of Computer Applications</p>
          </div>
          
          <div className="flex gap-4">
             {[Twitter, Linkedin, Github].map((Icon, i) => (
               <a key={i} href="#" className="p-3 bg-black border-2 border-white hover:bg-rez-purple hover:text-white hover:shadow-[4px_4px_0px_white] transition-all">
                 <Icon size={20}/>
               </a>
             ))}
          </div>

          <div className="text-xs font-mono text-gray-500 border border-gray-800 p-2">
             © 2024. SYSTEM_ONLINE.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;