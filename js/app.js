document.addEventListener('DOMContentLoaded', function() {
  // Name Typing Animation
  new Typed('#typed-name', {
    strings: ['Ivo Doležal'],
    typeSpeed: 88,
    showCursor: true,
    cursorChar: '|',
    loop: false,
    backSpeed: 0
  });

  // Skills Data
  const skillsData = [
    {
      category: 'Programming',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Web Scraping', level: 88 }
      ]
    },
    {
      category: 'Data Visualization',
      skills: [
        { name: 'Power BI', level: 92 },
        { name: 'DAX', level: 87 },
        { name: 'Dashboards', level: 90 },
        { name: 'Reporting', level: 85 }
      ]
    },
    {
      category: 'Systems',
      skills: [
        { name: 'SharePoint', level: 88 },
        { name: 'Power Automate', level: 82 },
        { name: 'M365', level: 85 },
        { name: 'Digitalization', level: 90 }
      ]
    }
  ];

  // Render Skills dynamically
  const skillsContainer = document.getElementById('skills-container');
  skillsContainer.innerHTML = '';
  skillsData.forEach(group => {
    const card = document.createElement('div');
    card.className = 'skill-card glass-card';
    let html = `<div class="skill-header">${group.category}</div>`;
    group.skills.forEach(skill => {
      html += `
        <div class="skill-item">
          <div class="skill-title">${skill.name}</div>
          <div class="skill-bar">
            <div class="skill-progress" style="width:0%;" data-final="${skill.level}"></div>
          </div>
          <span class="skill-level">${skill.level}%</span>
        </div>
      `;
    });
    card.innerHTML = html;
    skillsContainer.appendChild(card);
  });
  // Animate Progress Bars
  setTimeout(() => {
    document.querySelectorAll('.skill-progress').forEach(bar => {
      bar.style.width = bar.getAttribute('data-final') + '%';
    });
  }, 300);

  // Projects Data
  const projectsData = [
    {
      title: 'Text Analyzer',
      description: 'Advanced tool for text data analysis using Python libraries and NLP algorithms.',
      tech: ['Python', 'Pandas', 'NLP'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Bulls & Cows Game',
      description: 'Interactive logic game implemented in Python with a clean algorithm.',
      tech: ['Python', 'Algorithms', 'Game Logic'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Election Scraper',
      description: 'Robust web scraping tool for collecting and analyzing election data.',
      tech: ['Python', 'Web Scraping', 'Data Analysis'],
      github: '#',
      demo: '#'
    }
  ];

  // Render Projects dynamically
  const projectsContainer = document.getElementById('projects-container');
  projectsContainer.innerHTML = '';
  projectsData.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card glass-card';
    let html = `<div class="project-title">${project.title}</div>
      <div class="project-description">${project.description}</div>
      <div class="project-tech">`;
    project.tech.forEach(t => {
      html += `<span class="tech-badge">${t}</span>`;
    });
    html += `</div>
      <div class="project-links">
        ${project.github !== '#' ? `<a href="${project.github}" class="project-link" target="_blank">GitHub</a>` : ''}
        ${project.demo !== '#' ? `<a href="${project.demo}" class="project-link" target="_blank">Demo</a>` : ''}
      </div>`;
    card.innerHTML = html;
    projectsContainer.appendChild(card);
  });
});
