import { motion } from 'framer-motion'

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="max-w-2xl"
    >
      <p className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#72cc2e]">
        THE FUTURE IS ELECTRIC
      </p>

      <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight text-white md:text-7xl">
        VOYAH
        <span className="block text-[#72cc2e]">PASSION</span>
      </h1>

      <p className="mt-7 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
        Transition to environmentally friendly vehicles powered by electricity and renewable
        energy. Built for modern drivers, fleet operators, and forward-looking businesses.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <motion.a
          href="#"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex h-12 items-center justify-center rounded-sm bg-[#72cc2e] px-7 text-sm font-bold tracking-wide text-white transition hover:bg-[#62b827]"
        >
          OTHER MODELS
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex h-12 items-center justify-center rounded-sm border border-white/30 bg-white/10 px-7 text-sm font-bold tracking-wide text-white transition hover:bg-white/20"
        >
          ELECTRIC VEHICLE PRICING
        </motion.a>
      </motion.div>
    </motion.div>
  )
}
