// Fades and slides content into place as it scrolls into view.
document.addEventListener('DOMContentLoaded', function () {
  var selector = [
    '.section-title', '.section-subtitle', '.section-heading-accent',
    '.card-grid > .card', '.event-list > .event-item', '.gallery-grid > .gallery-item',
    '.team-grid > .team-member', '.stats-bar > div', '.quote-block', '.hero-content > *'
  ].join(', ');

  var targets = document.querySelectorAll(selector);
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('reveal-visible'); });
    return;
  }

  targets.forEach(function (el) { el.classList.add('reveal'); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function (el) { observer.observe(el); });
});
