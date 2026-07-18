"use strict";

/* Edit this object to customize the complete website. */
const portfolioData = {
  name: "ASHKAN ALLHAVEISI",
  firstName: "ASHKAN",
  lastName: "ALLHAVEISI",
  primaryTitle: "AI PROGRAMMER & DIGITAL ARTIST",
  roles: ["AI Programmer", "Video Editor", "CGI Artist", "Motion Graphic Designer", "Graphic Designer"],
  email: "ashkanwisi@gmail.com",
  phone: "+9647747974595",
  statistics: [
    { value: 5, suffix: "+", label: "Creative Disciplines" },
    { value: 100, suffix: "+", label: "Visual Projects" },
    { value: 500, suffix: "+", label: "AI Experiments" }
  ],
  services: [
    { title: "AI Programming & Automation", description: "Developing AI-powered workflows, intelligent systems, creative tools, and automated digital solutions." },
    { title: "Video Editing", description: "Professional editing, cinematic pacing, visual storytelling, color correction, transitions, and social-media content." },
    { title: "CGI & 3D Visuals", description: "Creating high-quality CGI scenes, product visualizations, environments, and digital artwork." },
    { title: "Motion Graphic Design", description: "Designing animated visuals, title sequences, explainer graphics, promotional videos, and branded motion content." },
    { title: "Graphic Design", description: "Creating visual identities, social-media designs, campaign visuals, layouts, posters, and digital branding." }
  ],
  projects: [
    { title: "Synthetic Horizons", category: "AI Projects", year: "2026", description: "A generative image system for cinematic concept exploration.", image: "project-01.jpg", tone: "#4b281f" },
    { title: "Rhythm in Frames", category: "Video Editing", year: "2026", description: "A pace-driven film edit designed around sound and emotional contrast.", image: "project-02.jpg", tone: "#303846" },
    { title: "Matter / Light", category: "CGI Artwork", year: "2025", description: "Product-focused CGI studies combining tactile materials and controlled light.", image: "project-03.jpg", tone: "#6b341e" },
    { title: "Signals in Motion", category: "Motion Graphics", year: "2025", description: "A modular motion identity built for digital campaign content.", image: "project-04.jpg", tone: "#263b3b" },
    { title: "New Visual Language", category: "Graphic Design", year: "2025", description: "A flexible identity system connecting type, image, and interface.", image: "project-05.jpg", tone: "#59452f" },
    { title: "Machine Dreams", category: "Creative Experiments", year: "2026", description: "Experimental visuals shaped by code, prompts, compositing, and CGI.", image: "project-06.jpg", tone: "#45252c" }
  ],
  skills: [
    { group: "AI & Development", items: ["AI Programming", "Prompt Engineering", "Generative AI", "Automation", "Creative AI Workflows", "API Integration"] },
    { group: "Video & Motion", items: ["Video Editing", "Motion Graphics", "Visual Storytelling", "Color Correction", "Compositing", "Post Production"] },
    { group: "CGI & Design", items: ["CGI Art", "3D Visualization", "Graphic Design", "Photo Manipulation", "Brand Design", "Digital Art"] }
  ],
  software: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Illustrator", "Blender", "Cinema 4D", "DaVinci Resolve", "AI Generation Tools"],
  experiences: [
    { role: "AI Programmer & Creative Technologist", company: "Freelance / Remote", date: "Present" },
    { role: "Video Editor", company: "Freelance / Remote", date: "Present" },
    { role: "CGI Artist", company: "Independent Projects", date: "Present" },
    { role: "Motion Graphic Designer", company: "Freelance / Remote", date: "Present" },
    { role: "Graphic Designer", company: "Independent & Client Projects", date: "Present" }
  ],
  testimonials: [
    { name: "Sara N.", company: "Creative Producer", quote: "Ashkan brings rare technical curiosity and visual sensitivity to every stage of the project.", category: "AI Visual Campaign" },
    { name: "Omar K.", company: "Independent Founder", quote: "The final edit felt cinematic, clear, and completely aligned with the story we wanted to tell.", category: "Video Production" },
    { name: "Lina R.", company: "Brand Consultant", quote: "A thoughtful collaborator who can turn an open brief into a polished and memorable visual system.", category: "Brand & Motion" }
  ],
  packages: [
    { title: "Starter Project", description: "For focused visual assignments with a clear outcome.", deliverables: ["Graphic design or AI visual", "Short-form editing", "One focused creative direction"] },
    { title: "Creative Production", description: "For campaign-ready moving image and visual content.", deliverables: ["Video editing or motion graphics", "CGI visuals", "Campaign content system"], featured: true },
    { title: "Custom AI & Visual Solution", description: "For advanced systems combining creative technology and production.", deliverables: ["AI programming & automation", "CGI production", "Complete visual system"] }
  ],
  certificates: [
    { id: 1, title: "AI for All: From Basics to GenAI Practice", issuer: "NVIDIA Academy", date: "December 2025", category: "AI & Programming", type: "pdf", file: "assets/certificates/AI_for_All_From_Basics_to_GenAI_Practice_AI_for_All_From_Basics.pdf" },
    { id: 2, title: "Ansible Essentials for Network Engineers", issuer: "NVIDIA Academy", date: "December 2025", category: "AI & Programming", type: "pdf", file: "assets/certificates/Ansible_Essentials_for_Network_Engineers_Ansible_Essentials_Completion.pdf" },
    { id: 3, title: "One Million Prompts Initiative", issuer: "Dubai Center for Artificial Intelligence", date: "", category: "AI & Programming", type: "pdf", file: "assets/certificates/ashkan-allahveisi-certificate.pdf" },
    { id: 4, title: "AI Visibility Essentials with Semrush", issuer: "Semrush Academy", date: "", category: "AI & Programming", type: "pdf", file: "assets/certificates/ashkan-allahveisi_25.pdf" },
    { id: 5, title: "Challenge Project - Create a Mini-game", issuer: "Microsoft", date: "December 8, 2025", category: "AI & Programming", type: "pdf", file: "assets/certificates/Challenge project - Create a mini-game.pdf" },
    { id: 6, title: "Discover Data Analysis", issuer: "Microsoft", date: "December 11, 2025", category: "Other", type: "pdf", file: "assets/certificates/Discover data analysis.pdf" },
    { id: 7, title: "Enhance Teaching and Learning with Microsoft 365 Copilot Chat", issuer: "Microsoft", date: "December 8, 2025", category: "AI & Programming", type: "pdf", file: "assets/certificates/Enhance_teaching_and_learning_with_Microsoft_365_Copilot_Chat.pdf" },
    { id: 8, title: "Interacting with AI", issuer: "IBM SkillsBuild", date: "December 10, 2025", category: "AI & Programming", type: "pdf", file: "assets/certificates/IBM.pdf" },
    { id: 9, title: "Boost the Performance of Your Fantasy Football Team with AI", issuer: "IBM SkillsBuild", date: "December 10, 2025", category: "AI & Programming", type: "pdf", file: "assets/certificates/IBM2.pdf" },
    { id: 10, title: "NVIDIA License System - NLS (2025)", issuer: "NVIDIA Academy", date: "December 2025", category: "Other", type: "pdf", file: "assets/certificates/NVIDIA_License_System_NLS_2025_NVIDIA_License_System_Course_Completion.pdf" },
    { id: 11, title: "Foundational C# with Microsoft", issuer: "freeCodeCamp and Microsoft", date: "December 8, 2025", category: "AI & Programming", type: "pdf", file: "assets/certificates/Profile _ freeCodeCamp.org.pdf" },
    { id: 12, title: "Gemini Certified Student", issuer: "Google for Education", date: "December 8, 2025", category: "AI & Programming", type: "pdf", file: "assets/certificates/vaq2p1vd_1765234862342.pdf" },
    { id: 13, title: "Google Ads Video Certification", issuer: "Google Ads", date: "December 9, 2025", category: "Video Editing", type: "image", file: "assets/certificates/image_2025-12-09_17-47-19.png" },
    { id: 14, title: "AI-Powered Shopping Ads Certification", issuer: "Google Ads", date: "December 9, 2025", category: "AI & Programming", type: "image", file: "assets/certificates/image_2025-12-09_17-48-02.png" },
    { id: 15, title: "Google Analytics Certification", issuer: "Google", date: "December 9, 2025", category: "Other", type: "image", file: "assets/certificates/image_2025-12-09_18-13-51.png" },
    { id: 16, title: "Intro to Machine Learning", issuer: "Kaggle", date: "December 2, 2025", category: "AI & Programming", type: "image", file: "assets/certificates/Ashkan AllahVeisi - Intro to Machine Learning.png" },
    { id: 17, title: "Intro to Programming", issuer: "Kaggle", date: "December 1, 2025", category: "AI & Programming", type: "image", file: "assets/certificates/Ashkan AllahVeisi - Intro to Programming.png" },
    { id: 18, title: "Python", issuer: "Kaggle", date: "December 4, 2025", category: "AI & Programming", type: "image", file: "assets/certificates/Ashkan AllahVeisi - Python.png" },
    { id: 19, title: "Intro to Machine Learning", issuer: "Kaggle", date: "December 2, 2025", category: "AI & Programming", type: "image", file: "assets/certificates/Ashkan Veisi - Intro to Machine Learning.png" },
    { id: 20, title: "Intro to Programming", issuer: "Kaggle", date: "December 1, 2025", category: "AI & Programming", type: "image", file: "assets/certificates/Ashkan Veisi - Intro to Programming.png" }
  ],
  socialLinks: { instagram: "#", behance: "#", linkedin: "#", youtube: "#" }
};

