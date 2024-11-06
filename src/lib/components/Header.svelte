<script lang="ts">
    import logo from '$lib/images/logo.svg';
    import "$lib/styles.css";

    import Navigation from '$lib/components/Navigation.svelte';
    import NavigationDropdown from '$lib/components/NavigationDropdown.svelte';
    import { NAV_ELEM } from "$lib/consts";

    let menuOpen = false;
</script>

<header>
    <div class="inner-header">
        <a class="homepage-button" href="/">
            <img class="logo" src={logo} alt="Origin L logo" />
            <h1 class="title">LR - Réflexologie</h1>
        </a>
        <Navigation nav_elements={NAV_ELEM} bind:menuOpen={menuOpen} />
    </div>
    <NavigationDropdown nav_elements={NAV_ELEM} bind:menuOpen={menuOpen} />
</header>

<style>
    header {
        width: 100%;
        background-color: var(--color5);
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
        height: 3em;
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




    @media (max-width: 600px) {
        .title {
            font-size: 1em;
        }
        .logo {
            height: 3em;
        }
    }
    @media (max-width: 350px) {
        .title {
            display: none;
        }
    }
</style>
