
import { Award, Globe, Users, ChefHat, BookOpen, Briefcase } from 'lucide-react';

export const AboutSection = () => {
  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "10+ anni di esperienza",
      description: "In cucine stellate e ristoranti internazionali"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "30+ ristoranti",
      description: "Affiancati verso risultati concreti"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Formatore professionale",
      description: "HACCP, management e tecniche di ristorazione"
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
                src="/lovable-uploads/23965a1f-888e-42ad-8871-afa553241298.png"
                alt="Giuliano - Chef Consulente"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-chef-charcoal mb-6">
              Chi sono
            </h2>
            
            <div className="text-lg text-chef-charcoal/80 space-y-6 mb-8 leading-relaxed">
              <p>
                Chef e consulente con oltre 10 anni di esperienza maturata in ristoranti Michelin, resort a cinque stelle e catering internazionali.
              </p>
              
              <p>
                • Cucina italiana e mediterranea contemporanea, tecniche CBT e plant based; sviluppo di menù ad alta marginalità con rigoroso controllo del food cost.
              </p>
              
              <p>
                • Coordinamento di brigate fino a 25 professionisti e fino a 500 coperti al giorno; ottimizzazione dei flussi di lavoro e piena conformità agli standard HACCP.
              </p>
              
              <p>
                • Lavoro di squadra, gestione dello stress e problem solving efficace. Comunicazione fluente in italiano, inglese e spagnolo.
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
