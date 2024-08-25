<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';
    import TileContainer from '$lib/components/TileContainer.svelte';
    import PricingTile from '$lib/components/PricingTile.svelte';
    import ContactInfo from '$lib/components/ContactInfo.svelte';

</script>

<h1>L’auriculothérapie</h1>
<Tile>
    <div class="img-content">
        <img src="auriculotherapie.png" alt="L’auriculothérapie" />
        <p>
            La réflexologie auriculaire consiste en la stimulation de points et
            zones réflexes situés sur l’oreille réalisée à l’aide d’un stylet.
            <br><br>
            Elle fut découverte en 1951 par un médecin français,
            le Dr  Paul Nogier qui mit en évidence une correspondance
            de tous les points du corps au niveau de l’oreille,
            représentant ainsi le schéma d’un fœtus inversé.
            <br><br>
            La réflexologie auriculaire se pratique à l’aide d’un stylet à bout rond
            et se pratique sans aiguille (il ne s’agit pas d’acupuncture).

        </p>
    </div>
</Tile>
<Tile>
    <p>
        Elle permet une prise en charge très efficace des douleurs et
        troubles émotionnels. En suivi de séance, la facilité d’accessibilité
        de l’oreille permet de pratiquer des autostimulations avec aisance et discrétion.
    </p>
</Tile>


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
        /* position: sticky; */
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
