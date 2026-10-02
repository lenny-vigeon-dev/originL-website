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

<div class="flex h-screen w-full flex-col overflow-x-hidden bg-[var(--color1)]">
  <div class="shrink-0">
    <Header />
  </div>

  <main class="min-h-0 flex-1 overflow-x-hidden">
    {@render children()}
  </main>

  <div class="shrink-0">
    <CookieModal />
  </div>
</div>