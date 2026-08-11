/* Tilaverse interactive corporate website — dependency-free single page application */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const icon = (name, className = '') => {
  const common = `class="icon ${className}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"`;
  const icons = {
    arrow: `<svg ${common}><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></svg>`,
    arrowUpRight: `<svg ${common}><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>`,
    chevron: `<svg ${common}><path d="m6 9 6 6 6-6"/></svg>`,
    menu: `<svg ${common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
    close: `<svg ${common}><path d="m6 6 12 12M18 6 6 18"/></svg>`,
    search: `<svg ${common}><circle cx="10.8" cy="10.8" r="6.3"/><path d="m16 16 4 4"/></svg>`,
    plus: `<svg ${common}><path d="M12 5v14M5 12h14"/></svg>`,
    check: `<svg ${common}><path d="m5 12 4.2 4.2L19 6.7"/></svg>`,
    play: `<svg ${common} fill="currentColor"><path stroke="none" d="m9 6 10 6-10 6z"/></svg>`,
    globe: `<svg ${common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.5 3.7 5.5 3.7 9S14.4 18.5 12 21c-2.4-2.5-3.7-5.5-3.7-9S9.6 5.5 12 3"/></svg>`,
    network: `<svg ${common}><circle cx="5" cy="5" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="m6.7 6.1 10.6-.2M6.3 6.8l.8 9.3M8.9 17.8l7.2.2M17.6 7.8l.3 8.2"/></svg>`,
    rocket: `<svg ${common}><path d="M14.4 5.1c2.4-.5 4.3-.2 4.3-.2s.3 1.9-.2 4.3c-.5 2.1-2.2 4.5-5.2 6.5l-2.5-2.5c2-3 4.4-4.7 6.5-5.2Z"/><path d="m10.8 13.2-3.4.9-2.5-2.5.9-3.4M12.2 15.1l-.9 3.4 2.5 2.5 3.4-.9M6.2 17.8c-1.2 1.2-3.2 1.5-3.2 1.5s.3-2 1.5-3.2"/><circle cx="15.3" cy="8.7" r="1.4"/></svg>`,
    robot: `<svg ${common}><rect x="5" y="8" width="14" height="10" rx="2"/><path d="M12 5v3M8.5 12h.01M15.5 12h.01M8 15.2c2.5 1.3 5.5 1.3 8 0M3.5 11v4M20.5 11v4"/></svg>`,
    dna: `<svg ${common}><path d="M6 3c7 3 5 15 12 18M18 3C11 6 13 18 6 21M7 6h10M5 12h14M7 18h10"/></svg>`,
    cube: `<svg ${common}><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></svg>`,
    leaf: `<svg ${common}><path d="M20 4C11 4 5 8.4 5 15c0 2.8 1.5 4.7 3.8 5 5.2.6 9.9-6.8 11.2-16Z"/><path d="M4 20c3.2-4.8 7.2-7.5 12-9"/></svg>`,
    users: `<svg ${common}><circle cx="9" cy="8" r="3"/><path d="M3.5 20v-1.5A4.5 4.5 0 0 1 8 14h2a4.5 4.5 0 0 1 4.5 4.5V20M16 5.2a3 3 0 0 1 0 5.6M18.5 14.3a4.5 4.5 0 0 1 2 3.7V20"/></svg>`,
    shield: `<svg ${common}><path d="M12 3 20 6v5.5c0 4.7-3.3 7.9-8 9.5-4.7-1.6-8-4.8-8-9.5V6l8-3Z"/><path d="m8.5 12 2.1 2.1 4.9-5"/></svg>`,
    chip: `<svg ${common}><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>`,
    code: `<svg ${common}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>`,
    chart: `<svg ${common}><path d="M4 19V5M4 19h16M8 15l3-4 3 2 5-7"/><circle cx="8" cy="15" r=".8" fill="currentColor"/><circle cx="11" cy="11" r=".8" fill="currentColor"/><circle cx="14" cy="13" r=".8" fill="currentColor"/></svg>`,
    book: `<svg ${common}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M4 19a2.5 2.5 0 0 1 2.5-2.5H20M8 7h8M8 11h7"/></svg>`,
    briefcase: `<svg ${common}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></svg>`,
    calendar: `<svg ${common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>`,
    mail: `<svg ${common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
    pin: `<svg ${common}><path d="M20 10c0 5.2-8 11-8 11S4 15.2 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
    linkedin: `<svg ${common}><path d="M5 9v10M5 5v.01M10 19v-6a4 4 0 0 1 8 0v6M10 9v10"/></svg>`,
    x: `<svg ${common}><path d="M5 4 19 20M19 4 5 20"/></svg>`,
    instagram: `<svg ${common}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r=".7" fill="currentColor" stroke="none"/></svg>`,
    youtube: `<svg ${common}><path d="M21 12s0-4-1-5-4-1-8-1-7 0-8 1-1 5-1 5 0 4 1 5 4 1 8 1 7 0 8-1 1-5 1-5Z"/><path d="m10 9 5 3-5 3Z" fill="currentColor"/></svg>`,
    download: `<svg ${common}><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>`,
    quote: `<svg ${common} viewBox="0 0 32 24" stroke="none" fill="currentColor"><path d="M0 24V13.8C0 5.5 4.1 1.4 12.2 0l1.4 3.5c-4.4 1.4-6.6 3.7-6.6 6.9H13V24H0Zm18.8 0V13.8C18.8 5.5 22.9 1.4 31 0l1.4 3.5c-4.4 1.4-6.6 3.7-6.6 6.9h6V24H18.8Z"/></svg>`,
  };
  return icons[name] || icons.arrow;
};

const logo = (compact = false) => `
  <a class="brand" href="#/" aria-label="Tilaverse home">
    <svg class="brand-mark" viewBox="0 0 38 38" aria-hidden="true"><path d="M19 2.8 34.3 9 19 35.2 3.7 9 19 2.8Z" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m19 9 8.1 3.2L19 26.8l-8.1-14.6L19 9Z" fill="currentColor"/><path d="M3.7 9 19 18.6 34.3 9M19 18.6v16.6" fill="none" stroke="currentColor" stroke-width="1.15"/></svg>
    ${compact ? '' : `<span class="brand-word"><strong>TILAVERSE</strong><small>INC.</small></span>`}
  </a>`;

const ventureData = [
  { slug: 'artificial-intelligence', title: 'Artificial Intelligence', short: 'Powering a model, built for every industry.', lede: 'Frontier intelligence that turns complex systems into useful, accountable outcomes.', image: 'venture-ai.png', icon: 'network', accent: 'cyan', stats: ['42B+ parameters in trusted models', '28 enterprise domains', '99.98% platform availability'] },
  { slug: 'space-aerospace', title: 'Space & Aerospace', short: 'Building the future beyond Earth.', lede: 'Mission systems, orbital intelligence, and resilient technology for a new space economy.', image: 'venture-space.png', icon: 'rocket', accent: 'orange', stats: ['16 active mission programs', '6 launch partners', '24/7 mission operations'] },
  { slug: 'robotics-automation', title: 'Robotics & Automation', short: 'Intelligent machines transforming industry.', lede: 'Physical intelligence designed to make high-value work safer, more precise, and more scalable.', image: 'venture-robotics.png', icon: 'robot', accent: 'blue', stats: ['3.6M automated tasks weekly', '12 industry deployments', '40% median productivity lift'] },
  { slug: 'health-biotech', title: 'Health & Biotech', short: 'Advancing human health through technology.', lede: 'A responsible platform for discovery, diagnostics, and the systems that move care forward.', image: 'venture-biotech.png', icon: 'dna', accent: 'violet', stats: ['17 research collaborations', '9 therapeutic programs', '1.2M datasets governed'] },
  { slug: 'web3-digital-assets', title: 'Web3 & Digital Assets', short: 'Building the decentralized future we deserve.', lede: 'Trusted infrastructure that gives data, identity, and digital value a more open foundation.', image: 'venture-web3.png', icon: 'cube', accent: 'teal', stats: ['15 global protocols', '$9.4B secured volume', 'Zero critical incidents'] },
  { slug: 'sustainable-future', title: 'Sustainable Future', short: 'Investing in a better tomorrow, starting today.', lede: 'Climate-positive systems that make clean growth more resilient, measurable, and inclusive.', image: 'venture-sustainability.png', icon: 'leaf', accent: 'green', stats: ['5.8 GW enabled capacity', '31% portfolio emissions reduced', '14 climate markets reached'] },
];

const technologyData = [
  { slug: 'ai-native-platforms', title: 'AI-Native Platforms', icon: 'chip', lede: 'Composable intelligence, from model to mission.', body: 'Build, deploy, govern, and evolve AI applications with the flexibility of an operating system and the assurance of enterprise-grade controls.' },
  { slug: 'research-labs', title: 'Research Labs', icon: 'book', lede: 'Research in service of the real world.', body: 'Our researchers pursue breakthroughs at the edges of artificial intelligence, computational science, autonomous systems, and materials.' },
  { slug: 'infrastructure', title: 'Infrastructure', icon: 'network', lede: 'Critical systems for computational ambition.', body: 'A global fabric of secure compute, data, edge intelligence, and observability that keeps the next generation of work in motion.' },
  { slug: 'security', title: 'Security', icon: 'shield', lede: 'Trust engineered into every layer.', body: 'Security is a design discipline, not a finish line. We protect data, models, decisions, and people with continuously verified systems.' },
  { slug: 'developers', title: 'APIs & Developers', icon: 'code', lede: 'Builders deserve an open runway.', body: 'Bring Tilaverse capabilities into your product with practical APIs, thoughtful tools, reference architectures, and a global developer community.' },
  { slug: 'open-source', title: 'Open Source', icon: 'cube', lede: 'Progress compounds in the open.', body: 'We invest in open standards, share useful research, and collaborate with the communities making foundational technology better for everyone.' },
];

const companyPages = [
  { slug: 'leadership', title: 'Leadership', lede: 'Principled builders stewarding long-term possibility.' },
  { slug: 'mission-vision', title: 'Mission & Vision', lede: 'Put intelligence, imagination, and infrastructure in service of a more capable world.' },
  { slug: 'history', title: 'Company History', lede: 'From a small research collective to a globally connected innovation ecosystem.' },
  { slug: 'governance', title: 'Governance', lede: 'Clear accountability is foundational to lasting impact.' },
];

const investorPages = [
  { slug: 'financial-reports', title: 'Financial Reports', lede: 'Results, disclosures, and context for long-term partners.' },
  { slug: 'annual-reports', title: 'Annual Reports', lede: 'A record of our progress, purpose, and performance.' },
  { slug: 'governance', title: 'Investor Governance', lede: 'Governance designed for durable value creation.' },
  { slug: 'sec-filings', title: 'Regulatory Filings', lede: 'Complete reporting and formal disclosures.' },
  { slug: 'faqs', title: 'Investor FAQs', lede: 'Answers for current and prospective investors.' },
];

const careerPages = [
  { slug: 'open-positions', title: 'Open Positions', lede: 'Find work with room to become your best.' },
  { slug: 'life-at-tilaverse', title: 'Life at Tilaverse', lede: 'Ambitious work, generous teammates, and a shared sense of possibility.' },
  { slug: 'benefits', title: 'Benefits', lede: 'Support that helps people do the work of their lives.' },
  { slug: 'diversity-inclusion', title: 'Diversity & Inclusion', lede: 'A stronger future includes more of the people building it.' },
  { slug: 'internships', title: 'Internship Program', lede: 'A launchpad for people ready to help shape what is next.' },
];

const newsroomPages = [
  { slug: 'news', title: 'News', lede: 'Company and ecosystem updates.' },
  { slug: 'press-releases', title: 'Press Releases', lede: 'Official announcements from Tilaverse.' },
  { slug: 'blog', title: 'Field Notes', lede: 'Ideas from the people building at the frontier.' },
  { slug: 'media-kit', title: 'Media Kit', lede: 'Brand assets, facts, and press contacts.' },
  { slug: 'events', title: 'Events', lede: 'Gatherings for people moving the future forward.' },
];

const legalPages = [
  { slug: 'privacy-policy', title: 'Privacy Policy', lede: 'How Tilaverse handles personal information and data.' },
  { slug: 'terms-of-service', title: 'Terms of Service', lede: 'The terms that govern use of Tilaverse digital services.' },
  { slug: 'cookie-policy', title: 'Cookie Policy', lede: 'How and why Tilaverse uses cookies and similar technologies.' },
  { slug: 'accessibility', title: 'Accessibility', lede: 'Our commitment to a more accessible digital experience.' },
  { slug: 'sitemap', title: 'Sitemap', lede: 'Find every part of the Tilaverse ecosystem.' },
];

const contactPages = [
  { slug: 'partnership', title: 'Partner With Us', lede: 'The biggest questions are better solved together.' },
  { slug: 'support', title: 'Support', lede: 'Practical help for Tilaverse customers, developers, and partners.' },
];

const newsItems = [
  { slug: 'next-gen-ai-platform', title: 'Tilaverse Inc. launches next-gen AI platform for enterprise intelligence', category: 'Technology', date: 'May 20, 2026', image: 'news-ai.png', read: '5 min read', excerpt: 'A new layer of governed intelligence gives teams a faster path from complex data to confident action.' },
  { slug: 'robotics-global-leaders', title: 'Tilaverse Robotics partners with global leaders to advance industrial automation', category: 'Ventures', date: 'May 15, 2026', image: 'news-robotics.png', read: '4 min read', excerpt: 'The alliance will bring adaptive robotics to high-value manufacturing and logistics environments.' },
  { slug: 'biotech-gene-therapies', title: 'Tilaverse Biotech initiates breakthrough program in gene therapies', category: 'Research', date: 'May 10, 2026', image: 'news-biotech.png', read: '6 min read', excerpt: 'The research program combines responsible AI and molecular modeling to accelerate discovery.' },
  { slug: 'sustainable-fund', title: 'Investing in tomorrow: sustainable fund reaches $5B milestone', category: 'Impact', date: 'May 05, 2026', image: 'news-sustainability.png', read: '3 min read', excerpt: 'New commitments will advance durable infrastructure and climate-positive growth around the world.' },
];

const jobs = [
  { id: 'J-1048', title: 'Senior Research Scientist, Foundation Models', department: 'Research Labs', location: 'San Francisco / Hybrid', type: 'Full-time', tag: 'AI' },
  { id: 'J-1056', title: 'Robotics Systems Engineer', department: 'Robotics & Automation', location: 'Boston / Hybrid', type: 'Full-time', tag: 'Robotics' },
  { id: 'J-1062', title: 'Product Counsel, Digital Trust', department: 'Legal & Policy', location: 'New York / Hybrid', type: 'Full-time', tag: 'Policy' },
  { id: 'J-1071', title: 'Climate Finance Associate', department: 'Sustainable Future', location: 'London / Hybrid', type: 'Full-time', tag: 'Impact' },
  { id: 'J-1087', title: 'Developer Experience Intern', department: 'Platform', location: 'Remote / Americas', type: 'Internship', tag: 'Developer' },
  { id: 'J-1091', title: 'Security Engineering Lead', department: 'Infrastructure', location: 'Enugu / Remote', type: 'Full-time', tag: 'Security' },
];

const navItems = [
  { label: 'About', path: '/about', children: companyPages.map(p => ({ label: p.title, path: `/about/${p.slug}` })) },
  { label: 'Ventures', path: '/ventures', children: ventureData.map(p => ({ label: p.title, path: `/ventures/${p.slug}` })) },
  { label: 'Technology', path: '/technology', children: technologyData.map(p => ({ label: p.title, path: `/technology/${p.slug}` })) },
  { label: 'Impact', path: '/impact', children: [{ label: 'Our Approach', path: '/impact' }, { label: 'Climate Action', path: '/ventures/sustainable-future' }, { label: 'Responsible Innovation', path: '/about/governance' }] },
  { label: 'Investors', path: '/investors', children: investorPages.map(p => ({ label: p.title, path: `/investors/${p.slug}` })) },
  { label: 'Careers', path: '/careers', children: careerPages.map(p => ({ label: p.title, path: `/careers/${p.slug}` })) },
  { label: 'Newsroom', path: '/newsroom', children: newsroomPages.map(p => ({ label: p.title, path: `/newsroom/${p.slug}` })) },
];

let activeTestimonial = 0;
let testimonialTimer = null;
let revealObserver = null;

function routeFromHash() {
  const raw = window.location.hash;
  if (!raw || raw === '#') return '/';
  if (!raw.startsWith('#/')) return null;
  let route = raw.slice(1).replace(/\/+$/, '');
  return route || '/';
}

function routeLink(path, label, className = '') {
  return `<a class="${className}" href="#${path}">${label}</a>`;
}

function sectionLabel(section) {
  return `<span class="eyebrow"><i></i>${section}</span>`;
}

function button(label, opts = {}) {
  const { href, className = 'button primary', iconName = 'arrow', attr = '' } = opts;
  if (href) return `<a class="${className}" href="#${href}" ${attr}>${label} ${icon(iconName)}</a>`;
  return `<button class="${className}" ${attr}>${label} ${icon(iconName)}</button>`;
}

function renderHeader(route) {
  const nav = navItems.map(item => {
    const active = route === item.path || route.startsWith(`${item.path}/`) ? 'is-active' : '';
    return `<div class="nav-item ${active}">
      <a href="#${item.path}" class="nav-link">${item.label}</a>
      <button class="nav-more" aria-label="Open ${item.label} menu" data-toggle-nav-menu="${item.label}">${icon('chevron')}</button>
      <div class="nav-dropdown" data-nav-dropdown="${item.label}">
        <span class="nav-dropdown-title">${item.label}</span>
        ${item.children.map(child => `<a href="#${child.path}">${child.label}${icon('arrowUpRight')}</a>`).join('')}
        <a href="#${item.path}" class="nav-dropdown-all">Explore ${item.label}${icon('arrow')}</a>
      </div>
    </div>`;
  }).join('');

  $('#site-header').innerHTML = `
    <div class="header-inner container">
      ${logo()}
      <nav class="primary-nav" aria-label="Primary navigation">${nav}</nav>
      <div class="header-actions">
        <a href="#/contact/partnership" class="partner-button">Partner with us</a>
        <button class="circle-button search-button" data-open-dialog="search" aria-label="Search Tilaverse">${icon('search')}</button>
        <button class="circle-button menu-button" data-toggle-mobile-menu aria-label="Open site menu" aria-expanded="false">${icon('menu')}</button>
      </div>
    </div>
    <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
      <div class="mobile-drawer-head">${logo()}<button class="circle-button" data-toggle-mobile-menu aria-label="Close site menu">${icon('close')}</button></div>
      <div class="mobile-nav">${navItems.map(item => `<details><summary><a href="#${item.path}">${item.label}</a>${icon('chevron')}</summary><div>${item.children.map(c => `<a href="#${c.path}">${c.label}${icon('arrow')}</a>`).join('')}</div></details>`).join('')}</div>
      <div class="mobile-drawer-bottom"><a href="#/contact/partnership" class="button primary">Partner with us ${icon('arrow')}</a><button class="mobile-search" data-open-dialog="search">${icon('search')} Search Tilaverse</button></div>
    </div>`;
}

function renderFooter() {
  const col = (title, items) => `<div class="footer-col"><h3>${title}</h3>${items.map(item => `<a href="#${item.path}">${item.label}</a>`).join('')}</div>`;
  const about = [{label: 'Our Story', path: '/about'}, ...companyPages.map(p => ({label: p.title, path: `/about/${p.slug}`}))];
  const ventures = [{label: 'All', path: '/ventures'}, ...ventureData.map(p => ({label: p.title, path: `/ventures/${p.slug}`}))];
  const tech = technologyData.map(p => ({label: p.title, path: `/technology/${p.slug}`}));
  const investors = [{label: 'Overview', path: '/investors'}, ...investorPages.map(p => ({label: p.title, path: `/investors/${p.slug}`}))];
  const careers = [{label: 'Life at Tilaverse', path: '/careers/life-at-tilaverse'}, {label: 'Open Roles', path: '/careers/open-positions'}, {label: 'Locations', path: '/careers'}, {label: 'Benefits', path: '/careers/benefits'}, {label: 'Diversity & Inclusion', path: '/careers/diversity-inclusion'}];
  const newsroom = newsroomPages.map(p => ({label: p.title, path: `/newsroom/${p.slug}`}));
  $('#site-footer').innerHTML = `
    <div class="footer-grid container">
      <div class="footer-brand">
        ${logo()}
        <p>Tilaverse Inc. is a next-generation holding company and innovation ecosystem building and scaling world-changing companies that redefine how humanity lives, works, connects, and evolves.</p>
        <div class="socials">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">${icon('linkedin')}</a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">${icon('x')}</a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">${icon('instagram')}</a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">${icon('youtube')}</a>
        </div>
      </div>
      ${col('About us', about)}
      ${col('Ventures', ventures)}
      ${col('Technology', tech)}
      ${col('Investors', investors)}
      ${col('Careers', careers)}
      ${col('Newsroom', newsroom)}
    </div>
    <div class="footer-bottom container">
      <span>© 2026 Tilaverse Inc. All rights reserved.</span>
      <div><a href="#/legal/privacy-policy">Privacy Policy</a><a href="#/legal/terms-of-service">Terms of Service</a><a href="#/legal/cookie-policy">Cookie Policy</a><a href="#/legal/accessibility">Accessibility</a><a href="#/legal/sitemap">Sitemap</a></div>
      <button class="footer-top" data-scroll="body">Back to top ${icon('arrowUpRight')}</button>
    </div>`;
}

function renderHome() {
  const ventureCards = ventureData.map((venture, index) => `
    <a href="#/ventures/${venture.slug}" class="venture-card card-hover reveal" style="--card-image:url('public/images/${venture.image}'); --delay:${index * 70}ms">
      <div class="venture-card-image"></div><div class="card-scan"></div>
      <div class="venture-card-content"><span class="venture-icon ${venture.accent}">${icon(venture.icon)}</span><h3>${venture.title}</h3><p>${venture.short}</p><span class="card-link">Explore ${icon('arrow')}</span></div>
    </a>`).join('');
  const newsRows = newsItems.map(n => `
    <a href="#/newsroom/article/${n.slug}" class="news-row"><span class="news-thumb" style="background-image:url('public/images/${n.image}')"></span><span><strong>${n.title}</strong><small>${n.date}</small></span>${icon('arrowUpRight')}</a>`).join('');
  return `
    <section class="hero home-hero">
      <div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div>
      <div class="hero-inner container">
        <div class="hero-copy reveal">
          <h1><strong class="hero-company">Tilaverse Inc.</strong>Building the <span>Intelligent<br/>Future.</span> Across Every<br/>Dimension.</h1>
          <p>Tilaverse Inc. is a next-generation holding company and innovation ecosystem building and scaling world-changing companies that redefine how humanity lives, works, connects, and evolves.</p>
          <div class="hero-actions">${button('Explore our ecosystem', {className:'button primary', attr:'data-scroll="#ecosystem"'})}${button('Investor overview', {href:'/investors', className:'button ghost', iconName:'arrowUpRight'})}</div>
        </div>
        <div class="hero-power reveal">
          <span class="power-label">OUR POWER. INFINITE IMPACT.</span>
          <ul>
            <li>${icon('network')}<span><b>AI-Native Everything</b><small>Proprietary AI models and platforms power every layer of our ecosystem.</small></span></li>
            <li>${icon('rocket')}<span><b>Exponential Innovation</b><small>Ventures in AI, Space, Robotics, Biotech, Web3, FinTech, and Beyond.</small></span></li>
            <li>${icon('globe')}<span><b>Global Reach</b><small>Operating in 40+ countries with a global network of partners and talent.</small></span></li>
            <li>${icon('users')}<span><b>Scalable Impact</b><small>Solving humanity's biggest challenges through sustainable, scalable solutions.</small></span></li>
          </ul>
        </div>
      </div>
    </section>
    <section class="stats-wrap container reveal" aria-label="Tilaverse in numbers">
      <div class="stats-panel">
        <div class="stat"><strong data-count="50" data-prefix="$" data-suffix="B+">$0B+</strong><span>Assets Under Management</span></div>
        <div class="stat"><strong data-count="100" data-suffix="+">0+</strong><span>Companies in Ecosystem</span></div>
        <div class="stat"><strong data-count="40" data-suffix="+">0+</strong><span>Countries Worldwide</span></div>
        <div class="stat"><strong data-count="20" data-suffix="K+">0K+</strong><span>Global Team Members</span></div>
        <div class="stat"><strong data-count="1" data-suffix="B+">0B+</strong><span>Lives Impacted</span></div>
        <div class="stat"><strong class="infinity">∞</strong><span>The Future We're Building</span></div>
      </div>
    </section>
    <section class="ecosystem-section container section-block" id="ecosystem">
      <div class="section-heading centered reveal">${sectionLabel('ONE CONNECTED ECOSYSTEM')}<h2>One Ecosystem. <span>Endless Possibilities.</span></h2><p>Tilaverse Inc. unites a diverse portfolio of companies and technologies to create synergy, accelerate innovation, and deliver unparalleled value.</p></div>
      <div class="venture-grid">${ventureCards}</div>
    </section>
    <section class="partners container reveal" aria-label="Trusted by world-class partners">
      <p>TRUSTED BY WORLD-CLASS PARTNERS</p>
      <div class="partner-rail"><div class="partner-track"><span>Microsoft</span><span>NVIDIA</span><span>SoftBank</span><span>Google Cloud</span><span>aws</span><span>SPACEX</span><span>IBM</span><span>SIEMENS</span><span>JPMorganChase</span><span>Goldman<br/>Sachs</span><span>Microsoft</span><span>NVIDIA</span><span>SoftBank</span><span>Google Cloud</span><span>aws</span><span>SPACEX</span></div></div>
    </section>
    <section class="testimonials container section-block reveal">
      <div class="trust-intro">
        ${sectionLabel('TRUST BUILT TO LAST')}<h2>Trusted by Partners.<br/><span>Driven by Purpose.</span></h2><p>Tilaverse Inc. partners with visionary organizations that share our mission to build a better future through technology and innovation.</p>${button('Partner with us', {href:'/contact/partnership', className:'button primary'})}
      </div>
      <div class="quote-stage">
        <div class="quote-stage-head"><span>PARTNER PERSPECTIVES</span><div><button class="quote-arrow" data-carousel="prev" aria-label="Previous testimonial">←</button><button class="quote-arrow" data-carousel="next" aria-label="Next testimonial">→</button></div></div>
        <div class="quote-cards">
          ${testimonialCard('Tilaverse Inc. is at the forefront of innovation, consistently pushing boundaries and building technologies that will define our future.', 'Satya Nadella', 'CEO, Microsoft', 'Microsoft', 0)}
          ${testimonialCard('Their vision for an AI-native future is aligned with our mission to accelerate human potential through technology.', 'Jensen Huang', 'CEO, NVIDIA', 'NVIDIA', 1)}
          ${testimonialCard('Tilaverse Inc. is building the infrastructure for a more connected, intelligent, and sustainable world.', 'Masayoshi Son', 'Founder & CEO, SoftBank', 'SoftBank', 2)}
        </div>
        <div class="carousel-dots" aria-label="Select testimonial"><button class="active" data-carousel-index="0"></button><button data-carousel-index="1"></button><button data-carousel-index="2"></button></div>
      </div>
    </section>
    <section class="home-split container section-block">
      <div class="news-panel reveal"><div class="panel-heading"><div><span class="eyebrow">FROM THE NEWSROOM</span><h2>Latest from our Newsroom</h2></div><a href="#/newsroom">View all news ${icon('arrow')}</a></div><div class="news-list">${newsRows}</div></div>
      <div class="mission-panel reveal"><div class="panel-heading"><div><span class="eyebrow">CAREERS</span><h2>Join our Mission</h2></div><a href="#/careers/open-positions">View open roles ${icon('arrow')}</a></div><p>We are a global team of dreamers, builders, and innovators committed to solving the world's hardest problems.</p><div class="mission-stats"><span><b>20K+</b><small>Team Members</small></span><span><b>90+</b><small>Nationalities</small></span><span><b>∞</b><small>Opportunities</small></span></div><a href="#/careers" class="team-photo"><img src="public/images/team-tilaverse.png" alt="A diverse Tilaverse team in a research studio"/><span>Meet the people behind the possibility ${icon('arrow')}</span></a></div>
    </section>
    <section class="newsletter container reveal">
      <div class="newsletter-spark"></div><div class="newsletter-content"><span class="eyebrow">THE TILAVERSE SIGNAL</span><h2>Stay Ahead. Stay <span>Inspired.</span></h2><p>Get the latest updates on our ventures, technologies, and impact delivered straight to your inbox.</p><form class="subscribe-form" data-form="subscribe"><label class="sr-only" for="newsletter-email">Your email address</label><input id="newsletter-email" type="email" required placeholder="Enter your email address"/><button type="submit">Subscribe ${icon('arrow')}</button></form><small class="form-note">No noise. Just the work that matters. Unsubscribe anytime.</small></div>
    </section>
  `;
}

function testimonialCard(copy, name, role, company, index) {
  return `<article class="quote-card ${index === activeTestimonial ? 'is-current' : ''}" data-quote-card="${index}"><div class="quote-mark">${icon('quote')}</div><p>“${copy}”</p><footer><strong>${name}</strong><small>${role}</small><span>${company}</span></footer></article>`;
}

function renderAbout() {
  return `
    ${pageHero('ABOUT TILAVERSE', 'We build <span>possibility</span> into institutions.', 'Tilaverse connects pioneering companies, capital, and people around the work that will define the next generation.', 'Company')}
    <section class="container story-grid section-block"><div class="story-statement reveal"><span class="eyebrow">OUR STORY</span><h2>We are an <span>ecosystem of conviction.</span></h2><p>Tilaverse was founded around a simple idea: the technologies with the greatest power to improve life need patient builders, shared infrastructure, and a long view.</p><p>Today, we unite breakthrough ventures across intelligence, health, space, robotics, digital assets, and climate—then help them move from promising to consequential.</p>${button('Explore our history', {href:'/about/history',className:'text-button', iconName:'arrow'})}</div><div class="orbit-card reveal"><div class="orbit-dot dot-a"></div><div class="orbit-dot dot-b"></div><div class="orbit-dot dot-c"></div><div class="orbit-core">T</div><span>One operating system for enduring innovation</span></div></section>
    <section class="container values-section section-block"><div class="section-heading"><span class="eyebrow">WHAT GUIDES US</span><h2>Ambition with <span>integrity.</span></h2></div><div class="value-grid">${valueCard('Long-term courage','We pursue the work worth doing—even when the path cannot be measured in quarters.','rocket')}${valueCard('Intelligent stewardship','We pair imagination with disciplined operations, governance, and care.','shield')}${valueCard('Open possibility','We believe diverse perspectives and collaborative systems make better futures.','users')}</div></section>
    <section class="callout-band container reveal"><div><span class="eyebrow">OUR MISSION</span><h2>To help humanity build a more <span>capable future.</span></h2></div>${button('Read our mission', {href:'/about/mission-vision',className:'button primary'})}</section>
    ${relatedStrip('Explore Tilaverse', [{label:'Meet our leadership',path:'/about/leadership',icon:'users'}, {label:'Our governance model',path:'/about/governance',icon:'shield'}, {label:'Find your place',path:'/careers',icon:'briefcase'}])}
  `;
}

function pageHero(eyebrow, title, lede, crumb = '') {
  return `<section class="page-hero"><div class="page-hero-earth"></div><div class="container page-hero-content reveal"><div class="breadcrumb"><a href="#/">Home</a>${crumb ? `${icon('chevron')}<span>${crumb}</span>` : ''}</div>${sectionLabel(eyebrow)}<h1>${title}</h1><p>${lede}</p></div><div class="hero-grid-fade"></div></section>`;
}

function valueCard(title, body, iconName) {
  return `<article class="value-card card-hover reveal"><span class="line-icon">${icon(iconName)}</span><h3>${title}</h3><p>${body}</p><i class="card-index">0${Math.floor(Math.random()*4)+1}</i></article>`;
}

function relatedStrip(title, cards) {
  return `<section class="container related-section section-block reveal"><div class="section-heading mini"><span class="eyebrow">KEEP EXPLORING</span><h2>${title}</h2></div><div class="related-grid">${cards.map(c=>`<a class="related-card" href="#${c.path}"><span>${icon(c.icon || 'arrow')}</span><h3>${c.label}</h3>${icon('arrow')}</a>`).join('')}</div></section>`;
}

function renderCompanyDetail(page) {
  if (page.slug === 'leadership') return renderLeadership(page);
  if (page.slug === 'history') return renderHistory(page);
  if (page.slug === 'governance') return renderGovernance(page, 'Company');
  return `
    ${pageHero('ABOUT / MISSION & VISION', 'Inventing a more <span>capable world.</span>', page.lede, 'Mission & Vision')}
    <section class="container manifesto section-block"><div class="manifesto-line reveal"><span>01</span><p>We believe intelligence is most powerful when it expands human agency.</p></div><div class="manifesto-line reveal"><span>02</span><p>We build enduring systems, not isolated demonstrations.</p></div><div class="manifesto-line reveal"><span>03</span><p>We measure progress in the lives and futures our work makes possible.</p></div></section>
    <section class="container two-column-copy section-block"><div class="section-heading"><span class="eyebrow">HOW WE WORK</span><h2>From bold idea to <span>durable impact.</span></h2></div><div><p>Our mission brings together exceptional people, a global operating platform, and a patient commitment to making difficult things real. We cultivate companies that are technically ambitious, economically resilient, and grounded in their responsibility to society.</p><p>Every decision begins with a practical question: will this expand the horizon of what people and communities can do?</p>${button('View our ventures',{href:'/ventures',className:'button primary'})}</div></section>
    ${relatedStrip('Put the mission in motion', [{label:'Explore our ventures',path:'/ventures',icon:'network'},{label:'Read our impact approach',path:'/impact',icon:'globe'},{label:'Work with us',path:'/careers',icon:'briefcase'}])}`;
}

function renderLeadership(page) {
  const leaders = [
    ['Arielle Okafor','Chief Executive Officer','Visionary capital, applied intelligence, and durable institutions.'],
    ['Noah Raman','President, Ventures','Building the systems that let ambitious companies compound.'],
    ['Dr. Ines Calder','Chief Science Officer','Turning frontier research into responsible, scalable progress.'],
    ['Marcus Chen','Chief Operating Officer','Operating globally with craft, care, and precision.'],
    ['Leila Mensah','Chief People Officer','Creating the conditions for remarkable people to thrive.'],
    ['Jon Bell','Chief Trust Officer','Accountability and resilience in every decision.'],
  ];
  return `${pageHero('ABOUT / LEADERSHIP','Leadership for the <span>long horizon.</span>',page.lede,'Leadership')}
  <section class="container leadership-intro section-block"><div class="section-heading"><span class="eyebrow">OUR LEADERS</span><h2>Builders who see <span>around corners.</span></h2></div><p>Our leadership team carries a shared responsibility: develop the people, systems, and partnerships capable of meeting the moment.</p></section>
  <section class="container leader-grid">${leaders.map((l,i)=>`<article class="leader-card card-hover reveal"><div class="leader-avatar avatar-${i}"><span>${l[0].split(' ').map(x=>x[0]).join('')}</span></div><small>Executive leadership</small><h3>${l[0]}</h3><b>${l[1]}</b><p>${l[2]}</p><button data-open-dialog="bio" data-person="${l[0]}" class="text-button">Read bio ${icon('arrow')}</button></article>`).join('')}</section>
  ${relatedStrip('More about Tilaverse', [{label:'Our mission and vision',path:'/about/mission-vision',icon:'rocket'},{label:'How we govern',path:'/about/governance',icon:'shield'},{label:'Company history',path:'/about/history',icon:'calendar'}])}`;
}

function renderHistory(page) {
  const points = [['2012','A research collective begins in Lagos and London, focused on intelligent systems for critical infrastructure.'],['2016','Tilaverse launches its first venture studio and invests in machine learning, robotics, and frontier compute.'],['2019','Our network reaches 20 countries as we establish research partnerships across five continents.'],['2023','Tilaverse crosses 100 companies in the ecosystem and creates a dedicated Sustainable Future practice.'],['2026','A global team of 20,000+ continues building the intelligent future across every dimension.']];
  return `${pageHero('ABOUT / HISTORY','A history of <span>making the future tangible.</span>',page.lede,'Company History')}
  <section class="container timeline section-block">${points.map((p,i)=>`<article class="timeline-item reveal"><span class="timeline-dot"></span><div><small>${p[0]}</small><h2>${i===0?'The first signal':i===4?'The next chapter':'A wider horizon'}</h2><p>${p[1]}</p></div></article>`).join('')}</section>
  <section class="container photo-story section-block reveal"><img src="public/images/team-tilaverse.png" alt="Tilaverse team gathering"/><div><span class="eyebrow">TODAY</span><h2>Many disciplines.<br/><span>One direction.</span></h2><p>Our diverse ecosystem grows because people with radically different expertise can move together around a shared purpose.</p>${button('Meet our people',{href:'/careers/life-at-tilaverse',className:'button primary'})}</div></section>`;
}

function renderGovernance(page, section = 'Investors') {
  return `${pageHero(`${section.toUpperCase()} / GOVERNANCE`,'Trust is a system we <span>keep building.</span>',page.lede,'Governance')}
  <section class="container governance-grid section-block"><div class="governance-lede reveal"><span class="eyebrow">OUR APPROACH</span><h2>Ambition needs <span>accountability.</span></h2><p>Our governance model gives our teams the latitude to innovate and the structure to make responsible choices. Independent oversight, clear incentives, and transparent reporting are embedded into how we operate.</p>${button('Download governance principles',{className:'button ghost',iconName:'download',attr:'data-download="governance-principles"'})}</div><div class="governance-list reveal">${['Board oversight and independent expertise','Responsible AI and technology review','Enterprise risk, resilience, and security','Human rights and stakeholder accountability','Annual public impact reporting'].map((x,i)=>`<div><span>0${i+1}</span><p>${x}</p>${icon('arrow')}</div>`).join('')}</div></section>
  <section class="container board-section section-block"><div class="section-heading"><span class="eyebrow">COMMITTEES</span><h2>Governance at <span>every altitude.</span></h2></div><div class="feature-grid">${['Audit & Risk','Technology & Ethics','People & Culture','Sustainability & Impact'].map((x,i)=>featureCard(x,['Safeguarding transparent reporting and long-term resilience.','Assessing material risks arising from the technologies we build.','Supporting a thriving, accountable global culture.','Tracking the outcomes and trade-offs of our work.'][i],['shield','chip','users','leaf'][i])).join('')}</div></section>
  ${relatedStrip('Explore further', [{label:'Investor overview',path:'/investors',icon:'globe'},{label:'Our privacy commitment',path:'/legal/privacy-policy',icon:'shield'},{label:'Contact our governance team',path:'/contact',icon:'mail'}])}`;
}

function featureCard(title, body, iconName) { return `<article class="feature-card card-hover reveal"><span class="line-icon">${icon(iconName)}</span><h3>${title}</h3><p>${body}</p><a href="#/contact">Learn more ${icon('arrow')}</a></article>`; }

function renderVentures() {
  return `${pageHero('OUR VENTURES','Six frontiers. <span>One future.</span>','We build companies at the edges of possibility—and connect them with the capital, capabilities, and conviction to endure.','Ventures')}
  <section class="container ventures-intro section-block"><div class="section-heading"><span class="eyebrow">THE PORTFOLIO</span><h2>Integrated by <span>design.</span></h2></div><p>Our ventures work independently and together: sharing insight, infrastructure, talent, and a commitment to responsible growth. Discover where we are building.</p></section>
  <section class="container full-venture-grid">${ventureData.map((v,i)=>`<a href="#/ventures/${v.slug}" class="venture-wide-card reveal" style="--card-image:url('public/images/${v.image}')"><div class="venture-wide-overlay"></div><span class="line-icon">${icon(v.icon)}</span><div><small>0${i+1} / VENTURE</small><h2>${v.title}</h2><p>${v.lede}</p></div><b>Explore ${icon('arrow')}</b></a>`).join('')}</section>
  <section class="container invest-callout section-block reveal"><div><span class="eyebrow">BUILD WITH US</span><h2>Have a category-defining idea?</h2><p>We partner with founders and institutions who want to move difficult work from impossible to inevitable.</p></div>${button('Start a conversation',{href:'/contact/partnership',className:'button primary'})}</section>`;
}

function renderVentureDetail(venture) {
  return `${pageHero(`VENTURES / ${venture.title.toUpperCase()}`,venture.title.replace(' & ',' &<br/><span>') + (venture.title.includes('&')?'</span>':'.'),venture.lede,'Ventures')}
  <section class="container venture-detail-intro section-block"><div class="venture-detail-image reveal"><img src="public/images/${venture.image}" alt="${venture.title}"/></div><div class="reveal"><span class="eyebrow">WHY IT MATTERS</span><h2>Technology with a <span>human direction.</span></h2><p>${venture.lede} Tilaverse brings an ecosystem perspective to the work: connecting bold research with the operating depth, partnerships, and responsible guardrails needed to scale it.</p><p>We invest for compounding impact—not only in what a technology can do today, but what it makes possible tomorrow.</p>${button('Partner with this venture',{href:'/contact/partnership',className:'button primary'})}</div></section>
  <section class="container impact-stats section-block reveal"><div class="impact-stats-heading"><span class="eyebrow">AT A GLANCE</span><h2>Progress you can <span>measure.</span></h2></div>${venture.stats.map(s=>{const [number,...rest]=s.split(' ');return `<div><b>${number}</b><span>${rest.join(' ')}</span></div>`}).join('')}</section>
  <section class="container section-block"><div class="section-heading"><span class="eyebrow">WHAT WE ARE BUILDING</span><h2>From frontier research to <span>real-world systems.</span></h2></div><div class="feature-grid">${featureCard('Research & discovery','Explore the difficult questions that enlarge what is possible.',venture.icon)}${featureCard('Applied solutions','Turn breakthroughs into reliable tools for critical work.','chip')}${featureCard('Ecosystem collaboration','Move faster through a global network of partners and practitioners.','network')}</div></section>
  ${relatedStrip('Explore the ecosystem', ventureData.filter(v=>v.slug!==venture.slug).slice(0,3).map(v=>({label:v.title,path:`/ventures/${v.slug}`,icon:v.icon})))}
  `;
}

function renderTechnology() {
  return `${pageHero('TECHNOLOGY','The infrastructure of <span>imagination.</span>','Tilaverse technology makes bold work practical: a shared foundation for intelligence, security, research, and relentless iteration.','Technology')}
  <section class="container technology-intro section-block"><div><span class="eyebrow">OUR TECHNOLOGY STACK</span><h2>Designed to move at the <span>speed of trust.</span></h2></div><p>Every layer is built to make ambitious teams more capable—from the foundational systems that keep information secure to the interfaces that make new ideas deployable.</p></section>
  <section class="container tech-grid">${technologyData.map((t,i)=>`<a href="#/technology/${t.slug}" class="tech-card card-hover reveal"><span class="tech-number">0${i+1}</span><span class="line-icon">${icon(t.icon)}</span><h3>${t.title}</h3><p>${t.lede}</p><span class="card-link">Explore ${icon('arrow')}</span></a>`).join('')}</section>
  <section class="container datawave section-block reveal"><div class="datawave-lines"></div><div><span class="eyebrow">DESIGNED FOR OPEN POSSIBILITY</span><h2>Bring your next idea <span>to life.</span></h2><p>Build with the Tilaverse platform, research, and developer ecosystem.</p>${button('Explore developer tools',{href:'/technology/developers',className:'button primary'})}</div></section>`;
}

function renderTechnologyDetail(technology) {
  return `${pageHero(`TECHNOLOGY / ${technology.title.toUpperCase()}`,technology.title,technology.lede,'Technology')}
  <section class="container technology-detail section-block"><div class="tech-visual reveal"><div class="tech-visual-core">${icon(technology.icon)}</div><span class="t-line a"></span><span class="t-line b"></span><span class="t-line c"></span><span class="t-node n1"></span><span class="t-node n2"></span><span class="t-node n3"></span></div><div class="reveal"><span class="eyebrow">BUILT FOR THE FRONTIER</span><h2>Precision at every <span>layer.</span></h2><p>${technology.body}</p><p>Our teams design systems that are legible, resilient, and ready to become more capable over time. That is how hard technology becomes useful technology.</p>${button('Talk to our team',{href:'/contact',className:'button primary'})}</div></section>
  <section class="container integration-grid section-block"><div class="section-heading"><span class="eyebrow">CAPABILITIES</span><h2>A foundation for <span>what is next.</span></h2></div><div class="feature-grid">${featureCard('Built for scale','Infrastructure that grows with the ambition of your teams.','network')}${featureCard('Designed for trust','Layered security and governance from the first decision.','shield')}${featureCard('Made for builders','Tools and documentation that turn intent into momentum.','code')}</div></section>
  ${relatedStrip('Continue exploring', technologyData.filter(t=>t.slug!==technology.slug).slice(0,3).map(t=>({label:t.title,path:`/technology/${t.slug}`,icon:t.icon})))}
  `;
}

function renderImpact() {
  const metrics=[['1B+','Lives touched through our ecosystem'],['71%','Of operating locations use renewable energy'],['$4.2B','Directed to equitable innovation initiatives'],['90+','Nationalities building the future together']];
  return `${pageHero('IMPACT','Progress worth <span>being accountable to.</span>','We focus our capital, technology, and convening power on outcomes that expand opportunity and protect the conditions for a thriving future.','Impact')}
  <section class="container impact-intro section-block"><div class="section-heading"><span class="eyebrow">OUR COMMITMENT</span><h2>Innovation is only meaningful when it <span>moves the world forward.</span></h2></div><p>Impact is not a separate program. It shapes what we fund, how we build, who we invite in, and the kind of future our ventures are designed to create.</p></section>
  <section class="container impact-number-grid reveal">${metrics.map((m,i)=>`<article><span>0${i+1}</span><strong>${m[0]}</strong><p>${m[1]}</p></article>`).join('')}</section>
  <section class="container impact-pillars section-block">${featureCard('Responsible innovation','We establish practical guardrails so advanced technologies earn trust as they scale.','shield')}${featureCard('Shared prosperity','We design growth models that expand access to opportunity, capability, and ownership.','users')}${featureCard('Planet-positive systems','We support solutions that lower emissions, strengthen resilience, and renew the commons.','leaf')}</section>
  <section class="container callout-band reveal"><div><span class="eyebrow">READ THE REPORT</span><h2>Our 2026 Impact <span>Report.</span></h2></div>${button('Download report',{className:'button primary',iconName:'download',attr:'data-download="impact-report"'})}</section>`;
}

function renderInvestors() {
  return `${pageHero('INVESTORS','Built for the <span>long view.</span>','We create durable value by supporting the people and companies advancing the technologies that will shape the next decades.','Investors')}
  <section class="container investor-hero-stats section-block reveal"><div><span class="eyebrow">FY2026 HIGHLIGHTS</span><h2>Growth with <span>discipline.</span></h2><p>Our diversified portfolio and shared operating model keep us focused on compounding capability, resilience, and opportunity.</p></div><div class="investor-stats"><span><b>$50B+</b><small>Assets under management</small></span><span><b>27%</b><small>Three-year net asset value growth</small></span><span><b>100+</b><small>Companies in our ecosystem</small></span></div></section>
  <section class="container report-grid">${['Financial reports','Annual reports','Regulatory filings','Investor governance'].map((x,i)=>`<a href="#/investors/${['financial-reports','annual-reports','sec-filings','governance'][i]}" class="report-card card-hover reveal"><span class="line-icon">${icon(i===0?'chart':'book')}</span><span>INVESTOR RESOURCES</span><h3>${x}</h3><p>Clear information for partners building the future with us.</p>${icon('arrow')}</a>`).join('')}</section>
  <section class="container earnings-section section-block"><div><span class="eyebrow">LATEST RESULTS</span><h2>Q2 2026 earnings</h2><p>Read our most recent shareholder letter and listen to the call replay.</p></div><div>${button('Download shareholder letter',{className:'button ghost',iconName:'download',attr:'data-download="shareholder-letter"'})}${button('Listen to call replay',{className:'button primary',iconName:'play',attr:'data-open-dialog="video"'})}</div></section>
  ${relatedStrip('Investor resources', [{label:'Financial reports',path:'/investors/financial-reports',icon:'book'},{label:'Investor FAQs',path:'/investors/faqs',icon:'plus'},{label:'Contact investor relations',path:'/contact',icon:'mail'}])}`;
}

function renderInvestorDetail(page) {
  if (page.slug === 'governance') return renderGovernance(page, 'Investors');
  if (page.slug === 'faqs') return renderFaqs(page);
  const isReports = page.slug === 'financial-reports' || page.slug === 'annual-reports';
  const files = isReports ? (page.slug === 'financial-reports' ? ['Q2 2026 financial results','Q1 2026 financial results','FY2025 financial results','FY2024 financial results'] : ['2025 Annual Report','2024 Annual Report','2023 Annual Report','2022 Annual Report']) : ['Form 10-Q — Q2 2026','Form 8-K — Earnings release','Form 10-K — FY2025','Form 4 — Director transaction'];
  return `${pageHero(`INVESTORS / ${page.title.toUpperCase()}`,page.title,page.lede,'Investors')}
  <section class="container reports-layout section-block"><aside class="reports-filter reveal"><span class="eyebrow">ARCHIVE</span><h3>Browse by year</h3><button class="active">2026</button><button>2025</button><button>2024</button><button>2023</button><button>View all archives</button></aside><div class="document-list">${files.map((file,i)=>`<article class="document-row reveal"><div><span>${i===0?'LATEST':'ARCHIVE'}</span><h3>${file}</h3><p>${page.slug === 'sec-filings' ? 'Filed with the applicable regulatory authority.' : 'PDF · Updated May '+(20-i*4)+', 2026'}</p></div><button class="document-download" data-download="${file}">${icon('download')}<span>Download</span></button></article>`).join('')}</div></section>
  <section class="container investor-contact section-block reveal"><div><span class="eyebrow">INVESTOR RELATIONS</span><h2>Questions deserve a <span>direct answer.</span></h2></div><a href="#/contact" class="text-button">Contact investor relations ${icon('arrow')}</a></section>`;
}

function renderFaqs(page) {
  const faqs = [['Where can I find Tilaverse financial reports?','Reports, shareholder letters, and historical documents are available in the Investor Resources section.'],['Does Tilaverse pay a dividend?','Tilaverse currently prioritizes reinvestment in long-term growth, platform capabilities, and strategic ventures.'],['How can I receive investor updates?','Subscribe to the Tilaverse Signal below or contact our investor relations team directly.'],['Where are Tilaverse securities traded?','For information about securities, trading venues, and disclosures, please consult the latest regulatory filings.']];
  return `${pageHero('INVESTORS / FAQS',page.title,page.lede,'Investors')}
  <section class="container faq-layout section-block"><div class="faq-intro"><span class="eyebrow">COMMON QUESTIONS</span><h2>Useful answers for <span>long-term partners.</span></h2><p>Can't find what you need? Our investor relations team is here to help.</p>${button('Contact IR',{href:'/contact',className:'button primary'})}</div><div class="faq-list">${faqs.map(([q,a],i)=>`<details class="reveal" ${i===0?'open':''}><summary>${q}${icon('plus')}</summary><p>${a}</p></details>`).join('')}</div></section>
  ${relatedStrip('Investor resources', [{label:'Latest financials',path:'/investors/financial-reports',icon:'book'},{label:'Annual reports',path:'/investors/annual-reports',icon:'download'},{label:'Governance',path:'/investors/governance',icon:'shield'}])}`;
}

function renderCareers() {
  return `${pageHero('CAREERS','Make the future <span>less hypothetical.</span>','At Tilaverse, we pair ambitious work with the care, trust, and range of perspectives it takes to do it well.','Careers')}
  <section class="container careers-intro section-block"><div><span class="eyebrow">WHY TILAVERSE</span><h2>Work on things that <span>matter.</span></h2></div><p>We are a global group of scientists, operators, engineers, designers, investors, and problem solvers. We do our best work when an open question is hard enough to deserve all of us.</p></section>
  <section class="container careers-photo-band reveal"><img src="public/images/team-tilaverse.png" alt="People who work at Tilaverse"/><div class="photo-band-overlay"><span>20K+</span><p>people sharing an improbable mission</p></div></section>
  <section class="container careers-principles section-block">${featureCard('Bring your full range','Our best ideas come from people whose experiences and questions are not the same.','users')}${featureCard('Grow through the work','Feedback, mentorship, and difficult opportunities help every person continue to expand.','rocket')}${featureCard('Build with integrity','The impact of our work is real. So are our standards for the way we pursue it.','shield')}</section>
  <section class="container jobs-cta section-block reveal"><div><span class="eyebrow">OPEN ROLES</span><h2>Your next chapter is <span>waiting.</span></h2><p>Explore roles across our ventures and global platform teams.</p></div>${button('View open positions',{href:'/careers/open-positions',className:'button primary'})}</section>
  ${relatedStrip('Life at Tilaverse', [{label:'Explore benefits',path:'/careers/benefits',icon:'plus'},{label:'Diversity & inclusion',path:'/careers/diversity-inclusion',icon:'users'},{label:'Internships',path:'/careers/internships',icon:'book'}])}`;
}

function renderCareerDetail(page) {
  if (page.slug === 'open-positions') return renderOpenPositions(page);
  const content = {
    'life-at-tilaverse': ['A culture of <span>high trust and high care.</span>', 'We want people to feel seen for what they bring, challenged by what they are learning, and energized by the colleagues alongside them. That means thoughtful rituals, open decision-making, and space to create a life outside the work.'],
    'benefits': ['Support for the whole <span>human.</span>', 'Our benefits are designed to meet people where they are: from health, family, and financial security to learning, wellbeing, and meaningful time away.'],
    'diversity-inclusion': ['A future built by <span>more people.</span>', 'We work to make Tilaverse a place where a broad range of talent can belong, contribute, and lead. Inclusion is a daily practice embedded in how we hire, develop, and make decisions.'],
    'internships': ['Start close to the <span>frontier.</span>', 'Our internship program gives emerging talent an opportunity to work on real questions with mentorship, community, and the support to make a contribution from day one.'],
  }[page.slug];
  return `${pageHero(`CAREERS / ${page.title.toUpperCase()}`,page.title,page.lede,'Careers')}
  <section class="container career-detail section-block"><div class="career-detail-canvas reveal"><span class="canvas-ring one"></span><span class="canvas-ring two"></span><span class="canvas-ring three"></span><span>∿</span></div><div class="reveal"><span class="eyebrow">THE TILAVERSE EXPERIENCE</span><h2>${content[0]}</h2><p>${content[1]}</p><p>It is not a perk to be treated with care. It is foundational to the kind of enduring work we can do together.</p>${button(page.slug==='internships'?'See internship roles':'View open positions',{href:'/careers/open-positions',className:'button primary'})}</div></section>
  <section class="container benefit-grid section-block">${['Flexible global work','Comprehensive healthcare','Learning & development','Family support','Time to recharge','Community and belonging'].map((x,i)=>`<article class="benefit-card reveal"><span>0${i+1}</span><h3>${x}</h3><p>Practical support designed for people doing the work of their lives.</p></article>`).join('')}</section>
  ${relatedStrip('Find your place', [{label:'Open positions',path:'/careers/open-positions',icon:'briefcase'},{label:'Meet our people',path:'/careers/life-at-tilaverse',icon:'users'},{label:'Contact our talent team',path:'/contact',icon:'mail'}])}`;
}

function jobRow(job) {
  return `<article class="job-row" data-job-row="${job.tag}"><div class="job-main"><span>${job.tag}</span><h3>${job.title}</h3><p>${job.department} · ${job.location} · ${job.type}</p></div><button class="job-apply" data-open-application="${job.id}" data-job-title="${job.title}">Apply ${icon('arrow')}</button></article>`;
}

function renderOpenPositions(page) {
  return `${pageHero('CAREERS / OPEN POSITIONS','Come build what <span>comes next.</span>',page.lede,'Careers')}
  <section class="container jobs-intro section-block"><div><span class="eyebrow">OPEN OPPORTUNITIES</span><h2>Bring your curiosity. <span>Find your challenge.</span></h2></div><p>We are looking for people who think expansively, operate generously, and care about the difference their work can make.</p></section>
  <section class="container jobs-browser reveal"><div class="jobs-filter"><label>Search roles <input type="search" data-job-search placeholder="Try “engineer” or “research”"/></label><label>Team <select data-job-filter><option value="all">All teams</option><option value="AI">AI</option><option value="Robotics">Robotics</option><option value="Security">Security</option><option value="Impact">Impact</option><option value="Developer">Developer</option></select></label></div><div class="job-results-head"><span><b data-job-count>${jobs.length}</b> open roles</span><small>Updated today</small></div><div class="job-list">${jobs.map(jobRow).join('')}</div><p class="no-jobs" hidden>No roles match that search yet. Try another team or <a href="#/contact">tell us what you do</a>.</p></section>
  <section class="container talent-network section-block reveal"><div><span class="eyebrow">TALENT NETWORK</span><h2>Not seeing the right role?</h2><p>Send us your details. We will let you know when a new challenge fits your direction.</p></div><button class="button ghost" data-open-dialog="talent">Join talent network ${icon('arrow')}</button></section>`;
}

function renderNewsroom() {
  return `${pageHero('NEWSROOM','Ideas worth <span>following.</span>','News, research, stories, and conversations from across the Tilaverse ecosystem.','Newsroom')}
  <section class="container newsroom-feature section-block"><a href="#/newsroom/article/${newsItems[0].slug}" class="feature-story reveal"><div class="feature-story-image" style="background-image:url('public/images/${newsItems[0].image}')"></div><div><span class="eyebrow">FEATURED / ${newsItems[0].category}</span><h2>${newsItems[0].title}</h2><p>${newsItems[0].excerpt}</p><span class="text-button">Read story ${icon('arrow')}</span></div></a></section>
  <section class="container newsroom-listing section-block"><div class="listing-head"><div><span class="eyebrow">LATEST</span><h2>From the <span>ecosystem.</span></h2></div><div class="news-filter"><button data-news-filter="all" class="active">All</button><button data-news-filter="Technology">Technology</button><button data-news-filter="Ventures">Ventures</button><button data-news-filter="Research">Research</button><button data-news-filter="Impact">Impact</button></div></div><div class="article-grid">${newsItems.map(articleCard).join('')}</div></section>
  <section class="container newsroom-signup section-block reveal"><div><span class="eyebrow">STAY IN THE SIGNAL</span><h2>Get the thinking behind the <span>headlines.</span></h2></div><form data-form="subscribe" class="subscribe-form compact"><label class="sr-only" for="newsroom-email">Email</label><input id="newsroom-email" type="email" required placeholder="Your email address"/><button type="submit">Subscribe ${icon('arrow')}</button></form></section>`;
}

function articleCard(n) {
  return `<a href="#/newsroom/article/${n.slug}" class="article-card reveal" data-news-category="${n.category}"><div class="article-image" style="background-image:url('public/images/${n.image}')"></div><div><span>${n.category} <i></i> ${n.date}</span><h3>${n.title}</h3><p>${n.excerpt}</p><b>Read story ${icon('arrow')}</b></div></a>`;
}

function renderNewsDetail(page) {
  if (page.slug === 'media-kit') return `${pageHero('NEWSROOM / MEDIA KIT',page.title,page.lede,'Newsroom')}<section class="container media-grid section-block"><div class="media-card reveal"><span class="line-icon">${icon('cube')}</span><h2>Brand assets</h2><p>Download our logo, color and type guidance, and selected imagery.</p><button data-download="tilaverse-brand-assets" class="button primary">Download assets ${icon('download')}</button></div><div class="media-card reveal"><span class="line-icon">${icon('mail')}</span><h2>Press contact</h2><p>For media inquiries, reach our communications team.</p><a href="mailto:press@tilaverse.example" class="text-button">press@tilaverse.example ${icon('arrow')}</a></div></section>${relatedStrip('Newsroom', [{label:'All news',path:'/newsroom/news',icon:'book'},{label:'Press releases',path:'/newsroom/press-releases',icon:'mail'},{label:'Events',path:'/newsroom/events',icon:'calendar'}])}`;
  if (page.slug === 'events') return renderEvents(page);
  const type = page.slug === 'press-releases' ? 'OFFICIAL ANNOUNCEMENTS' : page.slug === 'blog' ? 'FIELD NOTES' : 'NEWS & UPDATES';
  const relevant = page.slug === 'press-releases' ? newsItems.slice(0,3) : page.slug === 'blog' ? [newsItems[2],newsItems[0],newsItems[3]] : newsItems;
  return `${pageHero(`NEWSROOM / ${page.title.toUpperCase()}`,page.title,page.lede,'Newsroom')}<section class="container news-type-heading section-block"><span class="eyebrow">${type}</span><h2>Stories from the <span>edge of possibility.</span></h2></section><section class="container article-grid section-block">${relevant.map(articleCard).join('')}</section>${relatedStrip('Explore the newsroom', [{label:'All newsroom',path:'/newsroom',icon:'book'},{label:'Media kit',path:'/newsroom/media-kit',icon:'cube'},{label:'Upcoming events',path:'/newsroom/events',icon:'calendar'}])}`;
}

function renderEvents(page) {
  const events=[['24','SEP','Tilaverse Frontier Forum','New York + Digital','A one-day gathering for people building the practical infrastructure of possibility.'],['08','OCT','Trust in Intelligent Systems','London + Digital','Research, policy, and practice in conversation around a trustworthy AI future.'],['12','NOV','Planetary Operating Systems','Singapore + Digital','A working session for the teams building resilient climate solutions.']];
  return `${pageHero('NEWSROOM / EVENTS',page.title,page.lede,'Newsroom')}<section class="container events-list section-block">${events.map((e,i)=>`<article class="event-row reveal"><div class="event-date"><b>${e[0]}</b><span>${e[1]}</span></div><div><span class="eyebrow">${e[3]}</span><h2>${e[2]}</h2><p>${e[4]}</p></div><button class="button ${i===0?'primary':'ghost'}" data-open-dialog="event" data-event="${e[2]}">${i===0?'Register interest':'Learn more'} ${icon('arrow')}</button></article>`).join('')}</section><section class="container newsletter mini-newsletter reveal"><div><span class="eyebrow">NEVER MISS A MOMENT</span><h2>Get the Tilaverse Signal.</h2></div><form class="subscribe-form compact" data-form="subscribe"><input type="email" required placeholder="Your email address"/><button>Subscribe ${icon('arrow')}</button></form></section>`;
}

function renderArticle(article) {
  return `<article class="article-detail"><header class="article-header container"><div class="breadcrumb"><a href="#/">Home</a>${icon('chevron')}<a href="#/newsroom">Newsroom</a>${icon('chevron')}<span>${article.category}</span></div><span class="eyebrow">${article.category}</span><h1>${article.title}</h1><p>${article.excerpt}</p><div class="article-meta"><span>${article.date}</span><i></i><span>${article.read}</span><button data-share="${article.title}">${icon('arrowUpRight')} Share</button></div></header><div class="article-hero-image" style="background-image:url('public/images/${article.image}')"></div><div class="article-body container"><aside><span>IN THIS STORY</span><a href="#article-vision">The vision</a><a href="#article-build">What we are building</a><a href="#article-next">What comes next</a></aside><div><p class="lead">At Tilaverse, we believe the most consequential technology is the kind that makes human institutions more capable, more trustworthy, and more able to meet the future.</p><h2 id="article-vision">The vision</h2><p>Today’s announcement represents a meaningful step in that work. Built with our partners and research teams across the ecosystem, this effort turns advanced capability into a practical foundation for organizations facing complex decisions.</p><p>It is designed to meet people where their work already happens—without asking them to compromise on security, transparency, or control. That is the standard we believe new infrastructure must meet.</p><blockquote>“Progress is not defined by how impressive technology looks in isolation. It is defined by the futures people can build with it.”</blockquote><h2 id="article-build">What we are building</h2><p>The program brings together responsible research, engineering discipline, and a clear operating model. Teams can connect information, simulate possible outcomes, and move from insight to action while keeping humans in the loop.</p><h2 id="article-next">What comes next</h2><p>We will continue to learn in the open with customers, communities, and the people whose work this technology is intended to support. The opportunity is considerable—and so is the responsibility.</p></div></div></article>${relatedStrip('More from Tilaverse', newsItems.filter(n=>n.slug!==article.slug).slice(0,3).map(n=>({label:n.title,path:`/newsroom/article/${n.slug}`,icon:'arrow'})))}`;
}

function renderLegal(page) {
  if (page.slug === 'sitemap') return renderSitemap(page);
  const content = {
    'privacy-policy': ['Personal data deserves <span>respect.</span>','We collect only what is needed to run a reliable service, communicate clearly, and improve the Tilaverse experience. We do not sell personal data.'],
    'terms-of-service': ['Clear terms for a <span>shared future.</span>','These terms set out the reasonable expectations that help everyone use Tilaverse services safely, lawfully, and constructively.'],
    'cookie-policy': ['A transparent approach to <span>cookies.</span>','We use a limited set of cookies to remember preferences, measure performance, and keep our services reliable.'],
    'accessibility': ['Every future should be <span>accessible.</span>','We are continually improving the usability and accessibility of the Tilaverse digital experience for people of all abilities.'],
  }[page.slug];
  const sections=['Overview','Information we collect','How we use information','Your choices and controls','Security and retention','Changes and contact'];
  return `${pageHero(`LEGAL / ${page.title.toUpperCase()}`,page.title,page.lede,'Legal')}
  <section class="container legal-layout section-block"><aside class="legal-side"><span>LAST UPDATED</span><b>May 22, 2026</b>${sections.map((s,i)=>`<a href="#legal-${i}">${s}</a>`).join('')}</aside><div class="legal-copy"><p class="lead">${content[1]}</p>${sections.map((s,i)=>`<section id="legal-${i}" class="reveal"><h2>${s}</h2><p>${i===0?content[1]:'Tilaverse is committed to clear, practical stewardship of information and access. This summary is written to be understandable; the details below explain our practices, standards, and the choices available to you.'}</p><p>Where we work with trusted service providers, they are required to use appropriate safeguards. We review these arrangements regularly and improve them as our services and legal obligations evolve.</p></section>`).join('')}</div></section>`;
}

function renderSitemap(page) {
  const groups = [{title:'About', links:[{label:'About Tilaverse',path:'/about'},...companyPages.map(p=>({label:p.title,path:`/about/${p.slug}`}))]}, {title:'Ventures',links:[{label:'All ventures',path:'/ventures'},...ventureData.map(v=>({label:v.title,path:`/ventures/${v.slug}`}))]}, {title:'Technology',links:[{label:'Technology overview',path:'/technology'},...technologyData.map(v=>({label:v.title,path:`/technology/${v.slug}`}))]}, {title:'Investors',links:[{label:'Investor overview',path:'/investors'},...investorPages.map(v=>({label:v.title,path:`/investors/${v.slug}`}))]}, {title:'Careers',links:[{label:'Careers home',path:'/careers'},...careerPages.map(v=>({label:v.title,path:`/careers/${v.slug}`}))]}, {title:'Newsroom',links:[{label:'Newsroom home',path:'/newsroom'},...newsroomPages.map(v=>({label:v.title,path:`/newsroom/${v.slug}`}))]}, {title:'Legal & Contact',links:[...legalPages.filter(p=>p.slug!=='sitemap').map(v=>({label:v.title,path:`/legal/${v.slug}`})),{label:'Contact',path:'/contact'},...contactPages.map(v=>({label:v.title,path:`/contact/${v.slug}`}))]}];
  return `${pageHero('LEGAL / SITEMAP',page.title,page.lede,'Legal')}<section class="container sitemap-grid section-block">${groups.map(g=>`<div class="sitemap-group reveal"><span class="eyebrow">${g.title}</span>${g.links.map(l=>`<a href="#${l.path}">${l.label}${icon('arrow')}</a>`).join('')}</div>`).join('')}</section>`;
}

function renderContact(page = null) {
  const section = page ? `CONTACT / ${page.title.toUpperCase()}` : 'CONTACT';
  const title = page ? page.title : 'Let’s make <span>possibility practical.</span>';
  const lede = page ? page.lede : 'Whether you are looking to partner, build, invest, or learn more, we would like to hear what is on your horizon.';
  if (page?.slug === 'support') return renderSupport(page);
  return `${pageHero(section,title,lede,'Contact')}
  <section class="container contact-layout section-block"><div class="contact-options reveal"><span class="eyebrow">START A CONVERSATION</span><h2>Reach the team that can <span>help.</span></h2><a href="mailto:hello@tilaverse.example">${icon('mail')}<span><b>General inquiries</b><small>hello@tilaverse.example</small></span>${icon('arrowUpRight')}</a><a href="mailto:partners@tilaverse.example">${icon('network')}<span><b>Partnerships</b><small>partners@tilaverse.example</small></span>${icon('arrowUpRight')}</a><a href="mailto:press@tilaverse.example">${icon('book')}<span><b>Media</b><small>press@tilaverse.example</small></span>${icon('arrowUpRight')}</a><a href="#/contact/support">${icon('shield')}<span><b>Customer support</b><small>Get technical assistance</small></span>${icon('arrow')}</a></div><form class="contact-form reveal" data-form="contact"><span class="eyebrow">SEND A MESSAGE</span><div class="form-row"><label>First name<input required name="firstName" placeholder="Ada"/></label><label>Last name<input required name="lastName" placeholder="Okafor"/></label></div><label>Work email<input required type="email" name="email" placeholder="you@company.com"/></label><label>What can we help with?<select name="topic"><option>${page?.slug === 'partnership' ? 'Potential partnership' : 'General inquiry'}</option><option>Partnership opportunity</option><option>Investor relations</option><option>Careers</option><option>Media inquiry</option></select></label><label>Message<textarea required name="message" rows="5" placeholder="Tell us a little about what you are building."></textarea></label><button class="button primary" type="submit">Send message ${icon('arrow')}</button><small>We will only use your information to respond to this request.</small></form></section>
  <section class="container locations-band section-block reveal"><div><span class="eyebrow">WHERE WE WORK</span><h2>Connected across <span>the world.</span></h2></div><div class="location-list"><span>${icon('pin')} Enugu</span><span>${icon('pin')} London</span><span>${icon('pin')} New York</span><span>${icon('pin')} Singapore</span><span>${icon('pin')} São Paulo</span></div></section>`;
}

function renderSupport(page) {
  const faqs=[['How do I access Tilaverse services?','Your designated administrator can provision access. If you need help, contact the support team with your organization name.'],['Where can I report a security concern?','Please use the contact form and select security. For urgent issues, your service agreement contains the applicable escalation route.'],['How can I find API documentation?','Visit the APIs & Developers page for guides, references, and developer support.'],['How do I update account details?','Your team administrator can update account contacts and billing information from the Tilaverse console.']];
  return `${pageHero('CONTACT / SUPPORT','Support that gets you <span>moving again.</span>',page.lede,'Contact')}
  <section class="container support-channel-grid section-block">${[['Customer success','Help with services and account questions.','mail'],['Developer support','Build, integrate, and troubleshoot.','code'],['Security response','Report a vulnerability or concern.','shield']].map(x=>`<a href="#/contact" class="support-channel card-hover reveal"><span class="line-icon">${icon(x[2])}</span><h3>${x[0]}</h3><p>${x[1]}</p><b>Contact team ${icon('arrow')}</b></a>`).join('')}</section>
  <section class="container faq-layout section-block"><div class="faq-intro"><span class="eyebrow">SUPPORT CENTER</span><h2>Common <span>questions.</span></h2><p>Need help with something else? We are here.</p></div><div class="faq-list">${faqs.map(([q,a],i)=>`<details class="reveal" ${i===0?'open':''}><summary>${q}${icon('plus')}</summary><p>${a}</p></details>`).join('')}</div></section>`;
}

function renderNotFound(route) {
  return `<section class="not-found container"><div class="not-found-orb"></div><span class="eyebrow">404 / LOST IN SPACE</span><h1>This page is still <span>becoming.</span></h1><p>We could not find <code>${route}</code>, but there is more of Tilaverse to explore.</p>${button('Return home',{href:'/',className:'button primary'})}</section>`;
}

function routePage(route) {
  if (route === '/') return renderHome();
  if (route === '/about') return renderAbout();
  const company = companyPages.find(p=>route === `/about/${p.slug}`); if(company) return renderCompanyDetail(company);
  if (route === '/ventures') return renderVentures();
  const venture = ventureData.find(p=>route === `/ventures/${p.slug}`); if(venture) return renderVentureDetail(venture);
  if (route === '/technology') return renderTechnology();
  const technology = technologyData.find(p=>route === `/technology/${p.slug}`); if(technology) return renderTechnologyDetail(technology);
  if (route === '/impact') return renderImpact();
  if (route === '/investors') return renderInvestors();
  const investor = investorPages.find(p=>route === `/investors/${p.slug}`); if(investor) return renderInvestorDetail(investor);
  if (route === '/careers') return renderCareers();
  const career = careerPages.find(p=>route === `/careers/${p.slug}`); if(career) return renderCareerDetail(career);
  if (route === '/newsroom') return renderNewsroom();
  const articleSlug = route.match(/^\/newsroom\/article\/(.+)$/)?.[1]; const article = newsItems.find(p=>p.slug === articleSlug); if(article) return renderArticle(article);
  const newsroom = newsroomPages.find(p=>route === `/newsroom/${p.slug}`); if(newsroom) return renderNewsDetail(newsroom);
  if (route === '/contact') return renderContact();
  const contact = contactPages.find(p=>route === `/contact/${p.slug}`); if(contact) return renderContact(contact);
  const legal = legalPages.find(p=>route === `/legal/${p.slug}`); if(legal) return renderLegal(legal);
  return renderNotFound(route);
}

function titleForRoute(route) {
  if (route === '/') return 'Tilaverse — Infinite impact';
  const segments = route.split('/').filter(Boolean).map(x=>x.replace(/-/g,' ').replace(/\b\w/g,l=>l.toUpperCase()));
  return `${segments.reverse().join(' · ')} — Tilaverse`;
}

function renderRoute({scroll = true} = {}) {
  const route = routeFromHash();
  if (route === null) return;
  clearInterval(testimonialTimer);
  $('#main-content').innerHTML = routePage(route);
  renderHeader(route);
  renderFooter();
  document.title = titleForRoute(route);
  document.body.classList.remove('mobile-open');
  const drawer = $('#mobile-drawer'); if(drawer) drawer.setAttribute('aria-hidden','true');
  if (scroll) window.scrollTo(0, 0);
  initializePage(route);
}

function initializePage(route) {
  setupReveals();
  setupCounters();
  if (route === '/') setupTestimonialTimer();
  if (route === '/careers/open-positions') setupJobs();
  if (route.startsWith('/newsroom')) setupNewsFilters();
}

function setupReveals() {
  if (revealObserver) revealObserver.disconnect();
  const items = $$('.reveal');
  if (typeof window.IntersectionObserver !== 'function') {items.forEach(el=>el.classList.add('revealed')); return;}
  revealObserver = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');revealObserver.unobserve(entry.target);}}), {threshold:.12});
  items.forEach((el,i)=>{el.style.setProperty('--reveal-index', i % 6); revealObserver.observe(el);});
}

function setupCounters() {
  const stats=$$('[data-count]');
  const begin = el => {
    if(el.dataset.ran) return; el.dataset.ran='true';
    const target=Number(el.dataset.count), prefix=el.dataset.prefix||'', suffix=el.dataset.suffix||''; const duration=1300; const start=performance.now();
    const draw=t=>{const n=Math.min(1,(t-start)/duration); const eased=1-Math.pow(1-n,3); el.textContent=prefix+Math.round(target*eased)+suffix; if(n<1)requestAnimationFrame(draw);}; requestAnimationFrame(draw);
  };
  if(typeof window.IntersectionObserver !== 'function') {stats.forEach(begin);return;}
  const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){begin(e.target);observer.unobserve(e.target)}}),{threshold:.5}); stats.forEach(s=>observer.observe(s));
}

