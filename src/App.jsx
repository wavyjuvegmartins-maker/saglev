import {
  AboutSection,
  ContactSection,
  FaqSection,
  Hero,
  ModelsSection,
  Nav,
  NewsSection,
  VisionSection,
} from './components'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f161d] text-white">
      <Nav />
      <Hero />
      <AboutSection />
      <VisionSection />
      <ModelsSection />
      <NewsSection />
      <FaqSection />
      <ContactSection />
    </div>
  )
}
