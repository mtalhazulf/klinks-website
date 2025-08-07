import { certifications } from '@/data/certifications'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function CertificationsSection() {
  return (
    <section className="bg-light-neutral py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Commitment to Quality</h2>
          <p className="mt-4 text-lg text-secondary/80">We adhere to the highest international standards for safety and reliability.</p>
        </div>
        <div className="mt-12">
          <TooltipProvider>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {certifications.map((cert) => (
                <Tooltip key={cert.name}>
                  <TooltipTrigger asChild>
                    <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-lg bg-white p-2 text-center shadow-md transition-transform hover:scale-110 md:h-24 md:w-24">
                      <img src={cert.image} alt={cert.name} className="h-12 w-12" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">{cert.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  )
}
