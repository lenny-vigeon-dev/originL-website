<script lang="ts">
  import type { PageData } from './$types';
  import { practiceInformation } from '$lib/data/practice-information';
  import BasicContainer from '$lib/components/BasicContainer.svelte';
  import PracticeSidebar from '$lib/components/PracticeSidebar.svelte';
  import PracticeContent from '$lib/components/PracticeContent.svelte';
  import PracticesOverview from '$lib/components/PracticesOverview.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let sidebarOpen = $state(true);
</script>

<svelte:head>
  <title>
    {data.practice?.title ?? 'Mes pratiques'} — Laetitia Rizzello
  </title>

  <meta
    name="description"
    content={data.practice?.description ??
      'Découvrez les pratiques proposées par Laetitia Rizzello et choisissez ensemble un accompagnement adapté à vos attentes.'}
  />
</svelte:head>

<div
  class="flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden bg-[var(--color1)] min-[1001px]:flex-row"
>
  <PracticeSidebar
    practices={practiceInformation}
    activeId={data.practice?.id ?? null}
    bind:open={sidebarOpen}
  />

  <div class="min-h-0 min-w-0 flex-1 overflow-hidden">
    {#key data.practice?.id ?? 'overview'}
      <BasicContainer>
        {#if data.practice}
          <PracticeContent practice={data.practice} />
        {:else}
          <PracticesOverview practices={practiceInformation} />
        {/if}
      </BasicContainer>
    {/key}
  </div>
</div>