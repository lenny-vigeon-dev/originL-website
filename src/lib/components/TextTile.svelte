<script lang="ts">
  import type { Snippet } from 'svelte';
  import Tile from '$lib/components/Tile.svelte';

  interface Props {
    bg_color?: string;
    children?: Snippet;
  }

  let { bg_color = 'var(--color5)', children }: Props = $props();
</script>

<Tile {bg_color}>
  <p class="mx-4 w-full text-[1em] min-[801px]:mx-[3em] min-[801px]:text-[1.5em]">
    {@render children?.()}
  </p>
</Tile>