function setupTestimonialTimer() {
  testimonialTimer = setInterval(()=>updateTestimonial((activeTestimonial+1)%3), 5200);
}

function updateTestimonial(index) {
  activeTestimonial = (index+3)%3;
  $$('[data-quote-card]').forEach(card=>card.classList.toggle('is-current',Number(card.dataset.quoteCard)===activeTestimonial));
  $$('[data-carousel-index]').forEach(dot=>dot.classList.toggle('active',Number(dot.dataset.carouselIndex)===activeTestimonial));
}

function setupJobs() {
  const search=$('[data-job-search]'), filter=$('[data-job-filter]');
  const update=()=>{
    const needle=(search?.value||'').toLowerCase();const tag=filter?.value||'all';let shown=0;
    $$('[data-job-row]').forEach(row=>{const text=row.innerText.toLowerCase(); const yes=(!needle||text.includes(needle))&&(tag==='all'||row.dataset.jobRow===tag);row.hidden=!yes;if(yes)shown++;});
    const count=$('[data-job-count]');if(count)count.textContent=shown;const none=$('.no-jobs');if(none)none.hidden=shown!==0;
  }; search?.addEventListener('input',update);filter?.addEventListener('change',update);
}

function setupNewsFilters() {
  $$('[data-news-filter]').forEach(button=>button.addEventListener('click',()=>{const category=button.dataset.newsFilter;$$('[data-news-filter]').forEach(b=>b.classList.toggle('active',b===button));$$('[data-news-category]').forEach(card=>{card.hidden=category!=='all'&&card.dataset.newsCategory!==category;});}));
}

