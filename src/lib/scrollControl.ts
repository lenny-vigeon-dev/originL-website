export function jsScrollControl(css_class: string, scroll_amount: number = 150, scroll_amount_pagekey: number = 600) {
    document.addEventListener("keydown", function (event) {
        const scrollContainer = document.querySelector(css_class);

        // Check if the container is in the viewport
        if (scrollContainer && scrollContainer.getBoundingClientRect().top >= 0) {
            if (event.key === "ArrowDown") {
                scrollContainer.scrollBy({ top: scroll_amount, behavior: "smooth" });
                event.preventDefault();
            } else if (event.key === "ArrowUp") {
                scrollContainer.scrollBy({ top: -scroll_amount, behavior: "smooth" });
                event.preventDefault();
            } else if (event.key === "PageDown") {
                scrollContainer.scrollBy({ top: scroll_amount_pagekey, behavior: "smooth" });
                event.preventDefault();
            } else if (event.key === "PageUp") {
                scrollContainer.scrollBy({ top: -scroll_amount_pagekey, behavior: "smooth" });
                event.preventDefault();
            }
        }
    });
}
