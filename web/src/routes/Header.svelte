<script lang="ts">
    import logo from '$lib/images/logo.svg';
    import "$lib/styles.css";
</script>

<header>
    <div class="inner-header">
        <a class="homepage-button" href="/">
            <img class="logo" src={logo} alt="Origin L logo" />
            <h1>OriginL</h1>
        </a>
        <nav>
            <ul class="menu">
                <a href="/">Accueil</a>
                <!-- <a href="/pratiques">Mes pratiques</a> -->
                <li class="dropdown">
                    <a>Mes pratiques</a>
                    <ul class="submenu">
                        <li><a href="/reflexologie-plantaire">Réflexologie plantaire</a></li>
                        <li><a href="/reflexologie-palmaire">Réflexologie palmaire</a></li>
                        <li><a href="/auriculotherapie">L’auriculothérapie</a></li>
                        <li><a href="/dien-chan">Dien Chan</a></li>
                        <li><a href="/massage-plantaire-ou-palmaire">Massage plantaire ou palmaire</a></li>
                    </ul>
                </li>
                <a href="/reservation">Prendre rendez-vous</a>
                <a href="/about">A propos</a>
                <a href="/Q&A">FAQ</a>
            </ul>
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


    .menu {
        display: flex;
        flex-direction: row;
        gap: 2em;
    }

    li {
        list-style-type: none;
    }

.menu > li {
    position: relative;
}

.menu > li > a {
    text-decoration: none;
    display: block;
}

/* Submenu styling */
.submenu {
    position: absolute;
    top: 100%;
    /* left: 0; */
    padding: 0;
    width: 10em;
    display: block; /* Set to block for smooth transition */
    opacity: 0; /* Start with invisible */
    max-height: 0; /* Start with 0 height */
    overflow: hidden; /* Hide overflow to keep it smooth */
    background-color: var(--color1); /* Same background color as the main menu */
    transition: opacity 0.5s ease, max-height 0.5s ease; /* Smooth transition */
    border-radius: 0.4em;
}

.submenu li {
    width: 150px; /* Adjust width as needed */
}

.submenu li a {
    padding: 10px 15px;
    text-decoration: none;
    color: var(--color4);
    display: block;
}

.submenu li a:hover {
    color: var(--color3);
}

/* Show submenu on hover */
.menu > li:hover .submenu {

    opacity: 1; /* Make it fully visible */
    max-height: 500px; /* Enough height to show all items, adjust if needed */
}
</style>
