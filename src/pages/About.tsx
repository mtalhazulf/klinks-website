import SEO from '@/components/SEO';
import { CompanyStorySection } from '@/components/Sections/CompanyStorySection'
import { OurValuesSection } from '@/components/Sections/OurValuesSection'
import { ImageGallerySection } from '@/components/Sections/ImageGallerySection'

function About() {
  return (
    <div>
      <SEO 
        title="Our Story & Values"
        description="Learn about K-Links' history, our commitment to quality and innovation, and the core values that drive our success in the electrical components industry."
      />
      <div
        className="relative flex h-80 items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/assets/about/factory.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About K-Links</h1>
          <p className="mt-4 text-lg text-gray-200">Your Trusted Partner in Electrical Excellence</p>
        </div>
      </div>
      <CompanyStorySection />
      <OurValuesSection />
      <ImageGallerySection />
    </div>
  )
}

export default About;
