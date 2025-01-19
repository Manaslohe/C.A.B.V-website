import { Facebook, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <img 
              src="/images/favicon.png" 
              alt="CABV Logo" 
              className="h-24 w-auto" // Increased logo size
            />
            <p className="text-gray-300 text-sm">
              Empowering visually impaired cricketers through determination, passion, and skill.
            </p>
            <button 
              className="bg-[#1544c0] hover:bg-[#1236a0] transition-colors duration-300 px-6 py-3 rounded-full flex items-center gap-2"
              onClick={() => navigate('/donation')}
            >
              <Heart size={20} className="animate-pulse" />
              <span>Make a Donation</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#1544c0] transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#1544c0] transition-colors duration-300">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#1544c0] transition-colors duration-300">Code of Conduct</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-[#1544c0] transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <a href="mailto:Vidarbha.blindcricket@gmail.com" 
                 className="flex items-center gap-2 text-gray-300 hover:text-[#1544c0] transition-colors duration-300">
                <Mail size={18} />
                <span>Vidarbha.blindcricket@gmail.com</span>
              </a>
              <a href="tel:+918459023689" 
                 className="flex items-center gap-2 text-gray-300 hover:text-[#1544c0] transition-colors duration-300">
                <Phone size={18} />
                <span>+91 8459023689</span>
              </a>
              <a href="tel:+919423603630" 
                 className="flex items-center gap-2 text-gray-300 hover:text-[#1544c0] transition-colors duration-300">
                <Phone size={18} />
                <span>+91 9423603630</span>
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Vidarbha Cricket Association,<br />Civil Lines, Nagpur</span>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100082064976009" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-gray-700 p-2 rounded-full hover:bg-[#1544c0] transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/BVidarbha" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-gray-700 p-2 rounded-full hover:bg-[#1544c0] transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Cricket Association for Blind Vidarbha. All rights reserved.
            </p>
            <p className="text-white font-ginger text-lg md:text-xl tracking-wide font-semibold" 
               style={{
                 textShadow: '0 0 8px rgba(21, 68, 192, 0.4)',
                 background: 'linear-gradient(to right, #1544c0, #2563eb)',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
               }}>
              It's not just a sport; it's an inspiration.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
