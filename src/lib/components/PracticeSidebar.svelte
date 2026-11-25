<script lang="ts">
  import type { PracticeInformation } from '$lib/data/practice-information';

  interface Props {
    practices: readonly PracticeInformation[];
    activeId?: string | null;
    open?: boolean;
  }

  let {
    practices,
    activeId = null,
    open = $bindable(true)
  }: Props = $props();

  const id = $props.id();

  function closeOnMobile(): void {
    if (window.matchMedia('(max-width: 1000px)').matches) {
      open = false;
    }
  }
</script>

<aside
  class={`box-border w-full shrink-0 border-b border-[var(--color2)] bg-[var(--color5)] min-[1001px]:h-full min-[1001px]:overflow-y-auto min-[1001px]:border-r min-[1001px]:border-b-0 ${
    open ? 'min-[1001px]:w-72' : 'min-[1001px]:w-20'
  }`}
>
  <div class="flex items-center gap-3 p-4">
    <button
      type="button"
      class="m-0 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color2)] bg-transparent p-0 text-[var(--color4)] hover:bg-[var(--color1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color4)]"
      aria-label={open ? 'Réduire le menu des pratiques' : 'Ouvrir le menu des pratiques'}
      aria-expanded={open}
      aria-controls={`${id}-navigation`}
      onclick={() => (open = !open)}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    {#if open}
      <a
        href="/practices"
        aria-current={activeId === null ? 'page' : undefined}
        onclick={closeOnMobile}
        class={`rounded-xl px-4 py-3 text-lg font-bold no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color4)] ${
          activeId === null
            ? 'bg-[var(--color4)] text-[var(--color1)] hover:text-[var(--color1)]'
            : 'text-[var(--color4)] hover:bg-[var(--color1)] hover:text-[var(--color4)]'
        }`}
      >
        Mes pratiques
      </a>
    {/if}
  </div>

  <nav
    id={`${id}-navigation`}
    hidden={!open}
    aria-label="Navigation des pratiques"
    class="px-4 pb-6"
  >
    <ul class="m-0 flex list-none flex-col gap-2 p-0">
      {#each practices as practice (practice.id)}
        <li>
          <a
            href={`/practices/${practice.id}`}
            aria-current={activeId === practice.id ? 'page' : undefined}
            onclick={closeOnMobile}
            class={`block rounded-xl px-4 py-3 text-lg leading-snug no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color4)] ${
              activeId === practice.id
                ? 'bg-[var(--color4)] font-bold text-[var(--color1)] hover:text-[var(--color1)]'
                : 'text-[var(--color4)] hover:bg-[var(--color1)] hover:text-[var(--color4)]'
            }`}
          >
            {practice.title}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</aside>