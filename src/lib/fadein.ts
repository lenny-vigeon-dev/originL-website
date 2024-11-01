export function addOnScreenTrigger(cssProperty: string)
{
    const inViewport = (entries: Array<any>, observer: IntersectionObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    };

    const Obs = new IntersectionObserver(inViewport);

    // Attach observer to every [data-inviewport] element:
    document.querySelectorAll(cssProperty).forEach(el => {
        Obs.observe(el);
    });

}
