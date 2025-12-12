import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Text Reveals
  gsap.utils.toArray('.split-text').forEach(text => {
    gsap.from(text, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: text,
        start: "top 80%",
      }
    });
  });

  // Image Parallax
  gsap.to(".image-reveal-img", {
    scale: 1,
    scrollTrigger: {
      trigger: ".image-reveal-container",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });

  // Marquee Animation
  gsap.to(".marquee-content", {
    xPercent: -50,
    ease: "none",
    duration: 60,
    repeat: -1
  });

  // Team Animations
  gsap.from(".team-card", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#team",
      start: "top 70%"
    }
  });
}

export function initHorizontalScroll() {
  const raceWrapper = document.querySelector(".horizontal-scroll-wrapper");
  if (!raceWrapper) return;

  function getScrollAmount() {
    let raceWidth = raceWrapper.scrollWidth;
    return -(raceWidth - window.innerWidth);
  }

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function() {
      const tween = gsap.to(raceWrapper, {
        x: getScrollAmount,
        ease: "none"
      });

      ScrollTrigger.create({
        trigger: "#ingredients",
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true
      });
    },
    "(max-width: 767px)": function() {
      gsap.utils.toArray(".ingredient-card").forEach(card => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 85%"
          }
        });
      });
    }
  });
}
