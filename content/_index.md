---
# Leave the homepage title empty to use the site title
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
        url: Donald_Zvada_CV_2026.pdf
    design:
      css_class: dz-home-hero
      background:
        color: "#05101e"
        image:
          filename: stacked-peaks.svg
          filters:
            brightness: 0.6
          size: cover
          position: center
          parallax: false

  # ── 2. About / Profile ───────────────────────────────────────
  - block: markdown
    content:
      title: 'About'
      subtitle: ''
      text: |-
        <div class="dz-clean-section dz-stagger">
          <p class="dz-lead">
            <strong>Donald Zvada</strong> is a data-driven researcher, statistician, and data scientist.
            He holds an MSc in Mathematical Sciences from the African Institute for Mathematical Sciences (AIMS) and
            Stellenbosch University, and a First-Class Honours BSc in Operations Research and Statistics from the
            National University of Science and Technology (NUST), Zimbabwe — graduating as the
            <em>Overall Best Graduating Male Student of the Class of 2023</em>.
          </p>
          <p>
            His work blends advanced statistical modelling, machine learning, and applied analytics to solve real-world
            problems. Donald is currently a PhD candidate at Trinity College Dublin, funded by the
            <strong>Research Ireland Frontiers for the Future Programme</strong>. His doctoral research focuses on
            <strong>T-DIET</strong> — developing novel statistical methods for modelling longitudinal dietary patterns
            and their links to health outcomes. He is also passionate about how Large Language Models tackle
            sequential decision-making problems and how probabilistic modelling can be combined with modern AI to
            drive evidence-based decisions in statistics and informatics.
          </p>
        </div>
    design:
      columns: '1'
      css_class: dz-research-block

  # ── 3. Key Stats ─────────────────────────────────────────────
  - block: markdown
    content:
      title: 'At a Glance'
      subtitle: ''
      text: |-
        <div class="dz-stat-strip dz-stagger">
          <div class="dz-stat-card">
            <span class="dz-stat-number">7</span>
            <span class="dz-stat-label">Awards & Honours</span>
          </div>
          <div class="dz-stat-card">
            <span class="dz-stat-number">3</span>
            <span class="dz-stat-label">Degrees & Institutions</span>
          </div>
          <div class="dz-stat-card">
            <span class="dz-stat-number">4</span>
            <span class="dz-stat-label">Courses Taught at TCD</span>
          </div>
          <div class="dz-stat-card">
            <span class="dz-stat-number">2+</span>
            <span class="dz-stat-label">Years Industry Experience</span>
          </div>
          <div class="dz-stat-card">
            <span class="dz-stat-number">3</span>
            <span class="dz-stat-label">Research Projects</span>
          </div>
          <div class="dz-stat-card">
            <span class="dz-stat-number">2</span>
            <span class="dz-stat-label">International Workshops</span>
          </div>
        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

  # ── 4. Current Research ──────────────────────────────────────
  - block: markdown
    content:
      title: 'Research'
      subtitle: ''
      text: |-
        <div class="dz-section-header">
          <p class="dz-label">Current Focus</p>
          <h2 class="dz-title-gradient">Statistical Modelling · Machine Learning · Sequential Decision-Making</h2>
          <p class="dz-desc">
            I work at the intersection of Bayesian statistics, longitudinal modelling, and AI — building methods that
            are both theoretically principled and practically useful.
          </p>
        </div>

        <div class="dz-clean-grid dz-stagger">
          <article class="dz-clean-card">
            <h3>T-DIET Project — PhD Research</h3>
            <p>
              Developing novel statistical methods for modelling longitudinal dietary patterns and their association
              with health outcomes. This is the core of my doctoral work at Trinity College Dublin under the
              supervision of <a href="https://sites.google.com/view/silviadangelo/home?authuser=0" target="_blank" rel="noopener">Assistant Professor Silvia D'Angelo</a>.
            </p>
            <div class="dz-tag-row">
              <span class="dz-tag dz-tag-cyan">Longitudinal Data</span>
              <span class="dz-tag dz-tag-cyan">Bayesian Inference</span>
              <span class="dz-tag dz-tag-cyan">Health Outcomes</span>
            </div>
          </article>

          <article class="dz-clean-card">
            <h3>LLMs for Sequential Decision-Making</h3>
            <p>
              Assessing and characterising the ability of Large Language Models (LLMs) to solve sequential
              decision-making problems, with a focus on the Multi-Armed Bandit (MAB) problem.
              Masters research supervised by Prof Audrey Durand (Université Laval, Canada) — awarded
              <strong>Distinction</strong>.
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
              Studied key relay protocols for quantum key distribution through the prestigious
              <strong>g-RIPS-Sendai programme</strong> at the Institute for Pure & Applied Mathematics (IPAM),
              Tohoku University, Japan — in collaboration with UCLA and AIMR.
            </p>
            <div class="dz-tag-row">
              <span class="dz-tag dz-tag-cyan">Quantum Cryptography</span>
              <span class="dz-tag dz-tag-cyan">Applied Math</span>
            </div>
          </article>
        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

  # ── 5. Education Timeline ─────────────────────────────────────
  - block: markdown
    content:
      title: 'Education'
      subtitle: ''
      text: |-
        <div class="dz-section-header">
          <p class="dz-label">Academic Background</p>
          <h2 class="dz-title-gradient">Education & Training</h2>
        </div>

        <div class="dz-timeline dz-stagger">

          <div class="dz-timeline-item">
            <span class="dz-timeline-date">Sep 2025 – Present</span>
            <span class="dz-timeline-location">Dublin, Ireland</span>
            <p class="dz-timeline-institution">Trinity College Dublin</p>
            <p class="dz-timeline-degree">PhD Candidate — Statistics and Informatics</p>
            <p class="dz-timeline-body">
              Doctoral researcher on the <strong>T-DIET</strong> project: developing novel statistical methods
              for the analysis of longitudinal dietary patterns and their association with health outcomes.
              Funded by the <strong>Research Ireland Frontiers for the Future Programme</strong> (2025).
            </p>
            <span class="dz-timeline-badge">Research Ireland Scholar</span>
          </div>

          <div class="dz-timeline-item">
            <span class="dz-timeline-date">Sep 2024 – Jul 2025</span>
            <span class="dz-timeline-location">Cape Town, South Africa</span>
            <p class="dz-timeline-institution">AIMS South Africa / Stellenbosch University</p>
            <p class="dz-timeline-degree">MSc in Mathematical Sciences</p>
            <p class="dz-timeline-body">
              Focus on Pure Mathematics, Physics, Statistics, and Machine Learning.
              Masters project on LLMs and sequential decision-making — awarded <strong>Distinction</strong>.
              Fully funded by the <strong>Mastercard Foundation Scholarship</strong>.
            </p>
            <span class="dz-timeline-badge">Mastercard Foundation Scholar · Distinction</span>
          </div>

          <div class="dz-timeline-item">
            <span class="dz-timeline-date">2019 – 2023</span>
            <span class="dz-timeline-location">Bulawayo, Zimbabwe</span>
            <p class="dz-timeline-institution">National University of Science & Technology (NUST)</p>
            <p class="dz-timeline-degree">BSc Honours — Operations Research and Statistics</p>
            <p class="dz-timeline-body">
              Graduated with <strong>First Class Honours</strong> as the <em>Overall Best Graduating Male
              Student, Class of 2023</em>. Recognised with the Vice Chancellor's Award, Chancellor's Award,
              Moonlight Zimbabwe Award, and two NUST Book Prizes.
            </p>
            <span class="dz-timeline-badge">1st Division · Best Graduating Male Student 2023</span>
          </div>

          <div class="dz-timeline-item">
            <span class="dz-timeline-date">2017 – 2018</span>
            <span class="dz-timeline-location">Zimbabwe</span>
            <p class="dz-timeline-institution">Centenary High School</p>
            <p class="dz-timeline-degree">Advanced Level</p>
            <p class="dz-timeline-body">
              Studied Pure Mathematics, Statistics, Economics, and Geography.
            </p>
          </div>

        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

  # ── 6. Professional Experience ────────────────────────────────
  - block: markdown
    content:
      title: 'Experience'
      subtitle: ''
      text: |-
        <div class="dz-section-header">
          <p class="dz-label">Professional Experience</p>
          <h2 class="dz-title-gradient">Industry & Research Roles</h2>
        </div>

        <div class="dz-timeline dz-stagger">

          <div class="dz-timeline-item">
            <span class="dz-timeline-date">Dec 2023 – Aug 2024</span>
            <span class="dz-timeline-location">Harare, Zimbabwe</span>
            <p class="dz-timeline-institution">EY Zimbabwe</p>
            <p class="dz-timeline-degree">Quantitative Risk Analyst</p>
            <p class="dz-timeline-body">
              Credit risk model development and validation for clients to ensure compliance with the
              <strong>IFRS 9 Standard</strong>. Built and reviewed PD, LGD, EAD, and MEV models.
              Supported audit assignments and contributed to the development, implementation, and review
              of IFRS 9 frameworks, systems, and tools.
            </p>
            <div class="dz-tag-row" style="margin-top:0.65rem;">
              <span class="dz-tag">IFRS 9</span>
              <span class="dz-tag">Credit Risk</span>
              <span class="dz-tag">PD / LGD / EAD</span>
              <span class="dz-tag">Model Validation</span>
              <span class="dz-tag">Audit Support</span>
            </div>
          </div>

          <div class="dz-timeline-item">
            <span class="dz-timeline-date">Sep 2025 – Present</span>
            <span class="dz-timeline-location">Dublin, Ireland</span>
            <p class="dz-timeline-institution">Trinity College Dublin</p>
            <p class="dz-timeline-degree">Doctoral Researcher</p>
            <p class="dz-timeline-body">
              Developing novel statistical methods for the analysis of longitudinal dietary patterns and
              their association with health outcomes (T-DIET project).
            </p>
          </div>

          <div class="dz-timeline-item">
            <span class="dz-timeline-date">2021 – 2022</span>
            <span class="dz-timeline-location">Harare, Zimbabwe</span>
            <p class="dz-timeline-institution">EcoCash Holdings</p>
            <p class="dz-timeline-degree">Reporting Analyst Intern — Product Solutions & Operations</p>
            <p class="dz-timeline-body">
              Produced product and operations reports, ran product testing (dev environment / beta tests),
              performed data analysis, scheduling, competitor analysis, and delivered business insights
              using <strong>Microsoft Excel</strong> and <strong>Power BI</strong>.
            </p>
            <div class="dz-tag-row" style="margin-top:0.65rem;">
              <span class="dz-tag">Power BI</span>
              <span class="dz-tag">Excel</span>
              <span class="dz-tag">Data Analysis</span>
              <span class="dz-tag">Reporting</span>
            </div>
          </div>

        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

  # ── 7. Awards & Honours ───────────────────────────────────────
  - block: markdown
    content:
      title: 'Awards'
      subtitle: ''
      text: |-
        <div class="dz-section-header">
          <p class="dz-label dz-label-gold">Distinctions & Honours</p>
          <h2 class="dz-title-gradient">Awards & Scholarships</h2>
          <p class="dz-desc">Recognition across academic, research, and professional domains.</p>
        </div>

        <div class="dz-awards-grid dz-stagger">

          <article class="dz-award-card">
            <span class="dz-award-year">2025</span>
            <h3 class="dz-award-title">Research Ireland — Frontiers for the Future PhD Scholarship</h3>
            <p class="dz-award-org">Research Ireland</p>
            <p class="dz-award-body">
              Fully funded PhD scholarship at Trinity College Dublin under the prestigious Frontiers for
              the Future Programme, supporting high-impact research in Statistics and Informatics.
            </p>
          </article>

          <article class="dz-award-card">
            <span class="dz-award-year">2024</span>
            <h3 class="dz-award-title">MasterCard Foundation Scholarship</h3>
            <p class="dz-award-org">MasterCard Foundation</p>
            <p class="dz-award-body">
              Fully sponsored scholarship for the MSc in Mathematical Sciences at the African Institute
              for Mathematical Sciences (AIMS), South Africa.
            </p>
          </article>

          <article class="dz-award-card">
            <span class="dz-award-year">2023</span>
            <h3 class="dz-award-title">Emmerson Dambudzo Mnangagwa Chancellor's Award</h3>
            <p class="dz-award-org">President and Cabinet Office, Zimbabwe</p>
            <p class="dz-award-body">
              National recognition as the <strong>NUST Overall Best Graduating Male Student</strong> for
              the Class of 2023.
            </p>
          </article>

          <article class="dz-award-card">
            <span class="dz-award-year">2023</span>
            <h3 class="dz-award-title">Vice Chancellor's Award</h3>
            <p class="dz-award-org">National University of Science and Technology</p>
            <p class="dz-award-body">
              Overall best graduating student in the Department of Operations Research and Statistics.
            </p>
          </article>

          <article class="dz-award-card">
            <span class="dz-award-year">2023</span>
            <h3 class="dz-award-title">Moonlight Award for Best Graduating Student</h3>
            <p class="dz-award-org">Moonlight Zimbabwe</p>
            <p class="dz-award-body">
              Overall best graduating student in the Faculty of Applied Sciences at NUST.
            </p>
          </article>

          <article class="dz-award-card">
            <span class="dz-award-year">2023</span>
            <h3 class="dz-award-title">NUST Book Prize</h3>
            <p class="dz-award-org">National University of Science and Technology</p>
            <p class="dz-award-body">
              Best Student in the Department of Operations Research and Statistics for the 2023
              calendar year.
            </p>
          </article>

          <article class="dz-award-card">
            <span class="dz-award-year">2021</span>
            <h3 class="dz-award-title">NUST Book Prize</h3>
            <p class="dz-award-org">National University of Science and Technology</p>
            <p class="dz-award-body">
              Best student in the Department of Operations Research and Statistics for the 2021 calendar
              year — recognised again in 2023.
            </p>
          </article>

        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

  # ── 8. Masters Project ────────────────────────────────────────
  - block: markdown
    content:
      title: 'Masters Research'
      subtitle: ''
      text: |-
        <div class="dz-feature-box">
          <p class="dz-feature-label">Featured Research · MSc Masters Project</p>
          <h2 class="dz-feature-title">
            Assessing the Ability of Large Language Models to Solve Sequential Decision-Making Problems
          </h2>
          <p class="dz-feature-meta">Mar 2025 – Jun 2025 · AIMS South Africa / Stellenbosch University</p>
          <p class="dz-feature-body">
            This project assessed and characterised the ability of Large Language Models (LLMs) to solve sequential
            decision-making problems, with a focus on the <strong>Multi-Armed Bandit (MAB)</strong> problem —
            a fundamental framework for understanding exploration versus exploitation trade-offs.
            The research evaluated whether modern LLMs can replicate, complement, or exceed classical
            decision strategies and explored where their capabilities and limitations lie.
          </p>
          <p class="dz-feature-body" style="margin-top:0.6rem;">
            <strong>Supervisor:</strong>
            <a href="https://audrey-durand.github.io" target="_blank" rel="noopener">
              Prof Audrey Durand</a> — Université Laval, Canada.
          </p>
          <span class="dz-distinction-badge">★ Awarded Distinction</span>
        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

  # ── 9. Teaching ───────────────────────────────────────────────
  - block: markdown
    content:
      title: 'Teaching'
      subtitle: ''
      text: |-
        <div class="dz-section-header">
          <p class="dz-label">Academic Teaching</p>
          <h2 class="dz-title-gradient">Teaching Assistant & Demonstrator</h2>
          <p class="dz-desc">
            Supporting undergraduate and postgraduate students at Trinity College Dublin since November 2025.
          </p>
        </div>

        <div class="dz-clean-grid dz-stagger">

          <article class="dz-clean-card">
            <h3>Time Series Analysis</h3>
            <p>Lab sessions using RStudio. Supporting students in understanding time series modelling,
            forecasting, and diagnostics.</p>
            <div class="dz-tag-row">
              <span class="dz-tag dz-tag-cyan">RStudio</span>
              <span class="dz-tag">Lab Demonstrator</span>
            </div>
          </article>

          <article class="dz-clean-card">
            <h3>Multivariate Analysis</h3>
            <p>Lab sessions using RStudio. Covering dimensionality reduction, clustering, and
            multivariate statistical methods.</p>
            <div class="dz-tag-row">
              <span class="dz-tag dz-tag-cyan">RStudio</span>
              <span class="dz-tag">Lab Demonstrator</span>
            </div>
          </article>

          <article class="dz-clean-card">
            <h3>Engineering Practice 2</h3>
            <p>Grading assignments and assisting students in report writing and presentations.
            Providing structured feedback on technical communication.</p>
            <div class="dz-tag-row">
              <span class="dz-tag">Grading</span>
              <span class="dz-tag">Report Writing</span>
            </div>
          </article>

          <article class="dz-clean-card">
            <h3>Mathematics II</h3>
            <p>Mathematical Logic for computer science. Assisting students with formal logic,
            proof techniques, and discrete mathematics.</p>
            <div class="dz-tag-row">
              <span class="dz-tag">Logic</span>
              <span class="dz-tag">Discrete Maths</span>
            </div>
          </article>

        </div>

        <div class="dz-divider"></div>

        <div class="dz-section-header" style="margin-top:1.4rem;margin-bottom:1.3rem;">
          <p class="dz-label">PhD Preparatory Coursework · TCD · 2025–2026</p>
        </div>

        <div class="dz-clean-grid dz-stagger">
          <article class="dz-clean-card">
            <h3>Research Integrity & Impact in an Open Scholarship Era</h3>
            <p>Completed with a <strong>Pass</strong>. Covers responsible research conduct, open science
            practices, and research impact in the digital era.</p>
          </article>
          <article class="dz-clean-card">
            <h3>Research Methods (MSc / PhD by Research)</h3>
            <p>Ongoing. Structured doctoral research training covering quantitative and qualitative
            methodologies in applied mathematical sciences.</p>
          </article>
          <article class="dz-clean-card">
            <h3>Teaching & Supporting Learning for Graduate Teaching Assistants</h3>
            <p>Completed with a <strong>Pass</strong>. Developing evidence-based teaching, feedback, and
            student support skills.</p>
          </article>
        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

  # ── 10. PhD Training Academy ──────────────────────────────────
  - block: markdown
    content:
      title: 'Advanced Training'
      subtitle: ''
      text: |-
        <div class="dz-section-header">
          <p class="dz-label">Academy for PhD Training in Statistics</p>
          <h2 class="dz-title-gradient">Advanced Statistical Training — United Kingdom · 2026</h2>
          <p class="dz-desc">
            Intensive doctoral-level training courses delivered by leading UK statistics departments.
          </p>
        </div>

        <div class="dz-clean-grid dz-stagger">
          <article class="dz-clean-card">
            <h3>High-Dimensional Statistics</h3>
            <p><strong>April 2026</strong> · Nottingham University</p>
            <p>Advanced methods for statistical inference and estimation in high-dimensional settings.</p>
          </article>
          <article class="dz-clean-card">
            <h3>Statistical Modelling</h3>
            <p><strong>April 2026</strong> · Nottingham University</p>
            <p>Advanced statistical modelling frameworks, model selection, and diagnostics.</p>
          </article>
          <article class="dz-clean-card">
            <h3>Applied Stochastic Processes</h3>
            <p><strong>July 2026</strong> · University of St Andrews</p>
            <p>Theory and application of stochastic processes with a focus on biological and statistical
            systems.</p>
          </article>
          <article class="dz-clean-card">
            <h3>Computer Intensive Statistics</h3>
            <p><strong>July 2026</strong> · University of St Andrews</p>
            <p>Computational statistics including bootstrap, MCMC, and simulation-based inference.</p>
          </article>
        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

  # ── 11. Workshops & Certificates ─────────────────────────────
  - block: markdown
    content:
      title: 'Workshops'
      subtitle: ''
      text: |-
        <div class="dz-section-header">
          <p class="dz-label">Workshops & Certificates</p>
          <h2 class="dz-title-gradient">International Programmes & Research Workshops</h2>
        </div>

        <div class="dz-workshop-grid dz-stagger">

          <article class="dz-workshop-card">
            <span class="dz-workshop-label">Jun – Aug 2025 · Sendai, Japan</span>
            <h3 class="dz-workshop-title">Key Relay Protocol for Quantum Key Distribution</h3>
            <p class="dz-workshop-meta">g-RIPS-Sendai Programme · IPAM / UCLA / AIMR / Tohoku University</p>
            <p class="dz-workshop-body">
              The Research in Industrial Projects for Students (RIPS) programme at the Institute for Pure
              & Applied Mathematics (IPAM) of UCLA. The AIMR at Tohoku University in Sendai launched the
              g-RIPS-Sendai programme in collaboration with IPAM, targeting graduate-level students in
              mathematical science and related disciplines. Studied quantum key relay protocols in an
              international, collaborative research setting.
            </p>
          </article>

          <article class="dz-workshop-card">
            <span class="dz-workshop-label">Cape Town, South Africa</span>
            <h3 class="dz-workshop-title">Africa Scientifique Workshop</h3>
            <p class="dz-workshop-meta">Science Communication Skills</p>
            <p class="dz-workshop-body">
              Workshop focused on building effective science communication skills — covering clear writing,
              public engagement, and communicating research to non-specialist audiences across Africa and
              beyond.
            </p>
          </article>

        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

  # ── 12. Skills & Expertise ────────────────────────────────────
  - block: markdown
    content:
      title: 'Skills'
      subtitle: ''
      text: |-
        <div class="dz-section-header">
          <p class="dz-label">Technical Competencies</p>
          <h2 class="dz-title-gradient">Skills & Software Stack</h2>
        </div>

        <div class="dz-clean-grid dz-stagger">

          <article class="dz-clean-card">
            <h3>Statistics & Modelling</h3>
            <ul class="dz-list-clean">
              <li>Bayesian inference and latent variable modelling</li>
              <li>Longitudinal and sequential data analysis</li>
              <li>Risk modelling and model validation (IFRS 9)</li>
              <li>High-dimensional and multivariate statistics</li>
              <li>Stochastic processes and time series analysis</li>
            </ul>
          </article>

          <article class="dz-clean-card">
            <h3>Machine Learning & AI</h3>
            <ul class="dz-list-clean">
              <li>Supervised and unsupervised learning workflows</li>
              <li>LLM behaviour on sequential decision tasks</li>
              <li>Research-focused evaluation and reproducible pipelines</li>
              <li>Machine learning models and applications</li>
              <li>Data science end-to-end pipelines</li>
            </ul>
          </article>

          <article class="dz-clean-card">
            <h3>Software & Tools</h3>
            <div class="dz-tag-row">
              <span class="dz-tag">Python</span>
              <span class="dz-tag">R / RStudio</span>
              <span class="dz-tag">Power BI</span>
              <span class="dz-tag">Git / GitHub</span>
              <span class="dz-tag">SPSS</span>
              <span class="dz-tag">Excel</span>
              <span class="dz-tag">PowerPoint</span>
              <span class="dz-tag">Macaulay2</span>
            </div>
          </article>

          <article class="dz-clean-card">
            <h3>Areas of Expertise</h3>
            <div class="dz-tag-row">
              <span class="dz-tag">Quantitative Risk Analysis</span>
              <span class="dz-tag">IFRS9 Auditing</span>
              <span class="dz-tag">Credit Control</span>
              <span class="dz-tag">Data Science</span>
              <span class="dz-tag">Research</span>
              <span class="dz-tag">Monitoring & Evaluation</span>
            </div>
          </article>

        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

  # ── 13. Leadership & Outreach ─────────────────────────────────
  - block: markdown
    content:
      title: 'Leadership'
      subtitle: ''
      text: |-
        <div class="dz-section-header">
          <p class="dz-label">Community & Leadership</p>
          <h2 class="dz-title-gradient">Leadership, Outreach & Voluntary Work</h2>
          <p class="dz-desc">
            Building stronger scientific communities through representation, mentoring, AI outreach, and
            structured collaboration.
          </p>
        </div>

        <div class="dz-clean-grid dz-stagger">

          <article class="dz-clean-card">
            <h3>IndabaX Zimbabwe — Organiser</h3>
            <p><strong>Jan 2025 – Present · Harare, Zimbabwe</strong></p>
            <p>
              Co-organising the Deep Learning IndabaX Zimbabwe — a vibrant space where local researchers,
              students, and practitioners engage with cutting-edge AI research and build community.
            </p>
          </article>

          <article class="dz-clean-card">
            <h3>IOAI — Trainer</h3>
            <p><strong>Jan 2026 – Present · Harare, Zimbabwe</strong></p>
            <p>
              Training students to compete in the <strong>International Olympiad in Artificial
              Intelligence (IOAI)</strong> — preparing them for international and continental AI contests.
            </p>
          </article>

          <article class="dz-clean-card">
            <h3>AIMS South Africa — MasterCard Foundation Scholar Representative</h3>
            <p><strong>2024 – Aug 2025 · Cape Town, South Africa</strong></p>
            <p>
              Student representative for Mastercard Foundation Scholars at AIMS. Organised meetings with
              stakeholders and students, prepared timesheets, reports, feedback, and led voluntary
              community-focused activities.
            </p>
          </article>

          <article class="dz-clean-card">
            <h3>AIMS House of Science — Tutoring Lead</h3>
            <p><strong>2024 – Aug 2025 · Cape Town, South Africa</strong></p>
            <p>
              Led tutoring sessions for school children in the AIMS outreach programme. Planned and
              scheduled tutorial sessions and mentored students in mathematics and science.
            </p>
          </article>

          <article class="dz-clean-card">
            <h3>NUST — Voluntary Tutor</h3>
            <p><strong>2022 – Present · Zimbabwe</strong></p>
            <p>
              Providing voluntary tutoring to NUST Mathematics students. Offering project guidance and
              academic support to undergraduate students in Operations Research and Statistics.
            </p>
          </article>

        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

  # ── 14. References ────────────────────────────────────────────
  - block: markdown
    content:
      title: 'References'
      subtitle: ''
      text: |-
        <div class="dz-section-header">
          <p class="dz-label">Academic References</p>
          <h2 class="dz-title-gradient">Available on Request</h2>
        </div>

        <div class="dz-reference-grid dz-stagger">

          <article class="dz-reference-card">
            <p class="dz-reference-name">Prof Silvia D'Angelo</p>
            <p class="dz-reference-role">PhD Supervisor<br>Trinity College Dublin (TCD)</p>
            <p class="dz-reference-email">
              <a href="mailto:dangelos@tcd.ie">dangelos@tcd.ie</a>
            </p>
          </article>

          <article class="dz-reference-card">
            <p class="dz-reference-name">Dr Mpfareleni Rejoyce Gavhi</p>
            <p class="dz-reference-role">Researcher & House of Science Manager<br>
              African Institute for Mathematical Sciences, South Africa</p>
            <p class="dz-reference-email">
              <a href="mailto:rejoyce@aims.ac.za">rejoyce@aims.ac.za</a>
            </p>
          </article>

          <article class="dz-reference-card">
            <p class="dz-reference-name">Prof Precious Mdlongwa</p>
            <p class="dz-reference-role">Department Chair in Statistics<br>
              National University of Science and Technology, Zimbabwe</p>
            <p class="dz-reference-email">
              <a href="mailto:precious.mdlongwa@nust.ac.zw">precious.mdlongwa@nust.ac.zw</a>
            </p>
          </article>

        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

  # ── 15. Contact ───────────────────────────────────────────────
  - block: markdown
    id: contact
    content:
      title: 'Contact'
      subtitle: ''
      text: |-
        <div class="dz-clean-grid dz-stagger">

          <article class="dz-clean-card">
            <h3>Get in Touch</h3>
            <p>I am open to research collaboration, teaching partnerships, data science consulting, and
            opportunities at the intersection of statistics, AI, and real-world impact.</p>
            <p><strong>Email:</strong> <a href="mailto:zvadad@tcd.ie">zvadad@tcd.ie</a></p>
            <p><strong>Alt:</strong> <a href="mailto:donald@aims.ac.za">donald@aims.ac.za</a></p>
            <p><strong>LinkedIn:</strong>
              <a href="https://www.linkedin.com/in/donnie-zvada/" target="_blank" rel="noopener">
                Donnie Zvada</a></p>
            <p><strong>GitHub:</strong>
              <a href="https://github.com/Donniezvadah" target="_blank" rel="noopener">
                Donniezvadah</a></p>
          </article>

          <article class="dz-clean-card">
            <h3>Quick Links</h3>
            <div class="dz-tag-row" style="margin-top:0.2rem;">
              <a class="dz-tag dz-tag-link" href="/projects/">Projects</a>
              <a class="dz-tag dz-tag-link" href="/experience/">Education</a>
              <a class="dz-tag dz-tag-link" href="/leadership-page/">Leadership</a>
              <a class="dz-tag dz-tag-link"
                 href="/Donald_Zvada_CV_2026.pdf"
                 target="_blank" rel="noopener">Download CV (PDF)</a>
            </div>
          </article>

        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

---
