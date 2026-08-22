export type ProjectCategory = 'Reports' | 'Presentations' | 'Brand' | 'Digital';

export type ProjectVisualBlock = {
  id: string;
  layout: 'full' | 'pair-left' | 'pair-right';
  variant: 'cover' | 'spread' | 'system' | 'detail';
  caption: string;
  alt: string;
};

export type Project = {
  slug: string;
  client: string;
  title: string;
  year: string;
  category: ProjectCategory;
  label: string;
  intro: string;
  theme: { background: string; foreground: string; accent: string; secondary: string };
  featuredOrder: number;
  seo: { title: string; description: string };
  visuals: ProjectVisualBlock[];
};

const standardVisuals = (slug: string, noun: string): ProjectVisualBlock[] => [
  { id: `${slug}-01`, layout: 'full', variant: 'cover', caption: `Opening ${noun}`, alt: `Conceptual opening design for the ${noun}` },
  { id: `${slug}-02`, layout: 'pair-left', variant: 'spread', caption: 'Editorial system', alt: 'Paired layouts demonstrating the editorial system' },
  { id: `${slug}-03`, layout: 'pair-right', variant: 'detail', caption: 'Information detail', alt: 'Close-up of typography and information design details' },
  { id: `${slug}-04`, layout: 'full', variant: 'system', caption: 'Complete visual language', alt: 'A wide composition showing the complete visual language' },
];

