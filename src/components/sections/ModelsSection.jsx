import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import premiumImage from '../../sag9.png'
import plugImage from '../../sag1.0.png'
import busImage from '../../sagbus.jpg'
import lineImage from '../../sag1.jpg'

const slides = [
  {
    name: 'VOYAH PASSION',
    type: 'Status Car',
    price: 'NGN 139,365,225',
    image: premiumImage,
    copy: 'A premium electric sedan balancing elegance, performance, and executive comfort.',
  },
  {
    name: 'E-STAR V9',
    type: 'Staff Bus',
    price: 'NGN 117,015,125',
    image: busImage,
    copy: 'Electric people movement designed for institutions and corporate staff transport.',
  },
  {
    name: 'YIPAI 008',
    type: 'Status SUV',
    price: 'NGN 89,755,800',
    image: plugImage,
    copy: 'A modern SUV class with EV capability suited for premium and family mobility use.',
  },
  {
    name: 'VOYAH FREE',
    type: 'Luxury Status SUV',
    price: 'NGN 112,165,575',
    image: lineImage,
    copy: 'A flagship SUV experience built for confident long-range electric driving.',
  },
]

export default function ModelsSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 5200)

    return () => clearInterval(timer)
  }, [])

  const next = () => setIndex((current) => (current + 1) % slides.length)
  const prev = () => setIndex((current) => (current - 1 + slides.length) % slides.length)
  const active = slides[index]

  return (
    <section id="models" className="bg-[#0f161d] px-6 py-20 text-white lg:px-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#72cc2e]">MODELS & BROCHURE</p>
            <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
              Premium models for executive, family, and fleet mobility.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:bg-white/10"
              aria-label="Previous model"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:bg-white/10"
              aria-label="Next model"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#111d2a] shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.name}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="h-[370px] w-full object-cover"
              />
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={active.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="rounded-2xl border border-white/15 bg-[#111d2a] p-7"
            >
              <p className="text-xs font-bold tracking-[0.2em] text-[#72cc2e]">{active.type}</p>
              <h3 className="mt-4 text-3xl font-black">{active.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">{active.copy}</p>

              <div className="mt-7 rounded-lg border border-white/15 bg-[#0d1622] p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/60">Starting Price</p>
                <p className="mt-2 text-2xl font-extrabold text-[#72cc2e]">{active.price}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3" id="pricing">
                <a
                  href="#"
                  className="inline-flex h-11 items-center justify-center rounded-sm bg-[#72cc2e] px-6 text-sm font-bold tracking-wide text-white transition hover:bg-[#62b827]"
                >
                  VIEW PRICING
                </a>
                <a
                  href="#"
                  className="inline-flex h-11 items-center justify-center rounded-sm border border-white/30 bg-white/5 px-6 text-sm font-bold tracking-wide text-white transition hover:bg-white/10"
                >
                  DOWNLOAD BROCHURE
                </a>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
