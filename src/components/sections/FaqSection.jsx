import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'

const items = [
  {
    q: 'Do you support corporate fleet procurement?',
    a: 'Yes. SAGLEV supports enterprise fleet electrification with model selection, pricing, and transition planning support.',
  },
  {
    q: 'Can I compare models and prices before enquiry?',
    a: 'Yes. The models and pricing pathways are designed to help buyers qualify quickly before booking a test drive.',
  },
  {
    q: 'Do you offer after-sales service support?',
    a: 'Yes. Service centers, warranty options, and parts support are included in the operations model.',
  },
]

export default function FaqSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="faqs" className="bg-[#0f161d] px-6 py-20 text-white lg:px-16">
      <div className="mx-auto w-full max-w-[1000px]">
        <p className="mb-4 text-center text-xs font-bold tracking-[0.22em] text-[#72cc2e]">FAQs</p>
        <h2 className="text-center text-3xl font-extrabold md:text-5xl">Answers to common EV adoption questions</h2>

        <div className="mt-10 space-y-4">
          {items.map((item, idx) => {
            const open = active === idx
            return (
              <article key={item.q} className="rounded-xl border border-white/15 bg-[#111d2a]">
                <button
                  type="button"
                  onClick={() => setActive(open ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-base font-bold">{item.q}</span>
                  {open ? <Minus size={18} /> : <Plus size={18} />}
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-white/75">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
