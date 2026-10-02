<script lang="ts">
  interface Props {
    question: string;
    children: import('svelte').Snippet;
  }

  let { question, children }: Props = $props();

  let isOpen = $state(false);
</script>

<div class="border-b border-[var(--color3)]">
  <button
    type="button"
    class="flex w-full items-center justify-between gap-4 py-6 text-left"
    onclick={() => (isOpen = !isOpen)}
    aria-expanded={isOpen}
  >
    <span class="text-lg font-semibold text-[var(--color4)]">
      {question}
    </span>

    <span
      class="text-2xl text-[var(--color4)] transition-transform duration-300"
      class:rotate-45={isOpen}
      aria-hidden="true"
    >
      +
    </span>
  </button>

  {#if isOpen}
    <div class="pb-6 leading-relaxed text-[var(--color4)]">
      {@render children()}
    </div>
  {/if}
</div>