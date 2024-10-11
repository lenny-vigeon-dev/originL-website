<script lang="ts">
    import "$lib/styles.css";
    import { onMount, onDestroy } from 'svelte';

    export let menuOpen = false;
    export let nav_elements: Record<string, string | Record<string, string>>;
</script>

{#if menuOpen}
    <nav class="nav">
        <ul class="menu">
            {#each Object.keys(nav_elements) as key}
                <li>
                    {#if typeof nav_elements[key] === "object"}
                        <p class="submenu-title">{key}</p>
                        <ul class="submenu">
                            {#each Object.keys(nav_elements[key]) as subkey}
                                <li><a href={nav_elements[key][subkey]}>{subkey}</a></li>
                            {/each}
                        </ul>
                    {:else}
                        <a href={nav_elements[key]}>{key}</a>
                    {/if}
                </li>
            {/each}
        </ul>
    </nav>
{/if}

<style>
    .nav {
        position: absolute;
        background-color: var(--color1);
        width: 100%;
        z-index: 1000;
    }


    .menu {
        display: flex;
        flex-direction: column;
        gap: 2em;
        margin: 1.5em 0;
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

    .submenu-title {
        margin: 0 0 1em 0;
    }

    .submenu {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }






</style>
