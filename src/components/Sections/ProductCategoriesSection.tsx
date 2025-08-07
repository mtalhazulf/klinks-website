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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.id} className="flex flex-col overflow-hidden">
              <CardHeader>
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-48 w-full object-cover"
                />
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
