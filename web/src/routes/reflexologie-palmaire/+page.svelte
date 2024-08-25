<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';
    import TileContainer from '$lib/components/TileContainer.svelte';
    import PricingTile from '$lib/components/PricingTile.svelte';
    import ContactInfo from '$lib/components/ContactInfo.svelte';

</script>

<h1>Réflexologie palmaire</h1>
<Tile>
    <div class="img-content">
        <img src="reflexo_palmaire.png" alt="Réflexologie palmaire" />
        <p>
            Comme pour le pied, les différentes parties du corps se
            retrouvent également en correspondance sur l’ensemble de
            la main. La réflexologie palmaire consiste en la stimulation
            de points et zones réflexes situés sur la main.
            <br><br>
            La réflexologie palmaire s’intègre parfaitement dans
            l’accompagnement de personnes âgées ou d’enfants.
        </p>
    </div>
</Tile>
<!-- <Tile>
    <p>
        Elle s’intègre aussi parfaitement dans le cadre de soins de support pour les
        personnes qui ressentent d’importantes tensions. Elle est pratiquée à la fois dans les
        centres de bien-être tels que les centres de Thalasso, SPA ou centres de remise en
        forme, mais également en milieu hospitalier.
    </p>
</Tile> -->


<style>
    img {
        width: 50%;
    }

    p {
        text-align: justify;
        font-size: 1.5em;
        margin-right: 2em;
    }

    h1 {
        position: sticky;
        text-align: center;
        color: var(--color4);
        font-size: 6em;
    }

    .img-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 5em;
    }

</style>
