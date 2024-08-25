<script lang="ts">
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import CookieModal from '$lib/components/CookieModal.svelte';
    import "$lib/styles.css";
</script>

<main>
    <Header />
    <div class="content">
        <div class="inner-content">
            <slot />
            <Footer />
        </div>
    </div>
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

    .content {
        width: 100vw;
        height: 100%;
        overflow-y: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .inner-content {
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2em;
        width: 100%;
        max-width: 100em;
    }
</style>
