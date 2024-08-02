<script lang="ts">
    import logo from '$lib/images/logo.svg';
    import "$lib/styles.css";
    import ContactInfo from './ContactInfo.svelte';

    const address: string = "44 Bis Avenue du Clos saint Georges, Bussy-Saint-Georges 77600";
    const phoneNumber: string = "+33 7 82 00 81 52";
    const email: string = "lenny.vigeon@gmail.com";
</script>

<header>
    <button class="homepage-button" aria-label="Go to homepage">
        <img class="logo" src={logo} alt="Origin L logo" />
        <h1>OriginL</h1>
    </button>
    <nav>
        <a href="/">Accueil</a>
        <a href="/about">Prendre rendez-vous</a>
        <a href="/contact">A propos</a>
        <a href="/contact">FAQ</a>
    </nav>
    <div>
        <ContactInfo title="Téléphone : " content={phoneNumber} />
        <ContactInfo title="Email : " content={email} href={`mailto:${email}`} />
        <ContactInfo title="Addresse : " content={address} href={`https://www.google.fr/maps/place/${address.replace(" ", "+")}`} />
    </div>
</header>

<style>
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #333;
        color: white;
        text-align: center;
        padding: 1em;
        align-items: center;
    }

    .logo {
        height: 5em;
    }

    .homepage-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        background: none;
        border: none;
        color: white;
        font-size: 1.5em;
        cursor: pointer;
    }

    nav {
        display: flex;
        flex-direction: row;
        gap: 2em;
    }
</style>
