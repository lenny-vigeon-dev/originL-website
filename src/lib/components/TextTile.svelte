<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';

    export let bg_color = "var(--color5)";
</script>

<Tile bg_color={bg_color}>
    <p><slot/></p>
</Tile>

<style>
    p {
        font-size: 1.5em;
        width: 100%;
        margin-inline: 3em;
    }

    @media (max-width: 800px) {
        p {
            font-size: 1em;
            margin-inline: 1em;
        }
    }
</style>