export const projects: Project[] = [
  {
    slug: 'aster-field-growth-grounded', client: 'Aster & Field', title: 'Growth, Grounded', year: '2026', category: 'Reports', label: 'Annual Report', featuredOrder: 1,
    intro: 'Aster & Field is a fictional agricultural group used to demonstrate how a complex annual report can become a confident, readable narrative. The concept brings operational scale and a close relationship with the land into one visual system. Expansive typography establishes pace, while muted field tones and precise data graphics keep the information grounded. The report moves between quiet editorial moments, rigorous financial communication and vivid section openers without losing consistency. Every page is designed to help a broad audience find meaning quickly: investors can scan performance, employees can recognise the organisation’s character, and partners can understand its long-term direction. A modular grid also gives financial tables, leadership messages and performance summaries a shared structure, allowing very different types of content to feel connected across the document. The result is a report system that feels credible and contemporary—expressive enough to hold attention, restrained enough to let important information lead.',
    theme: { background: '#b4c3a8', foreground: '#152415', accent: '#c7ff38', secondary: '#f5f0dc' },
    seo: { title: 'Growth, Grounded — Annual Report Concept', description: 'A fictional annual-report design concept exploring clear corporate storytelling and editorial systems.' },
    visuals: standardVisuals('aster', 'annual report'),
  },
  {
    slug: 'northstar-resilience-in-motion', client: 'Northstar Mutual', title: 'Resilience in Motion', year: '2026', category: 'Reports', label: 'Sustainability Communication', featuredOrder: 2,
    intro: 'Northstar Mutual is a fictional insurance organisation created to explore a more human form of sustainability communication. Instead of treating environmental and social performance as a separate technical layer, the visual direction connects every metric to movement, protection and everyday life. A deep blue foundation signals trust, while electric coral accents guide readers through priority themes and measurable progress. The flexible editorial system makes dense tables, targets and governance information easy to navigate without flattening the story. Large statements create moments of conviction between detailed spreads, and a disciplined icon language keeps recurring information familiar. Case examples, commitments and year-on-year results share a repeatable visual grammar, helping the reader distinguish narrative context from verified performance at a glance. The concept shows how a corporate sustainability narrative can remain robust and evidence-led while still feeling active, accessible and emotionally relevant to customers, employees and long-term stakeholders.',
    theme: { background: '#1836d3', foreground: '#f5f3ea', accent: '#ff6a54', secondary: '#a9b9ff' },
    seo: { title: 'Resilience in Motion — Sustainability Concept', description: 'A fictional sustainability-communication concept balancing human storytelling with measurable performance.' },
    visuals: standardVisuals('northstar', 'sustainability review'),
  },
  {
    slug: 'meridian-signals-of-growth', client: 'Meridian Futures', title: 'Signals of Growth', year: '2026', category: 'Presentations', label: 'Investor Communication', featuredOrder: 3,
    intro: 'Meridian Futures is a fictional investment platform used to demonstrate clear, persuasive investor communication. The presentation system translates a wide range of market signals into one calm visual language, allowing the audience to understand opportunity without being overwhelmed by analysis. Strong numerical moments anchor each chapter, supported by modular charts, compact annotations and a deliberate rhythm between evidence and interpretation. The palette combines a dark institutional base with optimistic yellow, giving the material energy without compromising credibility. Slides are designed for both live delivery and independent reading, so every page has an immediate message and enough context to stand alone. Clear transitions connect market context, portfolio logic, performance and outlook, ensuring the story builds deliberately instead of feeling like a sequence of isolated data points. The concept reflects a simple principle: when information is structured with care, sophisticated financial ideas can feel direct, memorable and ready for a decision.',
    theme: { background: '#191919', foreground: '#f3f0e7', accent: '#ffd93d', secondary: '#5d5d5d' },
    seo: { title: 'Signals of Growth — Investor Presentation Concept', description: 'A fictional investor-presentation system turning complex market information into a focused narrative.' },
    visuals: standardVisuals('meridian', 'investor presentation'),
  },
  {
    slug: 'common-thread-everyday-systems', client: 'Common Thread', title: 'Everyday Systems', year: '2026', category: 'Brand', label: 'Brand Communication', featuredOrder: 4,
    intro: 'Common Thread is a fictional workplace-culture consultancy created to show how a brand can make abstract organisational ideas tangible. The communication system begins with a simple woven grid that expands into typography, patterns, diagrams and campaign layouts. Warm red and soft cream create a voice that is energetic but considered, while a compact set of modular rules makes the identity easy to apply across reports, workshops and digital touchpoints. Rather than decorating the consultancy’s thinking, the visual language helps explain it: relationships become visible, systems feel navigable and shared progress becomes something audiences can picture. A flexible hierarchy gives facilitators room for practical instructions, research findings and bold provocations while keeping the consultancy recognisable in every setting. The concept demonstrates a brand built to work hard in real communication—distinctive at a distance, useful in detail and flexible enough to remain coherent across many formats and moments.',
    theme: { background: '#e8583f', foreground: '#24130f', accent: '#f7efdb', secondary: '#7b211b' },
    seo: { title: 'Everyday Systems — Brand Communication Concept', description: 'A fictional brand-communication system that makes organisational ideas tangible and memorable.' },
    visuals: standardVisuals('common-thread', 'brand system'),
  },
  {
    slug: 'vertex-ideas-in-focus', client: 'Vertex Studio', title: 'Ideas in Focus', year: '2026', category: 'Presentations', label: 'Corporate Presentation', featuredOrder: 5,
    intro: 'Vertex Studio is a fictional technology consultancy used to demonstrate a presentation system for senior conversations. The deck is designed to make complex recommendations feel composed, specific and easy to act on. Each slide carries one clear idea, with a consistent hierarchy that separates the main message from evidence, context and next steps. Oversized type creates confidence, restrained diagrams clarify relationships, and a vivid violet accent gives the system a recognisable presence without distracting from the content. The modular layout adapts to strategy, capability, roadmap and case-example slides while keeping the narrative connected. Carefully planned section dividers and summary slides help presenters control pace, return to the core argument and make decisions visible as the discussion develops. Built for both boardroom display and document-style reading, the concept shows how presentation design can improve the quality of a conversation—not simply by making slides look better, but by making the thinking itself easier to follow.',
    theme: { background: '#6c43e0', foreground: '#f5f0ff', accent: '#d7ff54', secondary: '#2e185f' },
    seo: { title: 'Ideas in Focus — Corporate Presentation Concept', description: 'A fictional corporate-presentation system designed for clear senior-level conversations.' },
    visuals: standardVisuals('vertex', 'corporate presentation'),
  },
  {
    slug: 'lumen-clarity-on-screen', client: 'Lumen Works', title: 'Clarity, On Screen', year: '2026', category: 'Digital', label: 'Digital Experience', featuredOrder: 6,
    intro: 'Lumen Works is a fictional operations platform created to explore how the same principles behind strong reports can improve a digital product. The interface organises complex workflows into calm, legible views with a clear distinction between status, priority and action. A light editorial canvas keeps the experience approachable, while black structural elements and a sharp cyan accent make navigation immediate. Dashboards avoid decorative data and focus on the signals people need to move work forward. Reusable modules establish consistency across overview, project and performance views, with responsive layouts that preserve hierarchy on smaller screens. Thoughtful empty states, compact filters and clear feedback patterns support everyday use without introducing visual noise or asking people to relearn familiar interactions. The concept positions digital design as communication design in motion: information changes, users make decisions and the system must keep every interaction clear. The result feels capable, precise and quiet enough for daily use.',
    theme: { background: '#dceff0', foreground: '#101d1e', accent: '#12d4d0', secondary: '#ffffff' },
    seo: { title: 'Clarity, On Screen — Digital Experience Concept', description: 'A fictional digital-product concept applying editorial clarity to complex operational workflows.' },
    visuals: standardVisuals('lumen', 'digital interface'),
  },
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
export const nextProject = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
};
