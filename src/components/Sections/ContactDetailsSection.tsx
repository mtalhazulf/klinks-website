import { companyInfo } from '@/data/company'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import { Button } from '../ui/button'

const contactCards = [
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: 'Our Address',
    content: (
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.location)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary"
      >
        {companyInfo.location}
      </a>
    ),
  },
  {
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: 'Phone',
    content: (
      <ul>
        {companyInfo.phoneNumbers.map((phone) => (
          <li key={phone}>
            <a href={`tel:${phone.replace(/\s|-/g, '')}`} className="hover:text-primary">
              {phone}
            </a>
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: 'Email',
    content: (
      <a href={`mailto:${companyInfo.email}`} className="hover:text-primary">
        {companyInfo.email}
      </a>
    ),
  },
]

export function ContactDetailsSection() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{card.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <div className="text-muted-foreground">{card.content}</div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center rounded-2xl bg-white p-6 shadow-sm md:col-span-2 lg:col-span-1">
            <div className="text-center">
                <h3 className="mb-3 text-lg font-semibold">Need a quick answer?</h3>
                <Button asChild className="w-full">
                    <a href="https://wa.me/923336737921?text=Hello%20K-Links%2C%20I’d%20like%20to%20…" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-2 h-5 w-5" /> Chat on WhatsApp
                    </a>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