const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const escapeHTML = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));

function populateIdentity() {
  qsa("[data-first-name]").forEach((el) => { el.textContent = portfolioData.firstName; });
  qsa("[data-last-name]").forEach((el) => { el.textContent = portfolioData.lastName; });
  qsa("[data-name]").forEach((el) => { el.textContent = portfolioData.name; });
  qsa("[data-primary-title]").forEach((el) => { el.textContent = portfolioData.primaryTitle; });
  qsa("[data-email]").forEach((el) => { el.textContent = portfolioData.email; });
  qsa("[data-phone]").forEach((el) => { el.textContent = portfolioData.phone; });
  qsa("[data-email-link]").forEach((el) => { el.href = `mailto:${portfolioData.email}`; if (!el.querySelector("span")) el.textContent = portfolioData.email; });
  qsa("[data-phone-link]").forEach((el) => { el.href = `tel:${portfolioData.phone}`; if (!el.querySelector("span")) el.textContent = portfolioData.phone; });
  qs("#role-strip").innerHTML = portfolioData.roles.map((role) => `<span>${escapeHTML(role)}</span>`).join("");
  qs("#footer-roles").textContent = portfolioData.roles.join(" · ");
}

function renderContent() {
  qs("#statistics-list").innerHTML = portfolioData.statistics.map((stat) => `<div class="stat"><strong data-count="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</strong><span>${escapeHTML(stat.label)}</span></div>`).join("");
  const projectCards = portfolioData.projects.map((project, index) => `<article class="project-card reveal" style="--project-tone:${project.tone}"><div class="project-image"><img src="assets/${project.image}" alt="${escapeHTML(project.title)} project preview" loading="lazy" data-fallback-image></div><div class="project-copy"><div class="project-meta"><span>${escapeHTML(project.category)}</span><span>•</span><span>${project.year}</span></div><h3>${escapeHTML(project.title)}</h3><p>${escapeHTML(project.description)}</p><a class="case-link" href="#contact">View Case Study ↗</a></div></article>`).join("");
  qs("#project-grid").innerHTML = projectCards;
  qs("#project-orbit").innerHTML = portfolioData.projects.map((project) => `<article class="orbit-card"><div class="orbit-thumb"><img src="assets/${project.image}" alt="" loading="lazy" data-fallback-image></div><h3>${escapeHTML(project.title)}</h3><p>${escapeHTML(project.category)}</p></article>`).join("");
  qs("#service-grid").innerHTML = portfolioData.services.map((service, index) => `<article class="service-card reveal"><span class="service-number">${String(index + 1).padStart(2, "0")}</span><h3>${escapeHTML(service.title)}</h3><p>${escapeHTML(service.description)}</p></article>`).join("");
  qs("#skill-groups").innerHTML = portfolioData.skills.map((skill) => `<section class="skill-group reveal"><h3>${escapeHTML(skill.group)}</h3><div class="tags">${skill.items.map((item) => `<span class="tag">${escapeHTML(item)}</span>`).join("")}</div></section>`).join("");
  qs("#software-row").innerHTML = portfolioData.software.map((item) => `<span class="tag">${escapeHTML(item)}</span>`).join("");
  qs("#experience-list").innerHTML = portfolioData.experiences.map((item, index) => `<article class="timeline-item reveal"><span class="timeline-index">${String(index + 1).padStart(2, "0")}</span><div><h3>${escapeHTML(item.role.toUpperCase())}</h3><p>${escapeHTML(item.company)}</p></div><span class="timeline-date">${escapeHTML(item.date)}</span></article>`).join("");
  qs("#testimonial-grid").innerHTML = portfolioData.testimonials.map((item) => `<article class="testimonial reveal"><div class="client-line"><span class="avatar">${escapeHTML(item.name.charAt(0))}</span><div><h3>${escapeHTML(item.name)}</h3><p>${escapeHTML(item.company)}</p></div></div><div class="stars" aria-label="5 out of 5 stars">★★★★★</div><p class="quote">“${escapeHTML(item.quote)}”</p><p class="category">${escapeHTML(item.category)}</p></article>`).join("");
  qs("#package-grid").innerHTML = portfolioData.packages.map((item) => `<article class="package reveal${item.featured ? " featured" : ""}"><p class="package-label">${item.featured ? "MOST FLEXIBLE" : "PROJECT FORMAT"}</p><h3>${escapeHTML(item.title.toUpperCase())}</h3><p>${escapeHTML(item.description)}</p><ul>${item.deliverables.map((entry) => `<li>${escapeHTML(entry)}</li>`).join("")}</ul><a class="button ${item.featured ? "" : "button-accent"}" href="#contact">Contact Ashkan</a></article>`).join("");
  qs("#social-links").innerHTML = Object.entries(portfolioData.socialLinks).map(([name, url]) => `<a href="${url}" aria-label="${name}">${name.charAt(0).toUpperCase() + name.slice(1)}</a>`).join("");
}

