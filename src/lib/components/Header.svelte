<script lang="ts">
  import logo from '$lib/images/logo.svg';
  import Navigation from '$lib/components/Navigation.svelte';
  import NavigationDropdown from '$lib/components/NavigationDropdown.svelte';
  import { NAV_ELEM } from '$lib/consts';

  let menuOpen = $state(false);
</script>

<header class="w-full bg-[var(--color5)]">
  <div class="flex items-center justify-between px-4 text-center text-white">
    <a
      class="flex cursor-pointer items-center bg-transparent p-0 text-[1.5em] text-white"
      href="/"
    >
      <img class="h-[3em]" src={logo} alt="Origin L logo" />
      <h1 class="max-[350px]:hidden max-[600px]:text-[1em]">
        LR - Réflexologie
      </h1>
    </a>

    <Navigation nav_elements={NAV_ELEM} bind:menuOpen />
  </div>

  <NavigationDropdown nav_elements={NAV_ELEM} bind:menuOpen />
</header>