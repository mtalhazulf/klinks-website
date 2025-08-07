export const resourcesData = {
  hero: {
    title: 'Resources',
    description: 'Your central hub for technical documents, product catalogs, and answers to common questions.',
    image: '/assets/images/k-links-relay-bank-and-plc-io-panel.jpg',
  },
  mainCatalogue: {
    title: 'Full Product Catalog 2024',
    description: 'The complete collection of our products, including detailed specifications and application guides. Download the latest version to stay up-to-date.',
    url: '/docs/product_catalogue.pdf',
    size: '15.2 MB',
    image: '/assets/images/k-links-mcc-switchgear-lineup-in-electrical-room.jpg',
  },
  otherDocuments: {
    title: 'Additional Documents',
    description: 'Access our corporate brochures and quality certifications.',
    categories: [
      {
        name: 'Brochures',
        files: [
          {
            name: 'Corporate Brochure',
            description: 'An overview of K-Links, our mission, values, and commitment to quality.',
            url: '/downloads/k-links-corporate-brochure.pdf',
            size: '3.1 MB',
          },
          {
            name: 'Cable Management Solutions',
            description: 'A detailed look at our innovative cable management products.',
            url: '/downloads/k-links-cable-management-brochure.pdf',
            size: '4.8 MB',
          },
        ],
      },
      {
        name: 'Certifications',
        files: [
          {
            name: 'ISO 9001:2015 Certificate',
            description: 'Our official ISO 9001:2015 quality management system certification.',
            url: '/downloads/k-links-iso-9001-certificate.pdf',
            size: '1.2 MB',
          },
        ],
      },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about our products, services, and policies.',
    items: [
      {
        question: 'What types of products do you offer?',
        answer: 'We offer a comprehensive range of high-quality electrical components, including cable management solutions like PVC ducts and wiring channels, thermal management products like panel fans and filters, and various other electrical accessories. Explore our Products page for the full catalog.',
      },
      {
        question: 'Are your products certified?',
        answer: 'Yes, quality and safety are our top priorities. Many of our products are certified and compliant with international standards such as UL, CE, and RoHS. You can find specific certification details on individual product pages and in our Downloads section.',
      },
      {
        question: 'Do you offer custom solutions?',
        answer: 'Absolutely. We understand that standard products don\'t always fit unique requirements. Our engineering team specializes in providing custom solutions and component modifications. Contact us to discuss your specific needs.',
      },
      {
        question: 'What is your standard delivery time?',
        answer: 'Delivery times vary based on product availability and your location. We strive to process and ship orders as quickly as possible. For specific delivery estimates, please contact our sales team when placing your order.',
      },
    ],
  },
};