const certificateCategories = ["All", "AI & Programming", "Video Editing", "CGI & 3D", "Motion Graphics", "Graphic Design", "Other"];
let activeCertificateIds = portfolioData.certificates.map((certificate) => certificate.id);
let currentCertificateIndex = -1;
let lastCertificateTrigger = null;
let certificateThumbnailObserver = null;

function createTextElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function createCertificateFallback(certificate) {
  const fallback = document.createElement("div");
  fallback.className = "certificate-preview-fallback";
  const icon = createTextElement("span", "certificate-file-icon", certificate.type === "pdf" ? "PDF" : "FILE");
  const label = createTextElement("strong", "", certificate.type === "pdf" ? "PDF Certificate" : "Certificate Preview");
  fallback.append(icon, label);
  return fallback;
}

async function renderPdfThumbnail(canvas, certificate, fallback) {
  if (!window.pdfjsLib || canvas.dataset.rendered === "true") return;
  canvas.dataset.rendered = "true";
  try {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    const task = window.pdfjsLib.getDocument({ url: certificate.file, isEvalSupported: false, disableAutoFetch: true });
    const documentProxy = await task.promise;
    const page = await documentProxy.getPage(1);
    const baseViewport = page.getViewport({ scale: 1 });
    const scale = Math.min(1.6, 620 / baseViewport.width);
    const viewport = page.getViewport({ scale });
    const context = canvas.getContext("2d", { alpha: false });
    canvas.width = Math.floor(viewport.width);
    canvas.height = Math.floor(viewport.height);
    await page.render({ canvasContext: context, viewport }).promise;
    canvas.hidden = false;
    canvas.classList.remove("is-pending");
    fallback.hidden = true;
    await documentProxy.destroy();
  } catch (error) {
    canvas.hidden = true;
    fallback.hidden = false;
  }
}

