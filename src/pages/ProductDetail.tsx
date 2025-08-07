import { useParams, Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { Download } from 'lucide-react';
import { productCategories } from '@/data/products';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';

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
    <div>
      <SEO 
        title={product.title}
        description={product.description}
      />
      <div className="container mx-auto py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
        <div className="space-y-8">
          {/* Main Product Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg object-cover shadow-lg"
          />
          {/* Image Gallery */}
          {product.gallery && product.gallery.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Gallery</h2>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {product.gallery.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`${product.title} - image ${index + 1}`}
                    className="w-full h-auto rounded-lg object-cover shadow-md transition-transform hover:scale-105"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{product.title}</h1>
          <p className="text-lg text-muted-foreground">{product.description}</p>

          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>

      {/* Detailed Information Sections */}
      <div className="mt-16 space-y-12">
        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Key Features</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Specifications */}
        {product.specifications && product.specifications.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Technical Specifications</h2>
            <div className="mt-4 rounded-lg border">
              <Table>
                <TableBody>
                  {product.specifications.map((spec) => (
                    <TableRow key={spec.name}>
                      <TableCell className="font-medium">{spec.name}</TableCell>
                      <TableCell>{spec.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        {/* Downloads */}
        {product.downloads && product.downloads.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Downloads</h2>
            <div className="mt-4 space-y-3">
              {product.downloads.map((file) => (
                <a
                  key={file.name}
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-md border p-4 transition-colors hover:bg-muted/50"
                >
                  <Download className="h-5 w-5 text-primary" />
                  <span className="font-medium">{file.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default ProductDetail
