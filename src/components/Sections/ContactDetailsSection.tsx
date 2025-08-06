import { companyInfo } from '@/data/company'
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactDetailsSection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Our Address</h3>
              <p className="text-muted-foreground">{companyInfo.location}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <ul className="text-muted-foreground">
                {companyInfo.phoneNumbers.map((phone) => (
                  <li key={phone}>
                    <a href={`tel:${phone.replace(/\s|-/g, '')}`} className="hover:text-primary">
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <a href={`mailto:${companyInfo.email}`} className="text-muted-foreground hover:text-primary">
                {companyInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
