const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

/* SVG icons */
const sun = `
<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" stroke="currentColor"/>
  <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"
    stroke="currentColor"/>
</svg>`;

const moon = `
<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" stroke="currentColor"/>
</svg>`;

/* Theme */
function setTheme(isDark) {
  body.classList.toggle("dark", isDark);
  themeToggle.innerHTML = isDark ? sun : moon;
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

setTheme(localStorage.getItem("theme") === "dark");

themeToggle.addEventListener("click", () => {
  setTheme(!body.classList.contains("dark"));
});

/* EXPERIENCE */
const experience = [
  {
    company: "G-P (formerly: Globalization Partners)",
    period: "May 2022 — Present",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "Feb 2026 — Present",
        desc: "",
      },
      {
        title: "Software Engineer II",
        period: "Feb 2025 — Feb 2026",
        desc: "Led the migration of core services to an event-driven platform, owned key vendor relationships by driving technical alignment and resolving critical issues, and served as the primary onboarding lead for his team, successfully ramping up Engineering Managers, Product Managers, and Software Engineers up to Staff level. Represented the company at Atlantic Technological University career fairs to recruit intern candidates, and organised Internship Program presentations, panels, and Q&A sessions.",
      },
      {
        title: "Software Engineer I",
        period: "Sep 2023 — Feb 2025",
        desc: "Co-led the Internship Program by managing onboarding, providing ongoing mentorship, and supporting Software Engineering Interns, served as a domain expert on the maintained product, and collaborated with cross-functional teams including Product, Finance, and Support to deliver technical solutions and guidance. Contributed to the design and architecture of a scalable, reliable event-driven system using AWS, and onboarded and mentored an intern to support their development.",
      },
      {
        title: "Associate Software Engineer",
        period: "Aug 2023 — Sep 2023",
        desc: "Developed and maintained web applications using TypeScript, React, and Node.js to improve user experience and performance, participated in code reviews to uphold best practices and code quality, contributed to a major UI project that enhanced internal organisational efficiency, and onboarded and mentored an intern by providing guidance and support.",
      },
      {
        title: "Software Engineer Intern",
        period: "May 2022 — Aug 2023",
        desc: "Conducted manual QA to ensure software quality, wrote unit tests to improve reliability, and contributed to UI development and enhancements while gaining valuable experience working alongside skilled team members..",
      },
    ],
  },
];

const experienceList = document.getElementById("experience-list");

experience.forEach((company) => {
  const companyEl = document.createElement("div");
  companyEl.className = "card company-card";

  companyEl.innerHTML = `
    <div class="company-header">
      <div class="company-name">${company.company}</div>
      <div class="company-period">${company.period}</div>
    </div>

    <div class="roles">
      ${company.roles
        .map(
          (role) => `
        <div class="role-block">
          <div class="role-header">
            <span class="role-title">${role.title}</span>
            <span class="role-period">${role.period}</span>
          </div>
          <p class="role-desc">${role.desc}</p>
        </div>
      `,
        )
        .join("")}
    </div>
  `;

  experienceList.appendChild(companyEl);
});

/* PROJECTS */
const projects = [
  {
    name: "Online CV",
    desc: "Minimal personal website built with HTML, CSS and JavaScript.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Oskar-Ciebien/Oskar-Ciebien.github.io",
      },
      { label: "Live link", url: "https://oskar-ciebien.github.io/" },
    ],
  },
];

const projectsList = document.getElementById("projects-list");

projects.forEach((p) => {
  const el = document.createElement("div");
  el.className = "card";

  el.innerHTML = `
    <div class="project-title">${p.name}</div>
    <div class="project-desc">${p.desc}</div>

    <div class="project-links">
      ${p.links
        .map(
          (l) => `
        <a class="project-btn" href="${l.url}" target="_blank">
          ${l.label}
          <span>↗</span>
        </a>
      `,
        )
        .join("")}
    </div>
  `;

  projectsList.appendChild(el);
});

/* EXPERIENCE YEARS */
const startYear = 2022;
document.getElementById("yearsOfExperience").textContent =
  new Date().getFullYear() - startYear;
