import { motion } from 'framer-motion';
import { profile } from '../utils/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Hero() {
  const { ref, variants, initial, animate } = useScrollAnimation();

  return (
    <section 
      id="hero" 
      className="bg-ogbu-navy text-ogbu-offWhite min-h-screen flex items-center justify-center pt-20 pb-16 border-b border-ogbu-gold/40"
    >
      <motion.div 
        ref={ref}
        initial={initial}
        animate={animate}
        variants={variants}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        <div className="mb-8 relative">
          {profile.photo ? (
            <div className="flex flex-col items-center">
              <img 
                src={profile.photo} 
                alt="Studio portrait of Prof. Osita Ogbu wearing a dark suit jacket, white collared shirt, and glasses"
                width={224}
                height={224}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-48 h-60 sm:w-60 sm:h-72 object-cover object-[center_18%] border border-ogbu-gold/70 bg-ogbu-navy"
              />
            </div>
          ) : (
            <div 
              role="img" 
              aria-label={`Initials placeholder for ${profile.fullName}`}
              className="w-48 h-60 sm:w-60 sm:h-72 border border-ogbu-gold flex items-center justify-center bg-ogbu-navy"
            >
              <span className="font-heading text-6xl sm:text-7xl text-ogbu-gold">OO</span>
            </div>
          )}
        </div>
        
        <p className="text-xs font-bold tracking-[0.28em] uppercase text-ogbu-gold mb-4">
          {profile.tagline}
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-5 tracking-normal">
          {profile.displayNameParts.name},{' '}
          <span className="text-ogbu-gold">{profile.displayNameParts.title1}</span>,{' '}
          {profile.displayNameParts.title2}
        </h1>
        
        <p className="text-lg sm:text-xl font-body text-ogbu-offWhite/85 mb-9 max-w-3xl mx-auto leading-relaxed">
          Chief Economic Adviser to the President of Nigeria and Minister of National Planning, 2005 to 2006. Professor of Economics, University of Nigeria.
        </p>
        
        <a 
          href="#about"
          className="inline-block border border-ogbu-gold text-ogbu-offWhite font-bold py-3 px-7 transition-colors hover:bg-ogbu-gold hover:text-ogbu-navy focus:outline-none focus:ring-2 focus:ring-ogbu-goldLight focus:ring-offset-2 focus:ring-offset-ogbu-navy"
        >
          View career
        </a>
      </motion.div>
    </section>
  );
}