function createCertificateCard(certificate) {
  const card = document.createElement("article");
  card.className = "certificate-card reveal";
  card.dataset.certificateId = String(certificate.id);
  card.dataset.category = certificate.category;
  card.tabIndex = 0;
  card.setAttribute("aria-label", `View ${certificate.title}`);

  const previewButton = document.createElement("button");
  previewButton.type = "button";
  previewButton.className = "certificate-preview";
  previewButton.setAttribute("aria-label", `Open ${certificate.title}`);
  const fallback = createCertificateFallback(certificate);
  previewButton.append(fallback);

  if (certificate.type === "image") {
    const image = document.createElement("img");
    image.src = certificate.file;
    image.alt = `${certificate.title} certificate issued to Ashkan Allhaveisi`;
    image.loading = "lazy";
    image.addEventListener("load", () => { fallback.hidden = true; });
    image.addEventListener("error", () => { image.hidden = true; fallback.hidden = false; });
    previewButton.prepend(image);
  } else {
    const canvas = document.createElement("canvas");
    canvas.className = "certificate-pdf-canvas";
    canvas.classList.add("is-pending");
    canvas.dataset.certificateId = String(certificate.id);
    previewButton.prepend(canvas);
    if (certificateThumbnailObserver) certificateThumbnailObserver.observe(canvas);
  }

  const badge = createTextElement("span", "certificate-type-badge", certificate.type === "pdf" ? "PDF" : "IMAGE");
  previewButton.append(badge);

  const details = document.createElement("div");
  details.className = "certificate-details";
  const category = createTextElement("p", "certificate-category", certificate.category);
  const title = createTextElement("h3", "", certificate.title);
  details.append(category, title);
  if (certificate.issuer) details.append(createTextElement("p", "certificate-issuer", certificate.issuer));
  if (certificate.date) details.append(createTextElement("p", "certificate-date", certificate.date));

  const actions = document.createElement("div");
  actions.className = "certificate-actions";
  const viewButton = createTextElement("button", "certificate-view-button", "View Certificate");
  viewButton.type = "button";
  const original = createTextElement("a", "", "Open Original");
  original.href = certificate.file;
  original.target = "_blank";
  original.rel = "noopener noreferrer";
  const download = createTextElement("a", "", "Download");
  download.href = certificate.file;
  download.download = "";
  actions.append(viewButton, original, download);
  details.append(actions);
  card.append(previewButton, details);

  const open = (trigger) => openCertificateModal(certificate.id, trigger);
  previewButton.addEventListener("click", () => open(previewButton));
  viewButton.addEventListener("click", () => open(viewButton));
  card.addEventListener("click", (event) => { if (!event.target.closest("a, button")) open(card); });
  card.addEventListener("keydown", (event) => { if ((event.key === "Enter" || event.key === " ") && event.target === card) { event.preventDefault(); open(card); } });
  return card;
}

