import { AnimatePresence } from 'framer-motion'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import PageSkeleton from './components/layout/PageSkeleton'
import { ActionFeedbackProvider } from './context/ActionFeedbackProvider'
import { ActiveSectionProvider } from './context/ActiveSectionProvider'
import About from './components/sections/About'
import Features from './components/sections/Features'
import Hero from './components/sections/Hero'
import HowItWorks from './components/sections/HowItWorks'
import Pricing from './components/sections/Pricing'
import Testimonials from './components/sections/Testimonials'
import { useInitialPageLoad } from './hooks/useInitialPageLoad'
import { useScrollRestoration } from './hooks/useScrollRestoration'

function App() {
  const isInitialLoading = useInitialPageLoad()
  useScrollRestoration(!isInitialLoading)

  return (
    <>
      <ActionFeedbackProvider>
        <ActiveSectionProvider>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Features />
            <HowItWorks />
            <Testimonials />
            <Pricing />
          </main>
          <Footer />
        </ActiveSectionProvider>
      </ActionFeedbackProvider>

      <AnimatePresence>
        {isInitialLoading && <PageSkeleton key="page-skeleton" />}
      </AnimatePresence>
    </>
  )
}

export default App
