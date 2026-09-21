import { motion } from 'framer-motion';
import { profile, images } from '../utils/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function About() {
  const { ref, variants, initial, animate } = useScrollAnimation();
  const aboutImage = images.find((img) => img.section === 'about');

  return (
    <section id="about" className="py-20 sm:py-28 bg-ogbu-offWhite">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={initial}
          animate={animate}
          variants={variants}
          className="border-t border-ogbu-charcoal/25 pt-10"
        >
          <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16">
            <div>
              <p className="text-xs font-bold tracking-[0.24em] uppercase text-ogbu-goldDark mb-3">
                Profile
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ogbu-navy">
                About
              </h2>
            </div>

            <div className="grid md:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14">
              <div>
                <p className="text-lg text-ogbu-charcoal mb-6 leading-relaxed">
                  {profile.shortBio}
                </p>

                {aboutImage && (
                  <figure className="my-8 border-y border-ogbu-charcoal/20 py-4">
                    <img
                      src={aboutImage.src}
                      alt={aboutImage.alt}
                      width={678}
                      height={452}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover"
                    />
                    {(aboutImage.caption || aboutImage.credit) && (
                      <figcaption className="pt-3 text-xs text-ogbu-charcoal/80">
                        {aboutImage.caption && <span>{aboutImage.caption}</span>}
                        {aboutImage.credit && <span className="block italic mt-0.5">{aboutImage.credit}</span>}
                      </figcaption>
                    )}
                  </figure>
                )}

                <div className="mt-8 border-t border-ogbu-charcoal/20">
                  <div className="grid sm:grid-cols-[150px_1fr] gap-2 py-4 border-b border-ogbu-charcoal/20">
                    <h3 className="text-xs font-bold text-ogbu-gray uppercase tracking-[0.18em]">Full name</h3>
                    <p className="text-ogbu-charcoal font-medium">{profile.fullName}</p>
                  </div>
                  <div className="grid sm:grid-cols-[150px_1fr] gap-2 py-4 border-b border-ogbu-charcoal/20">
                    <h3 className="text-xs font-bold text-ogbu-gray uppercase tracking-[0.18em]">Born</h3>
                    <p className="text-ogbu-charcoal">
                      {profile.birthplace ? `${profile.birthDate} in ${profile.birthplace}` : profile.birthDate}
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-[150px_1fr] gap-2 py-4 border-b border-ogbu-charcoal/20">
                    <h3 className="text-xs font-bold text-ogbu-gray uppercase tracking-[0.18em]">Hometown</h3>
                    <p className="text-ogbu-charcoal">{profile.hometown}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-ogbu-navy mb-4">Higher education</h3>
                <ul className="mb-9 border-t border-ogbu-charcoal/20">
                  {profile.education.map((edu, index) => (
                    <li key={index} className="py-3 border-b border-ogbu-charcoal/20">
                      <span className="text-ogbu-charcoal leading-snug">{edu}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-heading font-bold text-ogbu-navy mb-4">Early education</h3>
                <ul className="border-t border-ogbu-charcoal/20">
                  {profile.earlyEducation.map((edu, index) => (
                    <li key={index} className="py-3 border-b border-ogbu-charcoal/20">
                      <span className="text-ogbu-charcoal leading-snug">{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
