import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BrandPill } from '@/components/ui/BrandPill';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const slides = [
  {
    image: '/assets/homepage/banner.jpeg',
    alt: 'Industrial components—cable ducts, panel fans, and control relays—on a clean studio background.',
    pill: 'K-Links Industrial',
    title: 'Empowering Industries with Quality Electrical Solutions',
    description: 'Your trusted partner for high-performance electrical components — from cable management to industrial automation.',
    cta1_text: 'Explore K-Links Products',
    cta1_link: '/products',
    cta2_text: 'Download Catalogue',
    cta2_link: '/klinks_product_catalogue.pdf',
  },
  {
    image: '/assets/homepage/banner.jpeg',
    alt: 'Mauaa selection of everyday electrical products arranged on a light background.',
    pill: 'NEW — Meet Mauaa',
    title: 'Mauaa: Everything Electric, by K-Links',
    description: 'From switches to lighting and accessories — engineered with K-Links reliability for everyday needs.',
    cta1_text: 'Explore Mauaa',
    cta1_link: '/brands/mauaa',
    cta2_text: 'Talk to an Expert',
    cta2_link: '/contact?subject=Mauaa+Expert',
  },
  {
    image: '/assets/homepage/banner.jpeg',
    alt: 'Split visual showing K-Links industrial components and Mauaa everyday electrical products.',
    pill: 'One Parent. Two Strengths.',
    title: 'K-Links & Mauaa: The Best of Both Worlds',
    description: 'Industrial-grade components and everyday electricals, united by a commitment to quality.',
    cta1_text: 'Discover Our Brands',
    cta1_link: '/about',
    cta2_text: 'Request a Quote',
    cta2_link: '/contact?subject=General+Quote',
  },
];

export function HeroSection() {
  return (
    <Carousel className="relative w-full" opts={{ loop: true }}>
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[80vh] min-h-[500px] text-white">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/70 via-brand-teal/50 to-brand-charcoal/80" />
              </div>
              <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center">
                <BrandPill className="mb-4">{slide.pill}</BrandPill>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-6 text-lg text-gray-200 md:text-xl">
                  {slide.description}
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg">
                    <Link to={slide.cta1_link}>{slide.cta1_text}</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-brand-teal">
                    <a href={slide.cta2_link} download={slide.cta2_link.includes('.pdf')}>
                      {slide.cta2_text}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20" />
    </Carousel>
  );
}
