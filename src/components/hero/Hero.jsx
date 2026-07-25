import heroBackground from '../../sag2.jpg'
import mobileBackground from '../../sagbus.jpg'
import mobilePortrait from '../../sag5.jpg'
import HeroContent from './HeroContent'
import HeroMedia from './HeroMedia'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <img
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        src={heroBackground}
        alt="SAGLEV hero background"
      />
      <img
        className="absolute inset-0 h-full w-full object-cover md:hidden"
        src={mobileBackground}
        alt="SAGLEV mobile hero background"
      />

      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(10,14,20,0.88)_0%,rgba(10,14,20,0.5)_45%,rgba(10,14,20,0.8)_100%)] md:block" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,20,0.72)_0%,rgba(10,14,20,0.78)_60%,rgba(10,14,20,0.92)_100%)] md:hidden" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] items-center px-5 pb-20 pt-28 md:px-6 md:pb-24 md:pt-36 lg:px-16 lg:pt-40">
        <div className="w-full">
          <div className="hidden md:block">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <HeroContent />
              <HeroMedia />
            </div>
          </div>

          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="flex flex-col gap-5"
            >
              <div className="inline-flex self-start rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold tracking-[0.24em] text-[#72cc2e]">
                THE FUTURE IS ELECTRIC
              </div>

              <div className="max-w-md">
                <h1 className="text-4xl font-extrabold leading-[0.94] tracking-tight text-white sm:text-5xl">
                  VOYAH
                  <span className="block text-[#72cc2e]">PASSION</span>
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-white/82 sm:text-base">
                  Premium electric mobility built for Lagos traffic, fleet operations, and modern drivers.
                </p>
              </div>

              <div className="grid gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="overflow-hidden rounded-2xl border border-white/15 bg-[#101820]/72 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur"
                >
                  <img
                    src={mobilePortrait}
                    alt="SAGLEV premium electric vehicle"
                    className="h-56 w-full object-cover"
                  />
                </motion.div>

                <div className="grid grid-cols-2 gap-3">
                  <motion.a
                    href="#models"
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex h-12 items-center justify-center rounded-sm bg-[#72cc2e] px-4 text-xs font-bold tracking-wide text-white"
                  >
                    MODELS
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex h-12 items-center justify-center rounded-sm border border-white/25 bg-white/10 px-4 text-xs font-bold tracking-wide text-white"
                  >
                    CONTACT
                  </motion.a>
                </div>

                <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#72cc2e]">01</p>
                    <p className="mt-1 text-sm font-semibold text-white">Electric-first design</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#72cc2e]">02</p>
                    <p className="mt-1 text-sm font-semibold text-white">Fleet-ready comfort</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#72cc2e]">03</p>
                    <p className="mt-1 text-sm font-semibold text-white">Local service confidence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
