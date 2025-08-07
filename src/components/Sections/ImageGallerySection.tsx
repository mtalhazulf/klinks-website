import { galleryImages } from '@/data/gallery';

export function ImageGallerySection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A Glimpse Into K-Links</h2>
          <p className="mt-4 text-lg text-secondary/80">Showcasing our facilities, team, and commitment to quality.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {galleryImages.map((image) => (
            <div key={image.src} className="group relative overflow-hidden rounded-lg">
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-full items-end p-4">
                  <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
