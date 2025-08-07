import { ShieldCheck, Package, Wrench } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const valueProps = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Quality',
    description: 'We provide products that meet the highest international standards of safety and reliability, ensuring long-lasting performance.',
  },
  {
    icon: <Package className="h-10 w-10 text-primary" />,
    title: 'Product Range',
    description: 'From cable management to industrial automation, our diverse inventory caters to all your electrical needs.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Technical Support',
    description: 'Our experienced team is always ready to provide technical guidance and help you find the perfect solution for your project.',
  },
]

export function ValuePropositionSection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose K-Links?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Your trusted partner in electrical excellence.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {valueProps.map((prop) => (
            <Card key={prop.title} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {prop.icon}
                </div>
                <CardTitle className="mt-4">{prop.title}</CardTitle>
                <CardDescription className="mt-2">{prop.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
