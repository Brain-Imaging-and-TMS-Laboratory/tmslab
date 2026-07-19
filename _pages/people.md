---
layout: page
permalink: /people/
title: People
description: Meet the members of the Brain Imaging and TMS Laboratory.
nav: true
nav_order: 4
---

{%- comment -%}
  Member and alumni content lives in _data/members.yml and _data/alumni.yml.
  To add, remove, or reorder people, edit those files — not this page.
  The PI block below is one-of-a-kind and stays inline.
{%- endcomment -%}

<div class="tmslab-people-page">

<section class="tmslab-pi-section">

  <div class="tmslab-pi-photo">
    <img src="{{ '/assets/img/people/chou.jpg' | relative_url }}" alt="Ying-hui Chou, Sc.D.">
    <div class="tmslab-pi-social">
      <a href="https://scholar.google.com/citations?user=eIZKmoIAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar profile (opens in a new tab)" title="Google Scholar">
        <i class="ai ai-google-scholar"></i>
      </a>
      <a href="mailto:tmslab@arizona.edu" aria-label="Email Dr. Chou" title="Email">
        <i class="fa-solid fa-envelope"></i>
      </a>
    </div>
  </div>

  <div class="tmslab-pi-content">
    <h2 class="tmslab-pi-name">Ying-hui Chou, Sc.D.</h2>
    <p class="tmslab-pi-role">Principal Investigator &middot; Director, Brain Imaging and TMS Laboratory</p>
    <!-- TODO: Confirm Dr. Chou's current academic rank (Associate Professor was assumed — update if different). -->
    <ul class="tmslab-pi-affiliations">
      <li>Associate Professor of Psychology, Cognition and Neural Systems Program</li>
      <li>Graduate Interdisciplinary Programs in Cognitive Science and Neuroscience</li>
      <li>Research Associate, Arizona Center on Aging</li>
      <li>Evelyn F. McKnight Brain Institute</li>
      <li>University of Arizona</li>
    </ul>
  </div>

  <div class="tmslab-pi-biography">
    <h3 class="tmslab-pi-biography-heading">Biography</h3>
    <p class="tmslab-pi-bio">Dr. Ying-hui Chou is the director of the Brain Imaging and Transcranial Magnetic Stimulation (TMS) Laboratory at the University of Arizona. Her research has focused primarily on the cognitive and clinical neuroscience of aging and neurodegenerative disorders. Within this framework, Dr. Chou's laboratory is particularly interested in integrating brain imaging and TMS techniques to (1) develop image-guided therapeutic TMS protocols and (2) explore TMS-derived and image-based biomarkers for early diagnosis and prediction of therapeutic outcomes for individuals with mild cognitive impairment, Alzheimer's disease, as well as Parkinson's disease. Dr. Chou teaches undergraduate and graduate level courses in cognitive neuroscience, brain rehabilitation, and brain connectivity at the University of Arizona.</p>
  </div>

</section>

<h2 class="section-heading">Current Members</h2>

<div class="tmslab-members-grid">
  {%- for member in site.data.members %}
  <div class="tmslab-member-card">
    <img src="{{ '/assets/img/people/' | append: member.photo | relative_url }}"
         alt="{{ member.alt | default: member.name }}"
         class="tmslab-member-photo"
         loading="lazy">
    <h3 class="tmslab-member-name">{{ member.name }}</h3>
    <span class="tmslab-member-role">{{ member.role }}</span>
    {%- if member.bio %}
    <p class="tmslab-member-bio">{{ member.bio }}</p>
    {%- endif %}
    <div class="tmslab-member-links">
      {%- for link in member.links %}
      <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ link.label }}" title="{{ link.label }}"><i class="{{ link.icon }}"></i></a>
      {%- endfor %}
    </div>
  </div>
  {%- endfor %}
</div>

<h2 class="section-heading">Alumni</h2>

<div class="tmslab-alumni-list" markdown="0">
  {%- for alumnus in site.data.alumni %}
  <div class="tmslab-alumnus-card">
    {%- if alumnus.photo %}
    <img src="{{ '/assets/img/people/' | append: alumnus.photo | relative_url }}"
         alt="{{ alumnus.alt | default: alumnus.name }}"
         class="tmslab-alumnus-photo"
         loading="lazy"
         onerror="this.style.visibility='hidden'">
    {%- endif %}
    <div class="tmslab-alumnus-info">
      <p class="tmslab-alumnus-name">{{ alumnus.name }}</p>
      {%- if alumnus.role %}
      <p class="tmslab-alumnus-role">{{ alumnus.role }}</p>
      {%- endif %}
      {%- if alumnus.now %}
      <p class="tmslab-alumnus-now">Now: {{ alumnus.now }}</p>
      {%- endif %}
    </div>
  </div>
  {%- endfor %}
</div>

</div>

---

*Interested in joining the lab? Email Dr. Chou at <a href="mailto:tmslab@arizona.edu">tmslab@arizona.edu</a> or see the [Contact]({{ '/contact/' | relative_url }}) page.*

<script src="{{ '/assets/js/bio-expand.js' | relative_url }}" defer></script>