function toggleMobileMenu() {
  const drawer=$('#mobile-drawer');if(!drawer)return;const open=!document.body.classList.contains('mobile-open');document.body.classList.toggle('mobile-open',open);drawer.setAttribute('aria-hidden',String(!open));$('[data-toggle-mobile-menu]')?.setAttribute('aria-expanded',String(open));
}

function toggleNavMenu(label) {
  const menu=$(`[data-nav-dropdown="${label}"]`); if(!menu)return; const willOpen=!menu.classList.contains('is-open');$$('[data-nav-dropdown]').forEach(x=>x.classList.remove('is-open'));menu.classList.toggle('is-open',willOpen);
}

function toast(message, kind = 'success') {
  const id=`toast-${Date.now()}`;const stack=$('#toast-stack');const node=document.createElement('div');node.className=`toast ${kind}`;node.id=id;node.innerHTML=`<span>${kind==='success'?icon('check'):icon('mail')}</span><p>${message}</p><button aria-label="Dismiss" data-dismiss-toast="${id}">${icon('close')}</button>`;stack.appendChild(node);setTimeout(()=>node.classList.add('show'),16);setTimeout(()=>dismissToast(id),5400);
}
function dismissToast(id){const node=$('#'+id);if(!node)return;node.classList.remove('show');setTimeout(()=>node.remove(),250);}

