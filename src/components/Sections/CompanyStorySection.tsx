import { timelineEvents } from '@/data/timeline';
import { Timeline } from '@/components/ui/timeline';

export function CompanyStorySection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Journey Through Time</h2>
          <p className="mt-4 text-lg text-muted-foreground">From a humble beginning to a nationwide leader in electrical solutions.</p>
        </div>
        <div className="mt-12">
          <Timeline events={timelineEvents} />
        </div>
      </div>
    </section>
  )
}
