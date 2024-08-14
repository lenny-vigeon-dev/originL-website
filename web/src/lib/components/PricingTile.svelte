<script lang="ts">
    import "$lib/styles.css";
    import Tile from './Tile.svelte';

    export let title: string;
    export let price: number;
    export let description: string = "";
</script>

<Tile>
    <div class="content">
        <h2 class="title">{title}</h2>
        <p>{description}</p>
        <div class="bottom-section">
            <div/>
            <p class="price">{price}€</p>
        </div>
    </div>
</Tile>

<style>
    .content {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: space-between;
        width: 100%;
        height: 100%;
        /* text-align: center; */
        /* align-items: center; */
    }

    .title {
        font-size: 3em;
    }

    .bottom-section {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .price {
        font-size: 2.5em;
    }
</style>
