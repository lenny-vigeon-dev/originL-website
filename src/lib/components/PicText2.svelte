<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    left?: boolean;
    img_path: string;
    img_alt: string;
    background_color_img?: string;
    background_color_content?: string;
    children?: Snippet;
  }

  let {
    img_path,
    img_alt,
    background_color_img = 'transparent',
    background_color_content = 'transparent',
    children
  }: Props = $props();
</script>

<div class="flex w-full flex-col bg-[var(--color1)] min-[1001px]:flex-row">
  <div
    class="flex-1 p-8 min-[1001px]:p-20"
    style:background-color={background_color_img}
  >
    <img class="h-full w-full object-cover" src={img_path} alt={img_alt} />
  </div>
  <div
    class="flex-[2] p-8 min-[1001px]:p-20"
    style:background-color={background_color_content}
  >
    {@render children?.()}
  </div>
</div>