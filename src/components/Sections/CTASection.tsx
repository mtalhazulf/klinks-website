import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function CTASection() {
  return (
    <section className="bg-primary py-12 text-primary-foreground sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Have a Project in Mind?
        </h2>
        <p className="mt-4 text-lg">
          Let’s discuss your requirements.
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
