import { resourcesData } from '@/data/resources';
import { Download } from 'lucide-react';

export function DownloadsLibrary() {
  const { title, description, categories } = resourcesData.otherDocuments;

  return (
    <section className="bg-light-neutral py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="mt-12 space-y-12">
          {categories.map((categoryItem) => (
            <div key={categoryItem.name}>
              <h3 className="text-2xl font-semibold tracking-tight">{categoryItem.name}</h3>
              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {categoryItem.files.map((file) => (
                  <a
                    key={file.name}
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-colors hover:bg-muted/50"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold">{file.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{file.description}</p>
                      <p className="mt-2 text-xs font-medium text-muted-foreground">{file.size}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
