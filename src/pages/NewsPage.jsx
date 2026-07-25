import { motion } from 'framer-motion'
import { Newspaper, Radio, Rocket } from 'lucide-react'
import { NewsSection } from '../components'

const newsHighlights = [
  { icon: Newspaper, title: 'Company milestones', copy: 'Track the biggest SAGLEV product and delivery updates.' },
  { icon: Radio, title: 'Press coverage', copy: 'Move between editorial, educational, and corporate stories.' },
  { icon: Rocket, title: 'Industry context', copy: 'See related EV signals that frame the market around SAGLEV.' },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#0f161d] text-white">
      <section className="px-6 pb-14 pt-28 lg:px-16">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <p className="text-xs font-bold tracking-[0.24em] text-[#72cc2e]">NEWS & EVENTS</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-black leading-[0.95] md:text-6xl">
              SAGLEV stories, launches, and EV market context.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
              The newsroom gets its own page so editorial updates feel separate from the homepage and easier to
              scan when users come here looking for current information.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-3">
            {newsHighlights.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#72cc2e]">
                  <Icon size={14} /> Update
                </p>
                <p className="mt-3 text-sm font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsSection />
    </div>
  )
}
