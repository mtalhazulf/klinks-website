import { useMemo, useState } from 'react';
import SEO from '@/components/SEO';
import { ProductCategoriesSection } from '@/components/Sections/ProductCategoriesSection';
import { productCategories } from '@/data/products';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const allApplications = [
  'All',
  ...Array.from(new Set(productCategories.flatMap(p => p.applications))),
];

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApplication, setSelectedApplication] = useState('All');

  const filteredCategories = useMemo(() => {
    return productCategories.filter(category => {
      const matchesSearchTerm = category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesApplication = selectedApplication === 'All' || category.applications.includes(selectedApplication);
      return matchesSearchTerm && matchesApplication;
    });
  }, [searchTerm, selectedApplication]);

  return (
    <div>
      <SEO 
        title="Our Products"
        description="Explore our comprehensive range of high-quality electrical components, including PVC cable ducts, panel fans, wiring channels, and more. Find the perfect solution for your project."
      />
      <div className="bg-light-neutral py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Products</h1>
        <p className="mt-4 text-lg text-secondary/80">A comprehensive range of high-quality electrical components.</p>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Input
              type="search"
              placeholder="Search by product name or description..."
              className="w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <span className="font-medium shrink-0">Filter by Application:</span>
            <ToggleGroup
              type="single"
              defaultValue="All"
              value={selectedApplication}
              onValueChange={(value) => value && setSelectedApplication(value)}
              className="flex-wrap justify-start"
            >
              {allApplications.map(app => (
                <ToggleGroupItem key={app} value={app} aria-label={`Filter by ${app}`}>
                  {app}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>
        <ProductCategoriesSection categories={filteredCategories} />
      </div>
    </div>
  );
}

export default Products;
