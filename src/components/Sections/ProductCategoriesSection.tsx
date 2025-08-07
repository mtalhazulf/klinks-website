import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { ProductCategory } from '@/data/products';

interface ProductCategoriesSectionProps {
  categories: ProductCategory[];
}

export function ProductCategoriesSection({ categories }: ProductCategoriesSectionProps) {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Card key={category.id} className="flex flex-col overflow-hidden">
              <CardHeader className="relative p-0">
                <img
                  src={category.image} // Will be updated to use WebP
                  alt={category.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
                  <img src="/assets/mauua-logo.svg" alt="Mauua Logo" className="w-8 h-8" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle>{category.title}</CardTitle>
                <CardDescription className="mt-2">{category.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={`/products/${category.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
          {categories.length === 0 && (
            <div className="col-span-full text-center">
              <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
