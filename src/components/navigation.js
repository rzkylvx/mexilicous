import gsap from 'gsap';

export function initNavigation(lenis) {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  const transitionBars = document.querySelectorAll('.transition-bar');
  const transitionText = document.querySelector('.transition-text');
  const transitionContainer = document.querySelector('.transition-container');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const tl = gsap.timeline();

        tl.set(transitionContainer, { pointerEvents: "all" })
          .set(transitionBars, { transformOrigin: "bottom", scaleY: 0 })
          .to(transitionBars, {
            scaleY: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.inOut"
          })
          .to(transitionText, { opacity: 1, duration: 0.4, y: 0 }, "-=0.4")
          .add(() => {
            lenis.scrollTo(targetSection, { immediate: true });
          })
          .to(transitionText, { opacity: 0, duration: 0.4, y: -50, delay: 0.2 })
          .set(transitionBars, { transformOrigin: "top" })
          .to(transitionBars, {
            scaleY: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.inOut",
            onComplete: () => {
              gsap.set(transitionContainer, { pointerEvents: "none" });
            }
          }, "-=0.2");
      }
    });
  });
}
