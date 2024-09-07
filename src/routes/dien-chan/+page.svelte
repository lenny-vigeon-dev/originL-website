<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';
    import TileContainer from '$lib/components/TileContainer.svelte';
    import PricingTile from '$lib/components/PricingTile.svelte';
    import ContactInfo from '$lib/components/ContactInfo.svelte';

</script>

<h1>Dien Chan</h1>
<Tile>
    <div class="img-content">
        <img src="dien_chan.png" alt="Dien Chan" />
        <p>
            Dien Chan est une méthode développée dans les années 1980
            par le professeur Bui Quoc Chau.
            <br><br>
            Elle se pratique généralement à l’aide d’un stylet
            (instrument à bout rond) ; mais il est possible d’alterner
            avec des techniques manuelles. Cette technicité induit une stimulation
            sensorielle sur le visage et est tout à fait
            adaptée pour tonifier le visage.
        </p>
    </div>
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
