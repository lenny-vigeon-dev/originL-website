<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';
    import TileContainer from '$lib/components/TileContainer.svelte';
    import PricingTile from '$lib/components/PricingTile.svelte';
    import ContactInfo from '$lib/components/ContactInfo.svelte';

    const address: string = "44 Bis Avenue du Clos saint Georges, Bussy-Saint-Georges 77600";
    const phoneNumber: string = "+33 6 11 26 62 58";
    const email: string = "reflexologie.lr@gmail.com";
</script>

<Tile>
    <h2>La prise de rendez-vous ce fait par téléphone ou par mail</h2>
    <ContactInfo title="Téléphone : " content={phoneNumber} />
    <ContactInfo title="Email : " content={email} href={`mailto:${email}`} />
    <ContactInfo title="Addresse : " content={address} href={`https://www.google.fr/maps/place/${address.replace(" ", "+")}`} />
</Tile>
<Tile bg_color="transparent">
    <p>Une séance dure environ 1h  dont 30 à 40 minutes de massage.</p>
    <p>(Prévoir 1h30 pour la première séance)</p>
</Tile>
<Tile>
    <p>La pratique des séances en réflexologie, la technique principalement utilisé
        sera en réflexologie plantaire. Chaque séance étant adaptée aux besoins de
        la personne, je pourrais être amenée à pratiquer également en réflexologie
        auriculaire ou palmaire.</p>
</Tile>
<Tile bg_color="transparent">
    <p>La durée annoncée pour chaque prestation est estimative et ne prend pas en
        compte le temps d’installation et d’échange préalable. Les personnes devront
        prévoir environ 20 minutes supplémentaires pour les temps d’installation et fin
        de séance.</p>
</Tile>
<TileContainer>
    <PricingTile title="Massage Plantaire « Bien-être »"price={50}>
        Durée: 45 minutes
    </PricingTile>
    <PricingTile title="Massage Palmaire « Bien-être »" price={50}>
        Durée: 45 minutes
    </PricingTile>
    <PricingTile title="Massage bien-être des mains + tonification Dien Chan" price={60}>
        Durée: 60 minutes
    </PricingTile>
    <PricingTile title="Massage bien-être des pieds + tonification Dien Chan" price={60}>
        Durée: 60 minutes
    </PricingTile>
    <PricingTile title="Séance de « Dien Chan »" price={35}>
        Durée: 30 minutes
    </PricingTile>
    <PricingTile title="Séance de Réflexologie*" price={35}>
        Durée: 60 minutes<br>
        * un bilan personnalisé sera établi lors de la première séance.
    </PricingTile>
</TileContainer>

<style>
    p {
        text-align: justify;
        font-size: 1.5em;
    }

    h2 {
        text-align: center;
        font-size: 2em;
    }

</style>
