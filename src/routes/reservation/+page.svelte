<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';
    import TileContainer from '$lib/components/TileContainer.svelte';
    import PricingTile from '$lib/components/PricingTile.svelte';
    import ContactInfo from '$lib/components/ContactInfo.svelte';
    import TextTile from '$lib/components/TextTile.svelte';

    const address: string = "44 Bis Avenue du Clos saint Georges, Bussy-Saint-Georges 77600";
    const phoneNumber: string = "+33 6 11 26 62 58";
    const email: string = "reflexologie.lr@gmail.com";
</script>

<Tile>
    <h2>Prise de rendez-vous:</h2>
    <ContactInfo title="Téléphone : " content={phoneNumber} />
    <ContactInfo title="Email : " content={email} href={`mailto:${email}`} />
    <ContactInfo title="Addresse : " content={address} href={`https://www.google.fr/maps/place/${address.replace(" ", "+")}`} />
</Tile>
<TextTile bg_color="transparent">
    Une séance dure environ 1h dont 30 à 40 minutes de massage.
    <br>
    (Prévoir 1h30 pour la première séance)
</TextTile>
<TextTile>
    La pratique des séances en réflexologie, la technique principalement utilisé
    sera en réflexologie plantaire. Chaque séance étant adaptée aux besoins de
    la personne, je pourrais être amenée à pratiquer également en réflexologie
    auriculaire ou palmaire.
</TextTile>
<TextTile bg_color="transparent">
    La durée annoncée pour chaque prestation est estimative et ne prend pas en
    compte le temps d’installation et d’échange préalable. Les personnes devront
    prévoir environ 20 minutes supplémentaires pour les temps d’installation et fin
    de séance.
</TextTile>

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
