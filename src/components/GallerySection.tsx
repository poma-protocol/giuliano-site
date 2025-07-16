
import { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Ristorante Il Convivio",
      location: "Roma",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      result: "+35% marginalità",
      description: "Redesign completo del menu e ottimizzazione processi di cucina",
      metrics: {
        improvement: "35%",
        type: "Incremento marginalità",
        timeframe: "3 mesi"
      }
    },
    {
      title: "Hotel Bellavista",
      location: "Firenze", 
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      result: "+40% efficienza",
      description: "Formazione team e implementazione controlli di qualità",
      metrics: {
        improvement: "40%",
        type: "Miglioramento efficienza",
        timeframe: "2 mesi"
      }
    },
    {
      title: "Catering Premium Events",
      location: "Milano",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      result: "+50% clienti",
      description: "Strategia digitale e ottimizzazione menù eventi premium",
      metrics: {
        improvement: "50%",
        type: "Crescita clientela",
        timeframe: "6 mesi"
      }
    },
    {
      title: "Trattoria Moderna",
      location: "Napoli",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      result: "+28% revenue",
      description: "Menu engineering e controllo costi integrato",
      metrics: {
        improvement: "28%",
        type: "Aumento fatturato",
        timeframe: "4 mesi"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="gallery" className="py-20 bg-chef-charcoal">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Progetti di Successo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Risultati concreti che parlano da soli. Ogni progetto è una storia di trasformazione 
            e crescita condivisa.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-[500px] md:h-[600px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-end">
                          <div>
                            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">
                              {project.title}
                            </h3>
                            <p className="text-chef-olive text-lg mb-4">{project.location}</p>
                            <p className="text-gray-200 text-lg leading-relaxed mb-4">
                              {project.description}
                            </p>
                          </div>
                          
                          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                            <div className="text-center">
                              <div className="text-4xl font-bold text-chef-olive mb-2">
                                {project.metrics.improvement}
                              </div>
                              <div className="text-white text-lg mb-1">
                                {project.metrics.type}
                              </div>
                              <div className="text-gray-300 text-sm">
                                Raggiunto in {project.metrics.timeframe}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-chef-olive' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8 text-center">
              <TrendingUp className="h-12 w-12 text-chef-olive mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">30%</div>
              <div className="text-gray-300">Incremento medio marginalità</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-chef-terracotta mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-300">Ristoranti trasformati</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300">Clienti soddisfatti</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
