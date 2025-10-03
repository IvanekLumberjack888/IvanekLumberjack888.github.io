// ===============================================
// MODERN PORTFOLIO APPLICATION
// ===============================================

class PortfolioApp {
  constructor() {
    this.skillsData = [
      {
        icon: 'code',
        title: 'Programování',
        skills: [
          { name: 'Python', level: 95 },
          { name: 'SQL', level: 90 },
          { name: 'PostgreSQL', level: 85 },
          { name: 'Web Scraping', level: 88 }
        ]
      },
      {
        icon: 'bar-chart-3',
        title: 'Vizualizace dat',
        skills: [
          { name: 'Power BI', level: 92 },
          { name: 'DAX', level: 87 },
          { name: 'Dashboards', level: 90 },
          { name: 'Reporting', level: 85 }
        ]
      },
      {
        icon: 'settings',
        title: 'Systémy',
        skills: [
          { name: 'SharePoint', level: 88 },
          { name: 'Power Automate', level: 82 },
          { name: 'M365', level: 85 },
          { name: 'Digitalizace', level: 90 }
        ]
      }
    ];

    this.projectsData = [
      {
        title: 'Text Analyzer',
        description: 'Pokročilý nástroj pro analýzu textových dat s využitím Python knihoven a NLP algoritmů. Aplikace umožňuje zpracování různých formátů textových souborů.',
        icon: 'file-text',
        tech: ['Python', 'Pandas', 'NLP', 'Streamlit'],
        github: 'https://github.com/IvanekLumberjack888/text_analyzer',
        demo: 'https://ivaneklumberjack888.github.io/text_analyzer/'
      },
      {
        title: 'Bulls & Cows Game',
        description: 'Interaktivní logická hra implementovaná v Pythonu s elegantním algoritmem pro generování a vyhodnocování tipů. Obsahuje statistiky a různé obtížnosti.',
        icon: 'gamepad-2',
        tech: ['Python', 'Algoritmy', 'Game Logic', 'CLI'],
        github: 'https://github.com/IvanekLumberjack888/Bulls-and-Cows',
        demo: 'https://ivaneklumberjack888.github.io/Bulls-and-Cows/'
      },
      {
        title: 'Election Scraper',
        description: 'Robustní web scraping nástroj pro automatizovaný sběr a analýzu volebních dat z oficiálních zdrojů. Data jsou transformována do strukturovaných formátů.',
        icon: 'globe',
        tech: ['Python', 'Web Scraping', 'BeautifulSoup', 'Requests'],
        github: 'https://github.com/IvanekLumberjack888/Elections-Scraper',
        demo: 'https://ivaneklumberjack888.github.io/Elections-Scraper/'
      },
      {
        title: 'HDP vs Mzdy Analýza',
        description: 'Komplexní SQL analýza ekonomických dat zaměřená na vztah mezi HDP a průměrnými mzdami v České republice v období 2006-2018.',
        icon: 'trending-up',
        tech: ['SQL', 'PostgreSQL', 'Data Analysis', 'Economics'],
        github: 'https://github.com/IvanekLumberjack888/sql-projekt-engeto',
        demo: 'https://ivaneklumberjack888.github.io/sql-projekt-engeto/'
      },
      {
        title: 'Power BI Dashboard',
        description: 'Interaktivní business intelligence dashboard s pokročilými DAX formulemi, dynamickými vizualizacemi a možností real-time aktualizace dat.',
        icon: 'bar-chart',
        tech: ['Power BI', 'DAX', 'Data Modeling', 'KPIs'],
        github: 'https://github.com/IvanekLumberjack888/PowerBI-for-Engeto',
        demo: 'https://ivaneklumberjack888.github.io/PowerBI-for-Engeto/'
      }
    ];

    this.contactData = [
      {
        title: 'Email',
        value: 'ivousd@gmail.com',
        icon: 'mail',
        href: 'mailto:ivousd@gmail.com'
      },
      {
        title: 'GitHub',
        value: 'IvanekLumberjack888',
        icon: 'github',
        href: 'https://github.com/IvanekLumberjack888'
      },
      {
        title: 'LinkedIn',
        value: 'Ivo Doležal',
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/ivodolezal888/'
      }
    ];

    this.init();
  }

