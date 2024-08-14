<script lang="ts">
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import "$lib/styles.css";
</script>

<main>
    <Header />
    <div class="content">
        <div class="inner-content">
            <slot />
        </div>
    </div>
    <!-- <Footer /> -->
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
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }

    .inner-content {
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1em;
    }
</style>
