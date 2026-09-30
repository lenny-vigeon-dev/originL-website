<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    background?: string | null;
    children?: Snippet;
  }

  let { title, background = null, children }: Props = $props();
</script>

<div class="flex w-full flex-col bg-[var(--color1)]">
  <div
    class="flex h-[20vh] w-full items-center justify-center bg-cover bg-center bg-no-repeat text-center"
    style:background-image={background ? `url("${background}")` : undefined}
  >
    <h1 class="text-center text-[clamp(1em,8vw,5em)] text-[var(--color4)]">
      {title}
    </h1>
  </div>
  {@render children?.()}
</div>