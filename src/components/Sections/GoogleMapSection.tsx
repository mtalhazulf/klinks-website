import { useState, useRef, useEffect } from 'react';
import { companyInfo } from '@/data/company';

export function GoogleMapSection() {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(companyInfo.location)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' } // Load map a little before it enters the viewport
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Find Us Here</h2>
          <p className="mt-4 text-lg text-gray-600">Visit our office for a personal consultation.</p>
        </div>
        <div 
          ref={mapRef} 
          className="mt-12 overflow-hidden rounded-2xl shadow-md h-[300px] md:h-[420px] bg-gray-200 animate-pulse"
        >
          {isMapVisible && (
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="K-Links Location Map"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
}
