import { cn } from '@/lib/utils';

interface BrandPillProps {
  className?: string;
  children: React.ReactNode;
}

export function BrandPill({ className, children }: BrandPillProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-x-2 rounded-full bg-brand-gray-100 px-4 py-1.5 text-sm font-medium text-brand-charcoal',
        className
      )}
    >
      <span className="h-2 w-2 rounded-full bg-brand-teal"></span>
      <span>{children}</span>
    </div>
  );
}