function setupCertificateThumbnailObserver() {
  if (!("IntersectionObserver" in window)) return;
  certificateThumbnailObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const canvas = entry.target;
      const certificate = portfolioData.certificates.find((item) => item.id === Number(canvas.dataset.certificateId));
      const fallback = canvas.parentElement.querySelector(".certificate-preview-fallback");
      if (certificate) renderPdfThumbnail(canvas, certificate, fallback);
      certificateThumbnailObserver.unobserve(canvas);
    });
  }, { rootMargin: "350px 0px" });
}

function filterCertificates(category) {
  activeCertificateIds = portfolioData.certificates.filter((certificate) => category === "All" || certificate.category === category).map((certificate) => certificate.id);
  qsa(".certificate-card").forEach((card) => {
    const visible = activeCertificateIds.includes(Number(card.dataset.certificateId));
    card.hidden = !visible;
    card.classList.toggle("certificate-filtered-out", !visible);
  });
  qsa(".certificate-filter").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.category === category)));
  qs("#certificate-empty").hidden = activeCertificateIds.length !== 0;
}

function renderCertificates() {
  setupCertificateThumbnailObserver();
  const count = portfolioData.certificates.length;
  qs("#certificate-count").textContent = `${count} PROFESSIONAL CERTIFICATES`;
  const filters = qs("#certificate-filters");
  certificateCategories.forEach((category) => {
    const button = createTextElement("button", "certificate-filter", category);
    button.type = "button";
    button.dataset.category = category;
    button.setAttribute("aria-pressed", String(category === "All"));
    button.addEventListener("click", () => filterCertificates(category));
    filters.append(button);
  });
  const grid = qs("#certificate-grid");
  portfolioData.certificates.forEach((certificate) => grid.append(createCertificateCard(certificate)));
}

