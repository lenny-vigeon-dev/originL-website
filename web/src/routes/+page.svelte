<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';
    import TileContainer from '$lib/components/TileContainer.svelte';
    import PricingTile from '$lib/components/PricingTile.svelte';
</script>

<Tile>
    <a href="/reservation">Prendre rendez-vous</a>

</Tile>
<TileContainer>
    <Tile>
        <iframe title="Intriduction video" width="100%" height="100%" src="https://www.youtube.com/embed/uFM3QT7Q620?si=nCTlTYzH3VVrttPg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Tile>
    <Tile>
        <iframe title="Cabinet location" width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42027.80112133329!2d2.6676070417730133!3d48.82506841788993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x800f49a2c705615d%3A0x83891d781e24f1da!2sLaetitia%20RIZZELLO!5e0!3m2!1sfr!2sfr!4v1723067000812!5m2!1sfr!2sfr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Tile>
</TileContainer>

<style>
    button {
        padding: 1em;
        box-shadow: 0px 0px 1em 0.1em black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0.4em;
        color: var(--color1);
        background-color: var(--color2);
        width: 100%;
    }

</style>
