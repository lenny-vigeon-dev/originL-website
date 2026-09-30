<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: { children?: Snippet } = $props();
</script>

<button
  type="button"
  class="inline-flex items-center justify-center border-0 bg-transparent p-0 text-[1em] font-thin text-[var(--color4)] transition-colors hover:text-[var(--color2)] focus-visible:text-[var(--color2)]"
>
  {@render children?.()}
</button>