<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { jsScrollControl } from '$lib/scrollControl';

  let { children }: { children?: Snippet } = $props();

  onMount(() => {
    jsScrollControl('.content');
  });
</script>

<div class="content flex h-full w-full flex-col items-center overflow-y-auto">
  <div class="flex w-full min-w-0 flex-col items-center justify-center">
    {@render children?.()}
    <Footer />
  </div>
</div>