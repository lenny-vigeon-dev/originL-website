<script lang="ts">
    import "$lib/styles.css";

    export let bg_color: string = "var(--color5)";

</script>

<div class="outer" style="background-color: {bg_color};">
    <div class="inner">
        <slot />
    </div>
</div>

<style>
    .outer {
        display: flex;
        width: 100%;
        /* height: 100%; */

        /* border-radius: 0.4em;
        box-shadow: 0px 0px 1em 0.1em black; */
    }
    .inner {
        flex: 1 1;
        padding: 2em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
