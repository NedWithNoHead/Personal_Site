export interface TimelineItem {
  year: string;
  title: string;
  subtitle?: string;
  duration?: string;
  website?: string;
  bulletPoints: string[];
  roles?: {
    title: string;
    bulletPoints: string[];
  }[];
}

export const timelineItems: TimelineItem[] = [
  {
    year: "2025",
    title: "Graduated from BCIT Computer Science",
    bulletPoints: [
      "Computer Information Technology Diploma (94% GPA)",
      "Specialized in data analysis, cloud technologies, and systems development"
    ]
  },
  {
    year: "2024",
    title: "BC Liquor Distribution Branch",
    website: "https://www.bcldb.com/",
    bulletPoints: [],
    roles: [
      {
        title: "Project Analyst",
        bulletPoints: [
          "Selected as top 15% of students for competitive placement",
          "Developed Power BI dashboards and Python automation solutions",
          "Led data quality testing and validation framework implementation"
        ]
      }
    ]
  },
  {
    year: "2022",
    title:  "Started Computer Science Program at BCIT",
    website: "https://www.bcit.ca/",
    bulletPoints: [
      "Enrolled in Computer Information Technology program at BCIT",
      "Began specializing in data systems and business technology solutions"
    ]
  },
  {
    year: "2017-2022",
    title: "Fujinet Systems JSC",
    website: "https://fujinet.net/",
    bulletPoints: [],
    roles: [
      {
        title: "Financial Data Analyst",
        bulletPoints: [
          "Led data-driven financial reporting and analysis across business units",
          "Developed and maintained database systems for financial tracking",
          "Created executive dashboards reducing reporting cycles by 40%",
          "Managed portfolio optimization generating $550K in revenue"
        ]
      },
      {
        title: "Business Systems Analyst",
        bulletPoints: [
          "Spearheaded ERP implementation and integration",
          "Designed and implemented automated business processes",
          "Led requirements gathering and system testing",
          "Served as technical liaison between development and business teams"
        ]
      }
    ]
  },
  {
    year: "2016",
    title: "Graduated from State University of New York at Buffalo",
    website: "https://www.buffalo.edu/",
    bulletPoints: [
      "Bachelor of Science in Business Administration",
      "Dual concentration: Management Information Systems and Financial Analysis",
      "Foundation in both business principles and information systems"
    ]
  }
];
