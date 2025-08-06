export function CompanyStorySection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <img
              src="/assets/company/about-us.jpg" // Placeholder image
              alt="K-Links Team or Facility"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Founded on the principles of quality, reliability, and innovation, K-Links has grown from a small local supplier to a leading provider of electrical components in Pakistan. Our journey is one of commitment—to our customers, our partners, and the industries we serve.
            </p>
            <p className="mt-4 text-muted-foreground">
              We believe in building lasting relationships by consistently delivering products that exceed expectations. Our mission is to empower businesses with electrical solutions that are not only high-performing but also safe and sustainable. We are dedicated to driving progress and setting new standards of excellence in the electrical industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
