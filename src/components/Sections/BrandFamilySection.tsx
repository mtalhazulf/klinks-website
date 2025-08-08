import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export function BrandFamilySection() {
  return (
    <section className="bg-brand-gray-100/50 py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-brand-charcoal sm:text-4xl">
          One parent. Two strengths.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray-500">
          K-Links powers industry; Mauaa powers everything electric.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* K-Links Card */}
          <Card className="text-left transition-all hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-brand-charcoal">K-Links</CardTitle>
              <CardDescription>Industrial components for automation & control.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link to="/products">View K-Links Products</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Mauaa Card */}
          <Card className="text-left transition-all hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-brand-charcoal">Mauaa</CardTitle>
              <CardDescription>All things electric — reliable, efficient, K-Links quality.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link to="/brands/mauaa">Explore Mauaa</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