function displayCertificateInModal(certificate) {
  const modal = qs("#certificate-modal");
  const stage = qs("#certificate-modal-stage");
  const title = qs("#certificate-modal-title");
  title.textContent = certificate.title;
  stage.replaceChildren();
  if (certificate.type === "image") {
    const image = document.createElement("img");
    image.src = certificate.file;
    image.alt = `${certificate.title} certificate issued to Ashkan Allhaveisi`;
    image.addEventListener("error", () => {
      stage.replaceChildren(createTextElement("p", "certificate-modal-error", "The image preview could not be displayed. Use Open Original or Download below."));
    });
    stage.append(image);
  } else {
    const object = document.createElement("object");
    object.type = "application/pdf";
    object.data = `${certificate.file}#view=FitH`;
    object.setAttribute("aria-label", `${certificate.title} PDF`);
    const fallback = document.createElement("div");
    fallback.className = "certificate-modal-error";
    fallback.append(createTextElement("p", "", "This browser cannot display the PDF inside the viewer."));
    const fallbackLink = createTextElement("a", "", "Open Original PDF");
    fallbackLink.href = certificate.file;
    fallbackLink.target = "_blank";
    fallbackLink.rel = "noopener noreferrer";
    fallback.append(fallbackLink);
    object.append(fallback);
    stage.append(object);
  }
  qs("#certificate-original").href = certificate.file;
  qs("#certificate-download").href = certificate.file;
  qs("#certificate-position").textContent = `${currentCertificateIndex + 1} / ${activeCertificateIds.length}`;
  qs("#certificate-previous").disabled = activeCertificateIds.length < 2;
  qs("#certificate-next").disabled = activeCertificateIds.length < 2;
  modal.setAttribute("aria-hidden", "false");
}

function openCertificateModal(certificateId, trigger) {
  currentCertificateIndex = activeCertificateIds.indexOf(certificateId);
  if (currentCertificateIndex < 0) return;
  lastCertificateTrigger = trigger;
  const certificate = portfolioData.certificates.find((item) => item.id === certificateId);
  document.body.classList.add("certificate-modal-open");
  qs("#certificate-modal").classList.add("is-open");
  displayCertificateInModal(certificate);
  window.setTimeout(() => qs(".certificate-modal-close").focus(), 50);
}

function closeCertificateModal() {
  const modal = qs("#certificate-modal");
  if (!modal.classList.contains("is-open")) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("certificate-modal-open");
  qs("#certificate-modal-stage").replaceChildren();
  window.setTimeout(() => lastCertificateTrigger?.focus(), 50);
}

function moveCertificate(direction) {
  if (activeCertificateIds.length < 2) return;
  currentCertificateIndex = (currentCertificateIndex + direction + activeCertificateIds.length) % activeCertificateIds.length;
  const certificate = portfolioData.certificates.find((item) => item.id === activeCertificateIds[currentCertificateIndex]);
  displayCertificateInModal(certificate);
}

function setupCertificateModal() {
  const modal = qs("#certificate-modal");
  qsa("[data-modal-close]", modal).forEach((control) => control.addEventListener("click", closeCertificateModal));
  qs("#certificate-previous").addEventListener("click", () => moveCertificate(-1));
  qs("#certificate-next").addEventListener("click", () => moveCertificate(1));
  document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("is-open")) return;
    if (event.key === "Escape") closeCertificateModal();
    if (event.key === "ArrowLeft") moveCertificate(-1);
    if (event.key === "ArrowRight") moveCertificate(1);
    if (event.key === "Tab") {
      const focusable = qsa('button:not([disabled]), a[href], object', modal).filter((element) => !element.hidden);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
}

function setupImages() {
  qsa("[data-fallback-image]").forEach((image) => {
    const loaded = () => image.closest("[data-image-frame]")?.classList.add("image-loaded");
    const failed = () => { image.hidden = true; };
    image.addEventListener("load", loaded);
    image.addEventListener("error", failed);
    if (image.complete) image.naturalWidth ? loaded() : failed();
  });
}

