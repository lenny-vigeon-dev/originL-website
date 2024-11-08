<script lang="ts">
    import {onMount} from 'svelte';

    export let srcset: Array<string> | string;
    // export let $$restProps = {}; // Collects all extra props, like `class`

    if (typeof srcset === "string") {
        srcset = [srcset];
    }

    let inital_src: string = srcset[0];  // Initial src

    onMount(() => {
        const image: Element | null = document.querySelector(".smart-img");

        if (image) {
            async function increase_resolution(img: Element, srcset: Array<string>) {
                srcset.shift();
                if (srcset.length === 0) {
                    return;
                }
                const highResImage = new Image();
                highResImage.src = srcset[0];

                await new Promise((resolve) => {
                    highResImage.onload = () => {
                        img.setAttribute("src", highResImage.src);  // Swap to high-res version
                        resolve();
                    };
                });
                increase_resolution(img, srcset);
            }
            increase_resolution(image, srcset);
        }
    });

</script>

<img class="smart-img" src="{inital_src}" {...$$restProps}/>
