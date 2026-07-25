import { motion } from 'framer-motion'
import { Mail, MapPin, PhoneCall, Send } from 'lucide-react'
import { ContactSection } from '../components'

const contactNotes = [
  { icon: Mail, title: 'Quick email', copy: 'Use the contact page for partnership and fleet enquiries.' },
  { icon: MapPin, title: 'Lagos presence', copy: 'The page keeps location details easy to scan on mobile.' },
  { icon: PhoneCall, title: 'Direct lines', copy: 'Support numbers sit near the booking actions.' },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#081018] text-white">
      <section className="px-6 pb-14 pt-28 lg:px-16">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <p className="text-xs font-bold tracking-[0.24em] text-[#72cc2e]">CONTACT</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-black leading-[0.95] md:text-6xl">
              A dedicated page for test drives, WhatsApp, and enterprise enquiries.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
              The contact area is now separated from the rest of the site so calls to action can stay prominent
              without competing with the homepage story.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-3">
            {contactNotes.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#72cc2e]">
                  <Icon size={14} /> Contact
                </p>
                <p className="mt-3 text-sm font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <section id="test-drive" className="bg-[#f5f8fb] px-6 py-20 text-[#172233] lg:px-16">
        <div className="mx-auto grid w-full max-w-[1400px] gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#72cc2e]">NEXT STEP</p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">Book a test drive or start a fleet conversation.</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#556277]">
              The page keeps the most important conversion paths separate so users can move from browsing to
              action with less friction.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#172233] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#72cc2e]"
          >
            Request Test Drive <Send size={14} />
          </a>
        </div>
      </section>
    </div>
  )
}
