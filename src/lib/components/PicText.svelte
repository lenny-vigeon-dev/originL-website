<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';

    export let left: boolean = true;
    export let img_path: string;
    export let img_alt: string;
    export let img_width: string = "50%";

</script>
<div class="img-content" style="--pic-text-img-width: {img_width};">
    {#if left}
        <img src={img_path} alt={img_alt} />
    {/if}
    <p><slot/></p>
    {#if !left}
        <img src={img_path} alt={img_alt} />
    {/if}
</div>

<style>
    img {
        width: var(--pic-text-img-width);
    }

    p {
        text-align: justify;
        font-size: 1.5em;
        margin-right: 2em;
    }

    .img-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 5em;
    }

    @media (max-width: 800px) {
        p {
            font-size: 1em;
            margin-inline: 1em;
        }
        .img-content {
            flex-direction: column;
            gap: 1em;
        }
        img {
            width: 80%;
        }
    }

</style>
