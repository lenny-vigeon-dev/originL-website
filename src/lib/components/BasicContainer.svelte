<script lang="ts">
  import type { Snippet } from 'svelte';
  import Footer from '$lib/components/Footer.svelte';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<div
  class="content h-full min-h-0 w-full min-w-0 overflow-x-hidden overflow-y-auto"
>
  <div class="flex w-full min-w-0 flex-col items-center">
    {@render children?.()}
    <Footer />
  </div>
</div>