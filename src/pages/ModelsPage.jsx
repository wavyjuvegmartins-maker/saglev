import { motion } from 'framer-motion'
import { ArrowUpRight, Gauge, Layers3, ShieldCheck } from 'lucide-react'
import { ModelsSection } from '../components'

const modelNotes = [
  {
    icon: ShieldCheck,
    title: 'Built for fleet confidence',
    copy: 'Pricing, brochure, and spec details are grouped to help enterprise buyers move faster.',
  },
  {
    icon: Gauge,
    title: 'Performance-led selection',
    copy: 'Each model is positioned by use case, from executive comfort to staff transport.',
  },
  {
    icon: Layers3,
    title: 'Brochure and pricing together',
    copy: 'The page is designed to separate browsing from decision-making without clutter.',
  },
]

export default function ModelsPage() {
  return (
    <div className="min-h-screen bg-[#0d1622] text-white">
      <section className="relative overflow-hidden px-6 pb-16 pt-28 lg:px-16">
        <div className="absolute right-[-4rem] top-12 h-64 w-64 rounded-full bg-[#72cc2e]/15 blur-3xl" />
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <p className="text-xs font-bold tracking-[0.24em] text-[#72cc2e]">MODELS</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-black leading-[0.95] md:text-6xl">
              Select the right electric platform for the job.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
              This page gives the models space to breathe on its own, with pricing and brochure paths still
              one click away for buyers who are ready to compare.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-3">
            {modelNotes.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#72cc2e]">
                  <Icon size={14} /> Focus
                </p>
                <p className="mt-3 text-sm font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ModelsSection />

      <section id="brochure" className="bg-[#f5f8fb] px-6 py-20 text-[#172233] lg:px-16">
        <div className="mx-auto grid w-full max-w-[1400px] gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#72cc2e]">BROCHURE + PRICING</p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">Everything a buyer needs in one place.</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#556277]">
              The model page is set up so a buyer can scroll the carousel, jump into pricing, and open the
              brochure without leaving the decision flow.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#172233] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#72cc2e]"
          >
            Download Brochure <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </div>
  )
}
