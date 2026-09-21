import { motion } from 'framer-motion';
import { speaking } from '../utils/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Speaking() {
  const { ref, variants, initial, animate } = useScrollAnimation();

  return (
    <section id="speaking" className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={initial} animate={animate} variants={variants}>
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.24em] uppercase text-ogbu-goldDark mb-3">
              Lectures
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ogbu-navy">
              Speaking and lectures
            </h2>
          </div>

          <div className="border-t border-ogbu-charcoal/25">
            {speaking.map((item, idx) => (
              <article
                key={idx}
                className="grid md:grid-cols-[150px_1fr] gap-3 md:gap-10 py-6 border-b border-ogbu-charcoal/20"
              >
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-ogbu-goldDark">
                  {item.date}
                </p>
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-ogbu-navy leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-ogbu-charcoal text-sm sm:text-base mt-1">
                    {item.event}
                  </p>
                  {item.topic && (
                    <p className="mt-3 text-ogbu-charcoal text-sm sm:text-base leading-relaxed">
                      {item.topic}
                    </p>
                  )}
                  {item.pullQuote && (
                    <p className="mt-4 font-heading text-lg sm:text-xl text-ogbu-navy italic leading-relaxed">
                      &ldquo;{item.pullQuote}&rdquo;
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
