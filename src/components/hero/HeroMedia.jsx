import { motion } from 'framer-motion'
import heroImage from '../../sag1.jpg'

export default function HeroMedia() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
      className="relative mx-auto w-full max-w-[520px]"
    >
      <div className="absolute -inset-4 rounded-2xl bg-[#72cc2e]/25 blur-2xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[#101820]/70 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur">
        <img src={heroImage} alt="SAGLEV electric vehicle" className="h-[360px] w-full object-cover" />
        <div className="border-t border-white/10 px-6 py-5">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#72cc2e]">
            PREMIUM ELECTRIC MOBILITY
          </p>
          <p className="mt-2 text-sm text-white/80">
            Optimizing performance, functionality, and elegant simplicity.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
