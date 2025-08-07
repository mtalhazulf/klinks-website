import SEO from '@/components/SEO';
import { resourcesData } from '@/data/resources';
import { DownloadsLibrary } from '@/components/Sections/DownloadsLibrary';
import { FaqSection } from '@/components/Sections/FaqSection';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

function Resources() {
  const { hero, mainCatalogue } = resourcesData;

  return (
    <div>
      <SEO 
        title={hero.title}
        description={hero.description}
      />
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-24 sm:py-32 lg:py-40"
        style={{ backgroundImage: `url(${hero.image})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{hero.title}</h1>
          <p className="mt-6 text-lg max-w-3xl mx-auto">{hero.description}</p>
        </div>
      </section>

      {/* Main Catalogue Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 rounded-lg bg-card p-8 shadow-lg md:grid-cols-2 lg:p-12">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{mainCatalogue.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{mainCatalogue.description}</p>
              <Button asChild size="lg" className="mt-8">
                <a href={mainCatalogue.url} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Now ({mainCatalogue.size})
                </a>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={mainCatalogue.image} 
                alt={mainCatalogue.title} 
                className="w-full h-auto rounded-lg object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Downloads */}
      <DownloadsLibrary />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}

export default Resources;
