import type { BoardMember, TeamMember } from "@/lib/types/team";

/** Leadership portraits — Pexels & Pixabay (saved under /public/images/team). */
const teamPhoto = (file: string) => `/images/team/${file}`;

export const leadershipTeam: TeamMember[] = [
  {
    id: "ceo",
    name: "Dr. Teniola Adeyemi",
    title: "Chief Executive Officer",
    bio: "Pharmacist and Lagos-born healthcare leader expanding access to quality-assured medicines across Nigeria and West Africa through disciplined manufacturing and ethical partnerships.",
    image: teamPhoto("teniola-adeyemi.jpg"),
  },
  {
    id: "coo",
    name: "Amaka Nwosu",
    title: "Chief Operating Officer",
    bio: "Enugu-raised operations executive with a track record in supply resilience, plant performance, and workforce development across NovaMed’s Lagos and Ogun sites.",
    image: teamPhoto("amaka-nwosu.jpg"),
  },
  {
    id: "cmo",
    name: "Kola Okafor",
    title: "Chief Medical Officer",
    bio: "Ibadan-trained physician supporting responsible product use, pharmacovigilance, and medical education aligned with NAFDAC guidance and public-health priorities.",
    image: teamPhoto("kola-okafor.jpg"),
  },
  {
    id: "cfo",
    name: "Zainab Bello",
    title: "Chief Financial Officer",
    bio: "Kano-born finance leader focused on transparent reporting, disciplined capital allocation, and long-term value creation for Nigerian stakeholders and export partners.",
    image: teamPhoto("zainab-bello.jpg"),
  },
  {
    id: "rd",
    name: "Dr. Ifeanyi Nnamdi",
    title: "Director, Research & Development",
    bio: "Formulation scientist from Anambra building local innovation capacity, stability programmes for tropical climates, and technology-transfer partnerships across Africa.",
    image: teamPhoto("ifeanyi-nnamdi.jpg"),
  },
  {
    id: "mfg",
    name: "Chidinma Eze",
    title: "Director, Manufacturing",
    bio: "Manufacturing excellence lead with deep experience in oral solids and continuous-improvement programmes across NAFDAC-regulated environments in Nigeria.",
    image: teamPhoto("chidinma-eze.jpg"),
  },
  {
    id: "reg",
    name: "Adewale Hassan",
    title: "Director, Regulatory & Compliance",
    bio: "Abuja-based regulatory specialist ensuring robust licensing, inspection readiness, and lifecycle stewardship aligned with NAFDAC and WHO expectations.",
    image: teamPhoto("adewale-hassan.jpg"),
  },
  {
    id: "sales",
    name: "Uche Nwankwo",
    title: "Director, Sales & Market Access",
    bio: "Commercial leader from Port Harcourt building ethical, data-informed go-to-market strategies that improve availability and appropriate use nationwide.",
    image: teamPhoto("uche-nwankwo.jpg"),
  },
];

export const boardOfDirectors: BoardMember[] = [
  {
    id: "chair",
    name: "Engr. Amina Yusuf",
    role: "Board Chair",
    background:
      "Kaduna-born corporate governance leader with experience in industrial manufacturing, risk oversight, and strategic growth across Nigeria.",
  },
  {
    id: "ind-1",
    name: "Prof. Chukwuemeka Obi",
    role: "Independent Non-Executive Director",
    background:
      "Nigerian academic and public-health adviser with expertise in medicine policy, quality systems, and patient safety.",
  },
  {
    id: "ind-2",
    name: "Mrs. Laila Sanusi",
    role: "Independent Non-Executive Director",
    background:
      "Lagos finance and audit specialist with strong oversight in reporting integrity and compliance controls.",
  },
  {
    id: "exec",
    name: "Dr. Teniola Adeyemi",
    role: "Executive Director",
    background:
      "Chief Executive Officer providing operational leadership and long-term strategy execution for NovaMed in Nigeria.",
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
