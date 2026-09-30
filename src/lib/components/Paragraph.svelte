<script lang="ts">
  import type { Snippet } from 'svelte';
  import Title from '$lib/components/Title.svelte';

  interface Props {
    title: string;
    children?: Snippet;
  }

  let { title, children }: Props = $props();
</script>

<Title {title}>
  <div class="flex w-full items-center">
    <p class="mx-4 w-full text-[1em] min-[801px]:mx-[3em] min-[801px]:text-[1.5em]">
      {@render children?.()}
    </p>
  </div>
</Title>