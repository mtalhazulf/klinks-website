import SEO from '@/components/SEO';
import { ContactDetailsSection } from '@/components/Sections/ContactDetailsSection'
import { ContactForm } from '@/components/Forms/ContactForm'
import { GoogleMapSection } from '@/components/Sections/GoogleMapSection'

function Contact() {
  return (
    <div>
      <SEO 
        title="Contact Us"
        description="Get in touch with the K-Links team. We're here to help with your questions, inquiries, and technical support needs. Find our address, phone, and email."
      />
      <div className="bg-background py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">We're here to help. Reach out to us with any questions or inquiries.</p>
      </div>
      <ContactDetailsSection />
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Send us a Message</h2>
          <ContactForm />
        </div>
      </div>
      <GoogleMapSection />
    </div>
  )
}

export default Contact
