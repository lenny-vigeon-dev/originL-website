<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    background_color?: string;
    position?: 'left' | 'center' | 'right';
    children?: Snippet;
  }

  let {
    title,
    background_color = 'transparent',
    position = 'left',
    children
  }: Props = $props();
</script>

<div class="w-full" style:background-color={background_color}>
  <div
    class="flex flex-col p-4"
    class:items-center={position === 'center'}
    class:items-end={position === 'right'}
  >
    <h2 class="mb-[0.5em] text-center text-[2em] min-[801px]:text-[3em]">
      {title}
    </h2>
    {@render children?.()}
  </div>
</div>