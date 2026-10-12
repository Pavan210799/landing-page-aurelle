import { AnimatePresence, motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { createContext, useCallback, useContext, useRef, useState } from 'react'

const ActionFeedbackContext = createContext(null)

export function ActionFeedbackProvider({ children }) {
  const [toast, setToast] = useState(null)
  const hideTimer = useRef(null)

  const notify = useCallback((message, duration = 2400) => {
    if (!message) return
    if (hideTimer.current) clearTimeout(hideTimer.current)
    setToast({ message, key: Date.now() })
    hideTimer.current = setTimeout(() => setToast(null), duration)
  }, [])

  return (
    <ActionFeedbackContext.Provider value={notify}>
      {children}
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.key}
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed bottom-6 left-1/2 z-[200] flex max-w-[min(92vw,360px)] -translate-x-1/2 items-center gap-3 rounded-full border border-gold/25 bg-charcoal/90 px-5 py-3 text-sm text-ivory shadow-xl shadow-charcoal/30 backdrop-blur-md"
          >
            <Loader2 className="h-4 w-4 shrink-0 animate-spin text-gold-light" aria-hidden />
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </ActionFeedbackContext.Provider>
  )
}

export function useActionFeedback() {
  const notify = useContext(ActionFeedbackContext)
  if (!notify) {
    return () => {}
  }
  return notify
}
