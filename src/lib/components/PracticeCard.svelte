<script lang="ts">
  import StylisedA from './StylisedA.svelte';

  interface Props {
    title: string;
    background: string;
    url: string;
  }

  let { title, background, url }: Props = $props();
</script>

<div
  class="flex h-[50vw] w-full flex-col items-center bg-cover bg-center bg-no-repeat text-center min-[1001px]:h-full"
  style:background-image={`linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0)), url("${background}")`}
>
  <div class="flex h-full w-full flex-col items-center justify-around text-center">
    <h2
      class="text-[min(3em,calc(100vw/15))] font-bold text-[var(--color5)] min-[1001px]:text-[calc(100vw/50)]"
    >
      {title}
    </h2>
  </div>
  <div class="flex h-full w-full flex-col items-center justify-around text-center">
    <StylisedA href={url}>En savoir plus</StylisedA>
  </div>
</div>