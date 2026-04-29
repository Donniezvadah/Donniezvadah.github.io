---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV (2026)
        url: Donald_Zvada_CV_2026.pdf
    design:
      css_class: dz-home-hero
      background:
        color: "#f3f4f6"
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    content:
      title: 'Research Focus'
      subtitle: ''
      text: |-
        <div class="dz-clean-section dz-stagger">
          <p class="dz-lead">
            I work at the intersection of statistical modelling, machine learning, and sequential decision-making.
            My doctoral research at Trinity College Dublin focuses on <strong>T-DIET</strong>:
            novel statistical methods for modelling longitudinal dietary patterns and their links to health outcomes.
          </p>
          <p>
            I conduct this work and research under the guidance of
            <a href="https://sites.google.com/view/silviadangelo/home?authuser=0" target="_blank" rel="noopener">Assistant Professor Silvia D'Angelo</a>.
            I also study how Large Language Models perform on sequential decision tasks
            and explore how probabilistic modelling can be combined with modern AI to solve real-world challenges in statistics and informatics.
          </p>
        </div>
    design:
      columns: '1'
      css_class: dz-research-block
  - block: markdown
    content:
      title: 'Skills & Stack'
      subtitle: ''
      text: |-
        <div class="dz-clean-grid dz-stagger">
          <article class="dz-clean-card">
            <h3>Statistics & Modelling</h3>
            <ul class="dz-list-clean">
              <li>Bayesian inference and latent variable modelling</li>
              <li>Longitudinal and sequential data analysis</li>
              <li>Risk modelling and model validation (IFRS 9)</li>
            </ul>
          </article>
          <article class="dz-clean-card">
            <h3>Machine Learning & AI</h3>
            <ul class="dz-list-clean">
              <li>Supervised and unsupervised learning workflows</li>
              <li>LLM behaviour on sequential decision tasks</li>
              <li>Research-focused evaluation and reproducible pipelines</li>
            </ul>
          </article>
          <article class="dz-clean-card">
            <h3>Tools</h3>
            <div class="dz-tag-row">
              <span class="dz-tag">Python</span>
              <span class="dz-tag">R</span>
              <span class="dz-tag">Power BI</span>
              <span class="dz-tag">GitHub</span>
              <span class="dz-tag">SPSS</span>
              <span class="dz-tag">Excel</span>
            </div>
          </article>
        </div>
    design:
      columns: '1'
      css_class: dz-phd-block
  - block: markdown
    content:
      title: 'PhD & Supervision'
      subtitle: ''
      text: |-
        <div class="dz-clean-grid dz-stagger">
          <article class="dz-clean-card">
            <h3>Current PhD</h3>
            <p><strong>Programme:</strong> PhD in Statistics and Informatics, Trinity College Dublin (2025-Present)</p>
            <p><strong>Project:</strong> T-DIET - novel statistical methods for longitudinal dietary patterns and health outcomes.</p>
          </article>
          <article class="dz-clean-card">
            <h3>Supervisor</h3>
            <p><strong>Silvia D'Angelo</strong><br>Assistant Professor in Statistics, Trinity College Dublin</p>
            <p>Email: <a href="mailto:dangelos@tcd.ie">dangelos@tcd.ie</a></p>
            <p><a href="https://sites.google.com/view/silviadangelo/home?authuser=0" target="_blank" rel="noopener">Supervisor Profile</a></p>
          </article>
          <article class="dz-clean-card">
            <h3>Recent Highlights (CV 2026)</h3>
            <p>Research Ireland Frontiers for the Future PhD Scholarship (2025), MSc in Mathematical Sciences (AIMS/Stellenbosch), and teaching support in Time Series Analysis and Multivariate Analysis at Trinity.</p>
          </article>
        </div>
    design:
      columns: '1'
      css_class: dz-phd-block
  - block: markdown
    content:
      title: 'Professional Experience'
      subtitle: ''
      text: |-
        <div class="dz-clean-grid dz-stagger">
          <article class="dz-clean-card">
            <h3>EY Zimbabwe</h3>
            <p><strong>Role:</strong> Quantitative Risk Analyst (2023-2024)</p>
            <p>Built and validated IFRS 9 credit risk models, including PD, LGD, EAD and MEV components, and supported audit assignments.</p>
          </article>
          <article class="dz-clean-card">
            <h3>EcoCash Holdings</h3>
            <p><strong>Role:</strong> Reporting Analyst Intern (2021-2022)</p>
            <p>Produced product and operations reports, ran product testing, and delivered business insights using Excel and Power BI.</p>
          </article>
          <article class="dz-clean-card">
            <h3>Research & Analytics Direction</h3>
            <p>Data science, applied statistics, risk analytics, and research-led modelling for evidence-driven decisions.</p>
          </article>
        </div>
    design:
      columns: '1'
      css_class: dz-phd-block
  - block: markdown
    content:
      title: 'Awards, Teaching & Leadership'
      subtitle: ''
      text: |-
        <div class="dz-clean-grid dz-stagger">
          <article class="dz-clean-card">
            <h3>Awards</h3>
            <ul class="dz-list-clean">
              <li>Research Ireland Frontiers for the Future PhD Scholarship (2025)</li>
              <li>Mastercard Foundation Scholarship for MSc Mathematical Sciences (2024)</li>
              <li>NUST and national graduation awards for top student performance (2023)</li>
            </ul>
          </article>
          <article class="dz-clean-card">
            <h3>Teaching</h3>
            <ul class="dz-list-clean">
              <li>Time Series Analysis - lab support (RStudio)</li>
              <li>Multivariate Analysis - lab support (RStudio)</li>
              <li>Mathematics and engineering course support at Trinity College Dublin</li>
            </ul>
          </article>
          <article class="dz-clean-card">
            <h3>Leadership & Outreach</h3>
            <ul class="dz-list-clean">
              <li>Mastercard Foundation Scholar Representative (AIMS South Africa)</li>
              <li>IndabaX Zimbabwe organiser</li>
              <li>IOAI trainer and tutoring lead in STEM outreach initiatives</li>
            </ul>
          </article>
        </div>
    design:
      columns: '1'
      css_class: dz-phd-block
  - block: markdown
    content:
      title: 'Contact'
      subtitle: ''
      text: |-
        <div class="dz-clean-grid dz-stagger">
          <article class="dz-clean-card">
            <h3>Available for collaboration</h3>
            <p>I am open to research collaboration, teaching partnerships, and data science consulting opportunities.</p>
            <p><strong>Email:</strong> <a href="mailto:zvadad@tcd.ie">zvadad@tcd.ie</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/donnie-zvada/" target="_blank" rel="noopener">Donnie Zvada</a></p>
          </article>
          <article class="dz-clean-card">
            <h3>Quick Links</h3>
            <div class="dz-tag-row">
              <a class="dz-tag dz-tag-link" href="/projects/">Projects</a>
              <a class="dz-tag dz-tag-link" href="/experience/">Education</a>
              <a class="dz-tag dz-tag-link" href="/leadership-page/">Leadership</a>
              <a class="dz-tag dz-tag-link" href="/Donald_Zvada_CV_2026.pdf" target="_blank" rel="noopener">Download CV</a>
            </div>
          </article>
        </div>
    design:
      columns: '1'
      css_class: dz-phd-block

---
