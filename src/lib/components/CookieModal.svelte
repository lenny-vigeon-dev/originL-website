<script lang="ts">
  import Cookies from 'js-cookie';
  import { onMount } from 'svelte';

  const cookieName = 'cookieInfo';
  let visible = $state(false);

  onMount(() => {
    visible = Cookies.get(cookieName) !== 'true';
  });

  function accept(): void {
    Cookies.set(cookieName, 'true', { expires: 365 });
    visible = false;
  }
</script>

{#if visible}
  <div class="w-full bg-[var(--color4)]">
    <div class="m-4 flex items-center justify-between gap-4 text-[var(--color1)]">
      <p>Ce site ne récupère pas d'informations personnelles sur ses utilisateurs.</p>
      <button
        type="button"
        class="cursor-pointer rounded-[5px] bg-[var(--color1)] px-4 py-2 text-[var(--color4)]"
        onclick={accept}
      >
        OK
      </button>
    </div>
  </div>
{/if}