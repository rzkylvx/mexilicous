import gsap from 'gsap';

export function initCursor() {
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');

  if (!cursorDot || !cursorOutline) return;

  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    gsap.to(cursorOutline, {
      x: posX,
      y: posY,
      duration: 0.15,
      ease: "power2.out"
    });
  });

  updateHoverTriggers();
}

export function updateHoverTriggers() {
  const cursorOutline = document.querySelector('.cursor-outline');
  if (!cursorOutline) return;

  const hoverTriggers = document.querySelectorAll('.hover-trigger');
  hoverTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
      gsap.to(cursorOutline, {
        scale: 2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "transparent",
        duration: 0.2
      });
    });
    trigger.addEventListener('mouseleave', () => {
      gsap.to(cursorOutline, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(255, 255, 255, 0.5)",
        duration: 0.2
      });
    });
  });
}
