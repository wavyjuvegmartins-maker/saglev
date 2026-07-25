import { motion } from 'framer-motion'
import { HelpCircle, MessageSquareQuote, ShieldQuestion } from 'lucide-react'
import { FaqSection } from '../components'

const faqNotes = [
  { icon: HelpCircle, title: 'Fast answers', copy: 'A focused FAQ page for buyers who need decisions quickly.' },
  { icon: MessageSquareQuote, title: 'Better support context', copy: 'The page can sit beside WhatsApp and test-drive actions.' },
  { icon: ShieldQuestion, title: 'Less friction', copy: 'Questions are grouped around fleet, service, and ownership.' },
]

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#0f161d] text-white">
      <section className="px-6 pb-14 pt-28 lg:px-16">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 lg:grid-cols-[1fr_0.88fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <p className="text-xs font-bold tracking-[0.24em] text-[#72cc2e]">FAQS</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-black leading-[0.95] md:text-6xl">
              Questions that usually decide the sale.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
              This page separates support questions from the homepage so people can get straight to ownership,
              service, and procurement answers.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-3">
            {faqNotes.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#72cc2e]">
                  <Icon size={14} /> Support
                </p>
                <p className="mt-3 text-sm font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
    </div>
  )
}
