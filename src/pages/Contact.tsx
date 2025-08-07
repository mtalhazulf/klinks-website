import SEO from '@/components/SEO';
import { ContactDetailsSection } from '@/components/Sections/ContactDetailsSection'
import { ContactForm } from '@/components/Forms/ContactForm'
import { GoogleMapSection } from '@/components/Sections/GoogleMapSection'

function Contact() {
  return (
    <div>

      <SEO
        title="Contact K-Links | Electrical Components & Support"
        description="Get in touch with K-Links for product inquiries, technical support, and quotes. Lahore, Pakistan."
      />
      

      <ContactDetailsSection />
      <GoogleMapSection />
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Send us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
