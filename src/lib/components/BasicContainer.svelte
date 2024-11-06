<script lang="ts">
    import Footer from '$lib/components/Footer.svelte';
    import { onMount } from 'svelte';
    import { jsScrollControl } from '$lib/scrollControl';

    onMount(() => {
        jsScrollControl(".content");
    });


</script>

<div class="content">
    <div class="inner-content">
        <slot />
        <Footer />
    </div>
</div>

<style>
    .content {
        width: 100vw;
        height: 100%;
        overflow-y: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .inner-content {
        /* margin: 1em 1em; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* gap: 2em; */
        /* width: 100%; */
        /* max-width: 100em; */
        min-width: 0;
        width: 100%;
    }
</style>
