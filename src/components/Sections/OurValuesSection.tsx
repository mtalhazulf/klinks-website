import { values } from '@/data/values';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function OurValuesSection() {
  return (
    <section className="bg-light-neutral py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
          <p className="mt-4 text-lg text-secondary/80">The principles that guide our work and define our character.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <value.icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary/80">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
