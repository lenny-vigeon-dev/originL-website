<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: { children?: Snippet } = $props();
</script>

<div
  class="my-4 flex h-full w-full flex-col gap-4 min-[801px]:grid min-[801px]:grid-cols-[repeat(auto-fill,minmax(28em,1fr))]"
>
  {@render children?.()}
</div>