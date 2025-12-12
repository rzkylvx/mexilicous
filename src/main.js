import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Lenis from 'lenis';
import { createIcons, icons } from 'lucide';

// Import components
import { initCursor, updateHoverTriggers } from './components/cursor';
import { initLoader } from './components/loader';
import { initNavigation } from './components/navigation';
import { initAnimations, initHorizontalScroll } from './components/animations';
import { initFAQ } from './components/faq';
import { initChat } from './components/chat';
import { init3DBackground } from './components/three-background';
import { initGame } from './components/game';
import { renderHTML } from './render';

// Import lab (exposes to window)
import './components/lab';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Render app
function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = renderHTML();
  
  // Initialize everything after DOM is ready
  initializeApp();
}

function initializeApp() {
  // Initialize Lucide icons
  createIcons({ icons });

  // Initialize Lenis smooth scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);


  // Initialize all components
  initCursor();
  initLoader();
  initNavigation(lenis);
  initAnimations();
  initHorizontalScroll();
  initFAQ();
  initChat();
  init3DBackground();
  initGame();
  
  // Update hover triggers after all content loaded
  updateHoverTriggers();
}

// Start app when DOM ready
renderApp();
