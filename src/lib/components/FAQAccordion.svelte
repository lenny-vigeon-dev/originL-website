<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    question: string;
    children: Snippet;
  }

  let { question, children }: Props = $props();

  let isOpen = $state(false);

  const id = $props.id();
</script>

<div
  class="overflow-hidden rounded-[16px] border border-[var(--color2)] bg-[var(--color1)]"
>
  <h3 class="m-0 bg-[var(--color5)]">
    <button
      id={`${id}-question`}
      type="button"
      class="m-0 flex w-full items-center justify-between gap-4 rounded-none border-0 bg-[var(--color5)] px-6 py-5 text-left font-[family-name:var(--font-body)] text-[1.25rem] leading-snug font-bold text-[var(--color4)] hover:bg-[var(--color5)] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[var(--color4)] min-[801px]:text-[1.375rem]"
      aria-expanded={isOpen}
      aria-controls={`${id}-answer`}
      onclick={() => (isOpen = !isOpen)}
    >
      <span class="min-w-0">
        {question}
      </span>

      <span
        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color2)] text-2xl font-normal transition-transform duration-200 motion-reduce:transition-none"
        class:rotate-45={isOpen}
        aria-hidden="true"
      >
        +
      </span>
    </button>
  </h3>

  <div
    id={`${id}-answer`}
    hidden={!isOpen}
    class="border-t border-[var(--color2)] bg-[var(--color1)] px-6 py-6 text-[1.125rem] leading-relaxed text-[var(--color4)] [&_p]:m-0 [&_p]:text-[1.125rem] [&_p]:leading-relaxed [&_p+p]:mt-4"
  >
    {@render children()}
  </div>
</div>