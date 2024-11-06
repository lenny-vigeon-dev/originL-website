<script lang="ts">
    import Tile from '$lib/components/Tile.svelte';
    import ContactInfo from '$lib/components/ContactInfo.svelte';
    import Paragraph from '$lib/components/Paragraph.svelte';
    import Title from '$lib/components/Title.svelte';
    import PicText2 from '$lib/components/PicText2.svelte';
    import BasicContainer from '$lib/components/BasicContainer.svelte';

    const address: string = "44 Bis Avenue du Clos saint Georges, Bussy-Saint-Georges 77600";
    const phoneNumber: string = "+33 6 11 26 62 58";
    const email: string = "reflexo.lr@gmail.com";
</script>

<BasicContainer>

    <Tile bg_color="transparent">
        <div class="rdv-section">
            <div class="contact-info">
                <Title title="Prendre rendez-vous" position="center">
                    <div class="contact-data">
                        <ContactInfo title="Téléphone : " content={phoneNumber} href={`tel:${phoneNumber}`}/>
                        <ContactInfo title="Email : " content={email} href={`mailto:${email}`} />
                        <ContactInfo title="Addresse : " content={address} href={`https://www.google.fr/maps/place/${address.replace(" ", "+")}`} />
                    </div>
                </Title>
            </div>
            <div class="map">
                <iframe title="Cabinet location" width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42027.80112133329!2d2.6676070417730133!3d48.82506841788993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x800f49a2c705615d%3A0x83891d781e24f1da!2sLaetitia%20RIZZELLO!5e0!3m2!1sfr!2sfr!4v1723067000812!5m2!1sfr!2sfr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </Tile>
    <Tile>
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
    <Tile bg_color="transparent">
        <PicText2 left={false} img_path="salle_reflexo.jpg" img_alt="Salle de consultation">
            <Title title="Déroulé d'une séance:" position="center">
                <p>
                    Vous serez installé(e) confortablement sur ma table de massage,
                    avec un coussin sous la tête et les genoux. Une couverture sera à votre disposition
                    pour vous assurer un confort optimal.
                    <br><br>
                    Pendant la séance, j’appliquerai la méthode de réflexologie en identifiant avec vous les zones
                    les plus sensibles, en lien avec les échanges que nous aurons eu au préalable.
                    Nous travaillerons ensemble sur ces zones afin de favoriser votre bien-être.
                </p>
            </Title>
        </PicText2>
    </Tile>
</BasicContainer>

<style>
    .rdv-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    .contact-info {
        flex: 1;
    }

    .contact-data {
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
    }

    .map {
        flex: 1;
    }


    @media (max-width: 800px) {
        .rdv-section {
            flex-direction: column;
            height: 40em;
        }

        .map {
            flex: 2;
        }
    }
</style>
