/* ============================================================
   Juan Camilo Echeverry — Portfolio shared interactions
   Vanilla JS. Loaded on every page.
   ============================================================ */
(function () {
  "use strict";

  /* ---- Lucide icons ---- */
  function initIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  /* ---- hCaptcha: swap the widget for the submit button ----
     The button stays hidden until a challenge is solved; on success the
     captcha disappears and the "Send message" button takes its place.
     Registered on window so hCaptcha's data-callback can reach them. */
  function formRequiredFilled(form) {
    var req = Array.prototype.slice.call(
      form.querySelectorAll(".input[required], .textarea[required]")
    );
    return req.every(function (i) { return (i.value || "").trim().length > 0; });
  }
  function setCaptchaSolved(solved) {
    document.querySelectorAll("[data-contact-form]").forEach(function (form) {
      var cap = form.querySelector(".h-captcha");
      var btn = form.querySelector('[type="submit"]');
      if (cap) cap.hidden = solved;
      // Button only appears after the captcha; once visible it stays disabled
      // until every required field is filled.
      if (btn) { btn.hidden = !solved; btn.disabled = solved && !formRequiredFilled(form); }
    });
    initIcons();
  }
  window.onCaptchaPass = function () { setCaptchaSolved(true); };
  window.onCaptchaReset = function () { setCaptchaSolved(false); };

  /* ---- Mobile menu ---- */
  function initMobileMenu() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-mobile-menu]");
    if (!toggle || !menu) return;
    function setOpen(open) {
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
      var icon = toggle.querySelector("[data-lucide]");
      if (icon) {
        icon.setAttribute("data-lucide", open ? "x" : "menu");
        initIcons();
      }
    }
    toggle.addEventListener("click", function () {
      setOpen(!menu.classList.contains("open"));
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open")) setOpen(false);
    });
  }

  /* ---- Scroll reveal (staggered, once) ---- */
  function initReveal() {
    var els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (!els.length) return;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var group = el.parentElement ? el.parentElement.querySelectorAll(":scope > .reveal") : [el];
        var idx = Array.prototype.indexOf.call(group, el);
        var delay = Math.min(idx, 3) * 60;
        setTimeout(function () { el.classList.add("in"); }, delay);
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Project modal ---- */
  function initModal() {
    var overlay = document.querySelector("[data-modal]");
    if (!overlay) return;
    var lastFocus = null;

    function fill(data) {
      var set = function (sel, val) {
        var node = overlay.querySelector(sel);
        if (node != null && val != null) node.textContent = val;
      };
      set("[data-m-category]", data.category);
      set("[data-m-title]", data.title);
      set("[data-m-ph]", data.ph);
      set("[data-m-overview]", data.overview);
      set("[data-m-role]", data.role);
      set("[data-m-approach]", data.approach);

      var metaWrap = overlay.querySelector("[data-m-meta]");
      if (metaWrap) {
        metaWrap.innerHTML = "";
        (data.meta || []).forEach(function (t) {
          var el = document.createElement("span");
          el.className = "tag";
          el.textContent = t;
          metaWrap.appendChild(el);
        });
      }
      var metricsWrap = overlay.querySelector("[data-m-metrics]");
      if (metricsWrap) {
        metricsWrap.innerHTML = "";
        (data.metrics || []).forEach(function (m) {
          var card = document.createElement("div");
          card.className = "modal-metric";
          card.innerHTML = '<div class="n"></div><div class="l"></div>';
          card.querySelector(".n").textContent = m.n;
          card.querySelector(".l").textContent = m.l;
          metricsWrap.appendChild(card);
        });
        metricsWrap.style.display = (data.metrics && data.metrics.length) ? "" : "none";
      }

      var sysWrap = overlay.querySelector("[data-m-systems]");
      var sysSection = overlay.querySelector("[data-m-systems-section]");
      if (sysWrap) {
        sysWrap.innerHTML = "";
        (data.systems || []).forEach(function (s) {
          var row = document.createElement("div");
          row.className = "sys-row";
          var linkHtml = s.url
            ? '<a class="sys-link btn btn-primary" target="_blank" rel="noopener">' +
              'View on Behance <i data-lucide="arrow-up-right"></i></a>'
            : '';
          row.innerHTML = '<div class="sys-head">' +
                          '<span class="sys-name"></span>' +
                          '<span class="sys-year"></span></div>' +
                          '<span class="sys-note"></span>' +
                          linkHtml;
          row.querySelector(".sys-name").textContent = s.name;
          row.querySelector(".sys-note").textContent = s.note;
          row.querySelector(".sys-year").textContent = s.year;
          if (s.url) row.querySelector(".sys-link").setAttribute("href", s.url);
          sysWrap.appendChild(row);
        });
        if (sysSection) {
          sysSection.style.display = (data.systems && data.systems.length) ? "" : "none";
        }
      }

      var heroImg = overlay.querySelector("[data-m-hero-img]");
      var heroPh = overlay.querySelector("[data-m-ph]");
      var heroWrap = overlay.querySelector(".modal-hero");
      if (heroImg && heroWrap) {
        if (data.thumb) {
          heroImg.setAttribute("src", data.thumb);
          heroImg.setAttribute("alt", (data.title || "Project") + " cover");
          heroImg.style.display = "";
          if (heroPh) heroPh.style.display = "none";
          heroWrap.classList.add("has-img");
        } else {
          heroImg.removeAttribute("src");
          heroImg.style.display = "none";
          if (heroPh) heroPh.style.display = "";
          heroWrap.classList.remove("has-img");
        }
      }

      var behanceBtn = overlay.querySelector("[data-m-behance]");
      if (behanceBtn) {
        if (data.behance) {
          behanceBtn.setAttribute("href", data.behance);
          behanceBtn.style.display = "";
        } else {
          behanceBtn.removeAttribute("href");
          behanceBtn.style.display = "none";
        }
      }

      if (window.JCE && window.JCE.initIcons) window.JCE.initIcons();
    }

    function open(card) {
      var data;
      try { data = JSON.parse(card.getAttribute("data-project") || "{}"); }
      catch (e) { data = {}; }
      fill(data);
      lastFocus = card;
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
      var closeBtn = overlay.querySelector(".modal-close");
      if (closeBtn) closeBtn.focus();
    }
    function close() {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }

    document.querySelectorAll("[data-project]").forEach(function (card) {
      card.addEventListener("click", function () { open(card); });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(card); }
      });
    });
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close();
    });
    var closeBtn = overlay.querySelector(".modal-close");
    if (closeBtn) closeBtn.addEventListener("click", close);
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("open")) close();
    });
  }

  /* ---- Projects carousel arrows (carousel layout) ---- */
  function initCarousel() {
    var stage = document.querySelector("[data-carousel-stage]");
    if (!stage) return;
    var prev = document.querySelector("[data-carousel-prev]");
    var next = document.querySelector("[data-carousel-next]");
    var bar = document.querySelector("[data-carousel-bar]");

    function step() {
      var card = stage.querySelector(".project-card");
      var gap = 28;
      return card ? card.getBoundingClientRect().width + gap : 400;
    }
    function update() {
      if (!bar) return;
      var max = stage.scrollWidth - stage.clientWidth;
      var ratio = max > 0 ? stage.scrollLeft / max : 0;
      var visible = stage.clientWidth / stage.scrollWidth;
      bar.style.width = Math.max(15, visible * 100) + "%";
      bar.style.marginLeft = ratio * (100 - Math.max(15, visible * 100)) + "%";
      if (prev) prev.disabled = stage.scrollLeft <= 4;
      if (next) next.disabled = stage.scrollLeft >= max - 4;
    }
    // Manual rAF scroll animation — native behavior:'smooth' is blocked by
    // scroll-snap on the carousel track, so we animate scrollLeft ourselves.
    var anim = null;
    function animateScrollBy(delta) {
      if (anim) cancelAnimationFrame(anim);
      var max = stage.scrollWidth - stage.clientWidth;
      var start = stage.scrollLeft;
      var target = Math.max(0, Math.min(max, start + delta));
      var dist = target - start;
      var dur = 420;
      var t0 = null;
      function easeOut(p) { return 1 - Math.pow(1 - p, 3); }
      function frame(ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur);
        stage.scrollLeft = start + dist * easeOut(p);
        if (p < 1) { anim = requestAnimationFrame(frame); }
        else { anim = null; update(); }
      }
      anim = requestAnimationFrame(frame);
    }
    if (prev) prev.addEventListener("click", function () { animateScrollBy(-step()); });
    if (next) next.addEventListener("click", function () { animateScrollBy(step()); });
    stage.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    // re-check when layout tweak changes
    window.addEventListener("layoutchange", function () { setTimeout(update, 60); });
  }

  /* ============================================================
     CONTACT FORM SETTINGS  —  EDIT THESE TWO LINES
     ------------------------------------------------------------
     1. Get a FREE access key at https://web3forms.com
        (type your email, the key is emailed to you instantly).
     2. Paste it between the quotes below, replacing
        YOUR_ACCESS_KEY_HERE. That's it — the form goes live.

     Until a real key is added, the form falls back to opening
     the visitor's own email app, prefilled, so it still works.
     ============================================================ */
  var WEB3FORMS_ACCESS_KEY = "75500890-d3ec-43cd-8e17-fbd2e39445fa";
  var CONTACT_EMAIL = "camiloem.1105@gmail.com";

  /* ---- Contact form: validation + real submission ---- */
  function initForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;
    var success = form.querySelector(".form-success");

    // Honeypot field for spam bots (hidden from humans, injected so the
    // markup stays untouched on every page that hosts the form).
    if (!form.querySelector('[name="botcheck"]')) {
      var hp = document.createElement("input");
      hp.type = "checkbox"; hp.name = "botcheck";
      hp.style.display = "none";
      hp.setAttribute("tabindex", "-1");
      hp.setAttribute("autocomplete", "off");
      hp.setAttribute("aria-hidden", "true");
      form.appendChild(hp);
    }

    // Error banner, injected once (mirrors the success banner styling).
    var errorBox = form.querySelector(".form-errorbox");
    if (!errorBox) {
      errorBox = document.createElement("div");
      errorBox.className = "form-errorbox";
      errorBox.setAttribute("role", "alert");
      if (success && success.parentNode) {
        success.parentNode.insertBefore(errorBox, success.nextSibling);
      } else {
        form.appendChild(errorBox);
      }
    }

    function setButton(label, disabled) {
      var btn = form.querySelector('[type="submit"]');
      if (!btn) return;
      btn.disabled = disabled;
      btn.innerHTML = "<span>" + label + "</span>";
      initIcons();
    }

    function showError(html) {
      errorBox.innerHTML =
        '<i data-lucide="alert-circle" class="icon-sm"></i><span>' + html + "</span>";
      errorBox.classList.add("show");
      initIcons();
    }

    function clearBanners() {
      if (success) success.classList.remove("show");
      errorBox.classList.remove("show");
    }

    // Clear a solved hCaptcha so the next submission has to solve a fresh one.
    function resetCaptcha() {
      if (window.hcaptcha && form.querySelector(".h-captcha")) {
        try { window.hcaptcha.reset(); } catch (e) {}
      }
    }

    function validateField(field) {
      var input = field.querySelector(".input, .textarea");
      if (!input) return true;
      var err = field.querySelector(".field-error");
      var val = (input.value || "").trim();
      var ok = true;
      var msg = "";
      if (input.hasAttribute("required") && !val) { ok = false; msg = "This field is required."; }
      else if (input.type === "email" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        ok = false; msg = "Enter a valid email address.";
      }
      input.classList.toggle("invalid", !ok);
      if (err) { err.textContent = msg; err.classList.toggle("show", !ok); }
      return ok;
    }

    form.querySelectorAll(".field").forEach(function (field) {
      var input = field.querySelector(".input, .textarea");
      if (!input) return;
      input.addEventListener("blur", function () { validateField(field); });
      input.addEventListener("input", function () {
        if (input.classList.contains("invalid")) validateField(field);
        // Keep the (captcha-revealed) submit button in sync with required fields.
        var btn = form.querySelector('[type="submit"]');
        if (btn && !btn.hidden) btn.disabled = !formRequiredFilled(form);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearBanners();
      var fields = Array.prototype.slice.call(form.querySelectorAll(".field"));
      var allOk = true;
      fields.forEach(function (field) { if (!validateField(field)) allOk = false; });
      if (!allOk) {
        var firstInvalid = form.querySelector(".invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Gather field values.
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });

      // Spam bot tripped the honeypot — pretend success, send nothing.
      if (data.botcheck) {
        form.reset();
        if (success) success.classList.add("show");
        return;
      }

      // hCaptcha: when the widget is present, require a solved challenge
      // before doing anything. Web3Forms verifies the token server-side.
      if (form.querySelector(".h-captcha") && !data["h-captcha-response"]) {
        showError("Please complete the captcha below to confirm you're human.");
        return;
      }

      setButton("Sending…", true);

      var keyMissing = !WEB3FORMS_ACCESS_KEY ||
        WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE";

      // No key yet → open the visitor's email client, prefilled.
      if (keyMissing) {
        var bodyLines = [
          "Name: " + (data.name || ""),
          "Email: " + (data.email || "")
        ];
        if (data.budget) bodyLines.push("Engagement: " + data.budget);
        bodyLines.push("", data.message || "");
        var mailto = "mailto:" + CONTACT_EMAIL +
          "?subject=" + encodeURIComponent(data.subject || "Portfolio enquiry") +
          "&body=" + encodeURIComponent(bodyLines.join("\n"));
        window.location.href = mailto;
        window.setTimeout(function () {
          form.reset();
          setButton("Send message", false);
          resetCaptcha();
          window.onCaptchaReset();
          if (success) success.classList.add("show");
        }, 500);
        return;
      }

      // Real delivery via Web3Forms.
      var payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "Portfolio message — " + (data.subject || "(no subject)"),
        from_name: data.name || "Portfolio visitor",
        name: data.name || "",
        email: data.email || "",
        replyto: data.email || "",
        "h-captcha-response": data["h-captcha-response"] || "",
        message:
          "From: " + (data.name || "") + " <" + (data.email || "") + ">\n" +
          (data.budget ? "Engagement: " + data.budget + "\n" : "") +
          "Subject: " + (data.subject || "") + "\n\n" +
          (data.message || "")
      };

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res && res.success) {
            form.reset();
            resetCaptcha();
            setButton("Send message", false);
            window.onCaptchaReset();
            if (success) success.classList.add("show");
          } else {
            throw new Error((res && res.message) || "Submission failed");
          }
        })
        .catch(function () {
          resetCaptcha();
          setButton("Send message", false);
          window.onCaptchaReset();
          showError(
            "Something went wrong sending your message. Please email me directly at " +
            '<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + "</a>."
          );
        });
    });
  }

  /* ---- Active nav link by pathname ---- */
  function initActiveNav() {
    var path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll("[data-nav-path]").forEach(function (link) {
      var target = (link.getAttribute("data-nav-path") || "").toLowerCase();
      if (target === path) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /* ---- 404: show a real "Go back" button only when the visitor reached
     this page from within the site (same-origin referrer). On a direct hit
     or an external landing there's nothing useful to go back to, so the
     button stays hidden and only "Back home" shows. ---- */
  function initErrorBack() {
    var back = document.querySelector("[data-error-back]");
    if (!back) return;
    var home = document.querySelector("[data-error-home]");
    var internal = false;
    try {
      internal = !!document.referrer &&
        new URL(document.referrer).origin === location.origin;
    } catch (e) { internal = false; }
    if (!internal) return;
    back.hidden = false;
    if (home) home.hidden = true;
    back.addEventListener("click", function (e) {
      e.preventDefault();
      history.back();
    });
  }

  /* ---- Boot ---- */
  function boot() {
    initIcons();
    initMobileMenu();
    initActiveNav();
    initReveal();
    initModal();
    initCarousel();
    initForm();
    initErrorBack();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.JCE = { initIcons: initIcons };
})();
