import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const productCategories = [
  { name: 'Wiring Devices', description: 'Switches, outlets, and more.', link: '/contact?subject=Wiring+Devices' },
  { name: 'Sockets & Plugs', description: 'Durable and safe solutions.', link: '/contact?subject=Sockets' },
  { name: 'Lighting', description: 'Efficient LED fixtures.', link: '/contact?subject=Lighting' },
  { name: 'Accessories', description: 'Essential electrical components.', link: '/contact?subject=Accessories' },
];

function MauaaPage() {
  return (
    <>
      <SEO
        title="Mauaa — Everything Electric, by K-Links"
        description="From switches to lighting and accessories — engineered with K-Links reliability. Explore the Mauaa range of electrical products."
      />
      <div className="bg-brand-white py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-brand-charcoal sm:text-5xl">
            Mauaa — Everything Electric, by K-Links.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-gray-500">
            From switches to lighting and accessories — engineered with K-Links reliability.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <Card key={category.name} className="text-left transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-500">{category.description}</p>
                <Button asChild variant="link" className="p-0 mt-4">
                  <Link to={category.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-brand-gray-100/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-brand-charcoal">Ready to get started?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact?subject=Quote+Request">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact?subject=Expert+Consultation">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MauaaPage;
