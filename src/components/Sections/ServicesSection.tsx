import { BrainCircuit, Wrench, LifeBuoy } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const services = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Technical Consultation',
    description: 'Our expert engineers provide in-depth technical guidance to help you select the right components and optimize your system design for performance and efficiency.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Custom Solutions',
    description: 'We offer tailored solutions and component modifications to meet the unique requirements of your projects, ensuring a perfect fit for your application.',
  },
  {
    icon: <LifeBuoy className="h-10 w-10 text-primary" />,
    title: 'After-Sales Support',
    description: 'Our commitment to you continues after your purchase. We provide comprehensive after-sales support, including troubleshooting, and warranty services.',
  },
]

export function ServicesSection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {service.icon}
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
