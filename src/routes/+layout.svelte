<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Footer from '../lib/components/Footer.svelte';
    import CookieModal from '$lib/components/CookieModal.svelte';
    import "$lib/styles.css";
</script>

<svelte:head>
  <title>LR - OriginL</title>
</svelte:head>

<main>
    <Header />
    <slot />
    <CookieModal />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: space-between;
        width: 100vw;
        height: 100vh;
        /* text-align: center; */
        /* align-items: center; */
        background-color: var(--color1);
    }
</style>
