export type Project = {
  slug: string;
  title: string;
  description: string;
  status: string;
  tech: string[];
  image: string;
  links: { label: string; href: string }[];
  category?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "code-boss",
    title: "CodeBoss",
    description:
      "An AI-powered code review system that automatically analyzes pull requests using a multi-agent architecture that combines AST parsing, vector databases to provide context-aware code reviews on PR's.",
    status: "Live",
    category: "AI",
    tech: ["Next.js", "Bun", "Drizzle", "Tailwind"],
    image: "/CodeBoss.png",
    links: [{ label: "Visit site", href: "https://codeboss-one.vercel.app/" }],
    repo: "https://github.com/Kr1shna-exe/CodeBoss",
  },
  {
    slug: "vision2react",
    title: "Vision2React",
    description:
      "Vision2React is an automated design-to-code platform that converts Figma designs into production-ready Nextjs components by using AI-powered parallel agentic workers to generate pixel-perfect code",
    status: "Live",
    category: "AI",
    tech: ["React", "Framer Motion", "Contentful"],
    image: "/Vision2React.png",
    links: [{ label: "View site", href: "https://vision2react.vercel.app/" }],
    repo: "https://github.com/kr1shna-exe/Vision2React",
  },
  {
    slug: "n8n",
    title: "Workflow Automation",
    description:
      "A powerful, self-hosted workflow automation platform inspired by n8n. Build complex automation workflows with a visual node-based editor, connect different services, and let them work together.",
    status: "Live",
    category: "Full-Stack",
    tech: ["Next.js", "Postgres", "D3.js"],
    image: "/New_N8N.png",
    links: [
      { label: "Visit site", href: "https://n8-n-web.vercel.app/signin" },
    ],
    repo: "https://github.com/kr1shna-exe/N8N",
  },
  {
    slug: "exness",
    title: "Trading Platform",
    description:
      "A high-performance, real-time cryptocurrency trading platform that has features like live price streaming, multiple timeframe candlestick charts, simple and leveraged trading positions.",
    status: "In Production",
    category: "Full-Stack",
    tech: ["Next.js", "Postgres", "D3.js"],
    image: "/placeholders/project-dark.svg",
    links: [{ label: "Visit site", href: "" }],
    repo: "https://github.com/kr1shna-exe/Exness",
  },
  {
    slug: "trimfit",
    title: "Trimfit",
    description:
      "An AI-powered resume optimization platform that helps job seekers land more interviews faster by analyzing and tailoring resumes to specific job descriptions.",
    status: "Live",
    category: "AI",
    tech: ["Next.js", "Postgres", "D3.js"],
    image: "/TrimFit.png",
    links: [{ label: "Visit site", href: "https://trim-fit.vercel.app/" }],
    repo: "https://github.com/kr1shna-exe/TrimFit",
  },
  {
    slug: "twisense",
    title: "Twisense",
    description:
      "An AI-powered resume optimization platform that helps job seekers land more interviews faster by analyzing and tailoring resumes to specific job descriptions.",
    status: "Live",
    category: "AI",
    tech: ["Next.js", "Postgres", "D3.js"],
    image: "/Twisense.png",
    links: [{ label: "Visit site", href: "https://twisense.vercel.app/" }],
    repo: "https://github.com/kr1shna-exe/TWISENSE",
  },
];
