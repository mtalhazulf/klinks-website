import { useParams, Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { productCategories } from '@/data/products';
import { Button } from '@/components/ui/button';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Download, ShieldCheck } from 'lucide-react';
import { certifications as allCertifications } from '@/data/certifications';



function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const product = productCategories.find((p) => p.id === productId);

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
    );
  }

  return (
    <div>
      <SEO title={`${product.title} | K-Links`} description={product.description} />

      {/* Hero Section */}
      <section className="bg-light-neutral">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-16 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg font-semibold text-primary">Mauua by K-Links</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{product.title}</h1>
            {product.certifications && product.certifications.length > 0 && (
              <div className="flex flex-wrap items-center gap-4">
                {product.certifications.map((certName) => {
                  const certData = allCertifications.find(c => c.name === certName);
                  return (
                    <div key={certName} className="flex items-center gap-2 bg-muted p-2 rounded-lg" title={certData?.description}>
                      {certData?.image ? (
                        <img src={certData.image} alt={`${certData.name} logo`} className="h-8 object-contain" />
                      ) : (
                        <ShieldCheck className="w-5 h-5 text-green-500" />
                      )}
                      <span className="text-sm font-medium">{certName}</span>
                    </div>
                  );
                })}
              </div>
            )}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg">
                <Link to="/contact">Request Quote</Link>
              </Button>
              {product.datasheetUrl && (
                <Button asChild variant="outline" size="lg">
                  <a href={product.datasheetUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download Datasheet
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div>
            <picture>
              {product.image_webp && <source srcSet={product.image_webp} type="image/webp" />}
              {product.image_jpg && <source srcSet={product.image_jpg} type="image/jpeg" />}
              <img
                src={product.image} // Fallback
                alt={product.title}
                className="w-full rounded-lg object-cover shadow-xl aspect-video"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="container mx-auto px-4 py-16">
        <TabsPrimitive.Root defaultValue="overview" className="w-full">
          <TabsPrimitive.List className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2 sm:grid-cols-4">
            <TabsPrimitive.Trigger value="overview" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Overview</TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger value="specifications" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Specifications</TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger value="downloads" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Downloads</TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger value="faqs" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">FAQs</TabsPrimitive.Trigger>
          </TabsPrimitive.List>

          <TabsPrimitive.Content value="overview" className="pt-8">
            <h2 className="text-2xl font-bold">Product Overview</h2>
            <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
            {product.features && product.features.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ShieldCheck className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </TabsPrimitive.Content>

          <TabsPrimitive.Content value="specifications" className="pt-8">
            <h2 className="text-2xl font-bold">Technical Specifications</h2>
            {product.specifications && product.specifications.length > 0 ? (
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
            ) : (
              <p className="mt-4 text-muted-foreground">No specifications available for this product.</p>
            )}
          </TabsPrimitive.Content>

          <TabsPrimitive.Content value="downloads" className="pt-8">
            <h2 className="text-2xl font-bold">Downloads</h2>
            {product.downloads && product.downloads.length > 0 ? (
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
            ) : (
              <p className="mt-4 text-muted-foreground">No downloadable documents available for this product.</p>
            )}
          </TabsPrimitive.Content>

          <TabsPrimitive.Content value="faqs" className="pt-8">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            {product.faqs && product.faqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full mt-4">
                {product.faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <p className="mt-4 text-muted-foreground">No frequently asked questions available for this product.</p>
            )}
          </TabsPrimitive.Content>
        </TabsPrimitive.Root>
      </section>
    </div>
  );
}

export default ProductDetail;
