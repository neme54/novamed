import type { EmploymentType, SeniorityLevel } from "@/lib/types/job";

export const pages = {
  drugs: {
    title: "Drug Information Centre",
    description:
      "Authoritative drug information — NAFDAC-registered medicines, indications, dosing, and safety. For healthcare professionals and informed patients.",
    heroImage:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=2400&q=80",
    searchPlaceholder: "Search by brand name, generic name, or NAFDAC number",
    categoryLabel: "Therapeutic Category",
    typeTabs: [
      { key: "all", label: "All" },
      { key: "PRESCRIPTION", label: "Prescription" },
      { key: "OTC", label: "OTC" },
      { key: "CONTROLLED", label: "Controlled" },
      { key: "PAEDIATRIC", label: "Paediatric" },
    ],
    clearFilters: "Clear filters",
    paginationNote: "Pagination is UI-only for now and is ready for API integration.",
    detail: {
      tabs: ["Overview", "Indications", "Dosage & Admin", "Side Effects", "Storage", "Downloads"],
      relatedHeading: "Related drugs",
      consultationCta: "Book a pharmacist consultation",
      consultationBlurb: "Need advice on this medicine? Book a free consultation with our pharmacist.",
    },
  },
  products: {
    title: "Products",
    description:
      "Explore NovaMed’s portfolio across priority therapeutic areas — built for quality, access, and trusted outcomes.",
    heroImage:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=2400&q=80",
    searchPlaceholder: "Search products by name, generic name, or NAFDAC number",
    typeTabs: [
      { key: "all", label: "All" },
      { key: "prescription", label: "Prescription" },
      { key: "otc", label: "OTC" },
      { key: "paediatric", label: "Paediatric" },
      { key: "export", label: "Export Range" }
    ],
    categoryLabel: "Therapeutic Category",
    clearFilters: "Clear filters",
    paginationNote:
      "Pagination is UI-only for now and is ready for API integration.",
    detail: {
      downloads: [
        { label: "Patient Information Leaflet", href: "#" },
        { label: "Summary of Product Characteristics (SPC)", href: "#" },
        { label: "Material Safety Data Sheet (MSDS)", href: "#" }
      ],
      relatedHeading: "Related products",
      dosageCopy: [
        "Dosage should be as prescribed by a qualified healthcare professional and per approved labeling.",
        "This section is structured for future integration with product-specific dosing guidance via API."
      ]
    }
  },
  about: {
    title: "About NovaMed",
    description:
      "A Nigerian pharmaceutical manufacturer rooted in disciplined quality systems, trusted partnerships, and a commitment to health access across Africa.",
    heroImage:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=2400&q=80",
    story: {
      heading: "Our Story",
      body: [
        "Founded in 1981, NovaMed Pharmaceuticals Ltd. began with a simple mandate: manufacture essential medicines with uncompromising quality, close to the communities that need them most.",
        "Over the decades, we have strengthened our quality management systems, expanded our portfolio across priority therapeutic areas, and built resilient distribution across multiple African markets.",
        "Today, NovaMed continues to invest in people, science, and manufacturing excellence — guided by a culture of trust, compliance, and patient-first decisions.",
      ],
    },
    headings: {
      timeline: "Milestones",
      missionVisionValues: "Mission, Vision & Core Values",
      leadership: "Leadership Team",
      board: "Board of Directors",
    },
    leadershipDescription:
      "Experienced leaders across science, operations, and compliance.",
    mvvLabels: {
      missionEyebrow: "Mission",
      missionTitle: "Our mission",
      visionEyebrow: "Vision",
      visionTitle: "Our vision",
      valuesEyebrow: "Values",
      valuesTitle: "Core values",
    },
    missionVisionValues: {
      mission:
        "To manufacture quality-assured medicines that improve everyday health outcomes and strengthen healthcare resilience across Africa.",
      vision:
        "To be Africa’s most trusted pharmaceutical manufacturing partner — defined by science, compliance, and measurable patient impact.",
      values: [
        {
          title: "Science-led decisions",
          body: "We anchor our work in evidence, rigorous quality, and continuous learning.",
        },
        {
          title: "Trust by compliance",
          body: "We earn confidence through disciplined systems, documentation, and transparency.",
        },
        {
          title: "Access and impact",
          body: "We design supply reliability and product availability for real-world needs.",
        },
      ],
    },
    globalPresence: {
      heading: "Our presence across Africa",
      markets: ["Nigeria", "Ghana", "Kenya", "South Africa", "Cameroon", "Senegal"],
    },
    recognitions: {
      heading: "Awards & Recognitions",
      items: [
        "ISO-aligned quality management milestones",
        "Manufacturing excellence recognition (regional)",
        "Workforce development and training systems commendations",
      ],
    },
  },
  manufacturing: {
    title: "Manufacturing",
    description: "End-to-end pharmaceutical manufacturing in Nigeria.",
    heroImage:
      "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=2400&q=80",
    overview:
      "NovaMed operates modern facilities designed for quality, safety, and scalable output — supporting essential medicines and export readiness.",
    headings: {
      qa: "Quality Assurance Process",
      certifications: "Certifications"
    },
    plants: [
      {
        name: "Lagos Plant",
        focus: "Oral Solids — Tablets, Capsules",
        image:
          "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1600&q=80",
      },
      {
        name: "Ogun State Plant",
        focus: "Liquids & Syrups",
        image:
          "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80",
      },
      {
        name: "Abuja Plant",
        focus: "Sterile Injectables — Under Development",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    qaFlow: [
      "Raw Material Sourcing",
      "Testing",
      "Formulation",
      "Manufacturing",
      "QC Testing",
      "Packaging",
      "NAFDAC Release",
      "Distribution",
    ],
    certifications: ["NAFDAC", "ISO 9001:2015", "cGMP", "SON Compliance"],
    rd: {
      heading: "Our Research & Development Centre",
      body:
        "Our R&D centre supports formulation optimisation, stability readiness for African climates, and technology transfer to strengthen medicine security.",
      image:
        "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1600&q=80",
    },
    contract: {
      heading: "Contract Manufacturing",
      body:
        "We offer contract manufacturing and packaging services aligned with quality system expectations and export requirements.",
      ctaLabel: "Enquire about contract manufacturing",
      subject: "Contract Manufacturing Enquiry"
    },
  },
  news: {
    title: "News & Media",
    description: "Press releases, industry updates, health tips, and events from NovaMed.",
    heroImage:
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=2400&q=80",
    featuredLabel: "Featured",
    filterLabel: "Filter by category",
    categories: [
      "All",
      "Press Releases",
      "Industry News",
      "Health Tips",
      "Awards",
      "Events"
    ],
    paginationNote: "Pagination is UI-only for now and is ready for API integration.",
    relatedHeading: "Related articles"
  },
  csr: {
    title: "Corporate Social Responsibility",
    description: "Beyond medicine. Building communities.",
    breadcrumb: "CSR",
    heroImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2400&q=80",
    headings: {
      pillars: "CSR pillars",
      impact: "Impact",
      spotlights: "Initiative spotlights",
      partnerships: "Partnerships",
      gallery: "Gallery"
    },
    pillars: [
      {
        title: "Community Health Outreach",
        body: "Screenings, counselling, referrals, and health education delivered with trusted partners.",
        image:
          "https://images.unsplash.com/photo-1530026405186-ed1f139313f?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Say No To Drug Abuse Campaign",
        body: "Preventive education programmes that promote responsible medicine use and safer communities.",
        image:
          "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Rural Pharmacy Access Program",
        body: "Supporting supply reliability and health access through rural partnerships and outreach logistics.",
        image:
          "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Environmental Sustainability",
        body: "Responsible operations, waste reduction, and programmes that protect the environment we share.",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    impactStats: [
      { label: "Patients Reached", value: 50000, suffix: "+" },
      { label: "Communities", value: 120, suffix: "" },
      { label: "States", value: 15, suffix: "" },
      { label: "Partner NGOs", value: 8, suffix: "" },
    ],
    partnerships: ["FMOH", "WHO Nigeria", "UNICEF", "Partner NGOs"],
    gallery: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&h=400&q=80",
    ],
    cta: {
      heading: "Get involved",
      body:
        "Partner with NovaMed to expand health access, education, and long-term community outcomes.",
      button: "Partner with us",
      href: "/contact?department=General&subject=CSR%20Partnership%20Enquiry",
    },
  },
  careers: {
    title: "Careers",
    description: "Grow with NovaMed — build a career defined by quality, impact, and integrity.",
    heroHeading: "Grow With NovaMed",
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80",
    headings: {
      why: "Why NovaMed",
      life: "Life at NovaMed",
      roles: "Open roles",
      filterLabel: "Filter by department"
    },
    jobDetail: {
      overview: "Role overview",
      responsibilities: "Responsibilities",
      requirements: "Requirements",
      applyHeading: "Apply for this role"
    },
    valueProps: [
      { title: "Growth", body: "Clear development pathways and mentorship." },
      { title: "Innovation", body: "Science-led teams solving real problems." },
      { title: "Impact", body: "Work that strengthens health systems." },
      { title: "Culture", body: "Respect, discipline, and shared ownership." },
    ],
    lifeImages: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&h=400&q=80",
    ],
    application: {
      submitLabel: "Submit Application",
      successMessage: "Received",
      fields: {
        fullName: "Full Name",
        email: "Email",
        phone: "Phone",
        linkedin: "LinkedIn URL",
        years: "Years of Experience",
        coverLetter: "Cover Letter",
        cv: "Upload CV"
      },
      cvPlaceholder: "CV.pdf"
    },
  },
  investors: {
    title: "Investor Relations",
    description: "Transparency. Performance. Growth.",
    heroCopy: "Transparency. Performance. Growth.",
    headings: {
      highlights: "Key financial highlights",
      annualReports: "Annual reports",
      statements: "Financial statements",
      governance: "Corporate governance",
      stock: "Stock information",
      shareholder: "Shareholder information",
      press: "Press releases",
      contact: "Investor relations contact"
    },
    pressCta: {
      label: "View press releases",
      href: "/news?category=Press%20Releases"
    },
    highlights: [
      { label: "Revenue (FY)", value: "₦145.2bn" },
      { label: "EBITDA Margin", value: "18.4%" },
      { label: "Capex (FY)", value: "₦22.6bn" },
      { label: "Export Markets", value: "12" },
    ],
    annualReports: [
      { year: "2025", title: "Annual Report 2025", href: "#" },
      { year: "2024", title: "Annual Report 2024", href: "#" },
      { year: "2023", title: "Annual Report 2023", href: "#" },
    ],
    statements: [
      { year: "2025", q1: "#", q2: "#", q3: "#", annual: "#" },
      { year: "2024", q1: "#", q2: "#", q3: "#", annual: "#" },
      { year: "2023", q1: "#", q2: "#", q3: "#", annual: "#" },
    ],
    statementsTable: {
      headers: ["Year", "Q1", "Q2", "Q3", "Annual"],
      pdfLabel: "PDF"
    },
    governance: {
      heading: "Corporate Governance",
      body:
        "NovaMed is committed to sound governance, independent oversight, and transparent reporting aligned with stakeholder expectations.",
      auditCommittee:
        "The Audit Committee supports oversight of financial reporting integrity, risk management, and compliance controls.",
    },
    stock: {
      heading: "Stock information",
      listing: "NGX Listing (placeholder): NOVAMED",
      ticker: "NOVAMED",
    },
    shareholder: {
      heading: "Shareholder information",
      items: ["Dividends (policy overview)", "AGM notices", "Investor updates"],
    },
    irContact: {
      heading: "Investor Relations Contact",
      email: "investors@novamedpharma.com",
    },
  },
  regulatory: {
    title: "Regulatory",
    description:
      "Compliance is a daily discipline — covering licensing, quality systems, and post-market safety.",
    heroImage:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=2400&q=80",
    headings: {
      commitment: "Our regulatory commitment",
      nafdac: "NAFDAC compliance",
      who: "WHO standards",
      certifications: "Certification grid",
      pharmacovigilance: "Pharmacovigilance",
      recall: "Product recall policy",
      faqs: "Regulatory FAQs",
      downloads: "Downloads"
    },
    downloadsDescription:
      "Downloadable resources will be expanded as document management integration is added.",
    downloads: [
      { label: "Quality Policy (PDF)", href: "#" },
      { label: "Pharmacovigilance Reporting Guide (PDF)", href: "#" },
      { label: "Product Recall Procedure Summary (PDF)", href: "#" }
    ],
    intro:
      "NovaMed maintains robust systems aligned with NAFDAC expectations and international quality principles, including documentation discipline, validated processes, and continuous improvement.",
    nafdac:
      "NAFDAC compliance is embedded across our lifecycle: registration dossiers, inspections, batch release documentation, labeling control, and post-market commitments.",
    who:
      "WHO-aligned standards influence our approach to quality risk management, supplier qualification, stability protocols, and pharmacovigilance readiness.",
    certs: [
      { name: "NAFDAC Manufacturing Licence", body: "National Agency for Food and Drug Administration and Control", year: "2025", scope: "Manufacturing sites" },
      { name: "ISO 9001:2015", body: "International Organization for Standardization", year: "2024", scope: "Quality Management System" },
      { name: "cGMP Compliance Programme", body: "Internal + Regulatory Alignment", year: "2025", scope: "Production and QA/QC operations" },
      { name: "SON Compliance", body: "Standards Organisation of Nigeria", year: "2023", scope: "Standards alignment and quality" },
    ],
    pharmacovigilance:
      "To report a suspected adverse event, contact medical@novamedpharma.com with product name, batch details (if available), and a clear description of the event.",
    recall:
      "NovaMed follows standard pharmaceutical recall procedures: risk assessment, notification, product traceability, retrieval, root cause analysis, CAPA, and regulatory reporting as required.",
    faqs: [
      {
        id: "faq-1",
        question: "How does NovaMed ensure batch quality consistency?",
        answer:
          "We combine validated processes, raw material qualification, in-process controls, and documented quality review before batch release.",
      },
      {
        id: "faq-2",
        question: "Where can I access product documentation?",
        answer:
          "Product documentation such as leaflets and safety summaries will be available through our product detail pages and regulatory downloads section as integration expands.",
      },
      {
        id: "faq-3",
        question: "How do I report a product quality concern?",
        answer:
          "Please contact medical@novamedpharma.com with the product name, NAFDAC number, batch number, and a description of the concern for prompt assessment.",
      },
    ],
  },
  booking: {
    title: "Book a Pharmacist",
    description: "Schedule a free consultation with a NovaMed pharmacist — drug information, pregnancy safety, paediatrics, and more.",
    heroImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=2400&q=80",
    steps: ["Consultation type", "Date & time", "Your details", "Review"],
    consultTypes: [
      { value: "DRUG_INFORMATION", label: "Drug / Product Information" },
      { value: "PREGNANCY_SAFETY", label: "Pregnancy & Medicine Safety" },
      { value: "PAEDIATRIC_ADVICE", label: "Paediatric Dosing & Advice" },
      { value: "DRUG_INTERACTION", label: "Drug Interaction Check" },
      { value: "CHRONIC_DISEASE", label: "Chronic Disease & Medicines" },
      { value: "PRESCRIPTION_REVIEW", label: "Prescription Review" },
      { value: "GENERAL", label: "General Consultation" },
    ],
    formats: [
      { value: "PHONE", label: "Phone" },
      { value: "VIDEO", label: "Video call" },
      { value: "IN_PERSON", label: "In person" },
    ],
    form: {
      patientName: "Full name",
      patientPhone: "Phone number",
      patientEmail: "Email (optional)",
      patientAge: "Age (optional)",
      patientGender: "Gender (optional)",
      patientState: "State",
      drugName: "Drug name (if relevant)",
      notes: "Notes",
      howHeard: "How did you hear about us?",
    },
    submit: "Confirm booking",
    submitting: "Booking…",
    confirmation: {
      title: "Booking confirmed",
      refLabel: "Your reference",
      addToCalendar: "Add to calendar",
      shareWhatsApp: "Share via WhatsApp",
      backHome: "Back to home",
    },
  },
  contact: {
    title: "Contact",
    description: "Speak with NovaMed — general enquiries, medical information, media, careers, and investors.",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
    mapLabel: "Head office — Victoria Island, Lagos",
    headings: {
      info: "Head office",
      social: "Social media",
      offices: "Regional offices"
    },
    labels: {
      phone: "Phone",
      email: "Email",
      medical: "Medical Enquiries",
      media: "Media Enquiries",
      hours: "Hours",
      mapStatusReady: "Ready",
      mapStatusPending: "Setup pending"
    },
    departments: [
      "General",
      "Medical",
      "Sales",
      "Media",
      "Careers",
      "Investor Relations",
    ],
    investorDepartment: "Investor Relations",
    form: {
      heading: "Send a message",
      fields: {
        name: "Name",
        company: "Company",
        department: "Department",
        subject: "Subject",
        message: "Message"
      },
      submit: "Submit",
      successMessage: "Received"
    },
    offices: [
      { city: "Lagos (HQ)", line: "Victoria Island, Lagos" },
      { city: "Abuja", line: "Central Business District, Abuja" },
      { city: "Port Harcourt", line: "GRA, Port Harcourt" },
      { city: "Kano", line: "Nassarawa, Kano" },
      { city: "Accra (Ghana)", line: "Airport Residential, Accra" },
    ],
  },
  labels: {
    breadcrumbHome: "Home",
    viewDetails: "View Details →",
    orderEnquiry: "Order Enquiry",
    applyNow: "Apply Now →",
    deadline: "Deadline",
    all: "All",
    image: "image",
    share: {
      twitter: "Share on Twitter/X",
      linkedin: "Share on LinkedIn",
      whatsapp: "Share on WhatsApp",
    },
    pagination: {
      previous: "Previous",
      next: "Next",
    },
    forms: {
      submit: "Submit",
      sending: "Sending…",
    },
    fields: {
      department: "Department",
      location: "Location",
      type: "Type",
      level: "Level",
      manufacturer: "Manufacturer",
      storage: "Storage"
    }
  },
  options: {
    employmentTypes: ["Full-time", "Contract", "Internship"] as EmploymentType[],
    levels: ["Entry", "Mid", "Senior", "Manager"] as SeniorityLevel[],
    productTabs: [
      "Overview",
      "Indications",
      "Dosage & Admin",
      "Side Effects",
      "Storage",
      "Downloads",
    ],
  },
} as const;

