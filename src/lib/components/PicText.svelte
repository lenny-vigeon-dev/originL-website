<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    left?: boolean;
    img_path: string;
    img_alt: string;
    img_width?: string;
    img_max_width?: string;
    background_color?: string;
    children?: Snippet;
  }

  let {
    left = true,
    img_path,
    img_alt,
    img_width = '50%',
    img_max_width = '100%',
    background_color = 'transparent',
    children
  }: Props = $props();
</script>

<div
  class="w-full"
  style:background-color={background_color}
  style:--pic-text-img-width={img_width}
  style:--pic-text-img-max-width={img_max_width}
>
  <img
    src={img_path}
    alt={img_alt}
    class="mb-4 w-[var(--pic-text-img-width)] max-w-[var(--pic-text-img-max-width)]"
    class:float-left={left}
    class:float-right={!left}
    class:mr-8={left}
    class:ml-8={!left}
  />
  <p class="mx-4 text-justify text-[1em] min-[801px]:mr-[2em] min-[801px]:ml-0 min-[801px]:text-[1.5em]">
    {@render children?.()}
  </p>
</div>