import type { NewsArticle } from "@/lib/types/news";

const news: NewsArticle[] = [
  {
    slug: "novamed-opens-rd-centre-lagos",
    title: "NovaMed commissions new R&D Centre in Lagos to accelerate local innovation",
    category: "Press Releases",
    date: "2025-11-18",
    excerpt:
      "The new facility expands formulation science, stability testing, and bioequivalence partnerships — strengthening Nigeria’s medicine security.",
    author: "Corporate Communications",
    image:
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1600&q=80",
    content: `## A new chapter for Nigerian pharmaceutical science

NovaMed Pharmaceuticals Ltd. today commissioned a new **Research & Development Centre** in Victoria Island, Lagos. The centre will focus on formulation optimization, stability testing, and technology transfer partnerships aimed at increasing access to quality-assured medicines across Africa.

### What this means

- Expanded analytical capabilities for batch release support  
- Faster reformulation cycles for tropical stability requirements  
- Stronger collaboration with universities and research institutes  

> “Building science capacity at home is how we build trust across the continent.” — NovaMed Executive Team
`,
  },
  {
    slug: "nafdac-recognises-quality-systems",
    title: "NovaMed quality systems receive NAFDAC recognition during routine inspection",
    category: "Industry News",
    date: "2025-09-02",
    excerpt:
      "Inspectors highlighted improved traceability, training compliance, and continuous improvement across manufacturing lines.",
    author: "Quality Assurance Unit",
    image:
      "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=1600&q=80",
    content: `## Continuous improvement as a discipline

NovaMed completed a routine inspection with commendations for strengthened quality systems, including:

- Supplier qualification and raw material traceability  
- Line clearance and change control discipline  
- Deviation management and CAPA effectiveness  

NovaMed remains committed to **cGMP** and patient safety as the foundation of everything we manufacture.`,
  },
  {
    slug: "community-health-outreach-2025",
    title: "Community health outreach reaches 6,000 residents across Lagos mainland",
    category: "Events",
    date: "2025-07-20",
    excerpt:
      "Free screening, counselling, and health education delivered through NovaMed’s CSR partnerships.",
    author: "CSR Desk",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f?auto=format&fit=crop&w=1600&q=80",
    content: `## Beyond medicine: building communities

NovaMed’s outreach programme delivered:

- Blood pressure and glucose screenings  
- Maternal and child health counselling  
- Referral support to partner primary health centres  

We thank our partner NGOs and local health authorities for enabling measurable impact.`,
  },
  {
    slug: "health-tips-antibiotics-use",
    title: "Health Tips: Using antibiotics responsibly to protect families and communities",
    category: "Health Tips",
    date: "2025-05-11",
    excerpt:
      "Antibiotic misuse increases resistance. Here are simple steps to use them safely and effectively.",
    author: "Medical Affairs",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1600&q=80",
    content: `## Antibiotics: do’s and don’ts

**Do:**
- Take antibiotics only when prescribed by a qualified clinician  
- Complete the full course even if you feel better  
- Report side effects promptly

**Don’t:**
- Share antibiotics with others  
- Use leftover antibiotics  
- Pressure providers for antibiotics when the illness is likely viral

Antibiotic stewardship is a shared responsibility.`,
  },
  {
    slug: "novamed-wins-manufacturing-excellence-award",
    title: "NovaMed receives Manufacturing Excellence Award at West Africa Health Summit",
    category: "Awards",
    date: "2025-03-29",
    excerpt:
      "The award recognises quality, workforce development, and supply reliability across essential medicines.",
    author: "Corporate Affairs",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=80",
    content: `## Recognition for consistency

NovaMed was honoured for:

- Consistent batch quality and documentation  
- Local talent development and training systems  
- Distribution resilience across multiple markets  

We dedicate this award to our teams across Lagos, Ogun, and Abuja projects.`,
  },
  {
    slug: "who-alignment-quality-brief",
    title: "Quality Brief: How NovaMed aligns with WHO guidance for essential medicines",
    category: "Industry News",
    date: "2025-02-14",
    excerpt:
      "From supplier qualification to pharmacovigilance, quality is a full lifecycle commitment.",
    author: "Regulatory & Compliance",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    content: `## Quality is end-to-end

NovaMed’s alignment principles include:

- Risk-based supplier qualification  
- Validated manufacturing processes  
- Stability protocols suited to African climates  
- Post-market surveillance and adverse event reporting

Our teams continuously review guidance and improve systems.`,
  },
  {
    slug: "novamed-expands-export-range",
    title: "NovaMed expands export range to support regional supply resilience",
    category: "Press Releases",
    date: "2024-11-08",
    excerpt:
      "New dossiers and packaging updates strengthen export readiness across priority therapeutic areas.",
    author: "Export Operations",
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1600&q=80",
    content: `## Building resilience across markets

NovaMed is expanding export dossiers and pack configurations to support reliable access in partner markets, with a focus on:

- Antimalarials  
- Antibiotics  
- Gastrointestinal therapies  

This work supports health system continuity and reduces stockout risk.`,
  },
  {
    slug: "event-career-fair-stem",
    title: "NovaMed hosts STEM career fair to inspire Nigeria’s next generation of scientists",
    category: "Events",
    date: "2024-08-23",
    excerpt:
      "Students engaged with formulation scientists, quality leaders, and manufacturing teams through interactive sessions.",
    author: "People & Culture",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80",
    content: `## Investing in future talent

NovaMed’s STEM engagement included:

- Mini-labs and safety demonstrations  
- Sessions on quality, manufacturing, and regulatory science  
- Mentoring and internship pathways

We believe talent development is essential for national health security.`,
  },
];

export async function getNews(): Promise<NewsArticle[]> {
  return news
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  const all = await getNews();
  return all.find((x) => x.slug === slug) ?? null;
}

export async function getNewsCategories(): Promise<string[]> {
  const all = await getNews();
  return Array.from(new Set(all.map((x) => x.category))).sort();
}

