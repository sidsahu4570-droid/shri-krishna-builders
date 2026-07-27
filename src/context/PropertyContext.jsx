import React, { createContext, useContext } from 'react';

const PropertyContext = createContext();

export const useProperties = () => useContext(PropertyContext);

export const PropertyProvider = ({ children }) => {
  // 12 Premium properties
  const properties = [
    {
      id: 'villa-krishna-aura',
      name: 'Krishna Aura Villas',
      type: 'Villa',
      location: 'MR-12 Road, Near Aurobindo Hospital, Indore',
      price: '₹2.85 Cr - ₹3.50 Cr',
      priceNum: 28500000,
      bedrooms: 4,
      bathrooms: 5,
      area: '4,200 Sq.Ft.',
      status: 'Ready to Move',
      featured: true,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      tagline: 'The Pinnacle of Emerald Living',
      description: 'Krishna Aura is a statement of architectural brilliance. Combining modern minimalist structures with large green landscapes, these 4 BHK luxury villas offer private swimming pools, rooftop sky lounges, and double-height ceilings.'
    },
    {
      id: 'bungalow-shri-nivas',
      name: 'Shri Nivas Bungalows',
      type: 'Bungalow',
      location: 'Kanak Smart City, Indore',
      price: '₹3.20 Cr',
      priceNum: 32000000,
      bedrooms: 5,
      bathrooms: 6,
      area: '5,000 Sq.Ft.',
      status: 'Ready to Move',
      featured: true,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Timeless Luxury for Families',
      description: 'Shri Nivas is a sanctuary of ultimate luxury. Designed with marble flooring, smart home automation, high-end modular kitchens, and private elevators, it defines boutique royal living in the heart of Indore.'
    },
    {
      id: 'apartments-krishna-heights',
      name: 'Krishna Heights Penthouse',
      type: 'Apartment',
      location: 'Vijay Nagar, Indore',
      price: '₹1.95 Cr',
      priceNum: 19500000,
      bedrooms: 3,
      bathrooms: 4,
      area: '2,800 Sq.Ft.',
      status: 'Under Construction',
      featured: true,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Skyline Opulence Redefined',
      description: 'Perched high in Vijay Nagar, Krishna Heights features ultra-premium penthouses with private terrace decks and 360-degree panoramic views of Indore. Experience five-star hospitality design at home.'
    },
    {
      id: 'farm-krishna-upvan',
      name: 'Krishna Upvan Farm Estate',
      type: 'Farm House',
      location: 'Super Corridor (Outskirts), Indore',
      price: '₹4.50 Cr',
      priceNum: 45000000,
      bedrooms: 4,
      bathrooms: 4,
      area: '10,000 Sq.Ft.',
      status: 'Ready to Move',
      featured: true,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Your Private Green Sanctuary',
      description: 'Away from the hustle, Krishna Upvan combines organic farms with a luxury leisure cottage. Features include an outdoor jacuzzi, landscaped gardens, fruit orchards, and a separate deck for party gatherings.'
    },
    {
      id: 'villa-royal-arcade',
      name: 'Krishna Royal Arcade',
      type: 'Commercial',
      location: 'MR-12 Road, Indore',
      price: '₹6.00 Cr',
      priceNum: 60000000,
      bedrooms: 0,
      bathrooms: 8,
      area: '12,500 Sq.Ft.',
      status: 'Under Construction',
      featured: true,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Indore\'s Next Commercial Landmark',
      description: 'A premium commercial complex built with energy-efficient glass facade and flexible layout planning. Ideal for international corporate offices, high-end retail brands, and premium showrooms.'
    },
    {
      id: 'villa-emerald-heights',
      name: 'Emerald Crest Duplex',
      type: 'Home',
      location: 'Near Aurobindo Hospital, Indore',
      price: '₹1.65 Cr',
      priceNum: 16500000,
      bedrooms: 3,
      bathrooms: 3,
      area: '2,200 Sq.Ft.',
      status: 'Ready to Move',
      featured: true,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Modern Living, Perfectly Designed',
      description: 'Elegant 3 BHK duplexes that combine high functionality with premium materials. Located just minutes from the medical hub, they feature private balconies and beautiful community parks.'
    },
    {
      id: 'villa-signature-estate',
      name: 'The Signature Villa',
      type: 'Villa',
      location: 'Bypass Road, Indore',
      price: '₹5.50 Cr',
      priceNum: 55000000,
      bedrooms: 5,
      bathrooms: 7,
      area: '6,500 Sq.Ft.',
      status: 'Under Construction',
      featured: true,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Exclusive Elite Landmark',
      description: 'An elite address reserved for a select few. The Signature Villa features dynamic stone and marble architecture, a private home theatre, indoor gym, infinity pool, and custom designer finishes.'
    },
    {
      id: 'bungalow-solitaire',
      name: 'Solitaire Bungalow',
      type: 'Bungalow',
      location: 'Kanak Smart City, Indore',
      price: '₹2.90 Cr',
      priceNum: 29000000,
      bedrooms: 4,
      bathrooms: 4,
      area: '3,800 Sq.Ft.',
      status: 'Ready to Move',
      featured: true,
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      tagline: 'Contemporary Living Standard',
      description: 'Solitaire Bungalow offers ultra-modern styling with vertical wooden louvers, private sit-outs, and a rooftop barbecue deck. An energy-efficient smart home designed for contemporary families.'
    },
    {
      id: 'home-krishna-nook',
      name: 'Krishna Nook Residencies',
      type: 'Home',
      location: 'MR-12 Road, Indore',
      price: '₹1.20 Cr',
      priceNum: 12000000,
      bedrooms: 3,
      bathrooms: 3,
      area: '1,900 Sq.Ft.',
      status: 'Ready to Move',
      featured: false,
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Comfort Meets Luxury',
      description: 'Designed for young professionals and premium families, Krishna Nook features luxury finishes, private parking, security, and a beautiful green garden neighborhood.'
    },
    {
      id: 'apartment-gold-suites',
      name: 'Golden Crest Apartments',
      type: 'Apartment',
      location: 'Vijay Nagar, Indore',
      price: '₹95 Lakhs - ₹1.40 Cr',
      priceNum: 9500000,
      bedrooms: 2,
      bathrooms: 2,
      area: '1,500 Sq.Ft.',
      status: 'Under Construction',
      featured: false,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Compact Luxury in Center',
      description: 'Elegant 2 BHK apartments in Vijay Nagar featuring top-tier modular kitchens, Italian marble bathrooms, high-speed elevators, and proximity to major commercial malls.'
    },
    {
      id: 'commercial-prime-hub',
      name: 'Krishna Prime Commercial Suite',
      type: 'Commercial',
      location: 'Bypass Road, Indore',
      price: '₹4.20 Cr',
      priceNum: 42000000,
      bedrooms: 0,
      bathrooms: 4,
      area: '8,000 Sq.Ft.',
      status: 'Ready to Move',
      featured: false,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Sleek Corporate Offices',
      description: 'Premium corporate spaces with multi-level parking, 24/7 power backup, high-speed fiber internet infrastructure, and advanced building management systems.'
    },
    {
      id: 'farm-emerald-meadows',
      name: 'Emerald Meadows Retreat',
      type: 'Farm House',
      location: 'Super Corridor, Indore',
      price: '₹3.75 Cr',
      priceNum: 37500000,
      bedrooms: 3,
      bathrooms: 4,
      area: '7,500 Sq.Ft.',
      status: 'Ready to Move',
      featured: false,
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Quiet Weekend Getaways',
      description: 'A gorgeous weekend villa set amidst luxury greenery. Features standard luxury pool, double height glass ceilings, organic vegetable patch, and round-the-clock security.'
    }
  ];

  // 8 Premium Featured Projects
  const projects = [
    {
      id: 'kanak-smart-city',
      name: 'Kanak Smart City',
      location: 'MR-12 Road, Indore',
      type: 'Township Development',
      status: 'Ongoing',
      size: '50+ Acres',
      units: '450 Plot & Villa units',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      description: 'A state-of-the-art integrated smart township featuring smart grid systems, RERA approved plots, underground electricity, wide asphalt roads, thematic gardens, and an elite clubhouse.'
    },
    {
      id: 'krishna-aura-estates',
      name: 'Krishna Aura Estates',
      location: 'Near Aurobindo Hospital, Indore',
      type: 'Premium Villa Project',
      status: 'Ready to Move',
      size: '10 Acres',
      units: '60 Luxury Villas',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      description: 'Our flagship luxury villa development featuring contemporary elevation, individual pools, complete home automation, and a grand entrance arch.'
    },
    {
      id: 'shri-nivas-villas',
      name: 'Shri Nivas Enclave',
      location: 'Kanak Smart City, Indore',
      type: 'Luxury Bungalow Complex',
      status: 'Ready to Move',
      size: '8 Acres',
      units: '40 Premium Bungalows',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: 'An elite gated community designed with traditional elements mixed with contemporary luxury. Spacious 5 BHK layouts and personal manicured gardens.'
    },
    {
      id: 'krishna-royal-commercial',
      name: 'Shri Krishna Royal Plaza',
      location: 'MR-12 Road, Indore',
      type: 'Commercial Complex',
      status: 'Ongoing',
      size: '2.5 Acres',
      units: '85 Luxury Showrooms & Offices',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      description: 'Premium corporate offices and retail outlets designed to achieve IGBC Green building certification. Located in Indore\'s rapidly expanding commercial corridor.'
    },
    {
      id: 'krishna-upvan',
      name: 'Krishna Upvan Farms',
      location: 'Super Corridor, Indore',
      type: 'Farm House Township',
      status: 'Delivered',
      size: '30 Acres',
      units: '35 Weekend Farm cottages',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      description: 'Indore\'s first fully organic farm retreat community. Features massive green belts, water harvesting systems, communal organic café, and sports arena.'
    },
    {
      id: 'krishna-heights',
      name: 'Krishna Heights',
      location: 'Vijay Nagar, Indore',
      type: 'Multi Storey Residential',
      status: 'Delivered',
      size: '4 Acres',
      units: '180 Premium Apartments & Penthouses',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      description: 'High-rise luxury apartments with structural earthquake protection, fire sprinkler systems, dedicated recreation towers, and a rooftop sky club.'
    },
    {
      id: 'emerald-crest',
      name: 'Emerald Crest Duplexes',
      location: 'Near Aurobindo Hospital, Indore',
      type: 'Residential Project',
      status: 'Delivered',
      size: '6 Acres',
      units: '90 Duplex Homes',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      description: 'Beautiful 3 BHK duplexes that focus on natural light, space ventilation, and safety inside a peaceful, secure gated complex.'
    },
    {
      id: 'prime-corridor-plots',
      name: 'Krishna Prime Plots',
      location: 'Bypass Road, Indore',
      type: 'Plot Development',
      status: 'Delivered',
      size: '20 Acres',
      units: '140 Premium Plots',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      description: 'Premium residential plots with independent utility connections, landscaped avenues, immediate registry, and absolute clear title deeds.'
    }
  ];

  // 30 Luxury Demo Gallery Images
  const gallery = [
    { id: 1, category: 'Architecture', url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80', title: 'Aura Villa Frontage' },
    { id: 2, category: 'Interiors', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', title: 'Elegant Living Hall' },
    { id: 3, category: 'Amenities', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', title: 'Infinity Edge Pool' },
    { id: 4, category: 'Interiors', url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80', title: 'Luxury Master Suite' },
    { id: 5, category: 'Architecture', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', title: 'Shri Nivas Night View' },
    { id: 6, category: 'Amenities', url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80', title: 'Poolside Deck Barbecue' },
    { id: 7, category: 'Architecture', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', title: 'Modern Facade Details' },
    { id: 8, category: 'Interiors', url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80', title: 'High-end Dining Area' },
    { id: 9, category: 'Interiors', url: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80', title: 'Luxury Kitchen Studio' },
    { id: 10, category: 'Aerial', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', title: 'Villa Drone Overview' },
    { id: 11, category: 'Architecture', url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80', title: 'Bespoke Concrete Arch' },
    { id: 12, category: 'Interiors', url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80', title: 'Luxury Double Height Lounge' },
    { id: 13, category: 'Amenities', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', title: 'Private Home Theatre' },
    { id: 14, category: 'Amenities', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80', title: 'Premium Wellness Gym' },
    { id: 15, category: 'Aerial', url: 'https://images.unsplash.com/photo-1506974210756-8e1b8985d348?auto=format&fit=crop&w=800&q=80', title: 'Township Gardens' },
    { id: 16, category: 'Architecture', url: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80', title: 'Wooden Louver Detailing' },
    { id: 17, category: 'Interiors', url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80', title: 'Kids Luxury Suite' },
    { id: 18, category: 'Interiors', url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80', title: 'Italian Marble Washroom' },
    { id: 19, category: 'Architecture', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80', title: 'Modern Brick and Glass Duplex' },
    { id: 20, category: 'Amenities', url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80', title: 'Clubhouse Entrance Lobby' },
    { id: 21, category: 'Aerial', url: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=800&q=80', title: 'Landscaped Avenues' },
    { id: 22, category: 'Architecture', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', title: 'Plaza Glass Glazing' },
    { id: 23, category: 'Interiors', url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80', title: 'Rooftop Sky deck Lounge' },
    { id: 24, category: 'Amenities', url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80', title: 'Children\'s Play Park' },
    { id: 25, category: 'Architecture', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80', title: 'Under Construction Columns' },
    { id: 26, category: 'Interiors', url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80', title: 'Master Bed Minimalist Ceiling' },
    { id: 27, category: 'Architecture', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', title: 'Office Lounge Details' },
    { id: 28, category: 'Amenities', url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80', title: 'Bungalow Backyard Garden' },
    { id: 29, category: 'Aerial', url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80', title: 'Indore Green Corridor' },
    { id: 30, category: 'Interiors', url: 'https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80', title: 'Cozy Fireplace Nook' }
  ];

  // 6 Premium Blogs
  const blogs = [
    {
      id: 'indore-real-estate-boom',
      title: 'Indore Real Estate: Why Super Corridor and MR-12 are Premium Investment Hubs',
      category: 'Investment',
      author: 'Krishna K. Sharma (MD)',
      date: 'July 15, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      summary: 'Explore why Indore is emerging as Central India\'s biggest real estate goldmine and how smart infrastructure projects near Aurobindo are driving massive double-digit annual appreciation.',
      content: 'Indore has consistently ranked as India\'s cleanest city, but it is now fast claiming another title: Central India\'s tech and luxury real estate capital. With the rapid expansion of the Indore Metro line, the growth of the Super Corridor, and major infrastructure upgrades along the MR-12 Road, areas surrounding Aurobindo Hospital have become hotspots for premium residential developments.\n\n### Why MR-12 Corridor is Boom Zone:\n1. **Connectivity**: Direct transit routes linking TCS and Infosys campuses to the medical hubs.\n2. **Metro Access**: Multiple station nodes planned along prime residential belts.\n3. **Higher ROI**: Land values near Kanak Smart City have appreciated by over 45% in the last 3 years alone.\n\nInvesting in gated townships, premium villa complexes, or plots in these zones offers not only high rental yields but secure long-term capital wealth creation.'
    },
    {
      id: 'modern-villa-architecture-trends',
      title: 'Modern Architecture Trends in Gated Townships: Embracing Sustainable Minimalism',
      category: 'Architecture',
      author: 'Ar. Ananya Sen',
      date: 'June 28, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      summary: 'Delve into contemporary design philosophies combining double-height ceilings, wooden louvers, glass facades, and emerald landscaping for ultimate luxury.',
      content: 'Modern luxury is no longer defined by heavy gold moldings or blocky concrete masses. Instead, today\'s elite home designs focus on spatial breathing room, raw natural materials, and blurring the line between indoor comfort and outdoor landscape.\n\n### Core Elements of Contemporary Real Estate Design:\n- **Glass Glazing**: Utilizing low-E floor-to-ceiling glass to optimize natural light while preventing heat radiation.\n- **Double-Height Ceilings**: Providing a sense of boundless vertical freedom inside the main living lounges.\n- **Biophilic Integrations**: Courtyard gardens, cascading vertical plants, and natural ventilation chimneys.\n\nAt Shri Krishna Builders, our newer projects (like Krishna Aura and Shri Nivas) incorporate these international design structures directly, giving Indore a taste of global luxury.'
    },
    {
      id: 'construction-materials-premium-homes',
      title: 'The Blueprint of Quality: Why Premium Materials Matter in High-Rise & Villas',
      category: 'Construction Tips',
      author: 'Er. Rajesh Verma (VP Engineering)',
      date: 'June 10, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      summary: 'Learn how structural steel, M25 concrete, and imported Italian marble differentiate premium villas from standard residential duplex houses.',
      content: 'A home is built once, but it must stand for generations. That is why construction material selection is the single most critical factor that distinguishes standard developers from premium builders.\n\n### The Materials We Stand By:\n- **Concrete Grade**: We utilize M25-M35 ready-mix concrete for all structural frameworks, ensuring high seismic resistance.\n- **Steel Reinforcement**: High-strength TMT steel bars with anti-corrosive coatings.\n- **Finishing Stone**: Imported Italian Bottochino and Satvario marble options that retain elegance for decades.\n\nBuying a home with us means investing in structural concrete longevity and low maintenance costs.'
    },
    {
      id: 'luxury-interior-design-2026',
      title: 'Luxury Interior Concepts: Creating Warmth with Brass, Stone, and Earthy Hues',
      category: 'Interior',
      author: 'Meera Deshmukh (Lead Stylist)',
      date: 'May 22, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      summary: 'A complete interior guide to styling premium bungalows using custom lighting, matte brass accents, stone paneling, and curated furniture designs.',
      content: 'Luxury interior styling has shifted toward organic richness. Warm earthy tones, micro-cement walls, brushed gold fixtures, and textured stone panels are current favorites among high-end interior decorators.\n\n### Design Highlights:\n- **Accent Walls**: Travertine stone slabs with concealed LED backlighting.\n- **Fixtures**: Matte brass and gunmetal faucets in kitchen and vanity areas.\n- **Lighting**: Custom chandeliers coupled with warm, smart, dimmable ambient lights.\n\nShri Krishna Builders offers custom interior design consultation services for all bungalow and villa clients to help shape their dream spaces.'
    },
    {
      id: 'rera-compliance-safe-buying',
      title: 'Decoding RERA: A Guide to Safe Property Purchasing in Madhya Pradesh',
      category: 'Real Estate Trends',
      author: 'Adv. Suresh Dixit (Legal Advisory)',
      date: 'April 14, 2026',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      summary: 'Understanding RERA registration numbers, land title verifications, construction timelines, and buyer rights under MP-RERA guidelines.',
      content: 'Buying real estate represents one of the largest financial investments in a person\'s life. Ensuring your purchase complies with RERA regulations is critical to avoiding delays and legal disputes.\n\n### Check before you sign:\n1. **RERA Number**: Always verify the RERA number on the official Madhya Pradesh RERA portal.\n2. **Clear Title**: Ensure the developer has clean, undisputed ownership of the land.\n3. **Escrow Accountability**: Verify that payments are credited to a RERA-compliant escrow account.\n\nShri Krishna Builders and Developers complies fully with MP-RERA regulations across all commercial and residential developments.'
    }
  ];

  // Verified Client Testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Vijay & Sunita Patidar',
      role: 'Business Owner, Indore',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      feedback: 'Buying our villa at Krishna Aura was a flawless experience. The commitment to premium materials, structural integrity, and the double-height living room layout exceeded all expectations. Shri Krishna Builders are indeed creators of modern Indore landmarks.'
    },
    {
      id: 2,
      name: 'Dr. Ramesh Choudhary',
      role: 'Senior Cardiologist, Indore',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80',
      feedback: 'The location of Kanak Smart City near Aurobindo Hospital is perfect for my schedule. The construction progress was highly transparent, and their customer relationship managers updated us with photos every fortnight. Highly recommended!'
    },
    {
      id: 3,
      name: 'Amit & Neha Jaiswal',
      role: 'IT Director, TCS Indore',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      feedback: 'We wanted a luxury bungalow that felt contemporary yet cozy. Shri Krishna Builders provided top-tier marble finishes, elegant wooden accents, and a customized terrace garden. Their legal team made registration paperwork absolutely painless.'
    },
    {
      id: 4,
      name: 'Nisha Singhal',
      role: 'Real Estate Investor, Indore',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      feedback: 'As an investor, I look closely at development speed and registry clear titles. Shri Krishna Builders delivered my commercial plots on Bypass Road six months ahead of schedule, resulting in instant rental returns from corporate tenants.'
    }
  ];

  // 10 Detailed FAQs
  const faqs = [
    {
      q: 'Are all projects of Shri Krishna Builders RERA approved?',
      a: 'Yes, 100% of our active residential and commercial projects, including Kanak Smart City and Krishna Aura, are fully registered with the Madhya Pradesh Real Estate Regulatory Authority (MP-RERA). RERA numbers are displayed on all brochures and respective project layouts.'
    },
    {
      q: 'Where is your corporate office located in Indore?',
      a: 'Our main site office is located at M3, Kanak Smart City, MR-12 Road, Near Aurobindo Hospital, Indore, Madhya Pradesh - 453555. Visitors are welcome from 10:00 AM to 7:00 PM daily for consulting and walkthroughs.'
    },
    {
      q: 'Can I request customization in the interior layout of a bungalow/villa?',
      a: 'Yes. If you book a villa or bungalow during its early structural concrete phases, our in-house architecture and interior styling team can assist in customizing partition walls, choosing marble styles, selecting modular kitchen layouts, and planning smart home wiring configurations.'
    },
    {
      q: 'What premium amenities are provided in your luxury townships?',
      a: 'Our gated developments offer premium features including double-height grand clubhouses, standard swimming pools, gymnasium complexes, children’s play gardens, round-the-clock CCTV guard security, smart solar streetlights, 30-40 ft wide asphalt avenues, and dedicated jogging tracks.'
    },
    {
      q: 'Which banks offer home loan approvals for your projects?',
      a: 'All our projects are pre-approved by India\'s leading financial institutions including SBI, HDFC Bank, ICICI Bank, Axis Bank, and LIC Housing Finance. We have dedicated banking officers to help fast-track your loan approvals.'
    },
    {
      q: 'What is your standard construction guarantee?',
      a: 'We provide a 5-year structural safety warranty covering concrete framing, foundation stability, and core plumbing installations, reflecting our ultimate trust in our raw materials and engineering standards.'
    },
    {
      q: 'Do you offer property management and rental assistance services?',
      a: 'Yes, through our Investment Consulting wing, we assist premium owners and NRI buyers in finding suitable high-profile tenants, drafting rental lease papers, and maintaining the property in pristine condition.'
    },
    {
      q: 'What materials are used for thermal and noise insulation in your villas?',
      a: 'We use high-grade AAC block masonry for superior thermal insulation and double-glazed soundproof UPVC window frames that drastically cut down outdoor noise levels, creating absolute peaceful indoor environments.'
    },
    {
      q: 'How does your EMI and Investment Calculator estimate returns?',
      a: 'Our EMI Calculator is based on the standard monthly amortization formula. The Investment Yield calculator utilizes historical Indore real estate compound growth statistics (10-14% CAGR depending on the zone) to estimate value appreciation over a 5 to 20 year timeline.'
    },
    {
      q: 'How do I schedule a physical site visit to Kanak Smart City?',
      a: 'You can easily click any "Schedule Site Visit" or "Book Site Visit" button across the website to fill out your details, or call us directly at 9644699206. We provide luxury chauffeur-driven pickup and drop services for premium site visits within Indore limits.'
    }
  ];

  return (
    <PropertyContext.Provider value={{ properties, projects, gallery, blogs, testimonials, faqs }}>
      {children}
    </PropertyContext.Provider>
  );
};
