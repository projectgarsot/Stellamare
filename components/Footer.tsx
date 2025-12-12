import React from 'react';
import { Anchor } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#0b1219] text-limestone/60 pt-16 pb-10 border-t border-white/5 font-sans relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
            {/* Brand */}
            <div>
                <div className="mb-4">
                  <img 
                    src="images/StellaMareLogo.png" 
                    alt="STELLAMARE" 
                    className="h-10 brightness-0 invert opacity-80"
                  />
                </div>
                <p className="text-xs tracking-[0.3em] text-gold uppercase">Από τον Αφρό της Θάλασσας στο πιάτο σας!</p>
                <div className="mt-4 flex items-center gap-2 text-gold/50">
                    <Anchor size={16} />
                    <span className="text-xs uppercase tracking-wider">Προτυπα Αλιειας & Μεταποιησης</span>
                </div>
            </div>

            {/* Address */}
            <div className="text-sm font-light leading-7">
                <p className="uppercase tracking-widest text-limestone/40 text-xs mb-2">Εδρα & Εγκαταστασεις</p>
                <p>Θέση Νεροβίγλι, Μαραθόπολη</p>
                <p>Γαργαλιάνοι, 24400, Ελλάδα</p>
            </div>

            {/* Contact */}
            <div className="text-sm font-light leading-7">
                <p className="uppercase tracking-widest text-limestone/40 text-xs mb-2">Επικοινωνια</p>
                <p>+30 27630 61 389</p>
                <p className="hover:text-gold transition-colors cursor-pointer">info@stellamare.gr</p>
            </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/5 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] opacity-30 uppercase gap-4">
            <span>© {new Date().getFullYear()} Stellamare Μ.Ι.Κ.Ε. | Powered by: Antidote</span>
            <span>Με υπερηφανεια επεξεργαζομαστε τα δωρα της Ελληνικης Θαλασσας.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;