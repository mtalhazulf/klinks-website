import { ProductCategoriesSection } from '@/components/Sections/ProductCategoriesSection'

function Products() {
  return (
    <div>
      <div className="bg-background py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Products</h1>
        <p className="mt-4 text-lg text-muted-foreground">A comprehensive range of high-quality electrical components.</p>
      </div>
      <ProductCategoriesSection />
    </div>
  )
}

export default Products
