import { HeroSection } from '@/components/Sections/HeroSection'
import { ValuePropositionSection } from '@/components/Sections/ValuePropositionSection'
import { FeaturedProductsSection } from '@/components/Sections/FeaturedProductsSection'
import { CertificationsSection } from '@/components/Sections/CertificationsSection'
import { TestimonialsSection } from '@/components/Sections/TestimonialsSection'
import { CTASection } from '@/components/Sections/CTASection'

function Home() {
  return (
    <div>
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
