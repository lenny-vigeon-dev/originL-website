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
<Tile>
    <p>Une séance dure environ 1h  dont 30 à 40 minutes de massage.</p>
    <p>(Prévoir 1h30 pour la première séance)</p>
</Tile>
<TileContainer>
    <PricingTile title="Massage bien-être Réflexologie plantaire" price={40}></PricingTile>
    <PricingTile title="Massage Réflexologie palmaire" price={45}></PricingTile>
    <PricingTile title="Massage Réflexologie plantaire" price={55}></PricingTile>
    <PricingTile title="Massage Réflexologie plantaire + Réflexologie auriculaire" price={60}></PricingTile>
</TileContainer>
