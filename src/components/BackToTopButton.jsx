import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.92 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          whileHover={{ y: -2, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#72cc2e]/35 bg-[#0d1622]/92 text-[#72cc2e] shadow-[0_14px_35px_rgba(0,0,0,0.35)] backdrop-blur md:bottom-6 md:right-6"
        >
          <ArrowUp size={18} strokeWidth={2.6} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
