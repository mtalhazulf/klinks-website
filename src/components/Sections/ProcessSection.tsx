import { processSteps } from '@/data/process';

export function ProcessSection() {
  return (
    <section className="bg-light-neutral py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How We Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A streamlined process to ensure your project's success from start to finish.
          </p>
        </div>
        <div className="relative mt-12">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-8 hidden h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-border md:block"></div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
