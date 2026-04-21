---
layout: about
title: About
permalink: /
subtitle: Brain Imaging and TMS Laboratory &mdash; University of Arizona

# TODO: Replace the generated placeholder figures in /assets/img/research/
# with real evocative imagery (Unsplash photos, lab photos, or similar)
# per theme. Filenames to keep:
#   01_tms_memory.jpg        → theme 1 (memory & cognition enhancement)
#   02_biomarkers.jpg        → theme 2 (plasticity & brain health)
#   03_tms_fmri.jpg          → theme 3 (precision neuromodulation)
#   04_cognition_aging.jpg   → theme 4 (methodological advances)
#   05_clinical_populations.jpg → theme 5 (cross-population applications)
# Aspect ratio: roughly 16:10 landscape, ~1200x750 or larger.
# Current placeholders are intentionally simple — real photos will
# make the tiles feel significantly more polished.

# PI photo / address intentionally not shown on homepage —
# Dr. Chou's bio + photo lives on /people/. The hero below
# is the visual landing.

# Selected publications and the layout-injected News section are
# disabled here. We render News inline in the markdown below
# (between Research themes and Join us) so Join us stays at the
# very bottom of the page.
selected_papers: false
social: false

announcements:
  enabled: false
  scrollable: true
  limit: 3

latest_posts:
  enabled: false
---

{%- comment -%}
  Auto-discovery: every .jpg/.jpeg/.png/.webp file in
  /assets/img/hero/ is picked up automatically. Drop a file in →
  next rebuild shows it in the rotation. Remove a file → it's
  gone. No YAML, no markdown edits needed.

  Filtered out: imagemagick responsive variants (-480/-800/-1400)
  and any README.md files.

  Sort: alphabetical. Prefix filenames (01_, 02_, …) if you want
  a specific order; otherwise they'll rotate in whatever A→Z
  order the filesystem yields.

  First image: loading="eager" + .is-active (renders immediately).
  Others: loading="lazy" + no initial class (fade in via the JS
  cycle below).

  Rotation JS: /assets/js/hero-rotate.js — skipped automatically
  when only one image is present, and when the user prefers
  reduced motion.
{%- endcomment -%}

{%- assign hero_files = site.static_files | where_exp: "f", "f.path contains '/assets/img/hero/'" -%}
{%- assign hero_images = "" | split: "" -%}
{%- for file in hero_files -%}
  {%- assign ext = file.extname | downcase -%}
  {%- if ext == ".jpg" or ext == ".jpeg" or ext == ".png" or ext == ".webp" -%}
    {%- assign segs = file.basename | split: "-" -%}
    {%- assign last_seg = segs | last -%}
    {%- unless last_seg == "480" or last_seg == "800" or last_seg == "1400" -%}
      {%- assign hero_images = hero_images | push: file -%}
    {%- endunless -%}
  {%- endif -%}
{%- endfor -%}
{%- assign hero_images = hero_images | sort: "basename" -%}

<div class="tmslab-hero">
  {%- for image in hero_images -%}
    <img src="{{ image.path | relative_url }}"
         alt=""
         class="tmslab-hero-img{% if forloop.first %} is-active{% endif %}"
         {% if forloop.first %}loading="eager"{% else %}loading="lazy"{% endif %}>
  {%- endfor -%}
  <div class="tmslab-hero-overlay">
    <div class="tmslab-hero-overlay-inner">
      <p class="tmslab-hero-kicker">University of Arizona</p>
      <h1>Brain Imaging and TMS Laboratory</h1>
      <p class="tmslab-hero-tagline">Advancing the understanding of memory enhancement, <br> brain-behavior relationships, and biomarkers in neurodegenerative disorders</p>
    </div>
  </div>
</div>

<section class="tmslab-study">

  <h2 class="tmslab-study-heading">What we study</h2>

  <p class="tmslab-study-intro">
    The Brain Imaging and TMS Laboratory studies how the aging brain can be supported and strengthened. Our work centers on <strong>mild cognitive impairment, Alzheimer's disease, and cognitive aging</strong>, integrating transcranial magnetic stimulation (TMS), magnetic resonance imaging (MRI), electroencephalography (EEG), behavioral measures, AD plasma biomarkers, and the gut microbiome. Our three primary objectives:
  </p>

  <div class="tmslab-objectives-grid">

    <article class="tmslab-objective-card">
      <span class="tmslab-objective-num">01</span>
      <h3 class="tmslab-objective-title">Image-guided TMS protocols</h3>
      <p class="tmslab-objective-desc">Developing therapeutic TMS protocols guided by individual neuroimaging to enhance memory.</p>
    </article>

    <article class="tmslab-objective-card">
      <span class="tmslab-objective-num">02</span>
      <h3 class="tmslab-objective-title">Causal brain dynamics</h3>
      <p class="tmslab-objective-desc">Investigating causal relationships between brain, behavior, and region-to-region interactions.</p>
    </article>

    <article class="tmslab-objective-card">
      <span class="tmslab-objective-num">03</span>
      <h3 class="tmslab-objective-title">TMS-derived biomarkers</h3>
      <p class="tmslab-objective-desc">Exploring TMS-derived and imaging-based biomarkers for early diagnosis and treatment response prediction.</p>
    </article>

  </div>

