(() => {
  const supported = ["ru", "en", "sr"];
  const $ = (id) => document.getElementById(id);
  const query = new URLSearchParams(location.search).get("lang");
  let saved = null;
  try {
    saved = localStorage.getItem("mf-portfolio-language");
  } catch (_) {}
  let lang = supported.includes(query) ? query : supported.includes(saved) ? saved : "ru";

  const contactLabels = {
    ru: { email: "Основная почта", phone: "Телефон", open: "Открыть полный кейс" },
    en: { email: "Primary email", phone: "Phone", open: "Open full case" },
    sr: { email: "Glavni imejl", phone: "Telefon", open: "Otvori ceo slučaj" },
  };

  const escapeHtml = (value) =>
    String(value).replace(/[&<>'"]/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    })[char]);

  const setText = (id, value) => {
    const element = $(id);
    if (element) element.textContent = value || "";
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  function observeNewElements() {
    document.querySelectorAll(".reveal:not(.visible)").forEach((item) => observer.observe(item));
  }

  function openCase(index) {
    const data = window.PROFILE_DATA[lang];
    const item = data.cases[index];
    setText("dialogTitle", `${item.id} · ${item.title}`);
    setText("dialogClose", "×");
    $("dialogClose").setAttribute("aria-label", data.caseLabels.close);
    $("dialogContent").innerHTML = [
      ["challenge", data.caseLabels.challenge],
      ["solution", data.caseLabels.solution],
      ["result", data.caseLabels.result],
      ["stack", data.caseLabels.stack],
    ].map(([key, label]) => `
      <section>
        <h4>${escapeHtml(label)}</h4>
        <p>${escapeHtml(item[key])}</p>
      </section>
    `).join("");
    $("caseDialog").hidden = false;
  }

  function render(language) {
    if (!supported.includes(language)) language = "ru";
    lang = language;
    const data = window.PROFILE_DATA[lang];
    const extra = window.PORTFOLIO_EXTRAS[lang];
    const labels = contactLabels[lang];

    document.documentElement.lang = lang;
    document.title = data.metaTitle;
    document.querySelectorAll("[data-lang]").forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll("[data-nav]").forEach((link) => {
      link.textContent = data.nav[link.dataset.nav];
    });

    setText("navExtra", extra.navExtra);
    setText("statusText", data.status);
    setText("heroKicker", data.heroKicker);
    setText("heroTitle", data.heroTitle);
    setText("heroRole", data.role);
    setText("heroLead", data.heroLead);
    setText("formRole", data.role);
    setText("heroPdf", data.buttons.pdf);
    setText("heroContact", data.buttons.contact);
    setText("heroCases", data.nav.cases);
    setText("lblStatus", data.formLabels.status);
    setText("lblFocus", data.formLabels.focus);
    setText("lblScale", data.formLabels.scale);
    setText("lblLocation", data.formLabels.location);
    setText("valStatus", data.formValues.status);
    setText("valFocus", data.formValues.focus);
    setText("valScale", data.formValues.scale);
    setText("valLocation", data.formValues.location);
    setText("commandText", data.commandText);

    $("metrics").innerHTML = data.metrics.map(([value, label]) => `
      <div class="metric"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>
    `).join("");

    setText("profileLabel", data.profileLabel);
    setText("profileTitle", data.profileTitle);
    setText("profileText", data.profileText);
    $("competencyGrid").innerHTML = data.competencies.map(([title, text], index) => `
      <article class="competency reveal">
        <span class="number">${String(index + 1).padStart(2, "0")}</span>
        <h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p>
      </article>
    `).join("");

    setText("experienceLabel", data.experienceLabel);
    setText("experienceTitle", data.experienceTitle);
    $("experienceGrid").innerHTML = data.experience.map((item) => `
      <article class="job reveal">
        <div class="job-aside"><time>${escapeHtml(item.period)}</time><b>${escapeHtml(item.company)}</b></div>
        <div class="job-main">
          <h3>${escapeHtml(item.role)}</h3><p>${escapeHtml(item.intro)}</p>
          <ul>${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
        </div>
      </article>
    `).join("");

    setText("casesLabel", data.casesLabel);
    setText("casesTitle", data.casesTitle);
    setText("casesIntro", data.casesIntro);
    setText("caseNoteTitle", extra.casesNoteTitle);
    setText("caseNote", extra.casesNote);
    $("caseGrid").innerHTML = data.cases.map((item, index) => `
      <article class="case-card reveal" tabindex="0" role="button" data-case="${index}">
        <div class="case-summary">
          <span class="case-id">${escapeHtml(item.id)} · ${escapeHtml(data.caseStatus)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p class="short">${escapeHtml(item.short)}</p>
          <span class="open-case">${escapeHtml(labels.open)} ↗</span>
        </div>
        <div class="case-hover" aria-hidden="true">
          <dl>
            <div><dt>${escapeHtml(data.caseLabels.challenge)}</dt><dd>${escapeHtml(item.challenge)}</dd></div>
            <div><dt>${escapeHtml(data.caseLabels.solution)}</dt><dd>${escapeHtml(item.solution)}</dd></div>
            <div><dt>${escapeHtml(data.caseLabels.result)}</dt><dd>${escapeHtml(item.result)}</dd></div>
            <div><dt>${escapeHtml(data.caseLabels.stack)}</dt><dd>${escapeHtml(item.stack)}</dd></div>
          </dl>
        </div>
      </article>
    `).join("");
    document.querySelectorAll(".case-card").forEach((card) => {
      card.addEventListener("click", () => openCase(Number(card.dataset.case)));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openCase(Number(card.dataset.case));
        }
      });
    });

    setText("extraLabel", extra.extraLabel);
    setText("extraTitle", extra.extraTitle);
    setText("extraIntro", extra.extraIntro);
    $("additionalGrid").innerHTML = extra.extras.map((item) => `
      <article class="additional-card reveal">
        <div class="additional-id">${escapeHtml(item.id)}</div>
        <h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p>
        <dl>
          <div><dt>${escapeHtml(extra.resultLabel)}</dt><dd>${escapeHtml(item.result)}</dd></div>
          <div><dt>${escapeHtml(extra.stackLabel)}</dt><dd>${escapeHtml(item.stack)}</dd></div>
        </dl>
      </article>
    `).join("");

    setText("workflowLabel", data.workflowLabel);
    setText("workflowTitle", data.workflowTitle);
    $("workflowGrid").innerHTML = data.workflow.map(([index, title, text]) => `
      <article class="workflow-step reveal">
        <span>${escapeHtml(index)}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p>
      </article>
    `).join("");

    setText("skillsLabel", data.skillsLabel);
    setText("skillsTitle", data.skillsTitle);
    $("skillGrid").innerHTML = data.skills.map((skill) => `<span class="skill">${escapeHtml(skill)}</span>`).join("");

    setText("toolsLabel", data.toolsLabel);
    setText("toolsTitle", data.toolsTitle);
    $("demoGrid").innerHTML = data.demos.map(([title, text, href], index) => `
      <article class="demo-card reveal">
        <span class="demo-icon">${String(index + 1).padStart(2, "0")}</span>
        <h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p>
        <a href="${escapeHtml(href)}" target="_blank">${escapeHtml(data.demoOpen)} ↗</a>
      </article>
    `).join("");

    setText("pdfBadge", extra.pdfBadge);
    setText("pdfTitle", extra.pdfTitle);
    setText("pdfText", extra.pdfText);
    setText("pdfButton", data.buttons.pdf);
    setText("pdfHint", extra.pdfHint);
    setText("contactLabel", data.contactLabel);
    setText("contactTitle", data.contactTitle);
    setText("contactText", extra.contactText);
    setText("emailLabel", labels.email);
    setText("secondEmailLabel", extra.secondEmail);
    setText("phoneLabel", labels.phone);
    setText("footerText", data.footer);
    setText("systemStatus", data.systemStatus);

    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState({}, "", url);
    try {
      localStorage.setItem("mf-portfolio-language", lang);
    } catch (_) {}
    observeNewElements();
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.lang));
  });
  $("dialogClose").addEventListener("click", () => {
    $("caseDialog").hidden = true;
  });
  $("caseDialog").addEventListener("click", (event) => {
    if (event.target === $("caseDialog")) $("caseDialog").hidden = true;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") $("caseDialog").hidden = true;
  });

  render(lang);
})();
