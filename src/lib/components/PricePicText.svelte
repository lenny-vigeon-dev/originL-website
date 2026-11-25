<script lang="ts">
  import type { Snippet } from 'svelte';
  import PersonalizedSessionCard from './PersonalizedSessionCard.svelte';

  interface Props {
    left?: boolean;
    img_path: string;
    img_alt: string;
    background_color_img?: string;
    background_color_content?: string;
    children?: Snippet;
  }

  let {
    left = true,
    img_path,
    img_alt,
    background_color_img = 'transparent',
    background_color_content = 'transparent',
    children
  }: Props = $props();
</script>

<div
  class={`flex w-full flex-col bg-[var(--color1)] ${
    left ? 'min-[1001px]:flex-row' : 'min-[1001px]:flex-row-reverse'
  }`}
>
  <div
    class="min-w-0 flex-1 p-8 min-[1001px]:p-20"
    style:background-color={background_color_img}
  >
    <img
      src={img_path}
      alt={img_alt}
      loading="lazy"
      class="block h-full w-full object-cover"
    />
  </div>

  <div
    class="min-w-0 flex-[2] p-8 min-[1001px]:p-20"
    style:background-color={background_color_content}
  >
    {@render children?.()}

    <div class="mt-8">
      <PersonalizedSessionCard />
    </div>
  </div>
</div>