<script lang="ts">
    import Cookies from 'js-cookie';
    import { onMount } from 'svelte';

    let cookieName: string = 'cookieInfo';
    let cookieAccepted: boolean | null = null;

    function isCookieAccepted(): boolean
    {
        let state: boolean | string = Cookies.get(cookieName);
        if (state === true || state == "true") {
            state = true;
        } else {
            state = false;
            setCookieStatus(false)
        }
        return state
    }

    function setCookieStatus(state: boolean = false) {
        Cookies.set(cookieName, state, { expires: 10000 });
        return state;
    }

    onMount(() => {
        cookieAccepted = isCookieAccepted();
    });
</script>

{#if cookieAccepted === false}
    <div class="content">
        <div class="cookie-modal">
            <p>Ce site ne récupère pas d'informations personnelles sur ces utilisateurs.</p>
            <button on:click={() => {cookieAccepted = setCookieStatus(true)}}>OK</button>
        </div>
    </div>
{/if}


<style>
    .content {
        /* position: fixed; */
        background-color: var(--color4);
        width: 100%;
        /* bottom: 0;
        left: 0; */
    }

    .cookie-modal {
        color: var(--color1);
        margin: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cookie-modal button {
        background-color: var(--color1);
        color: var(--color4);
        padding: 0.5em 1em;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    p {
        color: var(--color1)
    }
</style>
