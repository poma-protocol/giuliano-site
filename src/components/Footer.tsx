
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
                SosCucina
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Consulenza culinaria professionale per ristoranti, hotel e catering. 
              Trasformiamo le sfide quotidiane in successi concreti, con metodo e passione.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/iuscoforfood" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-chef-olive transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/giuliano-iusco" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-chef-olive transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:giuliano.iusco@gmail.com"
                className="text-gray-400 hover:text-chef-olive transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="tel:+393492169864"
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
              <li><a href="#services" className="hover:text-chef-olive transition-colors">Consulenza Operativa</a></li>
              <li><a href="#services" className="hover:text-chef-olive transition-colors">Team Training</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contatti</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="text-sm text-gray-400">Telefono</div>
                <a href="tel:+393492169864" className="hover:text-chef-olive transition-colors">
                  +39 349 216 9864
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <a href="mailto:giuliano.iusco@gmail.com" className="hover:text-chef-olive transition-colors">
                  giuliano.iusco@gmail.com
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-400">WhatsApp</div>
                <a href="https://wa.me/393492169864" className="hover:text-chef-olive transition-colors">
                  Invia messaggio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-chef-charcoal/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} SosCucina Consulenza Culinaria. Tutti i diritti riservati.
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};
