import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const links = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  {
    label: 'Models & Brochure',
    href: '#models',
    children: [
      { label: 'All Models', href: '#models' },
      { label: 'Model Pricing', href: '#pricing' },
      { label: 'Download Brochure', href: '#brochure' },
    ],
  },
  {
    label: 'News & Events',
    href: '#news',
    children: [
      { label: 'Latest News', href: '#news' },
      { label: 'Educational Series', href: '#education' },
      { label: 'Press Releases', href: '#press' },
    ],
  },
  { label: 'FAQs', href: '#faqs' },
  {
    label: 'Contact',
    href: '#contact',
    children: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'WhatsApp', href: '#whatsapp' },
      { label: 'Book Test Drive', href: '#test-drive' },
    ],
  },
]

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(null)
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const closeTimerRef = useRef(null)

  const toggleMenu = (label) => {
    setOpenMenu((current) => (current === label ? null : label))
  }

  const openHoveredMenu = (label) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }
    setHoveredMenu(label)
  }

  const closeHoveredMenu = () => {
    closeTimerRef.current = setTimeout(() => {
      setHoveredMenu(null)
    }, 130)
  }

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <div className="mx-auto mt-5 flex w-[min(1400px,calc(100%-2rem))] items-center justify-between rounded-md border border-white/15 bg-[#0d1622]/85 px-4 py-3 backdrop-blur md:px-6">
        <a href="#" className="text-xl font-black tracking-[0.24em] text-white">
          SAG<span className="text-[#72cc2e]">LEV</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => {
            if (!link.children) {
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -2, color: '#72cc2e' }}
                  transition={{ duration: 0.15 }}
                  className="text-sm font-semibold text-white/90"
                >
                  {link.label}
                </motion.a>
              )
            }

            const isOpen = openMenu === link.label || hoveredMenu === link.label

            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => openHoveredMenu(link.label)}
                onMouseLeave={closeHoveredMenu}
              >
                <div className="inline-flex items-center gap-2">
                  <motion.a
                    href={link.href}
                    whileHover={{ y: -2, color: '#72cc2e' }}
                    transition={{ duration: 0.15 }}
                    className="text-sm font-semibold text-white/90"
                  >
                    {link.label}
                  </motion.a>

                  <motion.button
                    type="button"
                    aria-label={`Toggle ${link.label} menu`}
                    onClick={(event) => {
                      event.preventDefault()
                      event.stopPropagation()
                      toggleMenu(link.label)
                    }}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      rotate: isOpen ? 180 : 0,
                      y: isOpen ? 0 : [0, -2, 0],
                      color: isOpen ? '#72cc2e' : '#b6c0cc',
                    }}
                    transition={{
                      rotate: { duration: 0.2 },
                      y: {
                        duration: 1.2,
                        repeat: isOpen ? 0 : Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                    className="ml-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-black"
                  >
                    <ChevronDown size={14} strokeWidth={2.5} />
                  </motion.button>
                </div>

                <div
                  className={`absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-md border border-white/15 bg-[#111d2a]/95 p-2 shadow-2xl backdrop-blur transition-all duration-200 ${
                    isOpen
                      ? 'pointer-events-auto visible translate-y-0 opacity-100'
                      : 'pointer-events-none invisible translate-y-1 opacity-0'
                  }`}
                >
                  {link.children.map((child) => (
                    <motion.a
                      key={child.label}
                      href={child.href}
                      whileHover={{ x: 6, backgroundColor: 'rgba(255,255,255,0.12)', color: '#72cc2e' }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="block rounded px-3 py-2 text-xs font-semibold tracking-wide text-white/85"
                    >
                      {child.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            )
          })}
        </nav>

        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-sm bg-[#72cc2e] px-4 py-2 text-xs font-bold tracking-wide text-white md:px-5 md:text-sm"
        >
          RESERVE NOW
        </motion.a>
      </div>
    </motion.header>
  )
}
