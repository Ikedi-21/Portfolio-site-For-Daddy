import { motion } from 'framer-motion';
import { honours } from '../utils/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Honours() {
  const { ref, variants, initial, animate } = useScrollAnimation();

  return (
    <section id="honours" className="py-20 sm:py-28 bg-ogbu-offWhite">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={initial} animate={animate} variants={variants}>
          <div className="mb-10 grid md:grid-cols-[220px_1fr] gap-4 md:gap-10">
            <div>
              <p className="text-xs font-bold tracking-[0.24em] uppercase text-ogbu-goldDark mb-3">
                Recognition
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ogbu-navy">
                Honours and awards
              </h2>
            </div>
          </div>

          <div className="border-t border-ogbu-charcoal/25">
            {honours.map((honour, idx) => (
              <article
                key={idx}
                className="grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-10 py-5 border-b border-ogbu-charcoal/20"
              >
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-ogbu-goldDark">
                  {honour.year}
                </p>
                <div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-ogbu-navy leading-snug">
                    {honour.award}
                  </h3>
                  {honour.organisation && (
                    <p className="text-ogbu-charcoal text-sm mt-1">{honour.organisation}</p>
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
