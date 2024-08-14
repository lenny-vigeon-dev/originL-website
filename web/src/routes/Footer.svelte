<script lang="ts">
    import "$lib/styles.css";
    import ContactInfo from '../lib/components/ContactInfo.svelte';

    const address: string = "44 Bis Avenue du Clos saint Georges, Bussy-Saint-Georges 77600";
    const phoneNumber: string = "+33 7 82 00 81 52";
    const email: string = "lenny.vigeon@gmail.com";
</script>

<footer>
    <div class="inner-footer">
        <ContactInfo title="Téléphone : " content={phoneNumber} />
        <ContactInfo title="Email : " content={email} href={`mailto:${email}`} />
        <ContactInfo title="Addresse : " content={address} href={`https://www.google.fr/maps/place/${address.replace(" ", "+")}`} />
    </div>
</footer>

<style>
    footer {
        width: 100%;
        background-color: var(--color4);
    }

    .inner-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 2em;
        padding: 1em;
    }
</style>
