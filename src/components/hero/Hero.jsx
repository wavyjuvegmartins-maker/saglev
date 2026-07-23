import heroBackground from '../../sag2.jpg'
import HeroContent from './HeroContent'
import HeroMedia from './HeroMedia'

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={heroBackground}
        alt="SAGLEV hero background"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,14,20,0.88)_0%,rgba(10,14,20,0.5)_45%,rgba(10,14,20,0.8)_100%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] items-center px-6 pb-24 pt-36 lg:px-16 lg:pt-40">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <HeroContent />
          <HeroMedia />
        </div>
      </div>
    </section>
  )
}
