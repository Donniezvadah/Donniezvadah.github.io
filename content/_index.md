---
title: ""
date: 2022-10-24
type: landing

design:
  spacing: "5rem"

sections:

  # ── 1. Hero / Biography ───────────────────────────────────────
  - block: resume-biography-3
    content:
      username: admin
      text: ""
      button:
        text: Download CV (2026)
        url: Donald_2026_Updated_CV.pdf
    design:
      css_class: dz-home-hero
      background:
        color: "#f2f5fb"

  # ── 2. Current Research ───────────────────────────────────────
  - block: markdown
    content:
      title: 'Research'
      subtitle: ''
      text: |-
        <div class="dz-section-header">
          <p class="dz-label">PhD Research · Trinity College Dublin · 2025–Present</p>
          <h2 class="dz-title-gradient">T-DIET: Longitudinal Dietary Patterns & Health Outcomes</h2>
          <p class="dz-desc">
            Developing novel statistical methods for modelling how dietary patterns evolve over time and
            how those patterns relate to health outcomes — combining Bayesian inference, latent variable
            modelling, and longitudinal data analysis.
          </p>
        </div>

        <!-- Supervisor Card -->
        <div class="dz-supervisor-card">
          <div>
            <p class="dz-supervisor-label">PhD Supervisor</p>
            <p class="dz-supervisor-name">
              <a href="https://sites.google.com/view/silviadangelo/home?authuser=0"
                 target="_blank" rel="noopener">
                Assistant Professor Silvia D'Angelo
              </a>
            </p>
            <p class="dz-supervisor-role">
              Assistant Professor in Statistics · Trinity College Dublin ·
              <a href="mailto:dangelos@tcd.ie">dangelos@tcd.ie</a>
            </p>
          </div>
        </div>

        <div class="dz-divider"></div>

        <div class="dz-clean-grid dz-stagger">

          <article class="dz-clean-card">
            <h3>T-DIET Project</h3>
            <p>
              Novel statistical methods for the analysis of longitudinal dietary patterns and their
              association with health outcomes. Funded by the
              <strong>Research Ireland Frontiers for the Future Programme</strong> (2025).
            </p>
            <div class="dz-tag-row">
              <span class="dz-tag dz-tag-cyan">Longitudinal Data</span>
              <span class="dz-tag dz-tag-cyan">Bayesian Inference</span>
              <span class="dz-tag dz-tag-cyan">Latent Variables</span>
            </div>
          </article>

          <article class="dz-clean-card">
            <h3>LLMs & Sequential Decision-Making</h3>
            <p>
              MSc research assessing the ability of Large Language Models to solve
              Multi-Armed Bandit problems — awarded <strong>Distinction</strong> (AIMS South Africa,
              2025). Supervised by Prof Audrey Durand, Université Laval, Canada.
            </p>
            <div class="dz-tag-row">
              <span class="dz-tag dz-tag-cyan">LLMs</span>
              <span class="dz-tag dz-tag-cyan">MAB</span>
              <span class="dz-tag dz-tag-cyan">AI Evaluation</span>
            </div>
          </article>

          <article class="dz-clean-card">
            <h3>Quantum Key Distribution</h3>
            <p>
              Studied key relay protocols for quantum key distribution at the
              <strong>g-RIPS-Sendai programme</strong> — a collaboration between IPAM (UCLA), AIMR,
              and Tohoku University, Japan (2025).
            </p>
            <div class="dz-tag-row">
              <span class="dz-tag dz-tag-cyan">Quantum Cryptography</span>
              <span class="dz-tag dz-tag-cyan">Applied Mathematics</span>
            </div>
          </article>

        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

  # ── 3. Navigate to Pages ──────────────────────────────────────
  - block: markdown
    content:
      title: 'Explore'
      subtitle: ''
      text: |-
        <div class="dz-nav-grid dz-stagger">

          <a class="dz-nav-card" href="/experience/">
            <p class="dz-nav-card-num">01</p>
            <p class="dz-nav-card-title">Education & Experience</p>
            <p class="dz-nav-card-desc">
              PhD at Trinity, MSc at AIMS/Stellenbosch, BSc at NUST — plus industry roles at EY
              Zimbabwe and EcoCash.
            </p>
            <span class="dz-nav-card-arrow">View Education →</span>
          </a>

          <a class="dz-nav-card" href="/projects/">
            <p class="dz-nav-card-num">02</p>
            <p class="dz-nav-card-title">Research & Projects</p>
            <p class="dz-nav-card-desc">
              T-DIET, LLMs for sequential decision-making, quantum key distribution,
              IFRS 9 risk modelling, and teaching projects.
            </p>
            <span class="dz-nav-card-arrow">View Projects →</span>
          </a>

          <a class="dz-nav-card" href="/leadership-page/">
            <p class="dz-nav-card-num">03</p>
            <p class="dz-nav-card-title">Leadership & Outreach</p>
            <p class="dz-nav-card-desc">
              IndabaX Zimbabwe organiser, IOAI trainer, MasterCard Foundation scholar rep,
              AIMS House of Science tutoring lead.
            </p>
            <span class="dz-nav-card-arrow">View Leadership →</span>
          </a>

          <a class="dz-nav-card" href="/publications/">
            <p class="dz-nav-card-num">04</p>
            <p class="dz-nav-card-title">Published Work & Presentations</p>
            <p class="dz-nav-card-desc">
              Peer-reviewed reports and talks — including the g-RIPS-Sendai quantum key
              distribution paper — plus my Google Scholar profile.
            </p>
            <span class="dz-nav-card-arrow">View Publications →</span>
          </a>

          <a class="dz-nav-card" href="/Donald_2026_Updated_CV.pdf" target="_blank" rel="noopener">
            <p class="dz-nav-card-num">05</p>
            <p class="dz-nav-card-title">Download Full CV</p>
            <p class="dz-nav-card-desc">
              Complete academic CV including education, experience, awards, teaching,
              workshops, and references.
            </p>
            <span class="dz-nav-card-arrow">Open PDF →</span>
          </a>

        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

  # ── 4. Contact ────────────────────────────────────────────────
  - block: markdown
    id: contact
    content:
      title: 'Contact'
      subtitle: ''
      text: |-
        <div class="dz-clean-grid dz-stagger">

          <article class="dz-clean-card">
            <h3>Get in Touch</h3>
            <p>
              Open to research collaboration, teaching partnerships, data science consulting, and
              opportunities at the intersection of statistics, AI, and real-world impact.
            </p>
            <p><strong>TCD Email:</strong> <a href="mailto:zvadad@tcd.ie">zvadad@tcd.ie</a></p>
            <p><strong>AIMS Email:</strong> <a href="mailto:donald@aims.ac.za">donald@aims.ac.za</a></p>
            <p>
              <strong>LinkedIn:</strong>
              <a href="https://www.linkedin.com/in/donnie-z-1528bb1a7" target="_blank" rel="noopener">
                linkedin.com/in/donnie-z-1528bb1a7
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>
              <a href="https://github.com/Donniezvadah" target="_blank" rel="noopener">
                github.com/Donniezvadah
              </a>
            </p>
          </article>

          <article class="dz-clean-card">
            <h3>Academic References</h3>
            <p><strong><a href="https://sites.google.com/view/silviadangelo/home?authuser=0" target="_blank" rel="noopener">Prof Silvia D'Angelo</a></strong> — PhD Supervisor, TCD<br>
              <a href="mailto:dangelos@tcd.ie">dangelos@tcd.ie</a>
            </p>
            <p><strong>Dr Mpfareleni Rejoyce Gavhi</strong> — AIMS South Africa<br>
              <a href="mailto:rejoyce@aims.ac.za">rejoyce@aims.ac.za</a>
            </p>
            <p><strong>Prof Precious Mdlongwa</strong> — NUST, Zimbabwe<br>
              <a href="mailto:precious.mdlongwa@nust.ac.zw">precious.mdlongwa@nust.ac.zw</a>
            </p>
          </article>

        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

---