  init() {
    this.initializeIcons();
    this.initializeTypingAnimation();
    this.initializeAnimations();
    this.renderSkills();
    this.renderProjects();
    this.renderContacts();
    this.initializeNavigation();
    this.initializeScrollEffects();
  }

  initializeIcons() {
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  initializeTypingAnimation() {
    if (window.Typed) {
      new Typed('#typed-name', {
        strings: ['Ivo Doležal'],
        typeSpeed: 100,
        startDelay: 1000,
        showCursor: true,
        cursorChar: '|',
        loop: false,
        onComplete: () => {
          this.addHeroAnimations();
        }
      });
    }
  }

  addHeroAnimations() {
    const elements = [
      '.hero-description',
      '.hero-stats',
      '.hero-actions'
    ];
    
    elements.forEach((selector, index) => {
      const element = document.querySelector(selector);
      if (element) {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 200);
      }
    });
  }

  initializeAnimations() {
    if (window.AOS) {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out-cubic',
        once: true,
        offset: 100
      });
    }

    // Set initial states for hero elements
    const heroElements = document.querySelectorAll('.hero-description, .hero-stats, .hero-actions');
    heroElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
  }

  renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const skillsHTML = this.skillsData.map((category, index) => `
      <div class="skill-card glass-morphism" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="skill-header">
          <div class="skill-icon">
            <i data-lucide="${category.icon}"></i>
          </div>
          <h3 class="skill-title">${category.title}</h3>
        </div>
        <div class="skills-list">
          ${category.skills.map(skill => `
            <div class="skill-item">
              <span class="skill-name">${skill.name}</span>
              <div class="skill-bar">
                <div class="skill-progress" data-level="${skill.level}"></div>
              </div>
              <span class="skill-level">${skill.level}%</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    container.innerHTML = skillsHTML;
    this.initializeIcons();
  }

  renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const projectsHTML = this.projectsData.map((project, index) => `
      <div class="project-card glass-morphism" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="project-header">
          <div class="project-icon">
            <i data-lucide="${project.icon}"></i>
          </div>
          <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
          </div>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.github}" target="_blank" class="project-link">
            <i data-lucide="github"></i>
            GitHub
          </a>
          <a href="${project.demo}" target="_blank" class="project-link">
            <i data-lucide="external-link"></i>
            Live Demo
          </a>
        </div>
      </div>
    `).join('');

    container.innerHTML = projectsHTML;
    this.initializeIcons();
  }

  renderContacts() {
    const container = document.getElementById('contact-container');
    if (!container) return;

    const contactsHTML = this.contactData.map((contact, index) => `
      <a href="${contact.href}" ${contact.href.startsWith('http') ? 'target="_blank"' : ''} 
         class="contact-card glass-morphism" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="contact-icon">
          <i data-lucide="${contact.icon}"></i>
        </div>
        <div class="contact-details">
          <h4>${contact.title}</h4>
          <p>${contact.value}</p>
        </div>
      </a>
    `).join('');

    container.innerHTML = contactsHTML;
    this.initializeIcons();
  }

  initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    this.initializeActiveNavigation();
  }

  initializeActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-80px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  }

  initializeScrollEffects() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
      skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          const level = bar.getAttribute('data-level');
          setTimeout(() => {
            bar.style.width = level + '%';
          }, Math.random() * 500);
        }
      });
    };

    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(animateSkillBars, 500);
        }
      });
    }, { threshold: 0.3 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsObserver.observe(skillsSection);
    }

    this.initializeParallaxEffects();
  }

  initializeParallaxEffects() {
    const heroBackground = document.querySelector('.hero-background');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      
      if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    });
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});

// Performance optimizations
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Smooth scrolling polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
  document.head.appendChild(script);
  script.onload = () => {
    window.__forceSmoothScrollPolyfill__ = true;
    smoothscroll.polyfill();
  };
}

// Lazy loading for better performance
const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Error handling and analytics
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
});

// Dark mode detection and handling
const handleColorSchemeChange = (e) => {
  const isDark = e.matches;
  document.body.classList.toggle('dark-mode', isDark);
  
  // Update any dynamic elements based on color scheme
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.content = isDark ? '#100E12' : '#FCFCF9';
  }
};

if (window.matchMedia) {
  const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  colorSchemeQuery.addListener(handleColorSchemeChange);
  handleColorSchemeChange(colorSchemeQuery);
}

export default PortfolioApp;
