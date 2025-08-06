import { useParams, Link } from 'react-router-dom'
import { productCategories } from '@/data/products'
import { Button } from '@/components/ui/button'

function ProductDetail() {
  const { productId } = useParams<{ productId: string }>()
  const product = productCategories.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold">Product Not Found</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The product you are looking for does not exist.
        </p>
        <Button asChild className="mt-8">
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg object-cover shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{product.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Key Applications</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              {product.applications.map((app) => (
                <li key={app}>{app}</li>
              ))}
            </ul>
          </div>

          <Button asChild className="mt-10">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
