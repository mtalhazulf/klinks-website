import { testimonials } from '@/data/testimonials'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function TestimonialsSection() {
  return (
    <section className="bg-light-neutral py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-secondary/80">Building trust with every component we deliver.</p>
        </div>
        <Carousel className="mt-12">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="md:basis-1/2">
                <div className="p-4">
                  <Card>
                    <CardContent className="flex h-[250px] flex-col justify-center p-6">
                      <blockquote className="text-lg italic text-secondary">
                        <p>"{testimonial.quote}"</p>
                      </blockquote>
                      <footer className="mt-4">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-secondary/80">{testimonial.title}</p>
                      </footer>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
