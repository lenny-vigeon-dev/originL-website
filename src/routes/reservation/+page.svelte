<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';
    import ContactInfo from '$lib/components/ContactInfo.svelte';
    import Paragraph from '$lib/components/Paragraph.svelte';
    import Title from '$lib/components/Title.svelte';
    import PicText from '$lib/components/PicText.svelte';

    const address: string = "44 Bis Avenue du Clos saint Georges, Bussy-Saint-Georges 77600";
    const phoneNumber: string = "+33 6 11 26 62 58";
    const email: string = "reflexo.lr@gmail.com";
</script>

<Tile>
    <h2>Prise de rendez-vous:</h2>
    <ContactInfo title="Téléphone : " content={phoneNumber} href={`tel:${phoneNumber}`}/>
    <ContactInfo title="Email : " content={email} href={`mailto:${email}`} />
    <ContactInfo title="Addresse : " content={address} href={`https://www.google.fr/maps/place/${address.replace(" ", "+")}`} />
</Tile>
<Tile bg_color="transparent">
    <Paragraph title="Durée des séances:">
        Une séance dure environ 1h dont 30 à 40 minutes de massage.
        <br><br>
        La durée annoncée pour chaque prestation est estimative et ne prend pas en
        compte le temps d’installation et d’échange préalable. Les personnes devront
        prévoir environ 20 minutes supplémentaires pour les temps d’installation et fin
        de séance.
        <br><br>
        <strong>Première séance:</strong>
        <br>
        Lors de notre première séance, qui durera un peu plus longtemps (environ 1h30),
        je vous inviterai à partager les raisons de votre visite.
    </Paragraph>
</Tile>
<Tile>
    <Title title="Déroulé d'une séance:">
        <PicText left={false} img_path="salle_reflexo.jpg" img_alt="Salle de consultation" img_max_width="20em">
            Vous serez installé(e) confortablement sur ma table de massage,
            avec un coussin sous la tête et les genoux. Une couverture sera à votre disposition
            pour vous assurer un confort optimal.
            <br><br>
            Pendant la séance, j’appliquerai la méthode de réflexologie en identifiant avec vous les zones
            les plus sensibles, en lien avec les échanges que nous aurons eu au préalable.
            Nous travaillerons ensemble sur ces zones afin de favoriser votre bien-être.
        </PicText>
    </Title>
</Tile>

<style>

    h2 {
        font-size: 3em;
    }

    @media (max-width: 800px) {
        h2 {
            font-size: 2em;
        }
    }

</style>
