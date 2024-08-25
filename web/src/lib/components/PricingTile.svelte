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
        width: 100%;
        height: 100%;
        text-align: center;
        /* align-items: center; */
    }

    p {
        font-size: 1.5em;
        width: 100%;
        margin-inline: 3em;
    }

    .title {
        font-size: 3em;
    }

    .price {
        font-size: 4em;
    }
</style>
