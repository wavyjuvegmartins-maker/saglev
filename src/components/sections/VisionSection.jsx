import { motion } from 'framer-motion'
import { BatteryCharging, Leaf, Zap } from 'lucide-react'

const goals = [
  {
    icon: Zap,
    title: 'The Future Is Electric',
    text: 'A practical transition strategy for urban mobility and fleet electrification.',
  },
  {
    icon: Leaf,
    title: 'Environmental Friendliness',
    text: 'Lower emissions and cleaner transport outcomes for cities and businesses.',
  },
  {
    icon: BatteryCharging,
    title: 'Fast Charging Support',
    text: 'Infrastructure-linked operations that support daily uptime and reliability.',
  },
]

export default function VisionSection() {
  return (
    <section id="brochure" className="bg-[#f5f8fb] px-6 py-20 lg:px-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs font-bold tracking-[0.22em] text-[#72cc2e]">OUR VISION</p>
          <h2 className="text-3xl font-extrabold text-[#1d2735] md:text-5xl">Future Economy</h2>
          <p className="mt-5 text-base leading-relaxed text-[#4f5d70] md:text-lg">
            Developing an electric mobility and battery-storage power brand spanning Africa's
            automotive multi-modal transportation landscape.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {goals.map(({ icon: Icon, title, text }) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="rounded-xl border border-[#d9e2ec] bg-white p-6 shadow-[0_10px_30px_rgba(18,34,49,0.08)]"
            >
              <Icon size={20} className="text-[#72cc2e]" />
              <h3 className="mt-4 text-lg font-bold text-[#1d2735]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5f6f83]">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
