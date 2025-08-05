export const categories = [
  { id: 'cat1', name: 'Electrical', icon: 'zap', image: 'https://placehold.co/400x400/e5e7eb/181818?text=Electrical' },
  { id: 'cat2', name: 'Plumbing', icon: 'tool', image: 'https://placehold.co/400x400/e5e7eb/181818?text=Plumbing' },
  { id: 'cat3', name: 'Lighting', icon: 'lightbulb', image: 'https://placehold.co/400x400/e5e7eb/181818?text=Lighting' },
  { id: 'cat4', name: 'Safety', icon: 'shield', image: 'https://placehold.co/400x400/e5e7eb/181818?text=Safety' },
  { id: 'cat5', name: 'Tools', icon: 'tool', image: 'https://placehold.co/400x400/e5e7eb/181818?text=Tools' },
  { id: 'cat6', name: 'Construction', icon: 'briefcase', image: 'https://placehold.co/400x400/e5e7eb/181818?text=Construction' },
];

export const allProducts = [
  { 
    id: 1, 
    name: 'EMT Conduit 1/2"', 
    price: 'SAR 25.50', 
    image: 'https://placehold.co/600x600/f0f0f0/333?text=Conduit+1', 
    categoryId: 'cat1', 
    images: [
      'https://placehold.co/600x600/f0f0f0/333?text=Conduit+1', 
      'https://placehold.co/600x600/f0f0f0/333?text=Conduit+2', 
      'https://placehold.co/600x600/f0f0f0/333?text=Conduit+3'
    ], 
    rating: 4.5, 
    reviews: 120, 
    specs: [['Gauge', '1/2"'], ['Material', 'Steel'], ['Type', 'EMT']],
    description: 'High-quality EMT conduit for electrical installations. Made from galvanized steel for durability and corrosion resistance.'
  },
  { 
    id: 2, 
    name: 'Circuit Breaker', 
    price: 'SAR 78.00', 
    image: 'https://placehold.co/400x400/f0f0f0/333?text=Breaker', 
    categoryId: 'cat1', 
    rating: 5, 
    reviews: 98, 
    specs: [['Amperage', '20A'], ['Poles', '1-Pole']],
    description: 'Reliable single-pole circuit breaker for residential and commercial applications.'
  },
  { 
    id: 3, 
    name: 'LED Panel Light', 
    price: 'SAR 45.00', 
    image: 'https://placehold.co/400x400/f0f0f0/333?text=LED+Panel', 
    categoryId: 'cat3', 
    rating: 4, 
    reviews: 210, 
    specs: [['Wattage', '40W'], ['Color', 'Cool White']],
    description: 'Energy-efficient LED panel light perfect for offices and commercial spaces.'
  },
  { 
    id: 4, 
    name: 'Copper Pipe Set', 
    price: 'SAR 132.75', 
    image: 'https://placehold.co/400x400/f0f0f0/333?text=Copper+Pipes', 
    categoryId: 'cat2', 
    rating: 4.5, 
    reviews: 75, 
    specs: [['Diameter', '3/4"'], ['Length', '10ft']],
    description: 'Premium copper pipes for plumbing installations. Corrosion-resistant and long-lasting.'
  },
  { 
    id: 5, 
    name: 'PVC Trunking', 
    price: 'SAR 15.00', 
    image: 'https://placehold.co/400x400/f0f0f0/333?text=PVC+Trunking', 
    categoryId: 'cat1', 
    rating: 4, 
    reviews: 150, 
    specs: [['Size', '25x16mm'], ['Length', '2m']],
    description: 'Durable PVC cable trunking for organized cable management.'
  },
  { 
    id: 6, 
    name: 'Safety Helmet', 
    price: 'SAR 55.00', 
    image: 'https://placehold.co/400x400/f0f0f0/333?text=Safety+Helmet', 
    categoryId: 'cat4', 
    rating: 5, 
    reviews: 300, 
    specs: [['Standard', 'ANSI Z89.1'], ['Color', 'Yellow']],
    description: 'ANSI-compliant safety helmet for construction and industrial work.'
  },
  { 
    id: 7, 
    name: 'Power Drill', 
    price: 'SAR 250.00', 
    image: 'https://placehold.co/400x400/f0f0f0/333?text=Power+Drill', 
    categoryId: 'cat5', 
    rating: 4.5, 
    reviews: 180, 
    specs: [['Voltage', '18V'], ['Chuck Size', '1/2"']],
    description: 'Cordless power drill with variable speed control and LED work light.'
  },
  { 
    id: 8, 
    name: 'Cement Bag', 
    price: 'SAR 20.00', 
    image: 'https://placehold.co/400x400/f0f0f0/333?text=Cement', 
    categoryId: 'cat6', 
    rating: 4, 
    reviews: 450, 
    specs: [['Weight', '50kg'], ['Type', 'Portland']],
    description: 'High-grade Portland cement for construction and masonry work.'
  },
];
