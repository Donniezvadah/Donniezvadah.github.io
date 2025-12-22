---
title: 'Education'
date: 2023-10-24
type: landing

design:
  spacing: '5rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: true
  - block: markdown
    content:
      title: Skills & Hobbies
      text: |-
        <div class="dz-skills-section">
          <div class="dz-skills-table">
            <div class="dz-skills-col">
              <h3>Technical Skills</h3>
              <ul class="dz-skills-list">
                <li>
                  <span class="dz-skill-name">Python &amp; R</span>
                  <span class="dz-skill-desc">Advanced data analysis and modeling</span>
                </li>
                <li>
                  <span class="dz-skill-name">Machine Learning</span>
                  <span class="dz-skill-desc">Model development and implementation</span>
                </li>
                <li>
                  <span class="dz-skill-name">Quantitative Risk Analysis</span>
                  <span class="dz-skill-desc">PD, LGD, EAD &amp; MEV models, IFRS 9 compliance</span>
                </li>
                <li>
                  <span class="dz-skill-name">Data Visualization</span>
                  <span class="dz-skill-desc">Power BI, Tableau, Matplotlib, Seaborn</span>
                </li>
                <li>
                  <span class="dz-skill-name">Statistical Analysis</span>
                  <span class="dz-skill-desc">SPSS, R, Python (Pandas, NumPy, SciPy)</span>
                </li>
                <li>
                  <span class="dz-skill-name">Version Control</span>
                  <span class="dz-skill-desc">Git/GitHub</span>
                </li>
                <li>
                  <span class="dz-skill-name">Microsoft Office Suite</span>
                  <span class="dz-skill-desc">Microsoft Office Suite</span>
                </li>
              </ul>
            </div>
            <div class="dz-skills-col">
              <h3>Hobbies</h3>
              <ul class="dz-hobbies-list">
                <li>Running</li>
                <li>Hiking</li>
                <li>Music</li>
                <li>Story telling</li>
                <li>Photography</li>
              </ul>
            </div>
          </div>
        </div>
    design:
      columns: '1'
      css_class: dz-skills-block
---
