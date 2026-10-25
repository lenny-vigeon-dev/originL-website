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
  class="overflow-hidden rounded-[16px] border border-[var(--color2)] bg-[var(--color5)]"
>
  <h3 class="m-0">
    <button
      id={`${id}-question`}
      type="button"
      aria-expanded={isOpen}
      aria-controls={`${id}-answer`}
      onclick={() => (isOpen = !isOpen)}
      class="m-0 flex w-full cursor-pointer items-center justify-between gap-5 rounded-none border-0 bg-transparent px-6 py-5 text-left text-xl leading-snug font-medium text-[var(--color4)] transition-colors hover:bg-[var(--color1)] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[var(--color4)]"
    >
      <span>{question}</span>

      <span
        aria-hidden="true"
        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color2)] text-2xl leading-none transition-transform duration-200 motion-reduce:transition-none"
        class:rotate-45={isOpen}
      >
        +
      </span>
    </button>
  </h3>

  <div
    id={`${id}-answer`}
    hidden={!isOpen}
    class="px-6 pb-6 text-[1.125rem] leading-relaxed text-[var(--color4)] [&_p]:m-0 [&_p]:text-[1.125rem] [&_p]:leading-relaxed [&_p+p]:mt-4"
  >
    {@render children()}
  </div>
</div>