<script lang="ts">
  import type {
    PracticeId,
    PracticeInformation
  } from '$lib/data/practice-information';

  interface Props {
    practices: readonly PracticeInformation[];
    activeId: PracticeId;
    open?: boolean;
  }

  let {
    practices,
    activeId,
    open = $bindable(true)
  }: Props = $props();

  const navigationId = $props.id();

  function handleSelection(): void {
    if (window.matchMedia('(max-width: 1000px)').matches) {
      open = false;
    }
  }
</script>

<aside
  class={`shrink-0 border-b border-[var(--color2)] bg-[var(--color5)] min-[1001px]:h-full min-[1001px]:overflow-y-auto min-[1001px]:border-r min-[1001px]:border-b-0 ${
    open ? 'min-[1001px]:w-72' : 'min-[1001px]:w-20'
  }`}
>
  <div class="flex items-center gap-3 p-4">
    <button
      type="button"
      onclick={() => (open = !open)}
      aria-expanded={open}
      aria-controls={navigationId}
      aria-label={open ? 'Replier le menu des pratiques' : 'Afficher les pratiques'}
      class="m-0 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--color2)] bg-transparent p-0 text-[var(--color4)] transition-colors hover:bg-[var(--color1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color4)]"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <span
      class={`text-xl font-semibold text-[var(--color4)] ${
        open ? '' : 'min-[1001px]:hidden'
      }`}
    >
      Mes pratiques
    </span>
  </div>

  <nav
    id={navigationId}
    hidden={!open}
    aria-label="Choisir une pratique"
    class="px-3 pb-5"
  >
    <ul class="m-0 flex list-none flex-col gap-2 p-0">
      {#each practices as practice (practice.id)}
        <li class="list-none">
          <a
            href={`/practices/${practice.id}`}
            onclick={handleSelection}
            aria-current={activeId === practice.id ? 'page' : undefined}
            class={`block rounded-xl border px-4 py-4 text-lg leading-snug no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color4)] ${
              activeId === practice.id
                ? 'border-[var(--color4)] bg-[var(--color4)] text-[var(--color1)] hover:text-[var(--color1)]'
                : 'border-transparent text-[var(--color4)] hover:bg-[var(--color1)] hover:text-[var(--color4)]'
            }`}
          >
            {practice.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</aside>