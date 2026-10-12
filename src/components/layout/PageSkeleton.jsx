import { motion } from 'framer-motion'

function Bone({ className = '' }) {
  return <div className={`skeleton-shimmer rounded-lg bg-ivory-dark/80 ${className}`} />
}

export default function PageSkeleton() {
  return (
    <motion.div
      role="status"
      aria-label="Loading page"
      aria-busy="true"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[500] overflow-hidden bg-ivory"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="space-y-2">
            <Bone className="h-7 w-32" />
            <Bone className="h-2 w-16" />
          </div>
          <div className="hidden gap-6 lg:flex">
            <Bone className="h-3 w-14" />
            <Bone className="h-3 w-16" />
            <Bone className="h-3 w-20" />
            <Bone className="h-3 w-14" />
            <Bone className="h-3 w-20" />
          </div>
          <Bone className="hidden h-9 w-28 rounded-full lg:block" />
        </div>

        <div className="mt-8 grid flex-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-5">
            <Bone className="h-3 w-40" />
            <Bone className="h-12 w-full max-w-xl" />
            <Bone className="h-12 w-full max-w-lg" />
            <Bone className="h-4 w-full max-w-md" />
            <Bone className="h-4 w-full max-w-sm" />
            <div className="flex gap-3 pt-2">
              <Bone className="h-10 w-36 rounded-full" />
              <Bone className="h-10 w-28 rounded-full" />
            </div>
          </div>
          <div className="hidden justify-center sm:flex">
            <Bone className="aspect-[4/5] w-full max-w-[360px] rounded-2xl" />
          </div>
        </div>

        <div className="pb-8 pt-6">
          <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold/70" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted">Loading AURELLE</span>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold/70" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
