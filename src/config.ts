type Project = {
  name: string;
  description: string;
  link?: string;
  skills: string[];
};

type Education = {
  school: string;
  degree: string;
  dateRange: string;
  achievements: string[];
};

type Experience = {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
};

export const siteConfig = {
  name: "Aryan Kasraee",
  title: "DevOps / SRE Engineer",
  description:
    "Aryan Kasraee is a DevOps/SRE engineer focused on Kubernetes, CI/CD, GitOps and highly available infrastructure.",
  accentColor: "#1d4ed8",
  social: {
    email: "aryankasraee@gmail.com",
    linkedin: "https://www.linkedin.com/in/aryan-kasraee",
    twitter: "https://x.com/aryankasraee",
    github: "https://github.com/aryankasraee",
  },
  aboutMe:
    "DevOps/SRE engineer focused on platform reliability for multi-tenant SaaS. I design, run, and own production infrastructure end to end: Kubernetes, GitOps delivery, and highly available data layers (PostgreSQL with Patroni, MongoDB replica sets, Valkey with Sentinel). I care about what happens when things fail: failover design, backup and restore drills, and centralized logging and alerting that cuts time to detect. I automate everything repeatable, and I write the runbooks for what isn't.",
  skills: [
    "Kubernetes",
    "CI/CD",
    "GitOps",
    "Linux",
    "Docker",
    "PostgreSQL / Patroni",
    "MongoDB",
    "Valkey",
    "Prometheus / Grafana",
    "Jenkins",
    "Python",
  ],
  projects: [] as Project[],
  experience: [
    {
      company: "Classeh | School Management Platform",
      title: "DevOps Engineer",
      dateRange: "May 2025 - Present",
      bullets: [
        "Operate production Kubernetes and Docker infrastructure for a multi-tenant school management platform",
        "Run highly available data layers: PostgreSQL with Patroni, MongoDB replica sets, and Valkey with Sentinel, including failover, replica rebuilds, and backups",
        "Built centralized logging and alerting to detect and resolve incidents faster",
        "Automate deployments with CI/CD pipelines and infrastructure as code across development, staging, and production",
        "Run self-hosted DNS and edge infrastructure on PowerDNS, with API-driven automation and automated certificate renewal",
      ],
    },
    {
      company: "VItech | IT System Custom Software Development",
      title: "DevOps Engineer",
      dateRange: "Aug 2023 - May 2025",
      bullets: [
        "Deployed and managed Kubernetes clusters for high-availability workloads",
        "Designed CI/CD pipelines with Jenkins and automated deployments to speed up releases",
        "Added continuous code inspection with SonarQube to raise service quality",
        "Designed disaster recovery plans to prevent data loss during critical incidents",
        "Fixed infrastructure bottlenecks to improve service performance",
      ],
    },
    {
      company: "ShopFA | IT System Custom Software Development",
      title: "DevOps Engineer",
      dateRange: "Jul 2024 - Sep 2024",
      bullets: [
        "Migrated infrastructure from shared hosting to physical servers to improve stability",
        "Set up Prometheus and Grafana monitoring for real-time performance insights",
        "Hardened security with firewall rules and access log monitoring",
        "Automated deployment workflows to cut manual work",
      ],
    },
    {
      company: "Classeh | School Management Platform",
      title: "DevOps Engineer",
      dateRange: "Jan 2022 - Jul 2023",
      bullets: [
        "Deployed and managed Kubernetes clusters for development, staging, and production",
        "Built and maintained CI/CD pipelines to speed up delivery across environments",
        "Built a scalable BigBlueButton-based streaming platform that supported 10,000+ concurrent users at peak",
      ],
    },
  ] as Experience[],
  education: [] as Education[],
};
