<script lang="ts">
  import type { Snippet } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import CookieModal from '$lib/components/CookieModal.svelte';
  import '$lib/styles.css';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>LR - OriginL</title>
</svelte:head>

<div
  class="flex h-dvh w-full min-w-0 flex-col overflow-hidden bg-[var(--color1)]"
>
  <div class="shrink-0">
    <Header />
  </div>

  <main class="min-h-0 min-w-0 flex-1 overflow-hidden">
    {@render children()}
  </main>

  <div class="shrink-0">
    <CookieModal />
  </div>
</div>

<style>
  :global(html),
  :global(body) {
    height: 100%;
    margin: 0;
    overflow: hidden;
  }

  :global(body) {
    min-height: 0;
  }
</style>