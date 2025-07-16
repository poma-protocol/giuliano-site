
import { ChefHat, Heart, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-chef-charcoal border-t border-chef-charcoal/20">
      <div className="container-max section-padding py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-chef-olive" />
              <span className="text-2xl font-playfair font-bold text-white">
                Giuliano
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Consulenza culinaria professionale per ristoranti, hotel e catering. 
              Trasformiamo le sfide quotidiane in successi concreti, con metodo e passione.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/giuliano_chef" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-chef-olive transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/giuliano-chef" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-chef-olive transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:giuliano@culinary.it"
                className="text-gray-400 hover:text-chef-olive transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="tel:+393331234567"
                className="text-gray-400 hover:text-chef-olive transition-colors"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-chef-olive transition-colors">Menu Engineering</a></li>
              <li><a href="#services" className="hover:text-chef-olive transition-colors">Controllo Costi</a></li>
              <li><a href="#services" className="hover:text-chef-olive transition-colors">Team Training</a></li>
              <li><a href="#services" className="hover:text-chef-olive transition-colors">Consulenza Operativa</a></li>
              <li><a href="#services" className="hover:text-chef-olive transition-colors">Business Plan</a></li>
              <li><a href="#services" className="hover:text-chef-olive transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contatti</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="text-sm text-gray-400">Telefono</div>
                <a href="tel:+393331234567" className="hover:text-chef-olive transition-colors">
                  +39 333 123 4567
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <a href="mailto:giuliano@culinary.it" className="hover:text-chef-olive transition-colors">
                  giuliano@culinary.it
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-400">WhatsApp</div>
                <a href="https://wa.me/393331234567" className="hover:text-chef-olive transition-colors">
                  Invia messaggio
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-400">Zona operativa</div>
                <span>Italia + Remote</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-chef-charcoal/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Giuliano Consulenza Culinaria. Tutti i diritti riservati.
            </div>
            
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Fatto con</span>
              <Heart className="h-4 w-4 text-chef-terracotta fill-current" />
              <span>per la ristorazione italiana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
