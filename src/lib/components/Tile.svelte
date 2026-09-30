<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    bg_color?: string;
    children?: Snippet;
  }

  let { bg_color = 'var(--color5)', children }: Props = $props();
</script>

<div class="flex w-full" style:background-color={bg_color}>
  <div class="flex flex-1 flex-col items-center justify-center p-8">
    {@render children?.()}
  </div>
</div>