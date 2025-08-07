import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function HeroSection() {
  return (
    <section
      className="relative flex h-[80vh] min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat text-center text-white"
      style={{ backgroundImage: "url('/assets/hero/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Empowering Industries with Quality Electrical Solutions
        </h1>
        <p className="mt-6 text-lg text-gray-200 md:text-xl">
          Your trusted partner for high-performance electrical components — from cable management to industrial automation.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/products">Explore Products</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary">
            <a href="/klinks_product_catalogue.pdf" download>
              Download Catalogue
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
