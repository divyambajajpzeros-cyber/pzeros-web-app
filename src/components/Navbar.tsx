
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tech-darker/90 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-0F172A">
              <div className="site-branding ast-site-identity" itemType="https://schema.org/Organization"
                   itemScope={true} style={{display: "flex", alignItems: "center"}}>
                <span className="site-logo-img" style={{marginRight: "10px"}}>
                    <img
                        width="60"
                        height="60"
                        src="https://pzeros.com/wp-content/uploads/2024/02/pzeros_logo_black_transparent-60x60.png"
                        className="custom-logo"
                        alt="Point Zero Solutions"
                        decoding="async"
                        srcSet="https://pzeros.com/wp-content/uploads/2024/02/pzeros_logo_black_transparent-60x60.png 60w, https://pzeros.com/wp-content/uploads/2024/02/pzeros_logo_black_transparent-300x300.png 300w, https://pzeros.com/wp-content/uploads/2024/02/pzeros_logo_black_transparent-150x150.png 150w, https://pzeros.com/wp-content/uploads/2024/02/pzeros_logo_black_transparent-50x50.png 50w, https://pzeros.com/wp-content/uploads/2024/02/pzeros_logo_black_transparent.png 500w"
                        sizes="(max-width: 60px) 100vw, 60px"
                    />
                </span>
                <div className="ast-site-title-wrap">
                  <span className="site-title" itemProp="name">
                      Point Zero Solutions
                  </span>
                </div>
              </div>
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-tech-dark hover:text-tech-purple transition-colors">
                Home
              </Link>
              <Link to="/computer-vision" className="text-tech-dark hover:text-tech-purple transition-colors">
                Computer Vision
              </Link>
              <Link to="/erp-solutions" className="text-tech-dark hover:text-tech-purple transition-colors">
                ERP Solutions
              </Link>
              <Link to="/simulation" className="text-tech-dark hover:text-tech-purple transition-colors">
                Simulation
              </Link>
              <Link to="/about" className="text-tech-dark hover:text-tech-purple transition-colors">
                About
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-tech-purple bg-tech-purple hover:bg-tech-darker hover:text-tech-purple/90 text-white btn-glow">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-white border-tech-purple bg-tech-purple hover:bg-tech-darker hover:text-tech-purple/90 btn-glow"
            >
              {mobileMenuOpen ? <X/> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-tech-darker border-t border-tech-gray/20 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-tech-dark hover:text-tech-purple transition-colors  rounded-md"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/computer-vision"
              className="block px-3 py-2 text-tech-dark hover:text-tech-purple transition-colors rounded-md"
              onClick={toggleMobileMenu}
            >
              Computer Vision
            </Link>
            <Link
              to="/erp-solutions"
              className="block px-3 py-2 text-tech-dark hover:text-tech-purple transition-colors rounded-md"
              onClick={toggleMobileMenu}
            >
              ERP Solutions
            </Link>
            <Link
              to="/simulation"
              className="block px-3 py-2 text-tech-dark hover:text-tech-purple transition-colors rounded-md"
              onClick={toggleMobileMenu}
            >
              Simulation
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-tech-dark hover:text-tech-purple transition-colors rounded-md"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <div className="px-3 py-2">
              <Link to="/contact">
              <Button variant="outline" className="border-tech-purple bg-tech-purple hover:bg-tech-darker hover:text-tech-purple/90 text-white btn-glow">
                Contact Us
              </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
