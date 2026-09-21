import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { timeline } from '../utils/constants';

function EraGroup({ era, items, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReduced ? 0 : 24 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
      className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-10 border-t border-ogbu-charcoal/25 py-8"
    >
      <h3 className="text-xl sm:text-2xl font-heading font-bold text-ogbu-navy">
        {era}
      </h3>

      <ol className="divide-y divide-ogbu-charcoal/20">
        {items.map((item, idx) => (
          <li key={idx} className="grid sm:grid-cols-[118px_1fr] gap-2 sm:gap-8 py-4 first:pt-0">
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-ogbu-goldDark">
              {item.years}
            </span>
            <div>
              <h4 className="text-lg font-heading font-bold text-ogbu-navy leading-snug">
                {item.title}
              </h4>
              <p className="text-ogbu-charcoal mt-1 text-sm sm:text-base">
                {item.organisation}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-bold tracking-[0.24em] uppercase text-ogbu-goldDark mb-3">
            Career
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ogbu-navy">
            Career timeline
          </h2>
        </div>

        {Object.entries(timeline).map(([era, items], idx) => (
          <EraGroup key={era} era={era} items={items} index={idx} />
        ))}
      </div>
    </section>
  );
}
