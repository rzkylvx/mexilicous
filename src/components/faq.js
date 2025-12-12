export function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('button');
    button.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);

      // Close all others
      faqItems.forEach(other => {
        other.classList.remove('active');
        const otherBtn = other.querySelector('button');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}
