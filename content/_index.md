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
        text: Download CV
        url: Donald-Zvada_CV.pdf
    design:
      css_class: dark dz-home-hero
      background:
        color: black
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
      title: '📚 My Research'
      subtitle: ''
      text: |-
        My research sits at the intersection of statistical modelling, machine learning, and sequential decision-making. In projects such as T-DIET, I develop Hidden Markov Model-based methodology to infer latent patterns (for example, dietary patterns) from longitudinal data, while quantifying uncertainty about individuals' trajectories over time.

        I am also interested in assessing the capabilities of Large Language Models on sequential decision-making problems, and in combining probabilistic models with modern AI to solve real-world problems in statistics and informatics.
    design:
      columns: '1'
      css_class: dz-research-block

---
