<script lang="ts">
    import "$lib/styles.css";
    import Tile from './Tile.svelte';

    export let title: string;
    export let price: number;
</script>

<Tile>
    <div class="content">
        <h2 class="title">{title}</h2>
        <p class="price">{price}€</p>
        <p><slot/></p>
    </div>
</Tile>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        width: 100%;
        height: 100%;
        gap: 2em;
        /* align-items: center; */
    }

    p {
        font-size: 1.5em;
        width: 100%;
        font-size: clamp(0.5em, 5vw, 1.5em);
        /* margin-inline: 3em; */
    }

    .title {
        font-size: 3em;
        color: var(--color4);
        font-size: clamp(1em, 8vw, 3em);
    }

    .price {
        font-size: 4em;
        font-size: clamp(1em, 10vw, 4em);
    }
</style>
