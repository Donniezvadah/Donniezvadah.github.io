---
title: 'Projects'
date: 2024-05-19
type: landing

design:
  # Section spacing
  spacing: '5rem'

# Page sections
sections:
  - block: collection
    content:
      title: Selected Projects
      text: |-
        <div class="dz-section-intro">
          <p class="dz-kicker">Signature projects</p>
          <h1 class="dz-heading-xl">Projects I'm excited about right now</h1>
          <p class="dz-intro-text">
            A snapshot of the work I'm most excited about across teaching, research, and quantum information.
          </p>
        </div>

        <div class="dz-projects-grid">
          <article class="dz-project-card">
            <div class="dz-project-card-inner">
              <h2 class="dz-card-title">Course on R Programming</h2>
              <p class="dz-card-meta">Teaching · 2024–present</p>
              <p class="dz-card-body">
                Hands-on course material introducing R for data analysis, visualisation, and statistical modelling.
              </p>
              <a class="dz-pill-link" href="https://donniezvadah.github.io/R_programming/" target="_blank" rel="noopener">
                View course
              </a>
            </div>
          </article>

          <article class="dz-project-card">
            <div class="dz-project-card-inner">
              <h2 class="dz-card-title">LLMs for Sequential Decision-Making</h2>
              <p class="dz-card-meta">Research · Stellenbosch University / AIMS South Africa</p>
              <p class="dz-card-body">
                Assessing how Large Language Models behave on sequential decision-making tasks, such as multi-armed bandits,
                and how they can be combined with classical algorithms.
              </p>
            </div>
          </article>

          <article class="dz-project-card">
            <div class="dz-project-card-inner">
              <h2 class="dz-card-title">Key Relay Protocol for Quantum Key Distribution</h2>
              <p class="dz-card-meta">Research · Tohoku University · g-RIPS-Sendai</p>
              <p class="dz-card-body">
                Studying key relay protocols for quantum key distribution as part of the g-RIPS-Sendai programme, in
                collaboration with Tohoku University and international partners.
              </p>
              <a class="dz-pill-link" href="https://www.mccs.tohoku.ac.jp/g-rips/g-rips2025_en.html" target="_blank" rel="noopener">
                Programme details
              </a>
            </div>
          </article>
        </div>
      filters:
        folders:
          - project
    design:
      view: article-grid
      fill_image: false
      columns: 3
---
