import gsap from 'gsap';

export function initLoader() {
  const tlLoader = gsap.timeline();

  tlLoader
    .to(".loader-text", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power4.in"
    })
    .to(".loader-overlay", {
      scaleY: 1,
      duration: 1,
      ease: "power4.inOut"
    })
    .to(".loader", {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut"
    })
    .from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out"
    }, "-=0.5")
    .from(".hero-subtitle span", {
      y: "100%",
      duration: 1,
      ease: "power4.out"
    }, "-=1");

  return tlLoader;
}
