---
layout: page
permalink: /contact/
title: Contact
nav: true
nav_order: 8
---

<!--
  NOTE TO USER (Hangbin):
  This contact form uses Formsubmit.co to forward submissions to yinghuichou@arizona.edu.

  FIRST-TIME ACTIVATION REQUIRED:
  1. Submit the form ONCE with any test message after deployment.
  2. Formsubmit will send an activation email to yinghuichou@arizona.edu.
  3. Dr. Chou must click the activation link in that email ONE TIME.
  4. After activation, all future submissions work automatically.

  OPTIONAL: To hide Dr. Chou's email from the page source (anti-scraper), you can
  replace the form action with a Formsubmit hash URL. Visit https://formsubmit.co,
  enter yinghuichou@arizona.edu, get the hashed URL (e.g., formsubmit.co/abc123xyz),
  and replace the form action attribute.

  No account required. Free tier: unlimited submissions.
-->

<div class="tmslab-contact-page">

  <div class="tmslab-contact-top">

    <h1>Contact</h1>
    <p class="tmslab-contact-subtitle">For research inquiries, study participation, or to join the lab.</p>

    <p class="tmslab-themes-label">Send us a message</p>

    <div id="tmslab-contact-success" class="tmslab-contact-success" hidden>
      <strong>✓ Thanks — your message has been sent.</strong><br>We'll be in touch soon.
    </div>

    <div class="tmslab-form-card">
      <form id="tmslab-contact-form" class="tmslab-contact-form" action="https://formsubmit.co/yinghuichou@arizona.edu" method="POST">

        <!-- Honeypot for spam bots — hidden field that real users won't fill in. -->
        <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">

        <!-- Disable Formsubmit's CAPTCHA for a smoother UX. -->
        <input type="hidden" name="_captcha" value="false">

        <!-- Subject prefix so Dr. Chou can filter inbox. -->
        <input type="hidden" name="_subject" value="TMS Lab website inquiry">

        <!-- After-submit redirect with a flag the success banner JS reads. -->
        <input type="hidden" name="_next" value="https://brain-imaging-and-tms-laboratory.github.io/tmslab/contact/?sent=1">

        <label class="tmslab-form-field">
          <span class="tmslab-form-label">Name</span>
          <input type="text" name="name" required autocomplete="name">
        </label>

        <label class="tmslab-form-field">
          <span class="tmslab-form-label">Email</span>
          <input type="email" name="email" required autocomplete="email">
        </label>

        <label class="tmslab-form-field">
          <span class="tmslab-form-label">Subject</span>
          <select name="inquiry_type" required>
            <option value="">Select…</option>
            <option>Study participation</option>
            <option>Joining the lab</option>
            <option>Research collaboration</option>
            <option>Media / press</option>
            <option>General inquiry</option>
          </select>
        </label>

        <label class="tmslab-form-field">
          <span class="tmslab-form-label">Message</span>
          <textarea name="message" rows="6" required></textarea>
        </label>

        <button type="submit" class="tmslab-button">Send message</button>
      </form>
    </div>

    <p class="tmslab-contact-helper">Messages are sent directly to the lab and typically receive a response within a week.</p>

    <p class="tmslab-themes-label">Other ways to reach us</p>

    <div class="tmslab-contact-info">
      <div class="tmslab-contact-info-grid">
        <div>
          <div class="tmslab-contact-label">Phone</div>
          <div class="tmslab-contact-value"><a href="tel:+15206267755">(520) 626-7755</a></div>
        </div>
        <div>
          <div class="tmslab-contact-label">Email</div>
          <div class="tmslab-contact-value"><a href="mailto:yinghuichou@arizona.edu">yinghuichou@arizona.edu</a></div>
        </div>
        <div>
          <div class="tmslab-contact-label">Psychology Building</div>
          <div class="tmslab-contact-value">1503 East University Blvd.<br>Tucson, AZ 85721</div>
        </div>
        <div>
          <div class="tmslab-contact-label">TMS Laboratory</div>
          <div class="tmslab-contact-value">1230 N Cherry Ave<br>Tucson, AZ 85719</div>
        </div>
      </div>
    </div>

  </div>

  <section class="tmslab-contact-map">

    <p class="tmslab-themes-label">Find us</p>

    <!--
      Two single-pin map embeds, one per location. Uses Google Maps'
      no-API-key `?q=...&output=embed` URL, which renders a plain
      single-pin view without the directions sidebar or route line.
    -->
    <div class="tmslab-map-grid">

      <div class="tmslab-map-card">
        <p class="tmslab-map-name">Psychology Building</p>
        <iframe
          src="https://maps.google.com/maps?q=1503+E+University+Blvd,+Tucson,+AZ+85721&z=15&output=embed"
          title="Psychology Building map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen></iframe>
        <a class="tmslab-map-link"
           href="https://www.google.com/maps/search/?api=1&query=1503+E+University+Blvd,+Tucson,+AZ+85721"
           target="_blank" rel="noopener noreferrer">
          Open in Maps &rarr;
        </a>
      </div>

      <div class="tmslab-map-card">
        <p class="tmslab-map-name">TMS Laboratory</p>
        <iframe
          src="https://maps.google.com/maps?q=1230+N+Cherry+Ave,+Tucson,+AZ+85719&z=15&output=embed"
          title="TMS Laboratory map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen></iframe>
        <a class="tmslab-map-link"
           href="https://www.google.com/maps/search/?api=1&query=1230+N+Cherry+Ave,+Tucson,+AZ+85719"
           target="_blank" rel="noopener noreferrer">
          Open in Maps &rarr;
        </a>
      </div>

    </div>

  </section>

</div>

<script>
  // Success banner toggle: if redirected back with ?sent=1, hide the form
  // and reveal the thank-you banner. Pure vanilla, no dependencies.
  (function () {
    if (window.location.search.indexOf("sent=1") === -1) return;
    var banner = document.getElementById("tmslab-contact-success");
    var form = document.getElementById("tmslab-contact-form");
    if (banner) banner.hidden = false;
    if (form) form.hidden = true;
    if (banner && banner.scrollIntoView) {
      banner.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  })();
</script>
