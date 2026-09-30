<script lang="ts">
  import type { Snippet } from 'svelte';
  import Tile from './Tile.svelte';

  interface Props {
    title: string;
    price: number;
    children?: Snippet;
  }

  let { title, price, children }: Props = $props();
</script>

<Tile>
  <div class="flex h-full w-full flex-col items-center justify-between gap-8 text-center">
    <h2 class="text-[clamp(1em,8vw,3em)] text-[var(--color4)]">{title}</h2>
    <p class="text-[clamp(1em,10vw,4em)]">{price}€</p>
    <p class="w-full text-[clamp(0.5em,5vw,1.5em)]">
      {@render children?.()}
    </p>
  </div>
</Tile>