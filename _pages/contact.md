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

  <h1>Contact</h1>
  <p class="tmslab-contact-subtitle">For research inquiries, study participation, or to join the lab.</p>

  <section class="tmslab-contact-grid">

    <div class="tmslab-contact-info">

      <div class="tmslab-contact-block">
        <h3><i class="fa-solid fa-phone" aria-hidden="true"></i> Phone</h3>
        <p><a href="tel:+15206267755">(520) 626-7755</a></p>
      </div>

      <div class="tmslab-contact-block">
        <h3><i class="fa-solid fa-envelope" aria-hidden="true"></i> Email</h3>
        <p><a href="mailto:yinghuichou@arizona.edu">yinghuichou@arizona.edu</a></p>
      </div>

      <div class="tmslab-contact-block">
        <h3><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Psychology Building</h3>
        <address>
          1503 East University Blvd.<br>
          Tucson, AZ 85721
        </address>
      </div>

      <div class="tmslab-contact-block">
        <h3><i class="fa-solid fa-location-dot" aria-hidden="true"></i> TMS Laboratory</h3>
        <address>
          1230 N Cherry Ave<br>
          Tucson, AZ 85719
        </address>
      </div>

      <div class="tmslab-contact-block">
        <h3><i class="fa-solid fa-clock" aria-hidden="true"></i> Office hours</h3>
        <!-- TODO: Replace with real office hours when available. -->
        <p>By appointment.</p>
      </div>

    </div>

    <div class="tmslab-contact-form-wrap">

      <p class="tmslab-contact-callout">For quickest response on study participation, please see our <a href="{{ '/join/' | relative_url }}">Join Us</a> page.</p>

      <div id="tmslab-contact-success" class="tmslab-contact-success" hidden>
        <strong>✓ Thanks — your message has been sent.</strong><br>We'll be in touch soon.
      </div>

      <form id="tmslab-contact-form" class="tmslab-contact-form" action="https://formsubmit.co/yinghuichou@arizona.edu" method="POST">

        <!-- Honeypot for spam bots — hidden field that real users won't fill in. -->
        <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">

        <!-- Disable Formsubmit's CAPTCHA for a smoother UX. -->
        <input type="hidden" name="_captcha" value="false">

        <!-- Subject prefix so Dr. Chou can filter inbox. -->
        <input type="hidden" name="_subject" value="TMS Lab website inquiry">

        <!-- After-submit redirect with a flag the success banner JS reads. -->
        <input type="hidden" name="_next" value="https://hangbinzhang.github.io/tmslab/contact/?sent=1">

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

      <p class="tmslab-contact-helper">Messages are sent directly to the lab and typically receive a response within a week.</p>

    </div>

  </section>

  <section class="tmslab-contact-map">

    <h2>Find us</h2>

    <div class="tmslab-contact-map-wrap">
      <!--
        Map shows both lab locations on the UA campus, using Google Maps'
        directions embed (no API key needed). saddr = Psychology Building,
        daddr = TMS Laboratory. The route between them gives users a sense
        of how close the two sites are.
      -->
      <iframe
        src="https://www.google.com/maps?saddr=1503+E+University+Blvd,+Tucson,+AZ+85721&daddr=1230+N+Cherry+Ave,+Tucson,+AZ+85719&output=embed"
        title="Map of TMS Lab locations on the University of Arizona campus"
        width="100%"
        height="400"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen></iframe>
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
    // Scroll the banner into view in case the form was below the fold.
    if (banner && banner.scrollIntoView) {
      banner.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  })();
</script>
