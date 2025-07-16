
import { Phone, Mail, MessageCircle, Instagram, Linkedin, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Chiamata diretta",
      subtitle: "Risposta immediata",
      contact: "+39 333 123 4567",
      action: "tel:+393331234567",
      primary: true
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      subtitle: "Chat veloce",
      contact: "Invia messaggio",
      action: "https://wa.me/393331234567",
      primary: true
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      subtitle: "Documenti e dettagli",
      contact: "giuliano@culinary.it",
      action: "mailto:giuliano@culinary.it"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      title: "Instagram",
      subtitle: "Portfolio visivo",
      contact: "@giuliano_chef",
      action: "https://instagram.com/giuliano_chef"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      subtitle: "Network professionale",
      contact: "Giuliano Rossi",
      action: "https://linkedin.com/in/giuliano-chef"
    }
  ];

  const benefits = [
    "Consulenza iniziale gratuita di 30 minuti",
    "Analisi personalizzata della tua situazione",
    "Piano d'azione concreto e immediato",
    "Supporto continuo durante l'implementazione"
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
              Non aspettare che i problemi si accumulino. Ogni giorno che passa senza 
              un'ottimizzazione è un'opportunità persa. Parliamone insieme, senza impegno.
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
                      <div className="text-gray-300 text-sm">Italia + consulenze remote</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-chef-olive" />
                    <div>
                      <div className="text-white font-medium">Disponibilità</div>
                      <div className="text-gray-300 text-sm">Lun-Ven 9:00-18:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="animate-slide-in-left">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-playfair font-bold text-chef-charcoal mb-6 text-center">
                Scegli come preferisci contattarmi
              </h3>
              
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

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-chef-terracotta/10 rounded-xl border border-chef-terracotta/20">
                <h4 className="font-semibold text-chef-charcoal mb-2">
                  📞 Urgenze operative
                </h4>
                <p className="text-chef-charcoal/70 text-sm mb-3">
                  Per emergenze durante il servizio o situazioni critiche
                </p>
                <Button 
                  className="w-full bg-chef-terracotta hover:bg-chef-terracotta/90 text-white"
                  onClick={() => window.open('tel:+393331234567', '_self')}
                >
                  Chiama ora: +39 333 123 4567
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
