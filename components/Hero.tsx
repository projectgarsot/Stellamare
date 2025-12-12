import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Simulation of Video Loop */}
      <div className="absolute inset-0 w-full h-full">
         <img 
            src="images/stellafactory.jpg" 
            alt="Aegean Sea" 
            className="w-full h-full object-cover scale-110 animate-[pulse_10s_ease-in-out_infinite]"
            style={{ filter: 'brightness(0.6) contrast(1.1)' }}
         />
         <div className="absolute inset-0 bg-navy/40 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <div className="animate-[fadeInDown_1.5s_ease-out]">
            <p className="text-gold tracking-[0.5em] text-sm md:text-base uppercase mb-4 font-sans font-bold">
            Μαραθοπολη, Μεσσηνια
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-limestone tracking-wider mb-2 text-shadow">
            STELLAMARE
            </h1>
            <div className="w-24 h-[1px] bg-gold mx-auto my-8"></div>
        </div>

        <div className="animate-[fadeInUp_1.5s_ease-out_0.5s] opacity-0 fill-mode-forwards" style={{ animationFillMode: 'forwards' }}>
            <h2 className="text-2xl md:text-3xl font-serif text-gold italic mb-6">
            "Γέννημα της Θάλασσας. Διατηρημένο σε Χρυσό."
            </h2>
            <p className="text-limestone/90 font-sans text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Η αυθεντική γεύση της ελληνικής ακτογραμμής. Τρεις γενιές αλιευτικής κληρονομιάς, διατηρημένες στο εκλεκτότερο Μεσσηνιακό Ελαιόλαδο.
            </p>
            
            <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-12 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 tracking-[0.2em] font-serif text-sm uppercase"
            >
            Δειτε τη Συλλογη
            </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-limestone/50">
        <ArrowDown size={32} strokeWidth={1} />
      </div>
    </section>
  );
};

export default Hero;