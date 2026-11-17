export function jsScrollControl(
  target: string | HTMLElement,
  scrollAmount: number = 150,
  pageScrollAmount: number = 600
): () => void {
  const container =
    typeof target === 'string'
      ? document.querySelector<HTMLElement>(target)
      : target;

  if (!container) {
    return () => {};
  }

  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  );

  const offsets: Readonly<Partial<Record<string, number>>> = {
    ArrowDown: scrollAmount,
    ArrowUp: -scrollAmount,
    PageDown: pageScrollAmount,
    PageUp: -pageScrollAmount
  };

  function handleKeydown(event: KeyboardEvent): void {
    if (
      event.defaultPrevented ||
      event.isComposing ||
      event.ctrlKey ||
      event.altKey ||
      event.metaKey ||
      event.shiftKey
    ) {
      return;
    }

    const offset = offsets[event.key];

    if (offset === undefined) {
      return;
    }

    if (
      event.target instanceof Element &&
      event.target.closest(
        'input, textarea, select, button, [contenteditable]:not([contenteditable="false"]), [role="slider"], [role="spinbutton"], [role="combobox"], [role="listbox"]'
      )
    ) {
      return;
    }

    if (!container.isConnected || container.clientHeight === 0) {
      return;
    }

    const bounds = container.getBoundingClientRect();

    if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) {
      return;
    }

    event.preventDefault();

    container.scrollBy({
      top: offset,
      behavior: reducedMotion.matches ? 'instant' : 'smooth'
    });
  }

  document.addEventListener('keydown', handleKeydown);

  return () => {
    document.removeEventListener('keydown', handleKeydown);
  };
}