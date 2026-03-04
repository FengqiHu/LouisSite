import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import SiteShell from './components/SiteShell'
import { trackVisit } from './lib/trackVisit'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

let hasTrackedVisit = false

export default function App() {
  useEffect(() => {
    if (hasTrackedVisit) {
      return
    }

    hasTrackedVisit = true
    void trackVisit()
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="route-loading" role="status" aria-live="polite">
            Loading page...
          </div>
        }
      >
        <Routes>
          <Route element={<SiteShell />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
