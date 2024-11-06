<script lang="ts">
    export let href: string;
</script>

<a href={href}><slot/></a>

<style>
    a {
        background-color: var(--color3);
        color: white;
        border: none;
        padding: 0.7em 1.5em;
        border-radius: 0.3em;
        cursor: pointer;
        transition: background-color 0.2s;
        font-size: 1em;
    }

    a:hover {
        background-color: var(--color4);
    }
</style>
