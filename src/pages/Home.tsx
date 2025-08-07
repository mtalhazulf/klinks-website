import { HeroSection } from '@/components/Sections/HeroSection'
import { ValuePropositionSection } from '@/components/Sections/ValuePropositionSection'
import { FeaturedProductsSection } from '@/components/Sections/FeaturedProductsSection'
import SEO from '@/components/SEO';
import { CertificationsSection } from '@/components/Sections/CertificationsSection'
import { TestimonialsSection } from '@/components/Sections/TestimonialsSection'
import { CTASection } from '@/components/Sections/CTASection'

function Home() {
  return (
    <div>
      <SEO 
        title="High-Quality Electrical Components & Solutions"
        description="K-Links is a leading provider of high-quality electrical components, including cable management, thermal management, and industrial automation solutions."
      />
      <HeroSection />
      <ValuePropositionSection />
      <FeaturedProductsSection />
      <CertificationsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default Home
