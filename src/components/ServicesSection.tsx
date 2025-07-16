
import { CheckCircle, ChefHat, BarChart3, Users, Utensils, Calculator, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const ServicesSection = () => {
  const services = [
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: "Menu Engineering",
      description: "Ottimizzazione dei menù per massimizzare profittabilità e soddisfazione del cliente",
      benefits: [
        "Analisi marginalità per piatto",
        "Redesign menu strategico",
        "Aumento revenue 25-40%"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Controllo Costi",
      description: "Sistemi di controllo per ridurre sprechi e ottimizzare gli acquisti",
      benefits: [
        "Riduzione sprechi 30%",
        "Analisi food cost dettagliata",
        "Sistema inventario automatizzato"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Training",
      description: "Formazione personalizzata per equipaggi di cucina e sala",
      benefits: [
        "Protocolli operativi standard",
        "Miglioramento efficienza 40%",
        "Certificazioni HACCP"
      ]
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Consulenza Operativa",
      description: "Supporto diretto in cucina per ottimizzare processi e workflow",
      benefits: [
        "Reorganizzazione postazioni",
        "Standardizzazione ricette",
        "Controllo qualità"
      ]
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Business Plan Ristorazione",
      description: "Pianificazione strategica per nuove aperture e ristrutturazioni",
      benefits: [
        "Analisi di mercato",
        "Proiezioni finanziarie",
        "Piano investimenti"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing F&B",
      description: "Strategie digitali specifiche per il settore food & beverage",
      benefits: [
        "Social media strategy",
        "Gestione recensioni online",
        "Aumento visibilità 60%"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-chef-warm">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-chef-charcoal mb-6">
            Servizi Professionali
          </h2>
          <p className="text-xl text-chef-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Soluzioni complete per ogni aspetto del tuo business culinario, 
            dalla strategia operativa al controllo dei costi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover-lift bg-white border-0 shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="text-chef-olive mb-4">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-playfair font-bold text-chef-charcoal mb-4">
                  {service.title}
                </h3>
                
                <p className="text-chef-charcoal/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-chef-olive flex-shrink-0" />
                      <span className="text-chef-charcoal/80 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-chef-charcoal mb-4">
              Hai bisogno di una consulenza personalizzata?
            </h3>
            <p className="text-chef-charcoal/70 mb-6">
              Ogni ristorante è unico. Parliamo delle tue specifiche esigenze e troviamo la soluzione più efficace.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-chef-terracotta hover:bg-chef-terracotta/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Richiedi Consulenza Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
