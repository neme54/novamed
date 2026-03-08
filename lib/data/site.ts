export const site = {
  name: "NovaMed Pharmaceuticals Ltd.",
  shortName: "NovaMed",
  tagline: "Science. Trust. Life.",
  hq: "Victoria Island, Lagos",
  description:
    "NovaMed Pharmaceuticals Ltd. is a fictional Nigerian pharmaceutical manufacturer delivering NAFDAC-certified, WHO-aligned medicines across Africa.",
  rcNumber: "RC No. 234567",
  nafdacCompanyReg: "NAFDAC Reg. No. A7-8899",
  social: {
    linkedin: "https://www.linkedin.com",
    twitter: "https://x.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
  contacts: {
    phone: "+234 700 NOVAMED",
    email: "info@novamedpharma.com",
    medical: "medical@novamedpharma.com",
    media: "media@novamedpharma.com",
    hours: "Mon–Fri 8am–5pm WAT",
    address: "14 Admiralty Way, Victoria Island, Lagos",
  },
  nav: {
    about: {
      label: "About",
      items: [
        { label: "Our Story", href: "/about#story" },
        { label: "Leadership", href: "/about#leadership" },
        { label: "Awards", href: "/about#awards" },
      ],
    },
    products: {
      label: "Products",
      items: [
        { label: "Browse All", href: "/products" },
        { label: "Drug Information Centre", href: "/drugs" },
        { label: "By Category", href: "/products#categories" },
        { label: "Product Search", href: "/products#search" },
      ],
    },
    links: [
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "CSR", href: "/csr" },
      { label: "News", href: "/news" },
      { label: "Careers", href: "/careers" },
      { label: "Investors", href: "/investor-relations" },
    ],
    cta: { label: "Contact Us", href: "/contact" },
    bookPharmacist: { label: "Book Pharmacist", href: "/book-pharmacist" },
  },
  footer: {
    columns: [
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Leadership", href: "/about#leadership" },
          { label: "Careers", href: "/careers" },
          { label: "CSR", href: "/csr" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Products",
        links: [
          { label: "Browse All", href: "/products" },
          { label: "Drug Information Centre", href: "/drugs" },
          { label: "Antimalarials", href: "/products?category=Antimalarial" },
          { label: "Cardiovascular", href: "/products?category=Cardiovascular" },
          { label: "Antibiotics", href: "/products?category=Antibiotics" },
          { label: "Paediatrics", href: "/products?category=Paediatrics" },
          { label: "Vitamins & Supplements", href: "/products?category=Vitamins" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "News", href: "/news" },
          { label: "Investor Relations", href: "/investor-relations" },
          { label: "Regulatory", href: "/regulatory" },
          { label: "Downloads", href: "/regulatory#downloads" },
        ],
      },
    ],
    legal:
      "© 2025 NovaMed Pharmaceuticals Ltd. All Rights Reserved. Designed for Healthcare Excellence.",
  },
  images: {
    hero:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=2400&q=80",
    manufacturingPreview:
      "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=1600&q=80",
    csrPreview:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
  },
  complianceRibbon:
    "NAFDAC Certified | WHO Prequalified | ISO 9001:2015 | cGMP Compliant",
  home: {
    hero: {
      headline: "Science. Trust. Life.",
      subheadline:
        "Nigeria's most trusted pharmaceutical manufacturer — delivering NAFDAC-certified, WHO-prequalified medicines across Africa.",
      ctaPrimary: { label: "Explore Products", href: "/products" },
      ctaSecondary: { label: "Our Story", href: "/about" },
      scrollLabel: "Scroll to explore",
    },
    compliance: {
      title: "Built on compliance. Delivered with care.",
      body:
        "Every product we manufacture is tested, certified, and approved to meet international healthcare standards.",
      badges: ["NAFDAC", "WHO", "ISO", "SON", "cGMP", "NPC"],
    },
    manufacturing: {
      title: "Manufacturing excellence, end to end.",
      body:
        "From raw material sourcing to batch release, our plants are designed for quality, safety, and consistent supply across Africa.",
      bullets: [
        "Oral solids, liquids, and expanding sterile capabilities",
        "Quality by design, validated processes, disciplined documentation",
        "Distribution-ready packaging for regional markets",
      ],
      cta: { label: "Tour Our Facilities →", href: "/manufacturing" },
    },
    csr: {
      title: "Beyond medicine. Building communities.",
      body:
        "Our CSR programmes focus on outreach, education, access, and sustainability — partnering for long-term health impact.",
      cta: { label: "See Our CSR →", href: "/csr" },
      pillars: [
        { title: "Community Health Outreach", icon: "HeartPulse" },
        { title: "Say No To Drug Abuse", icon: "Shield" },
        { title: "Rural Pharmacy Access", icon: "MapPin" },
      ],
    },
    news: {
      title: "News & Media",
      body: "Updates from our teams across science, manufacturing, and community impact.",
      cta: { label: "View All News →", href: "/news" },
    },
    labels: {
      viewProducts: "View Products →",
      readMore: "Read more →",
    },
    therapeutic: {
      title: "What We Make",
      description:
        "Our portfolio spans essential therapies built for quality, access, and everyday trust.",
    },
  },
  therapeuticAreas: [
    {
      name: "Antimalarials",
      description: "Trusted therapies for malaria prevention and treatment.",
      icon: "Microscope",
      href: "/products?category=Antimalarial",
    },
    {
      name: "Cardiovascular",
      description: "Supporting heart health with quality formulations.",
      icon: "Heart",
      href: "/products?category=Cardiovascular",
    },
    {
      name: "Antibiotics",
      description: "Broad-spectrum and targeted antibacterial care.",
      icon: "Shield",
      href: "/products?category=Antibiotics",
    },
    {
      name: "Analgesics",
      description: "Relief you can rely on, from mild to moderate pain.",
      icon: "Activity",
      href: "/products?category=Analgesics",
    },
    {
      name: "Paediatrics",
      description: "Age-appropriate dosing, syrups, and dispersibles.",
      icon: "Baby",
      href: "/products?category=Paediatrics",
    },
    {
      name: "Vitamins & Supplements",
      description: "Everyday wellness support across life stages.",
      icon: "Sun",
      href: "/products?category=Vitamins",
    },
    {
      name: "Dermatology",
      description: "Skin health solutions for everyday conditions.",
      icon: "Layers",
      href: "/products?category=Dermatology",
    },
    {
      name: "Antihistamines",
      description: "Allergy relief for seasonal and chronic needs.",
      icon: "Wind",
      href: "/products?category=Antihistamines",
    },
    {
      name: "Oncology Support",
      description: "Supportive care medicines for patients and providers.",
      icon: "Dna",
      href: "/products?category=Oncology%20Support",
    },
    {
      name: "Ophthalmology",
      description: "Eye care drops and supportive therapies.",
      icon: "Eye",
      href: "/products?category=Ophthalmology",
    },
    {
      name: "Gastrointestinal",
      description: "Digestive care for acute and long-term relief.",
      icon: "Stethoscope",
      href: "/products?category=Gastrointestinal",
    },
    {
      name: "Respiratory",
      description: "Breathing support for common respiratory conditions.",
      icon: "AirVent",
      href: "/products?category=Respiratory",
    },
  ],
  stats: [
    { label: "Founded", value: 1981, suffix: "" },
    { label: "Products", value: 250, suffix: "+" },
    { label: "Therapeutic Areas", value: 18, suffix: "" },
    { label: "African Markets", value: 12, suffix: "" },
    { label: "Manufacturing Plants", value: 3, suffix: "" },
  ],
  metadata: {
    defaultTitle: "NovaMed Pharmaceuticals Ltd.",
    titleTemplate: "%s | NovaMed Pharmaceuticals Ltd.",
    ogImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1600&q=80",
  },
  accessibility: {
    skipToContent: "Skip to content",
  },
} as const;

export type SiteConfig = typeof site;

