<script lang="ts">
    import "$lib/styles.css";
    import ContactInfo from '../lib/components/ContactInfo.svelte';

    const address: string = "44 Bis Avenue du Clos saint Georges, Bussy-Saint-Georges 77600";
    const phoneNumber: string = "+33 7 82 00 81 52";
    const email: string = "lenny.vigeon@gmail.com";
</script>

<footer>
    <div class="inner-footer">
        <a href="/">Conditions générale d'utilisation</a>
        <a href="/">Conditions générale de vente</a>
        <a href="/">Mentions légales</a>
    </div>
</footer>

<style>
    footer {
        width: 100%;
        background-color: var(--color5);
    }

    .inner-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 2em;
        padding: 1em;
    }
</style>
