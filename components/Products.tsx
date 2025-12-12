import React from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-navy relative overflow-hidden">
        {/* Subtle radial background gradient to mimic "glowing" ambiance */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy via-navy to-[#0F1A25] opacity-80 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold tracking-[0.4em] uppercase text-sm">Το Κελαρι</span>
          <h2 className="font-serif text-4xl md:text-5xl text-limestone mt-4">Εκλεκτά του Βυθού</h2>
          <div className="w-12 h-[2px] bg-gold mx-auto mt-6"></div>
        </div>

        {/* Flex layout used instead of grid to nicely center the last item if there is an odd number */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-20">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="group relative flex flex-col items-center text-center p-6 rounded-sm hover:bg-white/5 transition-all duration-500 ease-out border border-transparent hover:border-gold/20 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-sm"
            >
              {/* Product Image - Fixed height to ensure uniform vertical alignment */}
              <div className="h-80 w-full mb-8 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-full w-auto object-contain filter drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text Content */}
              <h3 className="font-serif text-2xl md:text-3xl text-gold mb-2 tracking-wide group-hover:text-limestone transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-[0.65rem] md:text-xs tracking-[0.2em] text-limestone/60 uppercase mb-6 font-sans min-h-[1.5em]">
                {product.subtitle}
              </p>
              
              <p className="text-limestone/80 font-sans font-light leading-relaxed mb-6 text-sm px-2">
                {product.description}
              </p>

              <div className="mt-auto w-full">
                <span className="block text-gold/80 text-xs font-serif italic border-t border-gold/20 pt-4 w-full px-4">
                    {product.pairing}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;