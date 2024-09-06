<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';
    import TileContainer from '$lib/components/TileContainer.svelte';
    import PricingTile from '$lib/components/PricingTile.svelte';
    import ContactInfo from '$lib/components/ContactInfo.svelte';

</script>

<h1>Massage plantaire ou palmaire</h1>
<Tile>
    <div class="img-content">
        <img src="massage_plantaire_ou_palmaire.png" alt="Dien Chan" />
        <p>
            Cette prestation a pour vocation d’offrir un véritable
            moment de détente à l’une ou l’autres de ces parties du corps
            que sont les pieds ou les mains, sollicitées tout au long de la journée.
            <br>
            Ces massages présentent également un intérêt pour les personnes alités
            ou qui ne souhaitent pas recevoir un massage corporel.
            <br><br>
            Ce type de massage a pour effet d’induire une profonde relaxation
            mais également d’harmoniser le corps et l’esprit tout en
            procurant une profonde sensation de détente, et un net assouplissement
            des articulations des zones massées.
            <br><br>
            Les massages plantaires et/ ou palmaire peuvent aider à
            réguler l’organisme et à améliorer la qualité du sommeil.
            Il détend la masse musculaire des mains,
            extrêmement sollicité dans la vie quotidienne.
        </p>
    </div>
</Tile>


<style>
    img {
        /* height: 50%; */
        width: 30em;
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
