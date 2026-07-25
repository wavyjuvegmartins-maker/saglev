import {
  AboutSection,
  ContactSection,
  FaqSection,
  Hero,
  ModelsSection,
  NewsSection,
  VisionSection,
} from '../components'

export default function HomePage() {
  return (
    <div className="bg-[#0f161d] text-white">
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