function setupMenu() {
  const toggle = qs(".menu-toggle"); const menu = qs("#site-menu"); const links = qsa("a", menu);
  const close = () => { toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open navigation"); menu.classList.remove("is-open"); menu.setAttribute("aria-hidden", "true"); document.body.classList.remove("menu-open"); };
  const open = () => { toggle.setAttribute("aria-expanded", "true"); toggle.setAttribute("aria-label", "Close navigation"); menu.classList.add("is-open"); menu.setAttribute("aria-hidden", "false"); document.body.classList.add("menu-open"); links[0].focus(); };
  toggle.addEventListener("click", () => toggle.getAttribute("aria-expanded") === "true" ? close() : open());
  links.forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") { close(); toggle.focus(); } });
}

function setupReveal(reduceMotion) {
  const reveal = qsa(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) { reveal.forEach((item) => item.classList.add("is-visible")); return; }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .12, rootMargin: "0px 0px -5%" });
  reveal.forEach((item) => observer.observe(item));
}

function setupCounters(reduceMotion) {
  const counters = qsa("[data-count]");
  const run = (element) => { const end = Number(element.dataset.count); const suffix = element.dataset.suffix || ""; if (reduceMotion) { element.textContent = `${end}${suffix}`; return; } const start = performance.now(); const step = (now) => { const progress = Math.min((now - start) / 1200, 1); element.textContent = `${Math.round(end * (1 - Math.pow(1 - progress, 3)))}${suffix}`; if (progress < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); };
  if (!("IntersectionObserver" in window)) { counters.forEach(run); return; }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { run(entry.target); observer.unobserve(entry.target); } }), { threshold: .6 });
  counters.forEach((counter) => observer.observe(counter));
}

function setupNavigationState() {
  const links = qsa('.menu-inner a[href^="#"]'); const sections = links.map((link) => qs(link.getAttribute("href"))).filter(Boolean); const backTop = qs(".back-top");
  const update = () => { let current = "home"; sections.forEach((section) => { if (section.getBoundingClientRect().top <= 180) current = section.id; }); links.forEach((link) => link.toggleAttribute("aria-current", link.getAttribute("href") === `#${current}`)); backTop.classList.toggle("is-visible", window.scrollY > 650); };
  window.addEventListener("scroll", update, { passive: true }); update(); backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupParallax(reduceMotion) {
  if (reduceMotion || !matchMedia("(min-width: 721px)").matches) return; const portrait = qs(".hero-portrait");
  window.addEventListener("scroll", () => portrait.style.transform = `translateY(${Math.min(window.scrollY * .035, 24)}px)`, { passive: true });
}

function setupForm() {
  const form = qs("#contact-form"); const status = qs("#form-status");
  const fields = [{ id: "name", message: "Please enter your name." }, { id: "email", message: "Enter a valid email address." }, { id: "project-type", message: "Choose a project type." }, { id: "budget", message: "Choose a budget range." }, { id: "message", message: "Please add at least 20 characters." }];
  form.addEventListener("submit", (event) => { event.preventDefault(); let valid = true; fields.forEach(({ id, message }) => { const input = qs(`#${id}`); const error = qs(`#${id}-error`); const fieldValid = input.checkValidity(); input.setAttribute("aria-invalid", String(!fieldValid)); error.textContent = fieldValid ? "" : message; if (!fieldValid) valid = false; }); if (!valid) { status.className = "form-status"; status.textContent = "Please review the highlighted fields."; qs('[aria-invalid="true"]')?.focus(); return; } status.className = "form-status success"; status.textContent = "Thanks — your project details are ready. Connect this form to an email service to deliver submissions."; form.reset(); qsa("[aria-invalid]", form).forEach((field) => field.removeAttribute("aria-invalid")); });
  fields.forEach(({ id }) => qs(`#${id}`).addEventListener("input", (event) => { if (event.target.checkValidity()) { event.target.removeAttribute("aria-invalid"); qs(`#${id}-error`).textContent = ""; } }));
}

document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  populateIdentity(); renderContent(); renderCertificates(); setupCertificateModal(); setupImages(); setupMenu(); setupReveal(reduceMotion); setupCounters(reduceMotion); setupNavigationState(); setupParallax(reduceMotion); setupForm();
});
