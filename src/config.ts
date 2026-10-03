type Project = {
  name: string;
  description: string;
  link?: string;
  skills: string[];
};

type Experience = {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
};

type SkillGroup = {
  label: string;
  items: string[];
};

export const siteConfig = {
  name: "Aryan Kasraee",
  title: "DevOps / SRE Engineer",
  description:
    "Aryan Kasraee is a DevOps/SRE engineer focused on Kubernetes, CI/CD, GitOps and highly available infrastructure.",
  tagline:
    "I keep production infrastructure boring: Kubernetes, GitOps, highly available data layers, and CI/CD that tells the truth.",
  social: {
    email: "aryankasraee@gmail.com",
    linkedin: "https://www.linkedin.com/in/aryan-kasraee",
    twitter: "https://x.com/aryankasraee",
    github: "https://github.com/aryankasraee",
  },
  aboutMe: [
    "DevOps/SRE engineer focused on platform reliability for multi-tenant SaaS. I design, run, and own production infrastructure end to end: Kubernetes, GitOps delivery, and highly available data layers (PostgreSQL with Patroni, MongoDB replica sets, Valkey with Sentinel).",
    "I care about what happens when things fail: failover design, backup and restore drills, and centralized logging and alerting that cuts time to detect. I automate everything repeatable, and I write the runbooks for what isn't.",
  ],
  skills: [
    {
      label: "Orchestration & delivery",
      items: ["Kubernetes", "Docker", "GitOps", "CI/CD", "Jenkins", "GitHub Actions"],
    },
    {
      label: "Data & high availability",
      items: ["PostgreSQL / Patroni", "MongoDB replica sets", "Valkey / Sentinel", "Backup & restore"],
    },
    {
      label: "Observability",
      items: ["Prometheus", "Grafana", "Centralized logging", "Alerting"],
    },
    {
      label: "Systems",
      items: ["Linux", "PowerDNS", "Networking", "Python"],
    },
  ] as SkillGroup[],
  projects: [
    {
      name: "patroni-ha-lab",
      description:
        "A three-node PostgreSQL cluster (Patroni, etcd, HAProxy) you can break on purpose. A drill kills the primary under write load and measures what clients see: 0 acknowledged writes lost, about 17 seconds without writes. A second drill restores a replica backup into a clean container and compares row counts.",
      link: "https://github.com/aryankasraee/patroni-ha-lab",
      skills: ["PostgreSQL", "Patroni", "HAProxy", "Docker Compose"],
    },
    {
      name: "gitops-platform",
      description:
        "GitOps on a laptop: a kind cluster with Argo CD app-of-apps, dev and staging from one set of Kustomize manifests, default-deny network policies and Pod Security. Guardrails are checked statically in CI, then proven on a live cluster.",
      link: "https://github.com/aryankasraee/gitops-platform",
      skills: ["Kubernetes", "Argo CD", "Kustomize", "Network policy"],
    },
    {
      name: "sre-observability",
      description:
        "A service that fails on purpose and the monitoring that must notice. Multi-window, multi-burn-rate SLO alerts with promtool unit tests (checked by mutation), Alertmanager routing, Loki logs, and a live chaos drill: the alert fires in about 20 seconds in the lab profile.",
      link: "https://github.com/aryankasraee/sre-observability",
      skills: ["Prometheus", "Alertmanager", "Grafana", "Loki", "SLOs"],
    },
    {
      name: "tls-edge-on-demand",
      description:
        "A multi-tenant HTTPS edge that issues certificates on first visit and refuses names it was never told about. The drill shows what the allowlist gate prevents: 0 certificate orders versus 30 for the same flood of random names.",
      link: "https://github.com/aryankasraee/tls-edge-on-demand",
      skills: ["Caddy", "TLS", "Multi-tenancy"],
    },
    {
      name: "ci-cd-reference",
      description:
        "A working CI/CD reference for a multi-module Go monorepo: toolchain preflight, secret scanning, lint and test matrices, image builds with SBOMs, and a watchdog that alerts when main is red or untested.",
      link: "https://github.com/aryankasraee/ci-cd-reference",
      skills: ["GitHub Actions", "Go", "Docker", "SBOM"],
    },
    {
      name: "sre-runbooks",
      description:
        "Runbooks and a postmortem template for 3 a.m. use. Each runbook states how it was verified, and CI enforces the template and checks links.",
      link: "https://github.com/aryankasraee/sre-runbooks",
      skills: ["Incident response", "Runbooks", "Postmortems"],
    },
  ] as Project[],
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
};
