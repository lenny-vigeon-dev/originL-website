<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    nav_elements: Record<string, string | Record<string, string>>;
    menuOpen: boolean;
  }

  let { nav_elements, menuOpen = $bindable(false) }: Props = $props();

  onMount(() => {
    const media = window.matchMedia('(min-width: 1051px)');

    const closeOnDesktop = (): void => {
      if (media.matches) menuOpen = false;
    };

    media.addEventListener('change', closeOnDesktop);

    return () => {
      media.removeEventListener('change', closeOnDesktop);
    };
  });
</script>

<nav class="hidden pr-4 min-[1051px]:block" aria-label="Navigation principale">
  <ul class="m-0 flex list-none items-center gap-8 p-0">
    {#each Object.entries(nav_elements) as [label, destination]}
      <li class="group relative list-none">
        {#if typeof destination === 'string'}
          <a
            href={destination}
            class="block hover:text-[var(--color2)] focus-visible:text-[var(--color2)]"
          >
            {label}
          </a>
        {:else}
          <button
            type="button"
            class="m-0 cursor-pointer rounded-none bg-transparent p-0 text-[1.5em] font-normal text-[var(--color4)] hover:bg-transparent hover:text-[var(--color2)] focus-visible:text-[var(--color2)]"
            aria-haspopup="true"
          >
            {label} <span aria-hidden="true">▾</span>
          </button>

          <ul
            class="invisible absolute top-full z-50 m-0 w-40 list-none overflow-hidden rounded-[0.4em] bg-[var(--color1)] p-0 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
          >
            {#each Object.entries(destination) as [subLabel, href]}
              <li class="list-none">
                <a
                  {href}
                  class="block px-[14px] py-[10px] text-[var(--color4)] hover:text-[var(--color3)] focus-visible:text-[var(--color3)]"
                >
                  {subLabel}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}

    <li class="shrink-0 list-none">
      <a
        href="/reservation"
        class="inline-flex h-12 box-border items-center justify-center rounded-[5px] bg-[var(--color3)] px-6 text-[20px] leading-none whitespace-nowrap text-white transition-colors hover:bg-[var(--color4)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color4)]"
      >
        Prendre rendez-vous
      </a>
    </li>
  </ul>
</nav>

<button
  type="button"
  class="relative z-10 flex h-[50px] w-[50px] cursor-pointer flex-col items-center justify-around border-0 bg-transparent p-0 min-[1051px]:hidden"
  aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
  aria-expanded={menuOpen}
  aria-controls="mobile-navigation"
  onclick={() => (menuOpen = !menuOpen)}
>
  <span
    class="h-[3px] w-4/5 bg-[var(--color4)] transition-transform duration-300"
    class:translate-y-[17px]={menuOpen}
    class:rotate-45={menuOpen}
  ></span>

  <span
    class="h-[3px] w-4/5 bg-[var(--color4)] transition-opacity duration-300"
    class:opacity-0={menuOpen}
  ></span>

  <span
    class="h-[3px] w-4/5 bg-[var(--color4)] transition-transform duration-300"
    class:-translate-y-[17px]={menuOpen}
    class:-rotate-45={menuOpen}
  ></span>
</button>