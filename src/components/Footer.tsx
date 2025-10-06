import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-tech-darker border-t border-tech-gray/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <div className="ast-site-title-wrap text-2xl font-display font-bold text-0F172A">
                  <span className="site-title" itemProp="name">
                      Point Zero Solutions
                  </span>
              </div>
        </Link>
        <p className="text-tech-muted mb-4 max-w-md">
          Accelerating human progress by removing computational barriers through
          AI-powered solutions for enterprise and simulation challenges.
        </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/pzer0s/"
                 className="text-tech-muted hover:text-tech-purple transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"/>
                </svg>
              </a>
              <div className="wp-block-uagb-icon-list-child uagb-block-8e7838b4">
                <a
                    target="_blank"
                    aria-label="X (Twitter)"
                    rel="noopener noreferrer"
                    href="//twitter.com/pzer0s"
                    className="text-tech-muted hover:text-tech-purple transition-colors"
                >
    <span className="uagb-icon-list__source-wrap">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"
           className="h-6 w-6">
        <path
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
      </svg>
    </span>
                </a>
              </div>


              <a href="https://www.instagram.com/pzer0s/"
                 className="text-tech-muted hover:text-tech-purple transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"/>
                </svg>
              </a>
              <div className="wp-block-uagb-icon-list-child uagb-block-e39d239c">
                <a
                    target="_blank"
                    aria-label="LinkedIn"
                    rel="noopener noreferrer"
                    href="//in.linkedin.com/company/pzer0s"
                    className="text-tech-muted hover:text-tech-purple transition-colors"
                >
    <span className="uagb-icon-list__source-wrap">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"
           className="h-6 w-6">
        <path
            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
      </svg>
    </span>
                </a>
              </div>

            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/computer-vision" className="text-tech-muted hover:text-tech-dark transition-colors">
                  Computer Vision
                </Link>
              </li>
              <li>
                <Link to="/erp-solutions" className="text-tech-muted hover:text-tech-dark transition-colors">
                  ERP Solutions
                </Link>
              </li>
              <li>
                <Link to="/simulation" className="text-tech-muted hover:text-tech-dark transition-colors">
                  Simulation Acceleration
                </Link>
              </li>
              {/* <li>
                <a href="#" className="text-tech-muted hover:text-tech-dark transition-colors">
                  Custom Integration
                </a>
              </li>
              <li>
                <a href="#" className="text-tech-muted hover:text-tech-dark transition-colors">
                  Enterprise AI
                </a>
              </li>
              */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-tech-muted hover:text-tech-dark transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-tech-muted hover:text-tech-dark transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-tech-muted hover:text-tech-dark transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-tech-muted hover:text-tech-dark transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-tech-gray/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tech-muted text-sm">
            © {new Date().getFullYear()} Point Zero Solutions. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-tech-muted hover:text-white text-sm mr-6">
              Terms of Service
            </a>
            <a href="#" className="text-tech-muted hover:text-white text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
