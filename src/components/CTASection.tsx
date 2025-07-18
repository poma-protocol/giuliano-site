
import { Phone, Mail, MessageCircle, Instagram, Linkedin, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Chiamata diretta o WhatsApp",
      subtitle: "Valutiamo insieme obiettivi e opportunità per una collaborazione efficace",
      contact: "+39 349 216 9864",
      action: "tel:+393492169864",
      primary: true
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      subtitle: "Documenti e dettagli",
      contact: "giuliano.iusco@gmail.com",
      action: "mailto:giuliano.iusco@gmail.com"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      title: "Instagram",
      subtitle: "Portfolio visivo",
      contact: "@iuscoforfood",
      action: "https://instagram.com/iuscoforfood"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      subtitle: "Network professionale",
      contact: "Giuliano Iusco",
      action: "https://linkedin.com/in/giuliano-iusco"
    }
  ];

  const benefits = [
    "Prima chiamata gratuita di 15 minuti"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-chef-charcoal to-chef-charcoal/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Iniziamo insieme il tuo
              <span className="text-chef-olive"> percorso di successo</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Valutiamo insieme obiettivi e opportunità per una collaborazione efficace. Parliamone insieme, senza impegno.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-chef-olive flex-shrink-0" />
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-chef-olive" />
                    <div>
                      <div className="text-white font-medium">Zona operativa</div>
                      <div className="text-gray-300 text-sm">Puglia + consulenze remote</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-chef-olive" />
                    <div>
                      <div className="text-white font-medium">Disponibilità</div>
                      <div className="text-gray-300 text-sm">Lun-Ven 9:00-18:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="animate-slide-in-left">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-playfair font-bold text-chef-charcoal mb-6 text-center">
                Come contatttrmi              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index}
                    className={`hover-lift cursor-pointer transition-all duration-300 ${
                      method.primary 
                        ? 'border-chef-olive shadow-lg bg-chef-olive/5' 
                        : 'border-gray-200 hover:border-chef-olive/50'
                    }`}
                    onClick={() => window.open(method.action, '_blank')}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${
                          method.primary ? 'bg-chef-olive text-white' : 'bg-chef-olive/10 text-chef-olive'
                        }`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-chef-charcoal">
                                {method.title}
                                {method.primary && (
                                  <span className="ml-2 text-xs bg-chef-terracotta text-white px-2 py-1 rounded-full">
                                    Consigliato
                                  </span>
                                )}
                              </h4>
                              <p className="text-chef-charcoal/60 text-sm">{method.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-chef-olive font-medium mt-1">{method.contact}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
