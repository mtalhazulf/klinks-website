export function GoogleMapSection() {
  const mapSrc = "https://maps.google.com/maps?q=K-Links%2C%208%2F26%2C%20Ghalib%20Street%20No.20%2C%20Barkat%20Ali%20Road%2C%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Find Us Here</h2>
          <p className="mt-4 text-lg text-muted-foreground">Visit our office for a personal consultation.</p>
        </div>
        <div className="mt-12 overflow-hidden rounded-lg shadow-lg">
          <iframe
            src={mapSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
