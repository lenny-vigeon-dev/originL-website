<script lang="ts">
    import "$lib/styles.css";
    import { onMount, onDestroy } from 'svelte';
    import ASimily from "./ASimily.svelte";
    import StylisedA from "./StylisedA.svelte";

    export let menuOpen = false;
    export let nav_elements: Record<string, string | Record<string, string>>;

    function toggleMenu(state: boolean | null = null) {
        if (state !== null) {
            menuOpen = state;
        } else {
            menuOpen = !menuOpen;

        }
    }

    function checkWindowSize() {
        if (window.innerWidth > 1000) {
            menuOpen = false;
        }
    }

    // Listen to resize event to track window size dynamically
    onMount(() => {
        checkWindowSize(); // Initial check
        window.addEventListener('resize', checkWindowSize);

        // Clean up the event listener when the component is destroyed
        onDestroy(() => {
          window.removeEventListener('resize', checkWindowSize);
        });


    });

    function showSubmenu(css_class: string, show: boolean = true) {
        const submenu: HTMLElement = document.querySelector(`.${css_class}`) as HTMLElement;
        if (submenu) {
            if (show) {
                submenu.style.opacity = "1";
                submenu.style.maxHeight = "500px";
            } else {
                submenu.style.opacity = "0";
                submenu.style.maxHeight = "0px";
            }
        }
    }

</script>

<nav class="fullsize-nav">
    <ul class="menu">
        {#each Object.keys(nav_elements) as key, i}
            <li class="dropdown">
                {#if typeof nav_elements[key] === "object"}
                    <button class="styled-button"
                    on:focus={() => {showSubmenu("submenu" + i)}}
                    on:focus={() => {showSubmenu("submenu" + (i - 1), false)}}
                    aria-label="Open submenu on hover/focus">{key}</button>
                    <ul class="submenu submenu{i}">
                        {#each Object.keys(nav_elements[key]) as subkey}
                            <li><a href={nav_elements[key][subkey]}>{subkey}</a></li>
                        {/each}
                    </ul>
                    <svg width="10" height="10" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg" style="margin-left: 5px;">
                        <path d="M5 7l5 5 5-5H5z"/>
                      </svg>
                {:else}
                    <a href={nav_elements[key]} on:focus={() => {showSubmenu("submenu" + (i - 1), false)}}>{key}</a>
                {/if}
            </li>
        {/each}
        <li>
            <StylisedA href="/reservation">Prendre rendez vous</StylisedA>
        </li>
    </ul>
</nav>

<button class="hamburger" on:click={() => {toggleMenu()}}>
    <div class={menuOpen ? 'line1' : ''}></div>
    <div class={menuOpen ? 'line2' : ''}></div>
    <div class={menuOpen ? 'line3' : ''}></div>
</button>

<style>
    a {
        font-size: 1em;
    }

    .fullsize-nav {
        padding-right: 1em;
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
        z-index: 1000;
    }

    .submenu li {
        width: 150px; /* Adjust width as needed */
    }

    .submenu li a {
        padding: 10px 14px;
        text-decoration: none;
        color: var(--color4);
        display: block;
    }

    .submenu li a:hover {
        color: var(--color3);
    }

    /* Show submenu on hover */
    .dropdown:hover .submenu,
    .dropdown:focus,
    .dropdown > ul > li > a:focus & .submenu {

        opacity: 1; /* Make it fully visible */
        max-height: 500px; /* Enough height to show all items, adjust if needed */
    }

    .styled-button {
      text-decoration: none;
	    color: var(--color4);
	    /* margin-inline: 1rem; */
	    transition: color 0.2s ease; /* Add a smooth color transition on hover */
	    align-items: center;
	    justify-content: center;
	    /* font-weight: bold; */
      background-color: transparent;
      padding: 0px;
      border: none;
      margin: 0px;
      font-size: 1em;
      font-weight: 100;
    }

    /* Mimic the <a> element's hover effect */
    .styled-button:hover,
    .styled-button:focus {
      color: var(--color2);
    }





    /* Styling for the hamburger menu icon */
    .hamburger {
      padding: 0;
      cursor: pointer;
      width: 50px;
      height: 50px;
      display: none; /* Hide by default flex otherwise */
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border: none;
      background: transparent;
      z-index: 10;
    }

    .hamburger div {
        position: static;
      width: 80%;
      height: 3px;
      background-color: var(--color4);
      transition: all 0.3s ease;
    }

    /* When menu is open, transition hamburger to a cross */
    .line1 {
        transform: translate(0, 17px) rotate(45deg);
    }

    .line2 {
        opacity: 0;
    }

    .line3 {
      transform: translate(0, -17px) rotate(-45deg);
    }
    @media (max-width: 1050px) {
        .fullsize-nav {
            display: none;
        }

        .hamburger {
            display: flex;
        }


    }
</style>
