import { HeroSection } from '@/components/Sections/HeroSection'
import { ValuePropositionSection } from '@/components/Sections/ValuePropositionSection'
import { FeaturedProductsSection } from '@/components/Sections/FeaturedProductsSection';
import { BrandFamilySection } from '@/components/Sections/BrandFamilySection';
import SEO from '@/components/SEO';
import { CertificationsSection } from '@/components/Sections/CertificationsSection'
import { TestimonialsSection } from '@/components/Sections/TestimonialsSection'
import { CTASection } from '@/components/Sections/CTASection'

function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "K-Links",
    "url": "https://www.k-links.com",
    "logo": "https://www.k-links.com/logo-nobg.png",
    "brand": {
      "@type": "Brand",
      "name": "Mauaa",
      "url": "https://www.k-links.com/brands/mauaa"
    }
  };

  return (
    <div>
      <SEO 
        title="K-Links & Mauaa: Industrial & Electrical Solutions"
        description="K-Links offers high-quality industrial components. Introducing Mauaa, our new sub-brand for all things electric. Quality and reliability for every need."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <HeroSection />
      <ValuePropositionSection />
      <FeaturedProductsSection />
      <BrandFamilySection />
      <CertificationsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default Home
