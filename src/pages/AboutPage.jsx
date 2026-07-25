import { motion } from 'framer-motion'
import { ArrowUpRight, Factory, MapPin, ShieldCheck, Users } from 'lucide-react'
import aboutVideo from '../Download.mp4'
import { aboutFacts, aboutSources, aboutTimeline } from '../data/aboutHistory'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#081018] text-white">
      <section className="relative overflow-hidden px-6 pb-16 pt-28 lg:px-16">
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-[#72cc2e]/15 blur-3xl" />
        <div className="absolute right-[-5rem] top-0 h-64 w-64 rounded-full bg-[#5fa5ff]/10 blur-3xl" />

        <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-[#72cc2e]">ABOUT SAGLEV</p>
            <h1 className="max-w-2xl text-4xl font-black leading-[0.95] tracking-tight md:text-6xl">
              Building the local backbone for electric mobility.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
              SAGLEV presents itself as a Nigerian electric vehicle assembler and mobility partner, focused on
              helping fleets, institutions, and forward-looking drivers move away from fossil-fuel transport.
              Its public updates emphasize local assembly, service support, financing options, and practical
              EV adoption in Nigeria.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Factory, label: 'Local assembly', value: 'Made for Nigerian roads' },
                { icon: Users, label: 'Fleet support', value: 'Built for enterprise use' },
                { icon: ShieldCheck, label: 'After-sales', value: 'Warranty and service-led' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#72cc2e]">
                    <Icon size={14} /> {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/90">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[#72cc2e]/20 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0f1824] shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
              <video className="h-[420px] w-full object-cover md:h-[520px]" controls autoPlay muted loop playsInline>
                <source src={aboutVideo} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f5f8fb] px-6 py-20 text-[#172233] lg:px-16">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-4"
          >
            <p className="text-xs font-bold tracking-[0.24em] text-[#72cc2e]">COMPANY HISTORY</p>
            <h2 className="text-3xl font-black md:text-5xl">
              From a mission statement to visible fleet delivery.
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-[#526075]">
              Public SAGLEV content shows a company that has grown around local assembly in Lagos, a broader
              promise to distribute and manufacture EVs across emerging markets, and a steady move from product
              education into corporate deployments and bus partnerships.
            </p>

            <div className="grid gap-4 pt-4 md:grid-cols-3">
              {aboutFacts.map((fact) => (
                <div key={fact} className="rounded-2xl border border-[#dce5ee] bg-white p-5 shadow-sm">
                  <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#72cc2e]">
                    <MapPin size={14} /> Highlight
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-[#223045]">{fact}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            {aboutTimeline.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                className="rounded-2xl border border-[#dce5ee] bg-white p-6 shadow-[0_12px_30px_rgba(25,40,61,0.06)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#72cc2e]">{item.year}</p>
                <h3 className="mt-3 text-2xl font-black text-[#172233]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#576579]">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-16">
        <div className="mx-auto grid w-full max-w-[1400px] gap-6 lg:grid-cols-[1fr_0.82fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-[2rem] border border-white/10 bg-[#111d2a] p-8"
          >
            <p className="text-xs font-bold tracking-[0.22em] text-[#72cc2e]">WHY IT MATTERS</p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              The company history is really a deployment history.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/78">
              Based on SAGLEV’s public content, the story is not just about vehicle sales. It is about building
              local assembly capacity, proving the model with real customer deliveries, and making EV adoption
              feel operationally normal for Nigerian organisations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {aboutSources.map((source) => (
                <a
                  key={source.label}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/85 transition hover:border-[#72cc2e] hover:text-[#72cc2e]"
                >
                  {source.label} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="rounded-[2rem] border border-[#dce5ee] bg-[#f5f8fb] p-8 text-[#172233]">
            <p className="text-xs font-bold tracking-[0.22em] text-[#72cc2e]">SOURCE SUMMARY</p>
            <div className="mt-5 space-y-4">
              {aboutSources.map((source) => (
                <div key={source.label} className="rounded-2xl border border-[#dce5ee] bg-white p-5">
                  <p className="text-sm font-bold text-[#172233]">{source.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#566577]">{source.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
