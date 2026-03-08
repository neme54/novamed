import type { BoardMember, TeamMember } from "@/lib/types/team";

export const leadershipTeam: TeamMember[] = [
  {
    id: "ceo",
    name: "Dr. Teniola Adeyemi",
    title: "Chief Executive Officer",
    bio: "A pharmacist and healthcare leader focused on expanding access to quality-assured medicines across Africa through disciplined manufacturing and ethical partnerships.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    id: "coo",
    name: "Amaka Nwosu",
    title: "Chief Operating Officer",
    bio: "Operations executive with a track record in supply resilience, plant performance, and workforce development across multi-site manufacturing.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    id: "cmo",
    name: "Kola Okafor",
    title: "Chief Medical Officer",
    bio: "Clinical strategy leader supporting responsible product use, pharmacovigilance, and medical education aligned with public health priorities.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    id: "cfo",
    name: "Zainab Bello",
    title: "Chief Financial Officer",
    bio: "Finance leader focused on transparent reporting, disciplined investment, and long-term value creation for stakeholders.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    id: "rd",
    name: "Dr. Ifeanyi Nnamdi",
    title: "Director, Research & Development",
    bio: "Formulation scientist building local innovation capacity, stability readiness for African climates, and technology transfer partnerships.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    id: "mfg",
    name: "Chidinma Eze",
    title: "Director, Manufacturing",
    bio: "Manufacturing excellence leader with deep experience in oral solids and continuous improvement programmes across regulated environments.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    id: "reg",
    name: "Adewale Hassan",
    title: "Director, Regulatory & Compliance",
    bio: "Regulatory specialist ensuring robust licensing, inspection readiness, and lifecycle stewardship aligned with NAFDAC and international expectations.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    id: "sales",
    name: "Uche Nwankwo",
    title: "Director, Sales & Market Access",
    bio: "Commercial leader building ethical, data-informed go-to-market strategies that support availability and appropriate use.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
  },
];

export const boardOfDirectors: BoardMember[] = [
  {
    id: "chair",
    name: "Engr. Amina Yusuf",
    role: "Board Chair",
    background:
      "Corporate governance leader with experience in industrial manufacturing, risk oversight, and strategic growth.",
  },
  {
    id: "ind-1",
    name: "Prof. Chukwuemeka Obi",
    role: "Independent Non-Executive Director",
    background:
      "Academic and public health adviser with expertise in medicine policy, quality systems, and patient safety.",
  },
  {
    id: "ind-2",
    name: "Mrs. Laila Sanusi",
    role: "Independent Non-Executive Director",
    background:
      "Finance and audit specialist with strong oversight in reporting integrity and compliance controls.",
  },
  {
    id: "exec",
    name: "Dr. Teniola Adeyemi",
    role: "Executive Director",
    background:
      "Chief Executive Officer providing operational leadership and long-term strategy execution.",
  },
];

export const milestones = [
  { year: 1981, title: "Founded", detail: "NovaMed begins as a local manufacturer focused on essential medicines." },
  { year: 1995, title: "First export", detail: "First regional exports with strengthened quality systems and distribution." },
  { year: 2003, title: "ISO Certified", detail: "ISO-aligned quality management systems to support consistent output." },
  { year: 2010, title: "WHO Prequalification", detail: "Quality alignment to international expectations and dossier discipline." },
  { year: 2018, title: "West Africa expansion", detail: "Broader market coverage supported by export-ready packaging and logistics." },
  { year: 2024, title: "New R&D Centre", detail: "R&D centre commissioned to accelerate local formulation and tech transfer." },
] as const;

export async function getLeadershipTeam(): Promise<TeamMember[]> {
  return leadershipTeam;
}

export async function getBoard(): Promise<BoardMember[]> {
  return boardOfDirectors;
}

export async function getMilestones() {
  return milestones;
}

