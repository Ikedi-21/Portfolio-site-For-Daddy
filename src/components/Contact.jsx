import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { contact } from '../utils/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  const { ref, variants, initial, animate } = useScrollAnimation();

  const links = [
    contact.adsi && { label: 'Visit ADSI', url: contact.adsi },
    contact.igetProfile && { label: 'View IGET profile', url: contact.igetProfile },
    contact.email && { label: 'Email', url: `mailto:${contact.email}` },
    contact.linkedin && { label: 'View LinkedIn', url: contact.linkedin },
    contact.universityProfile && { label: 'View university profile', url: contact.universityProfile },
  ].filter(Boolean);

  return (
    <section id="contact" className="py-20 sm:py-28 bg-ogbu-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={initial}
          animate={animate}
          variants={variants}
          className="grid md:grid-cols-[260px_1fr] gap-8 md:gap-12 border-t border-ogbu-charcoal/25 pt-10"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-ogbu-goldDark mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ogbu-navy">
              Contact
            </h2>
          </div>

          <div>
            <p className="text-ogbu-charcoal text-lg mb-8 max-w-xl">
              For speaking engagements and media inquiries.
            </p>

            <div className="flex flex-wrap gap-3">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-ogbu-navy text-ogbu-navy font-bold text-sm sm:text-base px-5 py-3 hover:bg-ogbu-navy hover:text-ogbu-offWhite transition-colors focus:outline-none focus:ring-2 focus:ring-ogbu-gold focus:ring-offset-2"
                >
                  {link.label}
                  <ExternalLink className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
