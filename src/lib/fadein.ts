export function addOnScreenTrigger(
  selector: string,
  root: HTMLElement | null = null
): () => void {
  const scope = root ?? document;

  const elements = Array.from(
    scope.querySelectorAll<HTMLElement>(selector)
  );

  const reveal = (element: HTMLElement): void => {
    element.style.opacity = '1';
  };

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (
    prefersReducedMotion ||
    typeof IntersectionObserver === 'undefined'
  ) {
    elements.forEach(reveal);
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      for (const entry of entries) {
        if (
          entry.isIntersecting &&
          entry.target instanceof HTMLElement
        ) {
          reveal(entry.target);

          currentObserver.unobserve(entry.target);
        }
      }
    },
    {
      root,
      threshold: 0
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    observer.disconnect();
  };
}