import SEO from '@/components/SEO';
import { ProcessSection } from '@/components/Sections/ProcessSection';
import { ServicesSection } from '@/components/Sections/ServicesSection'

function Services() {
  return (
    <div>
      <SEO 
        title="Our Services"
        description="K-Links offers a range of value-added services, including technical consultation, custom solutions, training workshops, and reliable logistics to support your project's success."
      />
      <div className="bg-background py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground">Value-added support to ensure your success.</p>
      </div>
      <ServicesSection />
      <ProcessSection />
    </div>
  )
}

export default Services
