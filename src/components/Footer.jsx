import { profile } from '../utils/constants';

export function Footer() {
  return (
    <footer className="bg-ogbu-navy text-ogbu-offWhite/75 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm flex flex-col items-center">
        <div className="w-8 h-8 bg-ogbu-offWhite p-0.5 border border-ogbu-gold mb-3 flex items-center justify-center overflow-hidden">
          <img 
            src="/logo/logo.png" 
            alt="Prof. Osita Ogbu logo" 
            width={30} 
            height={30} 
            loading="lazy" 
            decoding="async" 
            className="w-full h-full object-contain" 
          />
        </div>
        <p className="font-heading font-bold text-ogbu-offWhite text-base mb-1">
          {profile.displayName}
        </p>
        <p>
          Official portfolio &middot; &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
