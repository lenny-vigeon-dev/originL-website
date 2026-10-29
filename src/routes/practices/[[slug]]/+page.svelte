<script lang="ts">
  import type { PageData } from './$types';
  import { practiceInformation } from '$lib/data/practice-information';
  import BasicContainer from '$lib/components/BasicContainer.svelte';
  import PracticeSidebar from '$lib/components/PracticeSidebar.svelte';
  import PracticeContent from '$lib/components/PracticeContent.svelte';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let sidebarOpen = $state(true);
</script>

<svelte:head>
  <title>{data.practice.title} — Laetitia Rizzello</title>

  <meta
    name="description"
    content={data.practice.description}
  />
</svelte:head>

<div
  class="flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden bg-[var(--color1)] min-[1001px]:flex-row"
>
  <PracticeSidebar
    practices={practiceInformation}
    activeId={data.practice.id}
    bind:open={sidebarOpen}
  />

  <div class="min-h-0 min-w-0 flex-1 overflow-hidden">
    {#key data.practice.id}
      <BasicContainer>
        <PracticeContent practice={data.practice} />
      </BasicContainer>
    {/key}
  </div>
</div>