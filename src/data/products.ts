export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  applications: string[];
  specifications?: { name: string; value: string }[];
  features?: string[];
  certifications?: string[];
  downloads?: { name: string; url: string }[];
  gallery?: string[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'cable-ducts',
    title: 'PVC Cable Ducts',
    description: 'High-quality PVC cable ducts for organizing and protecting electrical wiring in industrial and commercial applications. Our ducts are made from high-impact, self-extinguishing rigid PVC, ensuring long-lasting durability and safety.',
    image: '/assets/products/cable-duct.jpg',
    applications: ['Panel Building', 'Industrial Automation', 'Commercial Buildings'],
    specifications: [
      { name: 'Material', value: 'Rigid PVC, self-extinguishing' },
      { name: 'Operating Temperature', value: '-5°C to +60°C' },
      { name: 'Standard Color', value: 'Grey (RAL 7030)' },
      { name: 'Certifications', value: 'UL, CE, RoHS' },
      { name: 'Standard Length', value: '2 meters' },
    ],
    features: [
      'Easy to install with snap-on cover',
      'Wide range of sizes available',
      'Smooth edges to prevent wire damage',
      'High impact and flame resistance',
      'Pre-punched mounting holes',
    ],
    certifications: ['iso-9001', 'ul-listed', 'ce-marking'],
    downloads: [
      { name: 'Datasheet - PVC Cable Ducts', url: '/downloads/datasheet-cable-ducts.pdf' },
      { name: 'Installation Guide', url: '/downloads/install-guide-cable-ducts.pdf' },
    ],
    gallery: [
      '/assets/products/cable-duct.jpg',
      '/assets/gallery/products-showcase.jpg',
      '/assets/gallery/facility-1.jpg',
    ],
  },
  {
    id: 'panel-fans',
    title: 'Panel Fans & Louvers',
    description: 'Efficient cooling solutions to protect sensitive components.',
    image: '/assets/products/panel-fans.jpg',
    applications: ['Enclosures', 'Server Racks', 'Control Cabinets'],
  },
  {
    id: 'control-relays',
    title: 'Control Relays',
    description: 'Reliable relays for various industrial control applications.',
    image: '/assets/products/control-relays.jpg',
    applications: ['Motor Control', 'Lighting Control', 'Automation Systems'],
  },
  {
    id: 'digital-panel-meters',
    title: 'Digital Panel Meters',
    description: 'Precise digital meters for accurate electrical measurements.',
    image: '/assets/products/digital-panel-meters.jpg',
    applications: ['Power Monitoring', 'Process Control', 'Energy Management'],
  },
  {
    id: 'selector-switches',
    title: 'Selector Switches',
    description: 'Durable switches for selecting machine operations.',
    image: '/assets/products/selector-switches.jpg',
    applications: ['Industrial Machinery', 'Control Panels', 'HVAC Systems'],
  },
  {
    id: 'changeover-switches',
    title: 'Changeover Switches',
    description: 'Reliable switches for transferring loads between power sources.',
    image: '/assets/products/changeover-switches.jpg',
    applications: ['Backup Power', 'Generator Sets', 'Distribution Boards'],
  },
  {
    id: 'indication-lights',
    title: 'Indication Lights',
    description: 'Bright and clear indicators for equipment status.',
    image: '/assets/products/indication-lights.jpg',
    applications: ['Control Panels', 'Safety Systems', 'Operator Consoles'],
  },
  {
    id: 'push-buttons',
    title: 'Push Buttons',
    description: 'Robust push buttons for manual control operations.',
    image: '/assets/products/push-buttons.jpg',
    applications: ['Emergency Stops', 'Start/Stop Controls', 'Automation'],
  },
  {
    id: 'temperature-controllers',
    title: 'Temperature Controllers',
    description: 'Accurate controllers for maintaining process temperatures.',
    image: '/assets/products/temperature-controllers.jpg',
    applications: ['HVAC', 'Industrial Ovens', 'Plastics Processing'],
  },
];
