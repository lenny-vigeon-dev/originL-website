<script lang="ts">
    import "$lib/styles.css";

</script>

<div>
    <slot />
</div>

<style>
    div {
        padding: 1em;
        box-shadow: 0px 0px 1em 0.1em black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0.4em;
        background-color: var(--color2);
    }
</style>
