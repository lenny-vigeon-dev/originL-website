<script lang="ts">
    import "$lib/styles.css";

    const address: string = "44 Bis Avenue du Clos saint Georges, Bussy-Saint-Georges 77600";
    const phoneNumber: string = "+33 7 82 00 81 52";
    const email: string = "lenny.vigeon@gmail.com";
</script>

<footer>
    <div class="inner-footer">
        <a href="/">Conditions générales d'utilisation</a>
        <a href="/">Conditions générales de vente</a>
        <a href="/">Mentions légales</a>
    </div>
</footer>

<style>
    footer {
        width: 100%;
        background-color: var(--color5);
        /* margin-top: 1em; */
    }

    .inner-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 2em;
        padding: 1em;
    }

    @media (max-width: 650px) {
        .inner-footer {
            flex-direction: column;
            align-items: center;
            gap: 0.5em;
        }
    }
</style>
