<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    children: Snippet;
  }

  let { title, children }: Props = $props();
</script>

<section class="w-full box-border bg-[var(--color1)] px-6 py-12 min-[901px]:px-12">
  <div class="mx-auto w-full max-w-[1200px]">
    <h2
      class="m-0 text-center font-[family-name:var(--font-title)] text-[clamp(2rem,4vw,3.25rem)] leading-[1.2] font-normal text-[var(--color4)]"
    >
      {title}
    </h2>

    <div class="mt-10 flex w-full flex-col gap-4">
      {@render children()}
    </div>
  </div>
</section>