function openDialog(type, data = {}) {
  const layer=$('#dialog-layer');let content='';
  if(type==='search') content=`<div class="dialog search-dialog" role="dialog" aria-modal="true" aria-labelledby="search-title"><button class="dialog-close" data-close-dialog aria-label="Close search">${icon('close')}</button><span class="eyebrow">FIND YOUR WAY</span><h2 id="search-title">Search Tilaverse</h2><label class="search-field">${icon('search')}<input autofocus data-site-search placeholder="Search pages, ventures, teams…"/></label><div class="search-results" data-search-results><p>Start typing to explore the ecosystem.</p></div><div class="search-suggestions"><span>POPULAR</span><button data-search-go="/ventures/artificial-intelligence">Artificial Intelligence</button><button data-search-go="/careers/open-positions">Open positions</button><button data-search-go="/investors">Investor overview</button></div></div>`;
  if(type==='bio') content=`<div class="dialog bio-dialog" role="dialog" aria-modal="true"><button class="dialog-close" data-close-dialog aria-label="Close biography">${icon('close')}</button><div class="bio-avatar">${data.person.split(' ').map(x=>x[0]).join('')}</div><span class="eyebrow">LEADERSHIP</span><h2>${data.person}</h2><p>${data.person} helps steward Tilaverse's long-term commitment to work that expands human possibility. Their background spans research, operating leadership, and global partnership building.</p><p>Across their career, they have championed rigorous thinking, collaborative teams, and the patient work of making important ideas useful.</p><a href="#/contact" class="button primary" data-close-dialog>Connect with the team ${icon('arrow')}</a></div>`;
  if(type==='talent') content=`<div class="dialog form-dialog" role="dialog" aria-modal="true"><button class="dialog-close" data-close-dialog aria-label="Close">${icon('close')}</button><span class="eyebrow">TALENT NETWORK</span><h2>Keep in <span>touch.</span></h2><p>Share your details and we will let you know when a role matches your direction.</p><form data-form="talent"><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@example.com"/></label><label>Area of interest<select><option>Research & AI</option><option>Engineering</option><option>Operations</option><option>Investment & Ventures</option><option>Design & Product</option></select></label><button class="button primary" type="submit">Join network ${icon('arrow')}</button></form></div>`;
  if(type==='event') content=`<div class="dialog form-dialog" role="dialog" aria-modal="true"><button class="dialog-close" data-close-dialog aria-label="Close">${icon('close')}</button><span class="eyebrow">EVENT REGISTRATION</span><h2>${data.event}</h2><p>Leave your details and our events team will send registration information shortly.</p><form data-form="event"><label>Name<input required placeholder="Your name"/></label><label>Work email<input required type="email" placeholder="you@company.com"/></label><label>Organization<input required placeholder="Company or organization"/></label><button class="button primary" type="submit">Register interest ${icon('arrow')}</button></form></div>`;
  if(type==='video') content=`<div class="dialog video-dialog" role="dialog" aria-modal="true"><button class="dialog-close" data-close-dialog aria-label="Close">${icon('close')}</button><div class="video-placeholder"><div class="play-pulse">${icon('play')}</div><span>Q2 2026 Earnings Call</span></div><h2>Call replay</h2><p>The full earnings call is available for shareholders and partners. This prototype opens the interactive media player.</p><button class="button primary" data-close-dialog>Done ${icon('check')}</button></div>`;
  if(type==='application') content=`<div class="dialog form-dialog" role="dialog" aria-modal="true"><button class="dialog-close" data-close-dialog aria-label="Close">${icon('close')}</button><span class="eyebrow">APPLICATION</span><h2>${data.title}</h2><p>We are glad you are interested. Tell us where to reach you and a recruiter will follow up.</p><form data-form="application"><label>Full name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@example.com"/></label><label>LinkedIn or portfolio<input type="url" placeholder="https://"/></label><button class="button primary" type="submit">Submit interest ${icon('arrow')}</button></form></div>`;
  layer.innerHTML=content;layer.classList.add('open');document.body.classList.add('dialog-open');setTimeout(()=>$('.dialog input',layer)?.focus(),20);
}

