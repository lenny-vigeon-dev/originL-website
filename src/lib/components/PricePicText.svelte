<script lang="ts">
  import type { Snippet } from 'svelte';
  import PricingTile from '$lib/components/PricingTile.svelte';

  interface Props {
    left?: boolean;
    img_path: string;
    img_alt: string;
    background_color_img?: string;
    background_color_content?: string;
    children?: Snippet;
    title: string;
    description: string;
    price: number;
    duration: number;
    note?: string;
    reservationHref?: string;
  }

  let {
    left = true,
    img_path,
    img_alt,
    background_color_img = 'transparent',
    background_color_content = 'transparent',
    children,
    title,
    description,
    price,
    duration,
    note,
    reservationHref = '/reservation'
  }: Props = $props();
</script>

<div
  class="flex w-full flex-col bg-[var(--color1)]"
  class:min-[1001px]:flex-row={left}
  class:min-[1001px]:flex-row-reverse={!left}
>
  <div
    class="min-w-0 flex-1 p-8 min-[1001px]:p-20"
    style:background-color={background_color_img}
  >
    <img
      class="block h-full w-full object-cover"
      src={img_path}
      alt={img_alt}
    />
  </div>

  <div
    class="min-w-0 flex-[2] p-8 min-[1001px]:p-20"
    style:background-color={background_color_content}
  >
    {@render children?.()}

    <div class="mt-8">
      <PricingTile
        {title}
        {description}
        {price}
        {duration}
        {note}
        {reservationHref}
      />
    </div>
  </div>
</div>