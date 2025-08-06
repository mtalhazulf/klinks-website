import { certifications } from '@/data/certifications'

export function CertificationsSection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Commitment to Quality</h2>
          <p className="mt-4 text-lg text-muted-foreground">We adhere to the highest international standards for safety and reliability.</p>
        </div>
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {/* Placeholder for logo */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                    <span className="text-xs font-bold text-gray-600">{cert.name.substring(0, 3)}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
