import { motion } from 'framer-motion'
import { Mail, MapPin, MessageCircle, PhoneCall } from 'lucide-react'

const contacts = [
  { icon: Mail, label: 'Email', value: 'partnership@saglev.com' },
  { icon: MapPin, label: 'Address', value: '298B Akin Olugbade St, Victoria Island, Lagos' },
  { icon: PhoneCall, label: 'Nigeria', value: '+2342018880177 | +2349134895526' },
  { icon: PhoneCall, label: 'Ghana', value: '+233551566444' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white px-6 py-20 text-[#1d2735] lg:px-16">
      <div className="mx-auto w-full max-w-[1400px] rounded-2xl border border-[#dce3ea] bg-[#f8fbff] p-7 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="grid gap-8 lg:grid-cols-[1fr_auto]"
        >
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.22em] text-[#72cc2e]">CONTACT US</p>
            <h2 className="text-3xl font-extrabold md:text-5xl">Join the charge right now</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#556277]">
              Book a test drive and speak with the team about the right electric model for personal,
              executive, or fleet mobility goals.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {contacts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-lg border border-[#d7e0e8] bg-white p-4">
                  <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#72cc2e]">
                    <Icon size={14} /> {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#253144]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-stretch gap-3" id="whatsapp">
            <a
              id="test-drive"
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-[#72cc2e] px-6 text-sm font-bold tracking-wide text-white transition hover:bg-[#62b827]"
            >
              BOOK A TEST DRIVE
            </a>
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-[#cad5df] bg-white px-6 text-sm font-bold tracking-wide text-[#1d2735] transition hover:bg-[#f0f4f8]"
            >
              <MessageCircle size={16} /> WHATSAPP US
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
