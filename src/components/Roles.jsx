import { motion } from 'framer-motion';
import { roles } from '../utils/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Roles() {
  const { ref, variants, initial, animate } = useScrollAnimation();

  return (
    <section id="roles" className="py-20 sm:py-28 bg-ogbu-navy text-ogbu-offWhite">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={initial} animate={animate} variants={variants}>
          <div className="mb-10 grid md:grid-cols-[260px_1fr] gap-4 md:gap-12">
            <div>
              <p className="text-xs font-bold tracking-[0.24em] uppercase text-ogbu-gold mb-3">
                Current work
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                Current roles
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-12 border-t border-ogbu-offWhite/25">
            {roles.map((role, idx) => (
              <article
                key={idx}
                className="grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-2 sm:gap-6 py-5 border-b border-ogbu-offWhite/20"
              >
                <h3 className="text-base sm:text-lg font-heading font-bold text-ogbu-offWhite leading-snug">
                  {role.position}
                </h3>
                <p className="text-ogbu-offWhite/80 text-sm sm:text-base leading-relaxed">
                  {role.organisation}
                </p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
