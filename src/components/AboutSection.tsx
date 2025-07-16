
import { Award, Globe, Users, ChefHat, BookOpen, Briefcase } from 'lucide-react';

export const AboutSection = () => {
  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "25+ anni di esperienza",
      description: "In cucine stellate e ristoranti internazionali"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Esperienza globale",
      description: "Consulenze in Europa, Asia e America"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "150+ ristoranti",
      description: "Supportati nel loro percorso di crescita"
    },
    {
      icon: <ChefHat className="h-6 w-6" />,
      title: "Consulente Michelin",
      description: "Collaborazioni con ristoranti stellati"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Formatore certificato",
      description: "HACCP, sicurezza alimentare e management"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Business strategist",
      description: "Specializzato in ottimizzazione F&B"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Giuliano - Chef Consulente"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-chef-olive text-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold">30%</div>
                <div className="text-sm">Incremento medio marginalità clienti</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-chef-charcoal mb-6">
              Chi è Giuliano
            </h2>
            
            <div className="text-lg text-chef-charcoal/80 space-y-6 mb-8 leading-relaxed">
              <p>
                <strong className="text-chef-olive">25 anni di passione culinaria</strong> mi hanno portato 
                dalle cucine stellate di Parigi ai ristoranti innovativi di Tokyo, 
                accumulando un bagaglio di esperienza unico nel panorama della consulenza F&B.
              </p>
              
              <p>
                La mia missione è semplice: <strong>trasformare le sfide quotidiane in opportunità concrete</strong>. 
                Non parlo solo di numeri, ma di persone, di team che lavorano meglio insieme, 
                di clienti che tornano soddisfatti.
              </p>
              
              <p>
                Quello che mi distingue? Un approccio <strong className="text-chef-terracotta">pratico e umano</strong>, 
                dove ogni soluzione nasce dall'ascolto delle tue reali necessità. Perché dietro ogni 
                ristorante di successo c'è sempre una squadra che crede nel progetto.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex space-x-4 p-4 rounded-lg hover:bg-chef-warm/50 transition-colors"
                >
                  <div className="text-chef-olive flex-shrink-0 mt-1">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-chef-charcoal mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-chef-charcoal/70 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 bg-chef-olive/10 rounded-2xl border-l-4 border-chef-olive">
              <blockquote className="text-chef-charcoal italic text-lg">
                "Non esistono ristoranti impossibili da salvare, esistono solo approcci sbagliati. 
                La chiave è sempre l'equilibrio tra passione culinaria e strategia business."
              </blockquote>
              <cite className="text-chef-olive font-semibold mt-3 block">— Giuliano</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
