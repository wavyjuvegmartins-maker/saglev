import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const MotionLink = motion.create(Link)

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Models & Brochure',
    to: '/models',
    children: [
      { label: 'All Models', to: '/models#models' },
      { label: 'Model Pricing', to: '/models#pricing' },
      { label: 'Download Brochure', to: '/models#brochure' },
    ],
  },
  {
    label: 'News & Events',
    to: '/news',
    children: [
      { label: 'Latest News', to: '/news#news' },
      { label: 'Educational Series', to: '/news#education' },
      { label: 'Press Releases', to: '/news#press' },
    ],
  },
  { label: 'FAQs', to: '/faqs' },
  {
    label: 'Contact',
    to: '/contact',
    children: [
      { label: 'Contact Us', to: '/contact#contact' },
      { label: 'WhatsApp', to: '/contact#whatsapp' },
      { label: 'Book Test Drive', to: '/contact#test-drive' },
    ],
  },
]

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(null)
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeTimerRef = useRef(null)
  const location = useLocation()

  const isActiveRoute = (to) => {
    const [pathname] = to.split('#')
    return location.pathname === pathname
  }

  const toggleMenu = (label) => {
    setOpenMenu((current) => (current === label ? null : label))
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen((current) => !current)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
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
    setMobileMenuOpen(false)
    setOpenMenu(null)
    setHoveredMenu(null)

    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [location.pathname])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <div className="mx-auto mt-4 flex w-[min(1400px,calc(100%-1rem))] items-center justify-between rounded-md border border-white/15 bg-[#0d1622]/90 px-4 py-3 backdrop-blur md:mt-5 md:w-[min(1400px,calc(100%-2rem))] md:px-6">
        <MotionLink to="/" className="inline-flex items-center gap-3 text-xl font-black tracking-[0.24em] text-white">
          <img src="/saglev-favicon.svg" alt="SAGLEV logo" className="h-8 w-8 rounded-lg shadow-[0_8px_20px_rgba(114,204,46,0.18)]" />
          <span>
            SAG<span className="text-[#72cc2e]">LEV</span>
          </span>
        </MotionLink>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => {
            if (!link.children) {
              return (
                <MotionLink
                  key={link.label}
                  to={link.to}
                  whileHover={{ y: -2, color: '#72cc2e' }}
                  transition={{ duration: 0.15 }}
                  className={`text-sm font-semibold text-white/90 transition ${
                    isActiveRoute(link.to) ? 'text-[#72cc2e]' : ''
                  }`}
                >
                  {link.label}
                </MotionLink>
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
                  <MotionLink
                    to={link.to}
                    whileHover={{ y: -2, color: '#72cc2e' }}
                    transition={{ duration: 0.15 }}
                    className={`text-sm font-semibold text-white/90 transition ${
                      isActiveRoute(link.to) ? 'text-[#72cc2e]' : ''
                    }`}
                  >
                    {link.label}
                  </MotionLink>

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

        <div className="flex items-center gap-2 lg:hidden">
          <motion.button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.94 }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 bg-white/10 text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex"
                >
                  <X size={18} strokeWidth={2.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex"
                >
                  <Menu size={18} strokeWidth={2.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-sm bg-[#72cc2e] px-3 py-2 text-[11px] font-bold tracking-wide text-white"
          >
            RESERVE
          </motion.a>
        </div>

        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="hidden rounded-sm bg-[#72cc2e] px-4 py-2 text-xs font-bold tracking-wide text-white md:px-5 md:text-sm lg:inline-flex"
        >
          RESERVE NOW
        </motion.a>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -12, scaleY: 0.96 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="mx-auto mt-3 w-[min(1400px,calc(100%-1rem))] origin-top rounded-md border border-white/15 bg-[#0d1622]/95 p-3 shadow-2xl backdrop-blur lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => {
                const hasChildren = Boolean(link.children?.length)

                if (!hasChildren) {
                  return (
                    <MotionLink
                      key={link.label}
                      to={link.to}
                      onClick={closeMobileMenu}
                      whileTap={{ scale: 0.98 }}
                      className={`rounded-md px-3 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/8 hover:text-[#72cc2e] ${
                        isActiveRoute(link.to) ? 'text-[#72cc2e]' : ''
                      }`}
                    >
                      {link.label}
                    </MotionLink>
                  )
                }

                const isOpen = openMenu === link.label

                return (
                  <div key={link.label} className="rounded-md border border-white/10 bg-white/5 px-2 py-2">
                    <button
                      type="button"
                      onClick={() => toggleMenu(link.label)}
                      className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-semibold text-white/90"
                    >
                      <span>{link.label}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex text-[#72cc2e]"
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-1 pb-1 pt-1">
                            {link.children.map((child) => (
                              <MotionLink
                                key={child.label}
                                to={child.to}
                                onClick={closeMobileMenu}
                                whileTap={{ scale: 0.98 }}
                                className="rounded-md px-4 py-2 text-xs font-semibold tracking-wide text-white/80 transition hover:bg-white/8 hover:text-[#72cc2e]"
                              >
                                {child.label}
                              </MotionLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