function closeDialog(){const layer=$('#dialog-layer');layer.classList.remove('open');document.body.classList.remove('dialog-open');setTimeout(()=>{if(!layer.classList.contains('open'))layer.innerHTML='';},250);}

function searchSite(query) {
  const q=query.toLowerCase().trim();const result=$('[data-search-results]');if(!result)return;if(!q){result.innerHTML='<p>Start typing to explore the ecosystem.</p>';return;}
  const entries=[];
  navItems.forEach(n=>{entries.push({label:n.label,path:n.path,group:'Section'});n.children.forEach(c=>entries.push({label:c.label,path:c.path,group:n.label}));});
  entries.push({label:'Contact Tilaverse',path:'/contact',group:'Contact'},{label:'Privacy Policy',path:'/legal/privacy-policy',group:'Legal'});
  const found=entries.filter(e=>e.label.toLowerCase().includes(q)).slice(0,6);
  result.innerHTML=found.length?found.map(x=>`<a href="#${x.path}" data-close-dialog><span>${x.group}</span><b>${x.label}</b>${icon('arrow')}</a>`).join(''):`<p>No exact results. Try “technology”, “ventures”, or “careers”.</p>`;
}

function fakeDownload(name) {
  const payload=`Tilaverse\n${name}\n\nThis is a prototype document download generated by the Tilaverse website experience.\n\n© 2026 Tilaverse Inc.`;
  const blob=new Blob([payload],{type:'text/plain'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`${name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}.txt`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);toast(`${name} is downloading.`);
}

function handleClick(event) {
  const navToggle=event.target.closest('[data-toggle-nav-menu]');if(navToggle){event.preventDefault();toggleNavMenu(navToggle.dataset.toggleNavMenu);return;}
  const mobileToggle=event.target.closest('[data-toggle-mobile-menu]');if(mobileToggle){event.preventDefault();toggleMobileMenu();return;}
  const dialogTrigger=event.target.closest('[data-open-dialog]');if(dialogTrigger){event.preventDefault();openDialog(dialogTrigger.dataset.openDialog,{person:dialogTrigger.dataset.person,event:dialogTrigger.dataset.event});return;}
  const appTrigger=event.target.closest('[data-open-application]');if(appTrigger){event.preventDefault();openDialog('application',{title:appTrigger.dataset.jobTitle});return;}
  const close=event.target.closest('[data-close-dialog]');if(close){event.preventDefault();closeDialog();return;}
  if(event.target===$('#dialog-layer')){closeDialog();return;}
  const scroll=event.target.closest('[data-scroll]');if(scroll){event.preventDefault();const selector=scroll.dataset.scroll;if(selector==='body')window.scrollTo({top:0,behavior:'smooth'});else $(selector)?.scrollIntoView({behavior:'smooth',block:'start'});return;}
  const carousel=event.target.closest('[data-carousel]');if(carousel){updateTestimonial(activeTestimonial+(carousel.dataset.carousel==='next'?1:-1));return;}
  const dot=event.target.closest('[data-carousel-index]');if(dot){updateTestimonial(Number(dot.dataset.carouselIndex));return;}
  const dl=event.target.closest('[data-download]');if(dl){event.preventDefault();fakeDownload(dl.dataset.download);return;}
  const dToast=event.target.closest('[data-dismiss-toast]');if(dToast){dismissToast(dToast.dataset.dismissToast);return;}
  const go=event.target.closest('[data-search-go]');if(go){window.location.hash='#'+go.dataset.searchGo;closeDialog();return;}
  const share=event.target.closest('[data-share]');if(share){navigator.clipboard?.writeText(window.location.href).catch(()=>{});toast('Article link copied to your clipboard.');return;}
  // Close desktop dropdown when following a normal link.
  if(event.target.closest('a[href^="#/"]')) $$('.nav-dropdown').forEach(x=>x.classList.remove('is-open'));
}

function handleSubmit(event) {
  const form=event.target.closest('form[data-form]');if(!form)return;event.preventDefault();if(!form.checkValidity()){form.reportValidity();return;}const kind=form.dataset.form;const message={subscribe:'You are on the list. Watch your inbox for the Tilaverse Signal.',contact:'Message received. Our team will be in touch shortly.',talent:'You have joined the Tilaverse talent network.',application:'Your expression of interest has been submitted.',event:'You are registered for updates about this event.'}[kind]||'Thank you — we have received your details.';form.reset();toast(message);if(['talent','application','event'].includes(kind))closeDialog();
}

function handleInput(event) { if(event.target.matches('[data-site-search]'))searchSite(event.target.value); }

function handleKeydown(event) { if(event.key==='Escape'){if($('#dialog-layer').classList.contains('open'))closeDialog();else if(document.body.classList.contains('mobile-open'))toggleMobileMenu();} }

document.addEventListener('click',handleClick);
document.addEventListener('submit',handleSubmit);
document.addEventListener('input',handleInput);
document.addEventListener('keydown',handleKeydown);
window.addEventListener('hashchange',()=>{if(routeFromHash()!==null)renderRoute();});

if(!window.location.hash) window.location.hash='#/'; else renderRoute({scroll:false});
