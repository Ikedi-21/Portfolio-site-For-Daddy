import { motion } from 'framer-motion';
import { quotes } from '../utils/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Quotes() {
  const { ref, variants, initial, animate } = useScrollAnimation();

  const verified = quotes.filter((q) => q.verified);
  if (verified.length === 0) return null;

  return (
    <section className="py-20 sm:py-28 bg-ogbu-offWhite border-y border-ogbu-charcoal/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={initial} animate={animate} variants={variants}>
          <div className="space-y-14">
            {verified.map((quote, idx) => (
              <blockquote key={idx} className="text-center">
                <p className="font-heading text-2xl sm:text-3xl md:text-4xl italic text-ogbu-navy leading-relaxed max-w-3xl mx-auto">
                  &ldquo;{quote.text}&rdquo;
                </p>

                {quote.source && (
                  <cite className="block mt-6 text-ogbu-goldDark font-body text-sm sm:text-base font-bold not-italic tracking-[0.18em] uppercase">
                    {quote.source}
                  </cite>
                )}
              </blockquote>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
