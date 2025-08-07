import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { productCategories } from '@/data/products'

export function FeaturedProductsSection() {
  // Displaying only the first 3 categories as featured
  const featuredCategories = productCategories.slice(0, 9)

  return (
    <section className="bg-background/80 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">Explore our wide range of high-quality electrical components.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCategories.map((category) => (
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
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
