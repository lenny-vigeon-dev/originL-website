<script lang="ts">
    import logo from '$lib/images/logo.svg';
    import "$lib/styles.css";
</script>

<header>
    <div class="inner-header">
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
    </div>
</header>

<style>
    header {
        width: 100%;
        background-color: var(--color4);
    }
    .inner-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: white;
        text-align: center;
        padding: 0em 1em;
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
        padding: 0px;
    }

    nav {
        display: flex;
        flex-direction: row;
        gap: 2em;
    }
</style>
