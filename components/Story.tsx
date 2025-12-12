import React from 'react';

const Story: React.FC = () => {
  return (
    <section id="story" className="w-full bg-limestone text-navy">
      <div className="flex flex-col lg:flex-row min-h-[80vh]">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden">
          <img 
            src="images/factoryfloor.jpg" 
            alt="Old Fishing Boat in Marathopoli" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-navy/10"></div>
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-limestone">
          <div className="max-w-xl">
            <h3 className="text-gold tracking-[0.3em] uppercase text-sm font-bold mb-4">Η Κληρονομια Μας</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-8 leading-tight">
              Η Αλχημεία της <br/>
              <span className="italic">Μαραθόπολης</span>
            </h2>
            
            <div className="space-y-6 font-sans text-navy/80 text-lg leading-relaxed font-light">
              <p>
                Εδώ το ψάρεμα δεν είναι βιομηχανία, είναι ιεροτελεστία. Για την <strong className="text-navy font-normal">οικογένεια Τεριζάκη</strong>, η βραχώδης ακτή της Μαραθόπολης δεν είναι απλώς μια τοποθεσία — είναι η κληρονομιά μας.
              </p>
              <p>
                Από το 2004, στεκόμαστε στις αποβάθρες επιλέγοντας την καλύτερη ψαριά από το Ιόνιο Πέλαγος. Αλλά η ψαριά είναι μόνο η αρχή. Υπό την καθοδήγηση του Θεοδόσιου Τεριζάκη, μεταμορφώσαμε ένα οικογενειακό πάθος σε μια τέχνη υψηλών προδιαγραφών.
              </p>
              <p className="border-l-4 border-gold pl-6 py-2 italic text-navy/90">
                "Ενώνουμε τους δύο μεγάλους θησαυρούς της Μεσσηνίας: την ασημένια σοδειά της θάλασσας και το υγρό χρυσάφι των ελαιώνων μας. Αυτό είναι το «Ελληνικό Sushi» — ωμό, παστό και αναβαθμισμένο σε μορφή τέχνης."
              </p>
            </div>
            
            <div className="mt-12 flex items-center space-x-4">
               <div className="h-px w-16 bg-navy/20"></div>
               <span className="font-serif text-navy text-xl">Ίδρυση 2004</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;