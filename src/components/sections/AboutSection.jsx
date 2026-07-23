import { motion } from 'framer-motion'
import { Factory, Handshake, ShieldCheck } from 'lucide-react'
import workshopImage from '../../sag7.png'

const pillars = [
  {
    icon: Factory,
    title: 'Local Assembly',
    text: 'Vehicles assembled with local operating conditions in mind for reliability and practical ownership.',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty & Service',
    text: 'Structured after-sales support, spare parts access, and dependable service pathways.',
  },
  {
    icon: Handshake,
    title: 'Financing Partners',
    text: 'Partnership-first adoption options for corporate fleet and enterprise buyers.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-white px-6 py-20 text-[#1c2430] lg:px-16">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="mb-4 text-xs font-bold tracking-[0.22em] text-[#72cc2e]">OUR MISSION</p>
          <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
            Accelerating the shift from fossil fuel vehicles to electric mobility.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4f5d70] md:text-lg">
            SAGLEV builds an end-to-end electric mobility infrastructure for ride-hailing, corporate,
            and automotive fleet operators across emerging markets.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="rounded-lg border border-[#e6ebf0] bg-[#fbfcfe] p-4"
              >
                <Icon size={18} className="text-[#72cc2e]" />
                <h3 className="mt-3 text-sm font-extrabold text-[#1f2a39]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b6879]">{text}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-2xl border border-[#d8e0e8] shadow-[0_16px_40px_rgba(13,24,36,0.14)]"
        >
          <img src={workshopImage} alt="SAGLEV workshop operations" className="h-full w-full object-cover" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f161ddd] to-transparent p-5 text-sm font-semibold text-white">
            Real assembly and service operations that reinforce customer trust.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
