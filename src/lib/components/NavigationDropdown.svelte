<script lang="ts">
  import StylisedA from './StylisedA.svelte';

  interface Props {
    nav_elements: Record<string, string | Record<string, string>>;
    menuOpen: boolean;
  }

  let { nav_elements, menuOpen = $bindable(false) }: Props = $props();
</script>

{#if menuOpen}
  <nav
    id="mobile-navigation"
    class="absolute z-50 w-full bg-[var(--color1)] min-[1051px]:hidden"
    aria-label="Navigation mobile"
  >
    <ul class="my-6 flex flex-col gap-8 px-6">
      <li>
        <StylisedA href="/reservation">Prendre rendez vous</StylisedA>
      </li>

      {#each Object.entries(nav_elements) as [label, destination]}
        <li class="list-none">
          {#if typeof destination === 'string'}
            <a href={destination} onclick={() => (menuOpen = false)}>{label}</a>
          {:else}
            <p class="mb-4">{label}</p>
            <ul class="flex flex-col gap-4">
              {#each Object.entries(destination) as [subLabel, href]}
                <li>
                  <a {href} onclick={() => (menuOpen = false)}>{subLabel}</a>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
{/if}