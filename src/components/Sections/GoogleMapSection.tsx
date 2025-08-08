import { useState, useRef, useEffect } from 'react';

export function GoogleMapSection() {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const q = encodeURIComponent(`K-Links Siddique Market, 9 Nishter Rd, Naulakha, Lahore, 54000, Pakistan`);
  const mapSrc = `https://www.google.com/maps?q=${q}&z=17&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${q}`;

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsMapVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIsMapVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );
    const el = mapRef.current;
    if (el) io.observe(el);
    return () => { if (el) io.unobserve(el); io.disconnect(); };
  }, []);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Find Us Here</h2>
          <p className="mt-4 text-lg text-gray-600">Visit our office for a personal consultation.</p>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-6 items-center rounded-lg bg-primary px-5 py-2.5 text-white font-medium shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Open in Google Maps
          </a>
        </div>

        <div
          ref={mapRef}
          className="mt-12 overflow-hidden rounded-2xl shadow-md h-[300px] md:h-[420px] bg-gray-200 motion-safe:animate-pulse"
          aria-label="Map showing K-Links location"
        >
          {isMapVisible && (
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="K-Links Location Map"
            />
          )}
        </div>

        <noscript>
          <p className="mt-4 text-center">
            Map unavailable without JavaScript.{' '}
            <a href={mapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>.
          </p>
        </noscript>
      </div>
    </section>
  );
}
