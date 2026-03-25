import { useEffect, useRef } from 'react';

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const { threshold = 0.15, rootMargin = '0px', once = true } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Find all elements with animation classes inside this container
    const animatedElements = el.querySelectorAll(
      '.fade-in, .fade-in-left, .fade-in-right, .scale-in'
    );

    // If the container itself has an animation class, include it
    const targets = [];
    if (
      el.classList.contains('fade-in') ||
      el.classList.contains('fade-in-left') ||
      el.classList.contains('fade-in-right') ||
      el.classList.contains('scale-in')
    ) {
      targets.push(el);
    }
    animatedElements.forEach((child) => targets.push(child));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, [threshold, rootMargin, once]);

  return ref;
}
