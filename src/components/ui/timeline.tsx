interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border" aria-hidden="true"></div>
      <div className="relative flex flex-col gap-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative flex items-center">
            <div className={`flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
              <div className={`w-full max-w-sm rounded-lg bg-card p-4 shadow-md ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <p className="text-sm font-semibold text-primary">{event.year}</p>
                <h3 className="text-lg font-bold text-card-foreground">{event.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary">
              <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
            </div>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
