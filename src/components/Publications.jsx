import { BookOpen, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { publications } from '../utils/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const byYearDescending = (a, b) => Number(b.year) - Number(a.year);

function Cover({ publication }) {
  if (!publication.cover) return null;

  return (
    <div className="w-36 sm:w-40 md:w-44 flex-shrink-0 bg-white p-2 border border-[#D8CAB3] shadow-[0_16px_35px_rgba(31,41,55,0.14)]">
      <img
        src={publication.cover.src}
        alt={publication.cover.alt}
        width={publication.cover.width}
        height={publication.cover.height}
        loading="lazy"
        decoding="async"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

function LinkIcon({ type }) {
  if (type === 'download') return <Download className="h-4 w-4" aria-hidden="true" />;
  if (type === 'read') return <BookOpen className="h-4 w-4" aria-hidden="true" />;
  return <ExternalLink className="h-4 w-4" aria-hidden="true" />;
}

function PublicationLinks({ publication }) {
  if (publication.links.length === 0) return null;

  return (
    <div className="mt-5">
      <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#5A5A5A]">
        View publication
      </p>
      <ul
        aria-label={`Links for ${publication.title}`}
        className="flex flex-wrap gap-2"
      >
        {publication.links.map((link) => (
          <li key={link.url} className="list-none">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-10 inline-flex items-center gap-2 border border-ogbu-navy/25 bg-white px-3 py-2 text-sm font-bold text-ogbu-navy transition-colors hover:border-ogbu-navy hover:bg-ogbu-navy hover:text-white focus:outline-none focus:ring-2 focus:ring-ogbu-gold focus:ring-offset-2"
            >
              <LinkIcon type={link.type} />
              {link.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PublicationEntry({ publication, featured = false }) {
  if (featured) {
    return (
      <article className="h-full grid sm:grid-cols-[auto_minmax(0,1fr)] gap-5 sm:gap-8 p-5 sm:p-7">
        <Cover publication={publication} />
        <div className="min-w-0">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#5A5A5A]">
            {publication.role}, {publication.year}
          </p>
          <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-bold leading-tight text-ogbu-navy">
            {publication.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ogbu-charcoal">
            {publication.publisher}
          </p>
          {publication.coAuthors && (
            <p className="mt-1 text-sm leading-relaxed text-[#5A5A5A]">
              {publication.coAuthors}
            </p>
          )}
          <PublicationLinks publication={publication} />
        </div>
      </article>
    );
  }

  return (
    <article className="py-6">
      <div className="min-w-0">
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#5A5A5A]">
          {publication.role}, {publication.year}
        </p>
        <h3 className="mt-2 font-heading text-xl font-bold leading-snug text-ogbu-navy">
          {publication.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ogbu-charcoal">
          {publication.publisher}
        </p>
        {publication.coAuthors && (
          <p className="mt-1 text-sm leading-relaxed text-[#5A5A5A]">
            {publication.coAuthors}
          </p>
        )}
        <PublicationLinks publication={publication} />
      </div>
    </article>
  );
}

export function Publications() {
  const { ref, variants, initial, animate } = useScrollAnimation();
  const featured = publications.verified.filter((publication) => publication.cover);
  const remaining = publications.verified
    .filter((publication) => !publication.cover)
    .sort(byYearDescending);

  return (
    <section id="publications" className="py-20 sm:py-28 bg-[#F6F1E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={initial} animate={animate} variants={variants}>
          <div className="mb-10 max-w-3xl">
            <div className="h-px w-16 bg-ogbu-gold mb-5" aria-hidden="true" />
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ogbu-navy">
              Publications
            </h2>
            <p className="mt-4 text-ogbu-charcoal leading-relaxed">
              Books, edited volumes, and policy publications spanning development economics, technology policy, and institutional transformation.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            {featured.map((publication) => (
              <div key={publication.id} className="bg-white border border-[#DDD0BA]">
                <PublicationEntry publication={publication} featured />
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white border border-[#DDD0BA] p-5 sm:p-7">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.24em] uppercase text-ogbu-goldDark mb-3">
                More work
              </p>
              <h3 className="font-heading text-2xl font-bold text-ogbu-navy">
                Selected publications
              </h3>
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 border-t border-[#D8CAB3]">
              {remaining.map((publication) => (
                <div key={publication.id} className="border-b border-[#D8CAB3]">
                  <PublicationEntry publication={publication} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
