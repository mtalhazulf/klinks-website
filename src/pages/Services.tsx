import { ServicesSection } from '@/components/Sections/ServicesSection'

function Services() {
  return (
    <div>
      <div className="bg-background py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground">Value-added support to ensure your success.</p>
      </div>
      <ServicesSection />
    </div>
  )
}

export default Services