</section>

---

## Research themes

<div class="tmslab-research-grid">

  <a href="{{ '/research/' | relative_url }}" class="tmslab-research-card">
    <div class="tmslab-research-card-img">
      <img src="{{ '/assets/img/research/01_tms_memory.jpg' | relative_url }}" alt="Memory and cognition enhancement" loading="lazy">
    </div>
    <div class="tmslab-research-card-body">
      <h4 class="tmslab-research-card-title">Memory &amp; cognition enhancement</h4>
      <p class="tmslab-research-card-desc">Using neuroimaging and individualized targeting, we are developing image-guided TMS protocols to enhance memory in older adults and those at risk for Alzheimer's disease.</p>
      <span class="tmslab-research-card-arrow" aria-hidden="true">→</span>
    </div>
  </a>

  <a href="{{ '/research/' | relative_url }}" class="tmslab-research-card">
    <div class="tmslab-research-card-img">
      <img src="{{ '/assets/img/research/02_biomarkers.jpg' | relative_url }}" alt="Plasticity and brain health" loading="lazy">
    </div>
    <div class="tmslab-research-card-body">
      <h4 class="tmslab-research-card-title">Plasticity &amp; brain health</h4>
      <p class="tmslab-research-card-desc">TMS probes of cortical excitability and plasticity reveal early biomarkers of cognitive decline and brain health across the aging spectrum.</p>
      <span class="tmslab-research-card-arrow" aria-hidden="true">→</span>
    </div>
  </a>

  <a href="{{ '/research/' | relative_url }}" class="tmslab-research-card">
    <div class="tmslab-research-card-img">
      <img src="{{ '/assets/img/research/03_tms_fmri.jpg' | relative_url }}" alt="Precision neuromodulation" loading="lazy">
    </div>
    <div class="tmslab-research-card-body">
      <h4 class="tmslab-research-card-title">Precision neuromodulation</h4>
      <p class="tmslab-research-card-desc">We combine neuronavigation, white-matter-tract guidance, electric-field modeling, and accelerated protocols to advance TMS toward precision and eventually closed-loop stimulation.</p>
      <span class="tmslab-research-card-arrow" aria-hidden="true">→</span>
    </div>
  </a>

</div>

<div class="tmslab-research-more-row">
  <a href="{{ '/research/' | relative_url }}" class="tmslab-research-more" aria-label="See all research themes">More <span class="tmslab-research-more-arrow" aria-hidden="true">&rarr;</span></a>
</div>

---

## Join us

<div class="tmslab-cta-grid">

  <a href="{{ '/participate/' | relative_url }}" class="tmslab-cta-card">
    <h4>Participate in a study</h4>
    <p>We have active studies recruiting adults aged 18–85. Compensation provided.</p>
    <span class="tmslab-cta-arrow">Learn more &rarr;</span>
  </a>

  <a href="{{ '/contact/' | relative_url }}" class="tmslab-cta-card">
    <h4>Join the lab</h4>
    <p>Graduate students, postdocs, and undergraduates: we are looking for motivated researchers.</p>
    <span class="tmslab-cta-arrow">Get in touch &rarr;</span>
  </a>

  <a href="https://www.google.com/maps/search/?api=1&amp;query=1230+N+Cherry+Ave,+Tucson,+AZ+85719"
     target="_blank"
     rel="noopener noreferrer"
     class="tmslab-cta-card">
    <h4>Find us</h4>
    <p>TMS Laboratory &mdash; 1230 N Cherry Ave, Tucson, AZ 85719.</p>
    <span class="tmslab-cta-arrow">Open in Maps &rarr;</span>
  </a>

  {% comment %}
    Donate card — re-enable when we have the UArizona Foundation giving link.
    Original card:
    <a class="tmslab-cta-card" href="#">
      <h4>Donate today</h4>
      <p>Support our research into memory, aging, and image-guided TMS therapies. Every gift helps.</p>
      <span class="tmslab-cta-arrow">Give now &rarr;</span>
    </a>
  {% endcomment %}

</div>

<script src="{{ '/assets/js/hero-rotate.js' | relative_url }}" defer></script>
